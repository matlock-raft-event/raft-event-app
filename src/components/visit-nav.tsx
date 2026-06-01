const VISIT_LINKS = [
  { key: "race", label: "The race", href: "/info" },
  { key: "getting-here", label: "Getting here", href: "/info/getting-here" },
  { key: "at-the-event", label: "At the event", href: "/info/at-the-event" },
  { key: "faqs", label: "FAQs", href: "/info/faqs" }
];

type VisitNavProps = { active: string };

const VisitNav = ({ active }: VisitNavProps) => (
  <div className="bg-cream pb-2">
    <nav aria-label="Visitor information" className="mx-auto w-full container px-4">
      <ul className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3">
        {
          VISIT_LINKS.map(link => {
            const isActive = link.key === active;
            return (
              <li key={link.key}>
                <a
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center rounded-[2px] px-4 py-2 font-serif font-bold text-sm uppercase tracking-wide transition-colors ${
                    isActive
                      ? "bg-green text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]"
                      : "bg-white text-cream-contrast hover:bg-cream-dark"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  </div>
);

export default VisitNav;
