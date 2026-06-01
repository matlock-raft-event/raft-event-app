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
            title: 'Author'
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption'
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
