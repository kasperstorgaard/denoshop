import { AppProps, HandlerContext } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import { AppHeader } from "../components/AppHeader/AppHeader.tsx";
import { AppNotifications } from "../components/AppNotifications/AppNotifications.tsx";

import { buildRequest } from "../helpers/shopify.ts";

export const handler = async (
  req: Request,
  ctx: HandlerContext
): Promise<Response> => {
  const query = `
    query {
      shop {
        name
      }
    }
  `;

  const shopifyReq = await buildRequest(query, {
    ip: req.headers.get("x-forwarded-for") ?? "",
  });

  console.log({ query });

  const res = await fetch(shopifyReq);
  if (!res.ok) throw new Error("unable to fetch");

  const body = await res.json();
  return ctx.render({ shopName: body.shop.name });
};

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        {/* Base styles */}
        <link rel="stylesheet" href="https://unpkg.com/open-props" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/open-props/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/open-props/buttons.min.css"
        />

        <link rel="stylesheet" href="/main.css" />
        <link rel="stylesheet" href="/styles/app-header.css" />
        <link rel="stylesheet" href="/styles/app-nav.css" />
        <link rel="stylesheet" href="/styles/app-notifications.css" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href={
            "https://fonts.googleapis.com/css2" +
            "?family=Noto+Sans+Display:wght@100..900" +
            "&family=Alegreya:wght@400..900" +
            "&display=swap"
          }
          rel="stylesheet"
        />

        <script src="main.js" />
      </Head>
      <AppNotifications />
      <AppHeader title={"Coffee and Skates"} />
      <main>
        <Component />
      </main>
    </>
  );
}
