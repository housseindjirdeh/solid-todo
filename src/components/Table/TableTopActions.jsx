import { Button } from "../Button";

export function TableTopActions() {
  return (
    <div className="flex items-center justify-end">
     <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <circle cx={12} cy={12} r={10} />
          <line x1={12} x2={12} y1={8} y2={16} />
          <line x1={8} x2={16} y1={12} y2={12} />
        </svg>
        New Retro
      </Button>
    </div>
  );
}