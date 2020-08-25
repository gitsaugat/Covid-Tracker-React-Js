import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Detail.module.css";
import cx from "classnames";
import Chart from "./Charts";
const Detail = ({ info }) => {
  return (
    <div>
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
                  end={info.confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(info.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2"></Typography>
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
                  end={info.recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(info.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2"></Typography>
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
                  end={info.deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(info.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Detail;
