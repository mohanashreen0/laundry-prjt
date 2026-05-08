export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" fill="currentColor" />
      <path d="M10.5 14H16m-2.5-4v8" stroke="hsl(var(--background))" strokeWidth="1.5" />
      <path d="M10 9.5a2.5 2.5 0 0 1 5 0" stroke="hsl(var(--background))" strokeWidth="1.5" />
    </svg>
  );
}
