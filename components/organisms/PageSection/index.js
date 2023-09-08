import { useId } from "react"
import Button from "components/atoms/Button"

export default function PageSection({ id = useId(), pageTitle, title, description, hasMoreButton, moreButtonLabel, handleMoreButtonClick }) {
  return <section id={id} className={"borderTop"}>
    <div className={"contentWrapper"}>
      <div className={"content borderRight title w-1/3"}>
        {pageTitle}
      </div>

      <div className={"content borderRight w-2/3"}>
        {title?.length > 0 ? <div className={"title mb-10"}>
          {title?.map(item => {
            return item?.children?.map(child => {
              return <p key={child._key}>{child.text}</p>
            })
          })}
        </div> : null}

        <div className={"description"}>
          {description?.map(item => {
            return item?.children?.map(child => {
              return <p key={child._key}>{child.text}</p>
            })
          })}
        </div>

        {hasMoreButton && <Button
          label={moreButtonLabel}
          handleOnClick={handleMoreButtonClick}
        />}
      </div>
      <div className={"md:w-1/6"} style={{ minWidth: "30px" }}></div>
    </div>
  </section>
}
