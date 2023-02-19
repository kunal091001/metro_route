import "./App.css";
import NavBar from "./myComponents/homePage/firstSection/Navbar";
import Header from "./myComponents/homePage/firstSection/Header";
import MapSection from "./myComponents/homePage/firstSection/MapSection";
import RoutePlanner from "./myComponents/homePage/firstSection/RoutePlanner";
import Footer from "./myComponents/homePage/firstSection/Footer";
import Lines from "./myComponents/homePage/firstSection/Lines";
import Firstpage from "./myComponents/homePage/firstSection/FirstPage";
import MapWindow from "./myComponents/homePage/firstSection/MapWindow";
import ExtraEle from "./myComponents/homePage/firstSection/ExtraEle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:m-16">
          <div className="">
            <MapSection />
          </div>
          <RoutePlanner />
        </div>
      </Router>

      <Lines />
      <ExtraEle />
      <Footer />
    </>
  );
}
export default App;
