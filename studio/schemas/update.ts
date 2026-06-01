// schemas/update.ts

export default {
    name: "update",
    type: "document",
    title: "Update",
    fields: [
        {
            name: "slug",
            type: "string",
            title: "Slug",
            description: "The end of the page's web address, e.g. \"rowsley-train\". Use lowercase words separated by hyphens, no spaces.",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "date",
            type: "date",
            title: "Date",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "excerpt",
            type: "text",
            title: "Excerpt",
            rows: 3,
            validation: (Rule: any) => Rule.max(200)
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "img",
            type: "image",
            title: "Image"
        }
    ],
    orderings: [
        {
            title: "Date, newest first",
            name: "dateDesc",
            by: [{ field: "date", direction: "desc" }]
        }
    ],
    preview: {
        select: { title: "title", subtitle: "date", media: "img" }
    }
};
