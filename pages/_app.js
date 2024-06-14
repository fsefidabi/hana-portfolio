import dynamic from "next/dynamic"
import "styles/globals.css"
import "styles/pages.css"
import "styles/tippy.css"
import "styles/fonts.css"
import "styles/sketch.css"

const DynamicMainLayout = dynamic(() => import("../components/templates/MainLayout"), {
  ssr: false
})

const DynamicCustomCursor = dynamic(() => import("../components/atoms/CustomCursor"), {
  ssr: false
})

function MyApp({ Component, pageProps }) {
  return <DynamicMainLayout>
    <Component {...pageProps} />
    <DynamicCustomCursor/>
  </DynamicMainLayout>
}

export default MyApp
