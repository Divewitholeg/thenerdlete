import { Separator } from '@/components/ui/separator';
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiLinphone,
  SiWhatsapp,
} from 'react-icons/si';

export default function TabletFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="tablet-footer"
      className="w-full bg-background border-t px-6 py-4"
      role="contentinfo"
      aria-label="Website footer with contact information and social links"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="flex items-center justify-between">
        {/* Left Section - Contact Links */}
        <div
          className="flex items-center gap-6"
          aria-label="Contact information"
          itemScope
          itemType="https://schema.org/Person"
        >
          <meta itemProp="name" content="Oleg Rõbnikov Web Development" />

          {/* Email */}
          <a
            href="mailto:rybniko@gmail.com"
            className="flex items-center gap-2 text-sm hover:underline group"
            aria-label="Send email to Oleg Rõbnikov Web Development"
            itemProp="email"
          >
            <SiGmail
              className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
              aria-hidden="true"
            />
            <span>Email</span>
          </a>

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="h-6" />

          {/* Phone */}
          <a
            href="tel:+84357540438"
            className="flex items-center gap-2 text-sm hover:underline group"
            aria-label="Call Oleg Rõbnikov Web Development"
            itemProp="telephone"
          >
            <SiLinphone
              className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
              aria-hidden="true"
            />
            <span>Phone</span>
          </a>

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="h-6" />

          {/* WhatsApp */}
          <a
            href="https://wa.me/37256045484"
            className="flex items-center gap-2 text-sm hover:underline group"
            aria-label="Chat with Oleg Rõbnikov Web Development on WhatsApp"
            itemProp="telephone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp
              className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
              aria-hidden="true"
            />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Right Section - Social Links & Copyright */}
        <div className="flex items-center gap-6">
          {/* Social Links */}
          <nav
            aria-label="Social media links"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Divewitholeg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Oleg's GitHub profile"
                className="hover:opacity-75 transition-opacity"
                itemProp="sameAs"
              >
                <SiGithub className="h-5 w-5" aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/company/93233054/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Oleg Rõbnikov Web Development's LinkedIn business page"
                className="hover:opacity-75 transition-opacity"
                itemProp="sameAs"
              >
                <SiLinkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </nav>

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="h-6" />

          {/* Copyright */}
          <p
            className="text-xs text-muted-foreground whitespace-nowrap"
            aria-label="Copyright notice"
            id="tablet-footer-copyright"
            itemProp="copyrightYear"
          >
            © {currentYear} Oleg Rõbnikov Web Development
          </p>
        </div>
      </div>
    </footer>
  );
}
