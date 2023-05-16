import { TableTopActions } from "./TableTopActions";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";

export function Table() {
  return (
    <>
      <TableTopActions />
      <div className="rounded-md border">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <TableHead />
            <TableBody />
          </table>
        </div>
      </div>
      <TableFooter />
    </>
  );
}
