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
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "templateName",
            title: "Template Name",
            type: "string"
        },
        {
            name: "projectCoverTitle",
            title: "Project Cover Title",
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
            name: "projectMainTitle",
            title: "Project Main Title",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "projectSubTitle1",
            title: "Project Sub Title 1",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "projectSubTitle2",
            title: "Project Sub Title 2",
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
            name: "projectDetail",
            title: "Project Detail",
            type: "array",
            of: [{ type: "block" }]
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
            name: "footer",
            title: "Footer",
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
        },
        {
            name: "image2",
            title: "Image 2",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image3",
            title: "Image 3",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image4",
            title: "Image 4",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image5",
            title: "Image 5",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image6",
            title: "Image 6",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image7",
            title: "Image 7",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image8",
            title: "Image 8",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image9",
            title: "Image 9",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image10",
            title: "Image 10",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image11",
            title: "Image 11",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image12",
            title: "Image 12",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image13",
            title: "Image 13",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image14",
            title: "Image 14",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image15",
            title: "Image 15",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image16",
            title: "Image 16",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image17",
            title: "Image 17",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image18",
            title: "Image 18",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image19",
            title: "Image 19",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image20",
            title: "Image 20",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image21",
            title: "Image 21",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image22",
            title: "Image 22",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image23",
            title: "Image 23",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image24",
            title: "Image 24",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image25",
            title: "Image 25",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image26",
            title: "Image 26",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image27",
            title: "Image 27",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image28",
            title: "Image 28",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image29",
            title: "Image 29",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image30",
            title: "Image 30",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image31",
            title: "Image 31",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image32",
            title: "Image 32",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image33",
            title: "Image 33",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image34",
            title: "Image 34",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image35",
            title: "Image 35",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image36",
            title: "Image 36",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image37",
            title: "Image 37",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image38",
            title: "Image 38",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image39",
            title: "Image 39",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image40",
            title: "Image 40",
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
