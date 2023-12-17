const work = {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number"
    },
    {
      name: "projectMainTitle",
      title: "Project Main Title",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "projectMainDescription",
      title: "Project Main Description",
      type: "array",
      of: [{ type: "block" }]
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
      name: "coverImage",
      title: "Cover Image",
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
    }
  ]
}

export default work
