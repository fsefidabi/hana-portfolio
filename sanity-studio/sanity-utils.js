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
      slug,
      projectCoverTitle,
      "coverImageUrl": coverImage.asset->url
    }`
  )
}

export async function getWork(slug) {
  return createClient(clientConfig).fetch(
      groq`*[_type=="work" && slug.current == $slug]{
      _id,
      _createdAt,
      slug,
      templateName,
      projectMainTitle,
      projectSubTitle1,
      projectSubTitle2,
      projectMainDescription,
      projectMainDescription2,
      projectDetail,
      title1,
      description1,
      title2,
      description2,
      title3,
      description3,
      title4,
      description4,
      title5,
      description5,
      footer,
      "images": [image1.asset->url, image2.asset->url, image3.asset->url, image4.asset->url, image5.asset->url, image6.asset->url, image7.asset->url, image8.asset->url, image9.asset->url, image10.asset->url, image11.asset->url, image12.asset->url, image13.asset->url, image14.asset->url, image15.asset->url, image16.asset->url, image17.asset->url, image18.asset->url, image19.asset->url, image20.asset->url, image21.asset->url, image22.asset->url, image23.asset->url, image24.asset->url, image25.asset->url, image26.asset->url, image27.asset->url, image28.asset->url, image29.asset->url, image30.asset->url, image31.asset->url, image32.asset->url, image33.asset->url, image34.asset->url, image35.asset->url, image36.asset->url, image37.asset->url, image38.asset->url, image39.asset->url, image40.asset->url],
      links
    }`,
    { slug }
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
