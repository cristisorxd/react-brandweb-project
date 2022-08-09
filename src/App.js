import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
