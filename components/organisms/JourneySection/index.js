import dynamic from "next/dynamic"
import JourneyCard from "components/molecules/JourneyCard"

const DynamicCarousel = dynamic(() => import("components/atoms/Carousel"), {
  ssr: false
})

export default function JourneySection({ id, title, description, journeyMilestones }) {
  const carouselHeader = <div
    className={`content borderRight contentWrapper w-full flex items-center justify-between`}
    style={{ border: "none" }}
  >
    {title?.length > 0 ? <div className={"title"}>
      {title?.map(item => {
        return item?.children?.map(child => {
          return <p key={child._key}>{child.text}</p>
        })
      })}
    </div> : null}

    {description?.length > 0 ? <div className={"text-base"}>
      {description?.map(item => {
        return item?.children?.map(child => {
          return <p key={child._key}>{child.text}</p>
        })
      })}
    </div> : null}
  </div>

  return <DynamicCarousel id={id} header={carouselHeader}>
    <div className={"flex gap-10 items-center"} style={{ height: "calc(100vh - 88px)"}}>
      <div
        className={"content borderRight flex items-center justify-between"}
        style={{ border: "none", paddingRight: 0, paddingLeft: 0 }}>
        <div className={"dashedBorder"}></div>
      </div>

      {journeyMilestones?.map(item => {
        return <JourneyCard
          key={item?._id}
          date={item.date}
          title={item.title}
          description={item.description}
          image={item.image1}
        />
      })}
    </div>
  </DynamicCarousel>
}
