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
            name: "templateNumber",
            title: "Template Number",
            type: "number"
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
            name: "projectSubTitle",
            title: "Project Sub Title",
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
