import Head from "next/head"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import styles from "./mainLayout.module.css"

export default function MainLayout({ children }) {
  return <div className={`${styles.container} min-h-screen text-xs md:text-xl lg:text-2xl`}>
    <Head>
      <title>Hananeh Sefidabi</title>
      <meta name="description" content="Hananeh Sefidabi Portfolio"/>
      <link rel="icon" href="/favicon.svg" sizes="any"/>
    </Head>

    <div className={"flex flex-col min-h-screen relative z-10"}>
      <Header/>

      <main className={"flex flex-col grow px-4"}>
        {children}
      </main>

      <Footer/>
    </div>
  </div>
}
