export function HorseIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 9c0-2-1-3-1-3s-1.5-1-3-1c-1 0-2 .5-2.5 1l-1 1.5c-.5.7-1.5 1-2.5.8l-2-.4c-1.5-.3-3 .2-4 1.2l-2 2c-.5.5-.8 1.2-.8 2v3.5c0 .8.5 1.4 1.2 1.4h.6c.4 0 .8-.3 1-.7l.4-1c.2-.4.6-.7 1-.7h1.2c.5 0 1 .3 1.2.7l.6 1.3c.2.4.6.7 1 .7h.6c.5 0 1-.3 1.2-.8l.5-1.2c.2-.5.7-.8 1.2-.8h1.6c.5 0 .9.3 1.1.7l.6 1.3c.2.5.6.8 1.1.8h.5c.7 0 1.3-.6 1.3-1.3V9Z" />
      <path d="M18 5.5c.5-.5 1.5-.5 2 0" />
      <circle cx="18" cy="8" r=".5" fill="currentColor" />
    </svg>
  );
}
