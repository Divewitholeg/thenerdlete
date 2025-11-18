{
  /* Main Content - Scrolls with header and footer */
}
import { Badge } from '../ui/badge';
import { BadgedLink } from '@/components/BadgedLink';

export default function MobileBody() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="container leading-7 not-first:mt-4 last-of-type:mb-4 mx-auto px-4 py-4">
        Your website will be a powerful growth engine, built with a modern tech
        stack chosen specifically for your success.
        <BadgedLink href="https://react.dev/" label="⚛ React" />
        ensures your visitors enjoy a fast, app-like experience that keeps them
        engaged.{' '}
        <span>
          <Badge variant="outline" asChild>
            <a href="https://laravel.com/">Laravel</a>
          </Badge>{' '}
        </span>
        provides the secure and robust backbone for your essential features,
        from online payments and booking calendars to client portals. Thanks to
        <span>
          <Badge variant="outline" asChild>
            <a href="https://inertiajs.com/">Inertia.js</a>
          </Badge>{' '}
        </span>
        , every interaction feels instant and seamless, while{' '}
        <span>
          <Badge variant="outline" asChild>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </Badge>{' '}
        </span>{' '}
        and shadcn/ui deliver a polished, professional design that looks
        flawless on any device. The entire system is powered by enterprise-grade
        databases (SQL & MongoDB), giving you a reliable and scalable platform
        ready to grow with your business.
      </div>
    </main>
  );
}
