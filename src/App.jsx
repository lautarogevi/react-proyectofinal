import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>


      {/* <NavBar/>
      <ItemListContainer greeting="Productos" />
      <ItemDetailContainer />
     */}
    
    </>
  );
}

export default App;
