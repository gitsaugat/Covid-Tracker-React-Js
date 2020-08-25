import React, { useState, useEffect } from "react";
import Chart from "./Charts";
import Detail from "./Detail";
import { Button, IconButton } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Counter = ({ countries }) => {
  const [country, setCountry] = useState();
  const [loading, setLoaing] = useState(true);
  const [info, setInfo] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    async function fetchData() {
      if (country !== undefined) {
        await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
          .then((response) => response.json())
          .then((data) => {
            setInfo(data);

            setLoaing(false);
          });
      }
    }
    fetchData();
  }, [country]);

  return (
    <div>
      <form>
        <div className="form-group container">
          <select
            className="Country-select form-control"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            {countries.map((countryName) => (
              <option className="option" key={countryName.iso3}>
                {countryName.name}
              </option>
            ))}
          </select>
        </div>
      </form>
      {info !== undefined && !loading ? (
        <div>
          <Chart info={info} />
          <Detail info={info} />
        </div>
      ) : (
        <div>
          <div className="SelectIdea">
            <IconButton>
              <h2>Covid 19 Tracker </h2>
              &nbsp; &nbsp;
              <AcUnitIcon fontSize="large" />
            </IconButton>
            <br />
            <br />

            <Button variant="contained " color="primary">
              Start Fetching Results Of Covid &nbsp;<h3>19</h3> &nbsp; By
              Selecting Countries From The Options Above{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Counter;
