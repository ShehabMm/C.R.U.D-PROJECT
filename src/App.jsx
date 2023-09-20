import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/form';
import Erorr from './pages/error';
import ProtectRoutes from './pages/context/protectRoutes';
import Nav from './components/nav/nav';

const App = ({setMode,addItem,allITems}) => {
  return (


    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Erorr />} />

      <Route element={<ProtectRoutes />}>

        <Route path="/nav" element={<Nav setMode={setMode} addItem={addItem} allITems={allITems} />}/>





        </Route >


    </Routes>






  );
}

export default App;
