import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Users from "./components/Users";
import Posts from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/posts/:id' element={<Posts />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
