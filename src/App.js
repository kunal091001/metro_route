import NavBar from "./myComponents/homePage/firstSection/Navbar";
import Header from "./myComponents/homePage/firstSection/Header";
import Footer from "./myComponents/homePage/firstSection/Footer";
import Security from "./myComponents/homePage/firstSection/Security";
import Firstpage from "./myComponents/homePage/firstSection/FirstPage";
import MapWindow from "./myComponents/homePage/firstSection/MapWindow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LineDetails from "./myComponents/homePage/firstSection/LineDetails";
import ResultRoute from "./myComponents/homePage/firstSection/ResultRoute";
import Contact from "./myComponents/homePage/firstSection/Contact";
import Faqs from "./myComponents/homePage/firstSection/faqs";
function App() {
  return (
    <>
      <Header />

      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Firstpage />
              </>
            }
          ></Route>
          <Route exact path="/mapwindow" element={<MapWindow />}></Route>
          <Route exact path="/security" element={<Security />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/faqs" element={<Faqs />}></Route>
          <Route
            exact
            path="linedetails/:paramLineCode"
            element={
              <>
                <LineDetails />
              </>
            }
          ></Route>
          <Route
            exact
            path="/resultroute/:paramFinalStationFrom/:paramFinalStationFromCode/to/:paramFinalStationTo/:paramFinalStationToCode"
            element={
              <>
                <ResultRoute />
              </>
            }
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
