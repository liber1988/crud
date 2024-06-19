import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Hoem";
import Create from "./pages/Create/Create";
import Update from "./pages/Update/Update";
import Read from "./pages/Read/Read";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Mainpage from "./pages/Mainpage/Mainpage";
import NoMatch from "./pages/NoMatch/NoMatch";
import Shoe from "./components/Shoe";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/shoes/:id" element={<Shoe />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
