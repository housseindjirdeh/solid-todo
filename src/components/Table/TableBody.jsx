import { createSignal, Show, Index, Switch, Match } from "solid-js";

import data from "../../../mock-data.json";

function TableCell(props) {
  return (
    <td className="p-4 align-middle first:hidden first:md:block">
      {props.children}
    </td>
  );
}

function TableRow(props) {
  return (
    <tr
      className="border-b transition-colors hover:bg-gray-50 cursor-pointer"
      data-state="false"
    >
      <TableCell>{/* Spacer */}</TableCell>
      <TableCell>
        <div className="w-[120px]">{props.date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <div className="bg-gray-200 inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            {props.contributors} contributors
          </div>
          <span className="max-w-[500px] truncate font-medium">
            {props.title}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex w-[100px] items-center">
          <Switch
            fallback={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-gray-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            }
          >
            <Match when={!props.complete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-gray-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="16 12 12 8 8 12"></polyline>
                <line x1="12" x2="12" y1="16" y2="8"></line>
              </svg>
              <span>In Progress</span>
            </Match>
            <Match when={props.complete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4 text-gray-500"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span>Done</span>
            </Match>
          </Switch>
        </div>
      </TableCell>
    </tr>
  );
}

export function TableBody() {
  const [retros, setRetros] = createSignal(data);

  const orderedRetros = retros().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <tbody className="[&_tr:last-child]:border-0">
      <Show
        when={orderedRetros?.length > 0}
        fallback={<button onClick={toggle}>Log in</button>}
      >
        <Index each={orderedRetros}>
          {(retro) => (
            <TableRow
              date={new Date(retro().date)}
              contributors={retro().contributors}
              title={retro().title}
              complete={retro().complete}
            />
          )}
        </Index>
      </Show>
    </tbody>
  );
}
