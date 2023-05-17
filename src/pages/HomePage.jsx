import { createSignal } from "solid-js";
import { Header } from "../components/Header";
import { Table } from "../components/Table";

import data from "../../mock-data.json";

export default function HomePage() {
  const [retros, setRetros] = createSignal(data); // TODO: Fetch from database

  const orderedRetros = retros().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <Header title="Welcome Back!" subtitle="Aurora Retrospective Portal" />
      <Table retros={orderedRetros} />
    </>
  );
}
