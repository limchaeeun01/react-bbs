import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './bbs/component/pages/HomePage';
import BbsWriterPage from './bbs/component/pages/BbsWriterPage';
import BbsViewpage from './bbs/component/pages/BbsViewPage';
import BbsUpdatePage from './bbs/component/pages/BbsUpdatePage';

function App() {
  return (

    <BrowserRouter>
      <h2>React BBS Project</h2>
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/bbs-write" element={<BbsWriterPage/>}></Route>
        <Route path="/bbs-view/:id" element={<BbsViewpage/>}></Route>
        <Route path="/bbs-update/:id" element={<BbsUpdatePage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
