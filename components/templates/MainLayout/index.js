import Head from "next/head"
import dynamic from "next/dynamic"
import Footer from "components/organisms/Footer"

const DynamicHeader = dynamic(() => import("components/organisms/Header"), {
  ssr: false
})
const DynamicScrollToTopButton = dynamic(() => import("components/molecules/ScrollToTopButton"), {
  ssr: false
})

export default function MainLayout({ children }) {
  return <div className={"w-screen min-h-screen text-xs md:text-xl lg:text-2xl"}>
    <Head>
      <title>Hananeh Sefidabi</title>
      <meta name="description" content="Hananeh Sefidabi Portfolio"/>
      <link rel="icon" href="/favicon.svg" sizes="any"/>
    </Head>

    <div className={"flex flex-col min-h-screen relative z-10"}>
      <DynamicHeader/>

      <main className={"flex flex-col grow font-ClashGrotesk"}>
        {children}
      </main>

      <DynamicScrollToTopButton/>

      <Footer/>
    </div>
  </div>
}
