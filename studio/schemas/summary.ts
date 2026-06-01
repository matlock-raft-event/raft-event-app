// schemas/summary.ts
export default {
    name: 'summary',
    type: 'document',
    title: 'Summary',
    fields: [
        {
            name: "yearsActive",
            type: "string",
            title: "Years Active",
            description: "The number shown above \"Years\" on the homepage stats, e.g. \"63\".",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "bio",
            type: "string",
            title: "Biography",
            description: "The short intro paragraph in the homepage summary section.",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'eventCount',
            type: 'string',
            title: 'Event Count',
            description: "The number shown above \"Events\" on the homepage stats, e.g. \"60\"."
        },
        {
            name: 'moneyRaised',
            type: 'string',
            title: 'Money Raised',
            description: "Shown above \"Raised\" — include the formatting you want, e.g. \"£200k+\"."
        }
    ],
    preview: {
        prepare: () => ({ title: "Summary" })
    }
}
