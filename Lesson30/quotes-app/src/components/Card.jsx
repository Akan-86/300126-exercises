export function Card({ children }) {
  return (
    <div className='w-full max-w-xl rounded-md border border-zinc-600 bg-zinc-800 p-6 text-center'>
      {children}
    </div>
  );
}
