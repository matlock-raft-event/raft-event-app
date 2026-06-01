// schemas/faq.ts
export default {
    name: "faq",
    type: "document",
    title: "FAQ",
    fields: [
        {
            name: "question",
            type: "string",
            title: "Question"
        },
        {
            name: "answer",
            type: "array",
            title: "Answer",
            of: [{ type: "block" }]
        },
        {
            name: "audience",
            type: "string",
            title: "Audience",
            description: "Who is this question most relevant to? Used to group FAQs on the site.",
            options: {
                list: [
                    { title: "General", value: "general" },
                    { title: "Participants", value: "participants" },
                    { title: "Spectators", value: "spectators" },
                    { title: "Volunteers", value: "volunteers" },
                    { title: "Sponsors", value: "sponsors" }
                ],
                layout: "radio"
            },
            initialValue: "general"
        }
    ],
    preview: {
        select: { title: "question", subtitle: "audience" }
    }
};
