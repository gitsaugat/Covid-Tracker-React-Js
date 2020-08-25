import React, { Component, useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
export default function Chart(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (props !== undefined) {
      setData({
        confirmed: props.info.confirmed.value,
        recovered: props.info.recovered.value,
        deaths: props.info.deaths.value,
        active:
          props.info.confirmed.value -
          (props.info.deaths.value + props.info.recovered.value)
      });
    }
  }, [props]);
  return (
    <div className="ChartJsStyle">
      {data !== undefined ? (
        <div>
          <Bar
            xs={12}
            md={3}
            data={{
              labels: [
                "Confirmed Cases",
                "Recovered Cases ",
                "Deaths Cases",
                "Active Cases"
              ],
              datasets: [
                {
                  label: "  ",
                  data: [
                    data.confirmed,
                    data.recovered,
                    data.deaths,
                    data.active
                  ],
                  backgroundColor: ["#3F3F92", "#50D454", "#FF431C", "#E4630E"]
                }
              ]
            }}
            options={{
              title: {
                display: true,
                text: "Chart View"
              }
            }}
          />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}
