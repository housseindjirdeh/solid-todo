function HeaderCell(props) {
  return (
    <th class="h-12 px-4 text-left align-middle font-semibold text-gray-500 first:hidden first:md:block">
      {props.children}
    </th>
  );
}
export function TableHead() {
  return (
    <thead class="[&_tr]:border-b">
      <tr class="border-b">
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
