import dynamic from "next/dynamic"
import { getCommonContent, getResearchPageContent } from "../../sanity-studio/sanity-utils"
import ArrowSvg from "svgIcons/arrow.svg"
import Button from "components/atoms/Button"
import styles from "./research.module.css"

const DynamicPdfViewer = dynamic(() => import("components/molecules/PdfViewer"), {
  ssr: false
})

export default function Research({ pageContent, commonContent }) {
  function handleOpenThesisPdf() {
    window.open("/assets/thesis/Presentation-Thesis.pdf")
  }

  return <div className={styles.container}>
    <div className={styles.sectionWrapper}>
      <div className={styles.content}>
        <div className={`${styles.section} ${styles.title} w-1/3`}>{pageContent?.pageTitle}</div>
        <div className={`${styles.section}`}>
          <div className={styles.title}>
            {pageContent?.descriptionTitle?.map(item => {
              return item?.children?.map(child => {
                return <p key={child._key}>{child.text}</p>
              })
            })}
          </div>

          <div className={styles.description}>
            {pageContent?.descriptionContent?.map(item => {
              return item?.children?.map(child => {
                return <p key={child._key}>{child.text}</p>
              })
            })}

            <Button
              label={<div className={styles.readFullTextButton}>
                <span>{commonContent?.readFullText}</span>
                <ArrowSvg/>
              </div>}
              handleOnClick={handleOpenThesisPdf}
            />
          </div>
        </div>
        <div className={"w-1/6"} style={{ minWidth: "30px" }}></div>
      </div>
    </div>


    <div>
      <div className={styles.content}>
        <div className={`${styles.section} ${styles.title} w-1/3`} style={{ border: "none" }}>
          <div className={"flex items-end gap-2"}>
            <div>
              {pageContent?.summaryTitle?.map(item => {
                return item?.children?.map(child => {
                  return <p key={child._key}>{child.text}</p>
                })
              })}
            </div>
            <div className={"mb-1.5"}>
              <ArrowSvg/>
            </div>
          </div>

        </div>
        <div className={styles.section} style={{ border: "none" }}></div>
        <div className={"w-1/6"}></div>
      </div>
      <div className={styles.section}>
        <DynamicPdfViewer filePath={pageContent?.presentationFile}/>
      </div>
    </div>
  </div>
}

export async function getStaticProps() {
  const pageContent = await getResearchPageContent()
  const commonContent = await getCommonContent()

  return {
    props:
      {
        pageContent: pageContent[0],
        commonContent: commonContent[0]
      }
  }
}
