export function CalendaryIcon ({
  className = 'w-6 h-6'
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      stroke='currentColor'
      fill='none'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
      <path d='M16 3l0 4'></path>
      <path d='M8 3l0 4'></path>
      <path d='M4 11l16 0'></path>
      <path d='M8 15h2v2h-2z'></path>
    </svg>
  )
}
