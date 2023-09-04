const contact = {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "description1",
      title: "Description 1",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          name: "socialMediaLink",
          title: "Social Media Link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string"
            },
            {
              name: "link",
              title: "Link",
              type: "url"
            }
          ]
        }
      ]
    },
    {
      name: "description2",
      title: "Description 2",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "submitButtonLabel",
      title: "Submit Button Label",
      type: "string"
    },
    {
      name: "submitButtonLoadingLabel",
      title: "Submit Button Loading Label",
      type: "string"
    }
  ]
}

export default contact
