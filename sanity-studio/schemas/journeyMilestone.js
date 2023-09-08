const journeyMilestone = {
  name: "journeyMilestone",
  title: "Journey Milestone",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number"
    },
    {
      name: "date",
      title: "Date",
      type: "string"
    },
    {
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "image1",
      title: "Image 1",
      type: "image"
    },
    {
      name: "image2",
      title: "Image 2",
      type: "image"
    },
    {
      name: "image3",
      title: "Image 3",
      type: "image"
    }
  ]
}

export default journeyMilestone
