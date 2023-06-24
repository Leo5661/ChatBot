import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ChatBotBody from "./pages/ChatBotBody";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <div className="app h-screen w-full bg-red-700 sm:w-96">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<ChatBotBody />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
