import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import "styles/globals.css"
import "styles/pages.css"
import "styles/tippy.css"
import "styles/fonts.css"

const DynamicMainLayout = dynamic(() => import("../components/templates/MainLayout"), {
  ssr: false
})

const DynamicCustomCursor = dynamic(() => import("../components/atoms/CustomCursor"), {
  ssr: false
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.pathname === "/sanity-studio") return <Component {...pageProps} />

  return <DynamicMainLayout>
    <DynamicCustomCursor/>
    <Component {...pageProps} />
  </DynamicMainLayout>
}

export default MyApp
