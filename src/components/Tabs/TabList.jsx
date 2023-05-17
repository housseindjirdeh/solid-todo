import { SELECTION_ENUM } from "../../../utils/constant";

import { TabButton } from "./TabButton";

export function TabList(props) {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      class="inline-flex h-10 w-full xl:w-max items-center justify-between rounded-md bg-gray-100 p-1 text-gray-500 gap-4"
      tabindex="0"
      data-orientation="horizontal"
      style="outline: none;"
    >
      <TabButton
        active={props.selection() === SELECTION_ENUM.ALL}
        onClick={() => props.handleSelection(SELECTION_ENUM.ALL)}
      >
        <span>All</span>
      </TabButton>
      <TabButton
        active={props.selection() === SELECTION_ENUM.GOOD}
        onClick={() => props.handleSelection(SELECTION_ENUM.GOOD)}
      >
        <span>Things that went well</span>
      </TabButton>
      <TabButton
        active={props.selection() === SELECTION_ENUM.BAD}
        onClick={() => props.handleSelection(SELECTION_ENUM.BAD)}
      >
        <span>Things that could have gone better</span>
      </TabButton>
      <TabButton
        active={props.selection() === SELECTION_ENUM.RANDOM}
        onClick={() => props.handleSelection(SELECTION_ENUM.RANDOM)}

      >
        <span>Just random things</span>
      </TabButton>
    </div>
  );
}
