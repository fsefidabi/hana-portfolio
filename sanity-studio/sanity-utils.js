import { createClient, groq } from "next-sanity"

export async function getCommonContent() {
  const client = createClient({
    projectId: "qlaxvdwa",
    dataset: "production",
    apiVersion: "2023-08-30"
  })

  return client.fetch(
    groq`*[_type=="common"]`
  )
}

export async function getResearchPageContent() {
  const client = createClient({
    projectId: "qlaxvdwa",
    dataset: "production",
    apiVersion: "2023-08-30"
  })

  return client.fetch(
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
  const client = createClient({
    projectId: "qlaxvdwa",
    dataset: "production",
    apiVersion: "2023-08-30"
  })

  return client.fetch(
    groq`*[_type=="contact"]`
  )
}
