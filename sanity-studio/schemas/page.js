const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "title1",
      title: "Title 1",
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
      name: "title2",
      title: "Title 2",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "description2",
      title: "Description 2",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "title3",
      title: "Title 3",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "description3",
      title: "Description 3",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "fileTitle1",
      title: "File Title 1",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "file1",
      title: "File 1",
      type: "file"
    },
    {
      name: "file2",
      title: "File 2",
      type: "file"
    },
    {
      name: "image1",
      title: "Image 1",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string"
            },
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
      name: "buttonLabel1",
      title: "Button Label 1",
      type: "string"
    },
    {
      name: "buttonLoadingLabel1",
      title: "Button Loading Label 1",
      type: "string"
    }
  ]
}

export default page
