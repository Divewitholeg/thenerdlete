{
  /* MobileHeader.tsx */
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function MobileHeader() {
  return (
    <header
      className="z-10 h-40 bg-background border-b my-5 flex items-center justify-between"
      role="banner"
      aria-label="Website header"
      itemScope
      itemType="https://schema.org/Person"
      itemProp="author"
    >
      <div className="flex items-center gap-4">
        <Avatar
          className="size-18 m-4"
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
          <h1
            className="text-left text-2xl! font-semibold!"
            itemProp="name"
            id="main-heading"
          >
            <span
              className="text-4xl font-extrabold text-transparent bg-linear-to-r from-sky-400 to-emerald-500 bg-clip-text"
              itemProp="givenName"
            >
              Oleg Rõbnikov
            </span>
            <br />
            <span itemProp="jobTitle">Web Development</span>
          </h1>
          <meta itemProp="url" content="https://thenerdlete.click" />
          <meta itemProp="founder" content="Oleg Rõbnikov" />
        </div>
      </div>
    </header>
  );
}
