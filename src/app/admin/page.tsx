"use client";

import { revalidateCmsUpdate } from "@/actions/revalidate-cms-update";
import { useEffect } from "react";

export default function DecapCms() {
  async function registerEvents() {
    // @ts-ignore
    while (!window.hasOwnProperty('CMS')) {
      await new Promise(f => setTimeout(f, 250));
    }
    console.log("Registering postPublish event handler.")
    // @ts-ignore
    CMS.registerEventListener({
      name: 'postPublish',
      handler: () => revalidateCmsUpdate()
    });
  }

  useEffect(() => {
    registerEvents();
  }, [])

  return <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />;
}

