import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import React, { useState, useEffect } from "react";
import { Desktop, Medium, Mobile } from "./responsive/responsive";
import {
  departureColumnsDesktop,
  departureColumnsMedium,
  departureColumnsMobile,
} from "./columns/departureColumns";
import {
  arrivalColumnsDesktop,
  arrivalColumnsMedium,
  arrivalColumnsMobile,
} from "./columns/arrivalColumns";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Table from "./Table";

function App() {
  const [departures, setDepartures] = useState("");
  const [arrivals, setArrivals] = useState("");
  const [activeBtn, setActiveBtn] = useState("departures");
  useEffect(() => {
    const url = "https://pmaciej.github.io/airline-data/data.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const tableData = json.records.map((x) =>
          Object.fromEntries(
            Object.entries(x).map(([key, value]) => [
              key,
              typeof value == "string" ? value.toUpperCase() : value,
            ])
          )
        );
        const arrivals = tableData
          .filter((item) => item.schedDep !== undefined)
          .map((item, index) => ({
            ...item,
            time: item.schedDep,
            index: index,
          }));
        const departures = tableData
          .filter((item) => item.schedArr !== undefined)
          .map((item, index) => ({
            ...item,
            time: item.schedArr,
            index: index,
          }));
        setDepartures(departures);
        setArrivals(arrivals);
      } catch (error) {
        alert("error", error);
      }
    };

    fetchData();
  }, []);

  const clickHandler = (e) => {
    const { name } = e.target;
    setActiveBtn(name);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/departures">
            <button
              name="departures"
              onClick={clickHandler}
              className={
                activeBtn === "departures"
                  ? "btn btn-primary"
                  : "btn btn-secondary"
              }
            >
              Departures
            </button>
          </Link>
          <Link to="/arrivals">
            <button
              name="arrivals"
              onClick={clickHandler}
              className={
                activeBtn === "arrivals"
                  ? "btn btn-primary"
                  : "btn btn-secondary"
              }
            >
              Arrivals
            </button>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/departures" />} />
          <Route
            path="/departures"
            element={
              <>
                <Desktop>
                  <Table
                    data={departures}
                    showGate={true}
                    columns={departureColumnsDesktop}
                  />
                </Desktop>
                <Medium>
                  <Table
                    data={departures}
                    showGate={true}
                    columns={departureColumnsMedium}
                  />
                </Medium>
                <Mobile>
                  <Table
                    data={departures}
                    showGate={true}
                    columns={departureColumnsMobile}
                  />
                </Mobile>
              </>
            }
          ></Route>
          <Route
            path="/arrivals"
            element={
              <>
                <Desktop>
                  <Table
                    data={arrivals}
                    showGate={true}
                    columns={arrivalColumnsDesktop}
                  />
                </Desktop>
                <Medium>
                  <Table
                    data={arrivals}
                    showGate={true}
                    columns={arrivalColumnsMedium}
                  />
                </Medium>
                <Mobile>
                  <Table
                    data={arrivals}
                    showGate={true}
                    columns={arrivalColumnsMobile}
                  />
                </Mobile>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
