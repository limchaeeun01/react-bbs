import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './bbs/component/pages/HomePage';
import BbsWriterPage from './bbs/component/pages/BbsWriterPage';

function App() {
  return (

    <BrowserRouter>
      <h2>React BBS Project</h2>
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/bbs-write" element={<BbsWriterPage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
