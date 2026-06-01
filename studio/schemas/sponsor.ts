// schemas/sponsor.ts
export default {
    name: 'sponsor',
    type: 'document',
    title: 'Sponsor',
    fields: [
        {
            name: "slug",
            type: "string",
            title: "Slug",
            description: "The end of this sponsor's web address, e.g. \"twigg\". Lowercase, hyphenated, no spaces.",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'tier',
            type: 'string',
            title: 'Tier',
            description: "Optional sponsorship level, used to group/rank sponsors on the site.",
            options: {
                list: [
                    { title: "Headline", value: "headline" },
                    { title: "Gold", value: "gold" },
                    { title: "Silver", value: "silver" },
                    { title: "Bronze", value: "bronze" },
                    { title: "Supporter", value: "supporter" }
                ]
            }
        },
        {
            name: 'featured',
            type: 'boolean',
            title: 'Featured',
            initialValue: false
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
        {
            name: 'testimonial',
            type: 'text',
            title: 'Testimonial'
        }
    ],
    orderings: [
        {
            title: "Name (A–Z)",
            name: "nameAsc",
            by: [{ field: "name", direction: "asc" }]
        }
    ],
    preview: {
        select: { title: "name", subtitle: "tier", media: "logo" }
    }
}
