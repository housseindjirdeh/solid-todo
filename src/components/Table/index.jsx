import { TableTopActions } from "./TableTopActions";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";

export function Table(props) {
  return (
    <>
      <TableTopActions />
      <div class="rounded-md border">
        <div class="w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <TableHead />
            <TableBody rows={props.retros} />
          </table>
        </div>
      </div>
      <TableFooter />
    </>
  );
}
