export default function Arrow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="inherit"
          d="M4.958 4.958h7.084m0 0v7.084m0-7.084-7.084 7.084"
        />
      </svg>
    </div>
  );
}
