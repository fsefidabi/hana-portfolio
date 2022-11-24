import { useState, useRef } from "react"
import Head from "next/head"
import ReactCardFlip from "react-card-flip"
import OvalSvg from "../public/assets/svgs/oval.svg"
import SquareSvg from "../public/assets/svgs/square.svg"
import GridSvg from "../public/assets/svgs/grid.svg"
import LinkedInSvg from "../public/assets/svgs/linkedin-icon.svg"
import BehanceSvg from "../public/assets/svgs/behance-icon.svg"
import portfolioPdf from "../public/Hananeh_Sefidabi_Portfolio_2022.pdf"
import styles from "../styles/Home.module.css"

export default function Home() {
  const root = useRef()
  const [isFlipped, setIsFlipped] = useState(false)

  function flipOval(e) {
    console.log("flipped")
    e.preventDefault()
    setIsFlipped(!isFlipped)
  }

  function downloadPortfolio() {
    window.open(portfolioPdf)
  }

  return (
    <div className={styles.container} ref={root}>
      <Head>
        <title>Hananeh Sefidabi</title>
        <meta name="description" content="Hananeh Sefidabi Portfolio"/>
      </Head>

      <nav className={"flex m-5 font-normal font-NuetralFace lg:text-xl text-base mt-10"}>
        <div className={"w-full"}>
          <p className={"tracking-widest"}>Hananєh</p>
          <p className={"tracking-theWidest"}>Sєfidabi</p>
        </div>
        <ul className={"flex uppercase items-center"}>
          <li className={"ml-5"}>About</li>
          <li className={"ml-5"}>CV</li>
          <li className={"ml-5"}>Contact</li>
        </ul>
      </nav>

      <main className={`font-ClashGrotesk ${styles.main}`}>
        <div className={"flex text-6xl"} style={{ transform: "translate(2px, 0px)" }}>
          <div className={"relative flex justify-center"}>
            <div className={"uppercase absolute font-semibold flex flex-col justify-center align-center"}
                 style={{ height: "100%" }}>
              <p>Portfolio</p>
              <p>2022-</p>
            </div>
            <div style={{ width: 373, transform: "translate(1px, 0.1px)" }}>
              <SquareSvg/>
            </div>
          </div>
          <div style={{ width: 164, height: 373, transform: "rotate(180deg)" }}>
            <GridSvg/>
          </div>
        </div>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className={"relative flex justify-center text-3xl z-10 rounded-5xl"} style={{ width: 298, height: 467 }}>
            <div
              className={"uppercase absolute font-medium text-center flex flex-col justify-center align-center"}
              style={{ height: "100%", color: "#ef643f" }}
              onMouseOver={flipOval}
            >
              <p>Check out a selection of my works here!</p>
            </div>
            <OvalSvg fill={"#FFFFFF"} id={"oval"}/>
            <div className={"oval-shadow"}></div>
          </div>

          <div className={"relative flex justify-center text-3xl z-10 rounded-5xl cursor-pointer"}
               style={{ width: 298, height: 467 }}>
            <div
              className={"uppercase absolute font-medium text-center flex flex-col justify-center align-center"}
              style={{ height: "100%", color: "#FFFFFF" }}
              onClick={downloadPortfolio}
            >
              <p>Check out a selection of my works here!</p>
            </div>
            <OvalSvg fill={"#ef643f"} id={"oval"}/>
            <div className={"oval-shadow"}></div>
          </div>
        </ReactCardFlip>

        <div className={"flex text-3xl"} style={{ transform: "translate(-2px, 0px)" }}>
          <div style={{ width: 164, height: 373 }}>
            <GridSvg/>
          </div>
          <div style={{ width: 373, height: 373 }} className={"relative flex justify-center"}>
            <div className={"uppercase absolute font-medium flex flex-col justify-center align-center"}
                 style={{ height: "100%" }}>
              <p>Fashion &</p>
              <p>Accessories design</p>
              <br/>
              <p>Selected works</p>
            </div>
            <div style={{ width: 373, transform: "translate(-1px, 0.3px)" }}>
              <SquareSvg/>
            </div>
          </div>
        </div>
      </main>

      <footer className={"flex p-4 justify-between align-center"}>
        <div className={"flex justify-center items-center"}>
          <a href={"https://www.linkedin.com/in/hananehsefidabi/"} target={"_blank"}>
            <LinkedInSvg className={"mr-8 cursor-pointer"}/>
          </a>
          <a href={"https://www.behance.net/hananehsefidabi"} target={"_blank"}>
            <BehanceSvg/>
          </a>
        </div>
        <p className={"font-ClashGrotesk text-base"}>© 2022 — Designed by Me — Developed by Farzaneh Sefidabi</p>
      </footer>
    </div>
  )
}
