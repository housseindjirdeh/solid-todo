import logo from "./logo.svg";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

function App() {
  return (
    <div class="h-full flex flex-1 flex-col space-y-8 p-8">
      <Header />
      <div className="space-y-4">
        <Table/>
      </div>
    </div>
  );
}

export default App;
