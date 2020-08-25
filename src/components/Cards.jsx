import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ totalCases }) => {
  return (
    <div>
      {totalCases !== undefined ? (
        <div className={styles.container}>
          <Grid container spacing={3} justyfy="center">
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.infected)}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Infected
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={totalCases.confirmed.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(totalCases.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of Active Cases of Covid-19
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.recovered)}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Recovered
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={totalCases.recovered.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(totalCases.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of Recovered Cases of Covid-19
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.deaths)}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Deaths
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={totalCases.deaths.value}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(totalCases.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of Deaths of Covid-19
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>Loading ......</div>
      )}
    </div>
  );
};
export default Cards;
