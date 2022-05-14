
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IDCARD from "./components/IDCARD";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|idcard)">
          <IDCARD {...iDCARDData} />
          <br></br>
          <IDCARD {...iDCARDData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const country = {
    fullName: "COUNTRY CODE",
    userDetail: "IND",
};

const id = {
    fullName: "ID NUMBER",
    userDetail: "456712340098",
    className: "id-number-frame",
};

const idd = {
    fullName: "IDD",
    userDetail: "83492087",
    className: "idd-frame",
};

const can = {
    fullName: "CAN",
    userDetail: "364928370223",
    className: "can-frame",
};

const name = {
    fullName: "FULL NAME",
    userDetail: "SIDDHANT GUPTA",
    className: "full-name-frame",
};

const dob = {
    fullName: "DATE OF BIRTH",
    userDetail: "20 / 09 / 1994",
    className: "dateof-birth-frame",
};

const gender = {
    fullName: "GENDER",
    userDetail: "M",
    className: "gender-frame",
};

const birth = {
    fullName: "PLACE OF BIRTH",
    userDetail: "NEW DELHI, INDIA",
    className: "placeof-birth-frame",
};

const iDCARDData = {
    issuerName: "Issuer Name",
    userimage: "/img/rectangle-2@2x.png",
    name1Props: country,
    name2Props: id,
    name3Props: idd,
    name4Props: can,
    name5Props: name,
    name6Props: dob,
    name7Props: gender,
    name8Props: birth,
};

