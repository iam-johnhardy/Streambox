import Navbar from "./component/NavBar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Series from "./pages/Series"
import Movies from "./pages/Movies"
import Music from "./pages/Music"
import Sports from "./pages/Sports"
import Gaming from "./pages/Gaming"
import  Home  from "./pages/Home"




function App(){
  return(
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>  
      <Route  path='/series' element= {<Series/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/music" element= {<Music/>}/>
      <Route path="/sports" element= {<Sports/>}/>
      <Route path="/gaming" element= {<Gaming/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App