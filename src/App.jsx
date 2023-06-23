import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./pages/ChatBot";
import Details from "./pages/Details";

function App() {
  return (
    <div className="app h-screen w-full bg-red-700 sm:w-1/4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
