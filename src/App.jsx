import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/form';
import Erorr from './pages/error';

const App = () => {
  return (


    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Erorr />} />

    </Routes>


  );
}

export default App;
