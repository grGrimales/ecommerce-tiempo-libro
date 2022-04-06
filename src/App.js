import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/ui/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greetings="Tiempo Libro" />

      <ItemDetailContainer/>
    </div>
  );
}

export default App;
