
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

import Drone from './components/Drone';

import Topshots from './components/Topshots';
import Card from './components/Card';

function App() {
  return (
   <>
   <BrowserRouter>
  
     <Routes>
     <Route path="/" element={<Card/>}></Route>
     <Route path="/topshots" element={<Topshots/>}></Route>
     <Route path="/topshots" element={<Topshots/>}></Route>
     <Route path="/drone" element={<Drone/>}></Route>
     <Route path="/drone" element={<Drone/>}></Route>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
