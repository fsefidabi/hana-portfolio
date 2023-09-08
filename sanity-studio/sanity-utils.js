import { createClient, groq } from "next-sanity"

const clientConfig = {
  projectId: "qlaxvdwa",
  dataset: "production",
  apiVersion: "2023-08-30"
}

export async function getCommonContent() {
  return createClient(clientConfig).fetch(
    groq`*[_type=="common"]`
  )
}

export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type=="page" && slug.current == $slug]{
      _id,
      _createdAt,
      pageTitle,
      "slug": slug.current,
      title1,
      description1,
      title2,
      description2,
      title3,
      description3,
      fileTitle1,
      "file1": file1.asset->url,
      "file2": file2.asset->url,
      "image1": image1.asset->url,
      links,
      buttonLabel1,
      buttonLoadingLabel1
    }`,
    { slug }
  )
}

export async function getJourneyMilestones() {
  return createClient(clientConfig).fetch(
    groq`*[_type=="journeyMilestone"]`
  )
}
