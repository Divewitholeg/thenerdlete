{
  /* Footer */
}

export default function MobileFooter() {
  return (
    <footer className="bottom-0 z-10 bg-background border-t">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-around items-center">
          <button className="flex flex-col items-center p-2 rounded-md hover:bg-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>

          <button className="flex flex-col items-center p-2 rounded-md hover:bg-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            <span className="text-xs mt-1">Explore</span>
          </button>

          <button className="flex flex-col items-center p-2 rounded-md hover:bg-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </nav>
      </div>
    </footer>
  );
}
