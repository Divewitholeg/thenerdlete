{
  /* MobileHeader.tsx */
}

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function MobileHeader() {
  return (
    <header className="z-10 h-40 bg-background border-b my-5 flex items-center justify-between">
      <div className="flex items-center gap-4 ">
        <Avatar className="size-16 m-4">
          <AvatarImage src="https://avatars.githubusercontent.com/u/72547904?v=4" />
          <AvatarFallback>OR</AvatarFallback>
        </Avatar>
        <h1 className="text-left text-2xl! font-semibold!">
          <span className="text-4xl font-extrabold text-transparent bg-linear-to-r from-sky-400 to-emerald-500 bg-clip-text">
            Oleg Rõbnikov
          </span>
          <br />
          Web Development
        </h1>
      </div>
    </header>
  );
}
