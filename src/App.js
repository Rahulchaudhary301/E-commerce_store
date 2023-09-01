
import './App.css';
import { useProductContex } from './Contex/Product_Context';
import Home from './component/Home';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import NavBar from './component/NavBar';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import SingleData from './component/SingleData';
import MainPage from './component/MainPage';
import CardItems from './component/CardItems';





function App() {

  const {products}=useProductContex()
  


  return (
    <div >


<Router>
<NavBar/>
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/singleproduct/:id' element={<SingleData/>}></Route>
    <Route exact path='/mainpage' element={<MainPage/>}></Route>
    <Route exact path='/addcart' element={<CardItems/>}></Route>
  </Routes>
  <Footer/>
</Router>


     
     
    
      
    </div>
  );
}

export default App;
