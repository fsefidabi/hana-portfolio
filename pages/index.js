import { useState } from "react"
import Router from "next/router"
import ReactCardFlip from "react-card-flip"
import OvalSvg from "svgIcons/oval.svg"
import SquareSvg from "svgIcons/square.svg"
import GridSvg from "svgIcons/grid.svg"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)

  function flipOval(e) {
    e.preventDefault()
    setIsFlipped(!isFlipped)
  }

  function redirectToPortfolio() {
    Router.push("/portfolio")
  }

  return (
    <div className={styles.main}>
      <div className={"flex text-6xl"} style={{ transform: "translate(2px, 0px)" }}>
        <div className={"relative flex justify-center"}>
          <div className={"uppercase absolute font-semibold flex flex-col justify-center align-center"}
               style={{ height: "100%" }}>
            <p>Portfolio</p>
            <p>2023-</p>
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
            className={"colored-text uppercase absolute font-medium text-center text-tertiary flex flex-col justify-center align-center"}
            style={{ height: "100%" }}
            onMouseOver={flipOval}
          >
            <p className={"z-10"}>Check out a selection of my works here!</p>
          </div>
          <OvalSvg className={"fill-secondary"} id={"oval"}/>
          <div className={"oval-shadow"}></div>
        </div>

        <div className={"relative flex justify-center text-3xl z-10 rounded-5xl cursor-pointer"}
             style={{ width: 298, height: 467 }}>
          <div
            className={"uppercase absolute font-medium text-center text-secondary flex flex-col justify-center align-center"}
            style={{ height: "100%" }}
            onMouseLeave={flipOval}
            onClick={redirectToPortfolio}
          >
            <p className={"z-10"}>Check out a selection of my works here!</p>
          </div>
          <OvalSvg className={"fill-tertiary"} id={"oval"}/>
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
    </div>
  )
}
