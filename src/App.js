import React, { useState } from "react";
import NavbarCWH from "./NavbarCWH";
import TextUtil from "./TextUtil";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(false);

  const showAlert = (type, Message) => {
    setAlert({
      type: type,
      msg: Message,
    });
    setTimeout(() => {
      setAlert(alert);
    }, 1500);
  };

  // Enable Dark mode
  const darkModeEnable = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#052657";
      showAlert("Success! ", "Dark Mode Has Been Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
      <NavbarCWH
          mode={mode}
          darkModeEnable={darkModeEnable}
        />
        <Routes>
          <Route exact path="/" element={<TextUtil mode={mode} alert={alert} showAlert={showAlert} />}>
          </Route>
          <Route exact path="/About" element={<About />}>
          </Route>
        </Routes>
      </Router>
      </>
  );
};
export default App;
