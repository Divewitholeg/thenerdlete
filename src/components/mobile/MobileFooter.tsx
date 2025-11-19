import { Separator } from '@/components/ui/separator';
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiLinphone,
  SiWhatsapp,
} from 'react-icons/si';

export default function MobileFooter() {
  return (
    <footer
      id="site-footer"
      className="w-full bg-background border-t p-4 text-center space-y-6"
      role="contentinfo"
      aria-label="Website footer with contact information and social links"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Contact Section */}
      <section
        id="footer-contact"
        className="grid grid-cols-3 gap-4 items-start justify-center text-center"
        aria-label="Contact information"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content="Oleg Rõbnikov Web Development" />

        {/* Email */}
        <div
          className="flex flex-col items-center space-y-1"
          aria-label="Email address"
        >
          <SiGmail className="h-5 w-5" aria-hidden="true" />
          <a
            href="mailto:rybniko@gmail.com"
            className="text-sm hover:underline"
            aria-label="Send email to Oleg Rõbnikov Web Development"
            itemProp="email"
          >
            Email
          </a>
        </div>

        {/* Separator */}
        <Separator
          orientation="vertical"
          className="mx-auto h-10 hidden sm:block"
        />

        {/* Phone */}
        <div
          className="flex flex-col items-center space-y-1"
          aria-label="Phone number"
        >
          <SiLinphone className="h-5 w-5" aria-hidden="true" />
          <a
            href="tel:+84357540438"
            className="text-sm hover:underline"
            aria-label="Call Oleg Rõbnikov Web Development"
            itemProp="telephone"
          >
            Phone
          </a>
        </div>

        {/* Separator (hidden on mobile) */}
        <Separator
          orientation="vertical"
          className="mx-auto h-10 hidden sm:block"
        />

        {/* WhatsApp */}
        <div
          className="flex flex-col items-center space-y-1"
          aria-label="WhatsApp contact"
        >
          <SiWhatsapp className="h-5 w-5" aria-hidden="true" />
          <a
            href="https://wa.me/37256045484"
            className="text-sm hover:underline"
            aria-label="Chat with Oleg Rõbnikov Web Development on WhatsApp"
            itemProp="telephone"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Horizontal Separator */}
      <Separator className="w-full" />

      {/* Social Section */}
      <nav
        id="footer-social"
        className="flex items-center justify-center space-x-6"
        aria-label="Social media links"
        itemScope
        itemType="https://schema.org/Person"
      >
        <a
          href="https://github.com/Divewitholeg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Oleg's GitHub profile"
          className="hover:opacity-75"
          itemProp="sameAs"
        >
          <SiGithub className="h-6 w-6" aria-hidden="true" />
        </a>

        <a
          href="https://www.linkedin.com/company/93233054/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Oleg Rõbnikov Web Development's LinkedIn business page"
          className="hover:opacity-75"
          itemProp="sameAs"
        >
          <SiLinkedin className="h-6 w-6" aria-hidden="true" />
        </a>
      </nav>

      {/* Copyright */}
      <p
        className="text-xs text-muted-foreground"
        aria-label="Copyright notice"
        id="footer-copyright"
        itemProp="copyrightYear"
      >
        © {new Date().getFullYear()} Oleg Rõbnikov Web Development. All rights
        reserved.
      </p>
    </footer>
  );
}
