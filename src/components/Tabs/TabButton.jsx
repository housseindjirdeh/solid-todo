export function TabButton(props) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      role="tab"
      data-state={props.active ? "active" : "inactive"}
      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=inactive]:hover:text-gray-700"
    >
      {props.children}
    </button>
  );
}
