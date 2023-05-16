export function Button(props) {
  return (
    <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-gray-300/65 hover:bg-gray-100 px-3 rounded-md h-8">
      {props.children}
    </button>
  );
}
