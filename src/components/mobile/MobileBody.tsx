{
  /* Main Content - Scrolls with header and footer */
}
import { BadgedLink } from '@/components/BadgedLink';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  SiAlibabacloud,
  SiInertia,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

export default function MobileBody() {
  return (
    <main className="flex-1 overflow-auto mb-4">
      <Card
        className="mx-auto px-4 py-4"
        itemScope
        itemType="https://schema.org/Article"
        aria-labelledby="tech-stack-heading"
        aria-describedby="tech-stack-description"
        role="article"
        id="tech-stack-article"
        lang="en"
      >
        <CardHeader>
          <CardTitle
            id="tech-stack-heading"
            className="sr-only"
            itemProp="headline"
          >
            Technology Stack Benefits
          </CardTitle>
          <CardDescription
            id="tech-stack-description"
            className="sr-only"
            itemProp="abstract"
          >
            Overview of modern web technologies used by Oleg Rõbnikov Web
            Development for building high-performance business websites with
            their specific benefits.
          </CardDescription>
        </CardHeader>

        <CardContent
          itemScope
          itemType="https://schema.org/Text"
          itemProp="articleBody"
          className="[&>p]:mb-4 leading-7"
        >
          <p>
            Your website will be a powerful growth engine, built with a modern
            tech stack chosen specifically for your success.
            <BadgedLink
              href="https://react.dev/"
              icon={SiReact}
              label="React"
              itemProp="mentions"
              iconColor="#61DAFB"
            />
            ensures your visitors enjoy a fast, app-like experience that keeps
            them engaged.
          </p>

          <p>
            <BadgedLink
              href="https://laravel.com/"
              icon={SiLaravel}
              label="Laravel"
              itemProp="mentions"
              iconColor="#FF2D20"
            />
            provides the secure and robust backbone for your essential features,
            from online payments and booking calendars to client portals. Thanks
            to{' '}
            <BadgedLink
              href="https://inertiajs.com/"
              icon={SiInertia}
              label="Inertia.js"
              itemProp="mentions"
              iconColor="#9553E9"
            />
            , every interaction feels instant and seamless.
          </p>

          <p>
            For design,{' '}
            <BadgedLink
              href="https://tailwindcss.com/"
              icon={SiTailwindcss}
              label="Tailwind CSS"
              itemProp="mentions"
              iconColor="#06B6D4"
            />
            and{' '}
            <BadgedLink
              href="https://ui.shadcn.com/"
              icon={SiShadcnui}
              label="shadcn/ui"
              itemProp="mentions"
              iconClassName="bg-black text-white p-0.5 rounded"
              iconColor="#FFFFFF"
            />{' '}
            deliver a polished, professional design that looks flawless on any
            device.
          </p>

          <p>
            This foundation is compiled with{' '}
            <BadgedLink
              href="https://vite.dev/"
              icon={SiVite}
              label="Vite"
              itemProp="mentions"
              iconColor="#BD34FE"
            />
            to guarantee lightning-fast loading speeds that reduce bounce rates
            and improve your search engine rankings.
          </p>

          <p>
            Your site will be deployed on{' '}
            <BadgedLink
              href="https://aws.amazon.com/"
              label="AWS"
              itemProp="mentions"
              icon={<span className="w-3 h-3 opacity-0" aria-hidden="true" />}
            />
            and{' '}
            <BadgedLink
              href="https://www.alibabacloud.com/"
              icon={SiAlibabacloud}
              label="Alibaba Cloud"
              itemProp="mentions"
              iconColor="#FF6A00"
            />
            , giving you global reach with enterprise-grade reliability,
            automatic scaling for traffic spikes, and military-grade security to
            protect your business and customer data.
          </p>

          <p>
            The entire system is powered by enterprise-grade databases (
            <BadgedLink
              href="https://www.mysql.com/"
              icon={SiMysql}
              label="MySQL"
              itemProp="mentions"
              iconClassName="bg-black text-white p-0.5 rounded"
              iconColor="#FFFFFF"
            />
            &{' '}
            <BadgedLink
              href="https://www.mongodb.com/"
              icon={SiMongodb}
              label="MongoDB"
              itemProp="mentions"
              iconColor="#47A248"
            />
            ), giving you a reliable and scalable platform ready to grow with
            your business.
          </p>
        </CardContent>

        <meta itemProp="datePublished" content="2025-11-18" />
        <meta itemProp="author" content="Oleg Rõbnikov" />
      </Card>
    </main>
  );
}
