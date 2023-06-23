import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ChatBotBody from "./pages/ChatBotBody";

function App() {
  return (
    <div className="app h-screen w-full bg-red-700 sm:w-72">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBotBody />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
