function HeaderCell(props) {
  return (
    <th className="h-12 px-4 text-left align-middle font-medium text-gray-700 first:hidden first:md:block">
      {props.children}
    </th>
  );
}
export function TableHead() {
  return (
    <thead className="[&_tr]:border-b">
      <tr className="border-b">
        <HeaderCell>{/* Spacer */}</HeaderCell>
        <HeaderCell>
          <span>Date</span>
        </HeaderCell>
        <HeaderCell>
          <span>Title</span>
        </HeaderCell>
        <HeaderCell>
          <span>Status</span>
        </HeaderCell>
      </tr>
    </thead>
  );
}
