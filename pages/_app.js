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

  console.log("router.pathname", router.pathname)
  if (router.pathname.startsWith("/sanity-studio")) {
    return <>
      <Component {...pageProps} />
      <DynamicCustomCursor/>
    </>
  }

  return <DynamicMainLayout>
    <Component {...pageProps} />
    <DynamicCustomCursor/>
  </DynamicMainLayout>
}

export default MyApp
