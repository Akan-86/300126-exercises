export function Button({ children, ...props }) {
  return (
    <button
      type='button'
      className='rounded-md bg-zinc-600 px-4 py-2 font-medium text-white hover:bg-zinc-500 aria-pressed:bg-rose-700 aria-pressed:hover:bg-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300'
      {...props}
    >
      {children}
    </button>
  );
}
