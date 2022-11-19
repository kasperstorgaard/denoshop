import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        {/* Base styles */}
        <link rel="stylesheet" href="https://unpkg.com/open-props"/>

        <link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css"/>
        <link rel="stylesheet" href="https://unpkg.com/open-props/buttons.min.css"/>

        <link rel="stylesheet" href="/main.css" />

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
      </Head>
      <main>
        <Component />
      </main>
    </>
  );
}
