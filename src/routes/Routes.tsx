import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Navagation from '../Components/Navegation/Navagation';
import Header from '../Components/Header/Header';
import Sobre from '../pages/Sobre/Sobre';
import Footer from '../Components/Footer/Footer';
import NotFound from '../pages/Notfound/NotFound';
import Post from '../pages/Post/Post';

export default function AppRouter() {
  return(
    <BrowserRouter>
      <Navagation/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Post/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
