import dynamic from "next/dynamic"
import { getCommonContent, getResearchPageContent } from "sanityStudio/sanity-utils"
import ArrowSvg from "svgIcons/arrow.svg"
import PageSection from "components/organisms/PageSection"

const DynamicPdfViewer = dynamic(() => import("components/molecules/PdfViewer"), {
  ssr: false
})

export default function Research({ pageContent, commonContent }) {
  function handleOpenThesisPdf() {
    window.open("/assets/thesis/Presentation-Thesis.pdf")
  }

  const moreButtonLabel = <div className={"readMoreButton"}>
    <span>{commonContent?.readFullText}</span>
    <ArrowSvg/>
  </div>

  return <div className={"flexColContainer"}>
    <PageSection
      id={"research_description"}
      pageTitle={pageContent?.pageTitle}
      title={pageContent?.descriptionTitle}
      description={pageContent?.descriptionContent}
      hasMoreButton={true}
      moreButtonLabel={moreButtonLabel}
      handleMoreButtonClick={handleOpenThesisPdf}
    />

    <div id={"research_summary"} className={"borderTop"}>
      <div className={"contentWrapper"}>
        <div className={"content borderRight title w-1/3"} style={{ border: "none" }}>
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
        <div className={"content borderRight"} style={{ border: "none" }}></div>
        <div className={"md:w-1/6"}></div>
      </div>

      <div id={"research_pdf_viewer_container"} className={"content borderRight"}>
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
