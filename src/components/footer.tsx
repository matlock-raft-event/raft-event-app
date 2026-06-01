import { Button } from "~/components/ui/button";

import FacebookIcon from "./facebook-icon";

const links = [
  { label: "About", to: "/about" },
  { label: "Info", to: "/info" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
  { label: "Gallery", to: "/gallery" }
];

const NavLink = ({
  label,
  to
}: { label: string, to: string }) => (
  <Button
    className="text-cream-contrast"
    href={to}
    variant="link"
  >
    {label}
  </Button>
);

const Footer = () => (
  <footer className="w-full pb-8 bg-cream">
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col">
        <p className="font-bold text-xs uppercase tracking-wider text-cream-contrast">
                        FIND US ELSEWHERE
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center p-2 gap-4">
          <FacebookIcon color="var(--color-cream-contrast)" href="https://www.facebook.com/matlockraftevent/" />
        </div>
      </div>

      <nav aria-label="Footer" className="flex flex-col sm:flex-row justify-center items-center p-2 gap-4">
        {
          links.map(link => (
            <NavLink
              key={link.label}
              label={link.label}
              to={link.to}
            />
          ))
        }
      </nav>
      <p className="text-sm leading-relaxed text-center text-cream-contrast">
                    &#169; Copyright
        {" "}
        {new Date().getFullYear()}
        {" "}
                    -
        {" "}
        <strong>Dasac’s Matlock Raft Event</strong>
        {" "}
                    - In aid of the
                    Royal National Lifeboat Institution (RNLI)
      </p>
      <p className="text-sm leading-relaxed text-center text-cream-contrast">
                    Website designed and coded with ♥ by
        {" "}
        <strong>Ian Ryde</strong>
        {" "}
                    and
        {" "}
        <strong>Sam Hepburn</strong>
                    .
      </p>
    </div>
  </footer>
);

export default Footer;
