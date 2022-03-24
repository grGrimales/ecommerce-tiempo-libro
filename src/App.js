import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greetings="Bienvenido a tiempo Libro" />
    </div>
  );
}

export default App;
