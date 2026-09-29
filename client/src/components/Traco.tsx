/**
 * Círculo aberto em pincelada — referência aos quadros de nanquim do
 * consultório. Usa `currentColor`, então a cor vem da classe de texto.
 */
export default function Traco({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M150 42C116 14 52 22 32 82c-17 52 22 96 74 98 50 2 84-34 80-80-1-12-4-22-10-31"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M146 52c-30-24-84-16-100 34-13 42 18 80 62 82 36 1 64-22 70-54"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
