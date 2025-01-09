import { NextRequest, NextResponse } from 'next/server';

const {
  OAUTH_GITHUB_CLIENT_ID,
  OAUTH_GITHUB_CLIENT_SECRET,
} = process.env;

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  const code = req?.nextUrl?.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/?error=Missing code parameter', req.url));
  }

  const data = {
    code,
    client_id: OAUTH_GITHUB_CLIENT_ID,
    client_secret: OAUTH_GITHUB_CLIENT_SECRET,
  };

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.json();

    const content = {
      token: body.access_token,
      provider: 'github',
    };

    const script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:success:${JSON.stringify(content)}',
            message.origin
          );

          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);

        window.opener.postMessage("authorizing:${content.provider}", "*");
      </script>
    `;

    return new NextResponse(script, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL('/?error=Unkown', req.url));
  }
};
