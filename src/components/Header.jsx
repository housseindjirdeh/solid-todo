export function Header() {
  return (
    <div className="flex items-center justify-between relative h-28">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-gray-500 text-lg">
          Aurora Retrospective Portal
        </p>
      </div>
      <button className="h-12">
        <img
          className="aspect-square h-full w-full"
          src="/src/assets/profile-pic.png"
        />
      </button>
    </div>
  );
}
