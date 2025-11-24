{
  /* TabletHeader.tsx */
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function TabletHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we've scrolled past a small threshold
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past a threshold - hide header
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      className={cn(
        // Remove 'sticky' and use 'fixed' when visible, 'hidden' when not
        'w-full z-50 bg-background/10 backdrop-blur supports-backdrop-filter:bg-background/60 border-b transition-transform duration-300',
        isVisible && isScrolled
          ? 'fixed top-0 translate-y-0'
          : isVisible
            ? 'relative translate-y-0'
            : 'fixed -translate-y-full'
      )}
      role="banner"
      aria-label="Website header"
      itemScope
      itemType="https://schema.org/Person"
      itemProp="author"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Avatar and Name */}
          <div className="flex items-center gap-4">
            <Avatar
              className="size-16"
              role="img"
              aria-label="Portrait of Oleg Rõbnikov"
              itemProp="image"
            >
              <AvatarImage
                src={'/oleg-rybnikov.png'}
                alt="Professional portrait of Oleg Rõbnikov"
                itemProp="image"
              />
              <AvatarFallback itemProp="name">OR</AvatarFallback>
            </Avatar>
            <div itemScope itemType="https://schema.org/Organization">
              <h1 className="text-left" itemProp="name" id="main-heading">
                <span
                  className="text-2xl font-extrabold text-transparent bg-linear-to-r from-sky-400 to-emerald-500 bg-clip-text"
                  itemProp="givenName"
                >
                  Oleg Rõbnikov
                </span>
                <br />
                <span className="text-lg font-medium" itemProp="jobTitle">
                  Web Development
                </span>
              </h1>
              <meta itemProp="url" content="https://thenerdlete.click" />
              <meta itemProp="founder" content="Oleg Rõbnikov" />
            </div>
          </div>

          {/* Right side - Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/web-development" title="Web Development">
                      Custom websites and web applications
                    </ListItem>
                    <ListItem href="/ecommerce" title="E-Commerce">
                      Online stores and payment solutions
                    </ListItem>
                    <ListItem href="/seo" title="SEO Optimization">
                      Search engine visibility improvement
                    </ListItem>
                    <ListItem href="/consulting" title="Consulting">
                      Technical strategy and planning
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/portfolio"
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
