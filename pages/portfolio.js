import { useEffect, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"

export default function Portfolio() {
  const [bookWidth, setBookWidth] = useState(0)
  const [bookHeight, setBookHeight] = useState(0)

  const flipBookRef = useRef(null)

  useEffect(() => {
    if (window !== undefined) {
      const multiplier = window.innerWidth / window.innerHeight > 1.9 ? 0.5 : 0.7
      const width = Math.min((window.innerWidth * multiplier), 1000)
      setBookWidth(width)
      setBookHeight((width / 2) * 1.4)
    }
  }, [])

  function handleNextPageButton() {
    flipBookRef.current.pageFlip().flipNext()
  }

  function handlePrevPageButton() {
    flipBookRef.current.pageFlip().flipPrev()
  }

  function handleFirstPageButton() {
    flipBookRef.current.pageFlip().flip(0)
  }

  function handleLastPageButton() {
    flipBookRef.current.pageFlip().flip(125)
  }

  return (
    bookWidth > 0 && <div className={"flex flex-col justify-center items-center h-screen"}>
      <div className={""} style={{ width: Math.min(bookWidth, 1000), height: Math.min(bookHeight, 700), maxHeight: 700 }}>
        <HTMLFlipBook
          ref={flipBookRef}
          width={bookWidth / 2}
          height={Math.min(bookHeight, 700)}
          showCover={true}
          drawShadow={true}
          size={"stretch"}
        >
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-001.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-002.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-003.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-004.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-005.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-006.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-007.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-008.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-009.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-010.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-011.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-012.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-013.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-014.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-015.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-016.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-017.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-018.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-019.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-020.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-021.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-022.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-023.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-024.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-025.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-026.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-027.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-028.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-029.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-030.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-031.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-032.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-033.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-034.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-035.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-036.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-037.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-038.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-039.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-040.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-041.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-042.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-043.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-044.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-045.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-046.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-047.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-048.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-049.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-050.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-051.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-052.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-053.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-054.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-055.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-056.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-057.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-058.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-059.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-060.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-061.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-062.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-063.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-064.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-065.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-066.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-067.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-068.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-069.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-070.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-071.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-072.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-073.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-074.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-075.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-076.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-077.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-078.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-079.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-080.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-081.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-082.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-083.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-084.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-085.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-086.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-087.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-088.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-089.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-090.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-091.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-092.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-093.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-094.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-095.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-096.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-097.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-098.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-099.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-100.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-101.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-102.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-103.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-104.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-105.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-106.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-107.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-108.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-109.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-110.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-111.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-112.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-113.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-114.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-115.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-116.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-117.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-118.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-119.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-120.jpg" alt=""/></div>

          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-121.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-122.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-123.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-124.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-125.jpg" alt=""/></div>
          <div className="demoPage" style={{ backgroundColor: "#FFF" }}><img
            src="/assets/portfolio-images/Hananeh Sefidabi_Portfolio_2023-issuu-126.jpg" alt=""/></div>
        </HTMLFlipBook>
      </div>
      <div id={"action-container"} className={"mt-5"}>
        <button onClick={handleNextPageButton} className={"bg-white text-black rounded ont-NuetralFace mr-4 py-1 px-3 hover:bg-red-100"}>Next Page</button>
        <button onClick={handlePrevPageButton} className={"bg-white text-black rounded ont-NuetralFace mr-4 py-1 px-3 hover:bg-red-100"}>Back Page</button>
        <button onClick={handleFirstPageButton} className={"bg-white text-black rounded ont-NuetralFace mr-4 py-1 px-3 hover:bg-red-100"}>First Page</button>
        <button onClick={handleLastPageButton} className={"bg-white text-black rounded ont-NuetralFace mr-4 py-1 px-3 hover:bg-red-100"}>Last Page</button>
      </div>
    </div>
  )
}
