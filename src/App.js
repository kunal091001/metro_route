import "./App.css";
import NavBar from "./myComponents/homePage/firstSection/Navbar";
import Header from "./myComponents/homePage/firstSection/Header";
import Footer from "./myComponents/homePage/firstSection/Footer";

import Firstpage from "./myComponents/homePage/firstSection/FirstPage";
import MapWindow from "./myComponents/homePage/firstSection/MapWindow";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LineDetails from "./myComponents/homePage/firstSection/LineDetails";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <Firstpage />
              </>
            }
          ></Route>
          <Route exact path="/mapwindow" element={<MapWindow />}></Route>
          <Route
            exact
            path="linedetails/:paramLineCode"
            element={<LineDetails />}
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
