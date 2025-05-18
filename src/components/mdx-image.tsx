// ADAPTED FROM https://github.com/schardev/nextjs-contentlayer-blog/blob/main/components/image.tsx
// Needed because dynamic imports are not supported in next/image, see https://github.com/vercel/next.js/discussions/52744

import { readFile } from "node:fs/promises";
import type { IncomingMessage } from "node:http";
import https from "node:https";
import path from "node:path";
import sizeOf from "image-size";
import type { ISizeCalculationResult } from "image-size/types/interface";
import Image, { type ImageProps } from "next/image";
import { Suspense } from "react";
import "server-only";

// https://github.com/image-size/image-size/issues/258
// https://github.com/nickadamson/messonry/commit/1604311247f077718650435b4ca38ae87b41e55d
const getStreamImageSize = async (stream: IncomingMessage) => {
	const chunks = [];
	for await (const chunk of stream) {
		chunks.push(chunk);
		try {
			// stop requesting data after dimensions are known
			return sizeOf(Buffer.concat(chunks));
		} catch (error) {
			// Not enough buffer to determine sizes yet
		}
	}
};

const fetchImageSizeFromUrl = async (imageUrl: string) => {
	// Not sure if this is the best way to do it, but it works so ...
	try {
		const imageSize = await new Promise<ISizeCalculationResult>(
			(resolve, reject) =>
				https
					.get(imageUrl, async (stream) => {
						const size = await getStreamImageSize(stream);
						if (size) {
							resolve(size);
						} else {
							reject({
								reason: `Error while resolving external image size with src: ${imageUrl}`,
							});
						}
					})
					.on("error", (e) => {
						reject({ reason: e });
					}),
		);
		return imageSize;
	} catch (error) {
		console.error(error);
	}
};

const fetchImageSizeFromFile = async (imagePath: string) => {
	try {
		const img = await readFile(imagePath);
		return sizeOf(img);
	} catch (error) {
		console.log(`Error while reading image with path: ${imagePath}`);
		console.error(error);
	}
};

type MdxImageProps = Omit<ImageProps, "src"> & { src: string };

const AsyncMdxImage = async ({
	src,
	quality = 100,
	...restProps
}: MdxImageProps) => {
	if (!src) return null;
	const isExternalImage = src.startsWith("https");
	const isPublicImage = src.startsWith("/");
	const imgProps = { src, quality, ...restProps };

	let size: ISizeCalculationResult | undefined;

	if (isPublicImage) {
		size = await fetchImageSizeFromFile(path.join("public", src));
	}

	if (isExternalImage) {
		size = await fetchImageSizeFromUrl(src);
	}

	if (size) {
		const { width, height } = size;
		imgProps.width = width;
		imgProps.height = height;
	}

	return <Image {...imgProps} />;
};

export function MdxImage(props: MdxImageProps) {
	return (
		<Suspense fallback={null}>
			<AsyncMdxImage {...props} />
		</Suspense>
	);
}

export function MdxImageFallback(_props: MdxImageProps) {
	return null;
}
