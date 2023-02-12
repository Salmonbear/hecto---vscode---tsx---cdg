
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <><PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider><Script
      id="beam-analytics"
      strategy="afterInteractive"
      src="https://beamanalytics.b-cdn.net/beam.min.js"
      data-token="e7964972-6ea2-46f7-b258-af3be2a29496"
      async>
    </Script><Script
      id="plausible"
      strategy="afterInteractive"
      src="https://beamanalytics.b-cdn.net/beam.min.js"
      data-token="e7964972-6ea2-46f7-b258-af3be2a29496"
      async>
      </Script>
    </>
  );
}
export default MyApp
