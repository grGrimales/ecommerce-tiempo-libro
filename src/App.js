import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/ui/NavBar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar />

       <Routes>

         <Route path='/' element={<ItemListContainer greetings="Tiempo Libro"/>} />
          <Route path='/category/:categoryId' element={ <ItemListContainer/> } />

          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
         <Route path='*' element={<ItemListContainer greetings="Tiempo Libro"/>}/>
       </Routes>





       </BrowserRouter>
      
    </div>
  );
}

export default App;
