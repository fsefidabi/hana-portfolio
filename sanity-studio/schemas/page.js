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
      type: "file"
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
      name: "image1",
      title: "Image 1",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
}

export default page
