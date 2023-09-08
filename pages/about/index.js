import { getPages, getJourneyMilestones } from "sanityStudio/sanity-utils"
import JourneySection from "components/organisms/JourneySection"
import PageSection from "components/organisms/PageSection"
import Skills3DSphere from "components/molecules/Skills3DSphere"
import ArrowSvg from "svgIcons/arrow.svg"

export default function About({ pageContent, journeyMilestones }) {
  return <div className={"flexColContainer"}>
    <PageSection
      id={"about_description"}
      pageTitle={pageContent?.pageTitle}
      title={pageContent?.title1}
      description={pageContent?.description1}
    />

    <section id={"about_skills"} className={"borderTop"}>
      <div className={"contentWrapper"}>
        <div className={"content borderRight title w-3/5"} style={{ border: "none" }}>
          <div className={"flex items-end gap-2"}>
            <div className={"relative"}>
              {pageContent?.title2?.map(item => {
                return item?.children?.map(child => {
                  return <p key={child._key}>{child.text}</p>
                })
              })}
              <div className={"inline absolute bottom-2.5 ml-3"}>
                <ArrowSvg/>
              </div>
            </div>
          </div>
        </div>
        <div className={"content borderRight"} style={{ border: "none" }}></div>
        <div className={"md:w-1/6"}></div>
      </div>

      <div className={"w-full flex flex-col items-center text-tertiary uppercase text-sm mt-5"}>
        <p>Footwear /// Accessories /// Apparel</p>
        <p>URL /// IRL</p>
      </div>

      <div id={"about_skills_3d"} className={"contentWrapper"} style={{ minHeight: "calc(100vh - 250px)" }}>
          <Skills3DSphere />
      </div>
    </section>

    <JourneySection
      id={"about_journey"}
      title={pageContent?.title3}
      description={pageContent?.description3}
      journeyMilestones={journeyMilestones}
    />
  </div>
}

export async function getStaticProps() {
  const pageContent = await getPages()
  const journeyMilestones = await getJourneyMilestones()

  return {
    props: {
      pageContent: pageContent[0],
      journeyMilestones: journeyMilestones.sort((a, b) => a.order - b.order)
    }
  }
}
