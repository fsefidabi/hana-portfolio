const research = {
  name: "research",
  title: "Research",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string"
    },
    {
      name: "descriptionTitle",
      title: "Description Title",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "descriptionContent",
      title: "Description Content",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "summaryTitle",
      title: "Summary Title",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "presentationFile",
      title: "Presentation File",
      type: "file"
    }
  ]
}

export default research
