import { Show, createSignal } from "solid-js";

export function Header(props) {
  const [title, setTitle] = createSignal(props.title);

  return (
    <div class="flex items-center justify-between relative h-28">
      <div class="flex flex-row items-center w-full">
        <Show when={props.icon != null}>{props.icon}</Show>
        <div class="w-full">
          <Show
            when={props.editable}
            fallback={
              <h2 class="text-3xl font-bold tracking-tight">{props.title}</h2>
            }
          >
            <input
              class="text-3xl font-bold tracking-tight w-full focus:outline-none"
              placeholder="Title"
              value={title()}
            />
          </Show>
          <p class="text-gray-500 text-lg">{props.subtitle}</p>
        </div>
      </div>
      <button class="h-12">
        <img
          class="aspect-square h-full w-full"
          src="/src/assets/profile-pic.png"
        />
      </button>
    </div>
  );
}
