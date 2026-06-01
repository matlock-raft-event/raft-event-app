// schemas/gallery-image.ts
export default {
    name: 'galleryImage',
    type: 'document',
    title: 'Gallery Image',
    fields: [
        {
            name: 'img',
            type: 'image',
            title: 'Image',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'year',
            type: 'number',
            title: 'Year',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author',
            description: "Who took the photo — credited on the site and used for image alt text."
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: "Optional short description of the photo."
        }
    ],
    orderings: [
        {
            title: "Year, newest first",
            name: "yearDesc",
            by: [{ field: "year", direction: "desc" }]
        }
    ],
    preview: {
        select: { author: "author", year: "year", media: "img" },
        prepare: ({ author, year, media }: any) => ({
            title: author ? `Photo by ${author}` : "Untitled photo",
            subtitle: year ? `${year}` : undefined,
            media
        })
    }
}
