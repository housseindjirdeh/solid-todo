import { createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";

import { Header } from "../components/Header";
import { TabList } from "../components/Tabs/TabList";

import { SELECTION_ENUM } from "../../utils/constant";

import data from "../../mock-data.json";

export default function RetroPage() {
  const location = useLocation();
  const retroId = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const [retro, setRetro] = createSignal(
    data.find((retro) => retro.id === Number(retroId))
  ); //TODO: Fetch from database
  const [selection, setSelection] = createSignal(SELECTION_ENUM.ALL);

  return (
    <>
      <Header
        editable
        icon={
          <A href="/" class="text-gray-600 hover:text-black transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="w-8 h-8 -ml-14 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </A>
        }
        title={retro().title}
        subtitle={new Date(retro().date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      />
      <TabList selection={selection} handleSelection={setSelection} />
    </>
  );
}
