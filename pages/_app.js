import { useRouter } from "next/router"
import MainLayout from "components/templates/MainLayout"
import "../styles/globals.css"
import "../styles/fonts.css"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.pathname === "/sanity-studio") return <Component {...pageProps} />

  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp
