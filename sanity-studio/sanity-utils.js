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

export async function getResearchPageContent() {
  return createClient(clientConfig).fetch(
    groq`*[_type=="research"]{
      _id,
      _createdAt,
      pageTitle,
      descriptionTitle,
      descriptionContent,
      summaryTitle,
      "presentationFile": presentationFile.asset -> url
    }`
  )
}

export async function getContactPageContent() {
  return createClient(clientConfig).fetch(
    groq`*[_type=="contact"]`
  )
}

export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type=="page"]{
      _id,
      _createdAt,
      pageTitle,
      "slug": slug.current,
      title1,
      description1,
      title2,
      description2,
      "image1": image1.asset->url,
      title3,
      description3
    }`
  )
}

// export async function getPage(slug) {
//   return createClient(clientConfig).fetch(
//     groq`*[_type=="page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       pageTitle,
//       "slug": slug.current,
//       title1,
//       description1,
//       title2,
//       description2
//     }`,
//       { slug }
//   )
// }

export async function getJourneyMilestones() {
  return createClient(clientConfig).fetch(
    groq`*[_type=="journeyMilestone"]`
  )
}
