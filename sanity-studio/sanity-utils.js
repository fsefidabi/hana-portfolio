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
    groq`*[_type=="journeyMilestone"]{
      _id,
      _createdAt,
      title,
      date,
      order,
      description,
      "image1": image1.asset->url,
    }`
  )
}

export async function getWorks() {
  return createClient(clientConfig).fetch(
      groq`*[_type=="work"]{
      _id,
      _createdAt,
      order,
      projectMainTitle,
      projectMainDescription,
      slug,
      title1,
      description1,
      title2,
      description2,
      title3,
      description3,
      "coverImageUrl": coverImage.asset->url,
      links
    }`
  )
}

export async function getSketches() {
  return createClient(clientConfig).fetch(
      groq`*[_type=="sketch"]{
      _id,
      _createdAt,
      order,
      "images": [image1.asset->url, image2.asset->url, image3.asset->url, image4.asset->url, image5.asset->url, image6.asset->url, image7.asset->url, image8.asset->url, image9.asset->url, image10.asset->url]
    }`
  )
}
