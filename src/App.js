import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Booking } from "./pages/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
