import { useId } from "react"
import Image from "next/image"
import Button from "components/atoms/Button"
import Tooltip from "components/atoms/Tooltip"

export default function PageSection(props) {
  const {
    id = useId(),
    pageTitle,
    title,
    description,
    image,
    hasMoreButton,
    moreButtonLabel,
    moreButtonHoverImage,
    customTitleStyle,
    handleMoreButtonClick
  } = props

  function screenshotImageTooltip() {
    return moreButtonHoverImage && <div className={"w-[14rem] h-[20rem]"}>
      <Image
        src={moreButtonHoverImage}
        alt={"screenshot"}
        layout="fill"
        className={"w-full transition duration-600"}
      />
    </div>
  }

  return <section id={id} className={"borderTop"}>
    <div className={"contentWrapper"}>
      <div className={"content borderRight title w-1/3"}>
        {pageTitle}
      </div>

      <div className={"content borderRight w-2/3"}>
        <div className={"flex flex-col xs:flex-row gap-4 mb-10"}>
          {image && <div className={"relative shrink-0 overflow-hidden"}>
            <Image
              src={image}
              alt={"Hana photo"}
              width={200}
              height={250}
              className={"h-[16rem] md:h-[18rem] w-[12rem] md:w-[12rem]"}
              // width="0"
              // height="0"
              // sizes="100vw"
              // className="w-full h-auto"
            />
          </div>}
          {title?.length > 0 ? <div className={"title"}>
            {title?.map(item => {
              return item?.children?.map(child => {
                return <p key={child._key} className={customTitleStyle}>{child.text}</p>
              })
            })}
          </div> : null}
        </div>

        <div className={"description"}>
          {description?.map(item => {
            return item?.children?.map(child => {
              return <p key={child._key}>{child.text}</p>
            })
          })}
        </div>

        <div className={"relative w-fit mt-10 mb-6"}>
          {hasMoreButton && <Tooltip
            content={screenshotImageTooltip()}
            placement={"top"}
            animation={"fade_preview"}
            followCursorProp={true}
          >
            <div className={"relative"}>
              <Button
                label={moreButtonLabel}
                handleOnClick={handleMoreButtonClick}
              />
            </div>
          </Tooltip>}
        </div>
      </div>
      <div className={"md:w-1/6"} style={{ minWidth: "30px" }}></div>
    </div>
  </section>
}
