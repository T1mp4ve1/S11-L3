import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

function App() {
  const count = useSelector((state) => state.main.count);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <p>Redux: {count}</p>
      <Button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: 3,
          })
        }
      >
        INC
      </Button>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
