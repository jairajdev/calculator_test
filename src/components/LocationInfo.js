import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { theme } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedLocation } from "../redux/action";

const LocationInfo = ({ setShowInfo, locationData }) => {
  const classes = theme();

  const { selectedLocations } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.markerInfo}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {locationData.name}
          </Typography>

          <Typography variant="body2">
            Max Units:
            {"  " + locationData.max_dist}
          </Typography>
          <Typography variant="body2">
            Fee :{"  " + locationData.fee}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container justify="flex-end">
            <Button
              type="primary"
              size="small"
              onClick={() => setShowInfo(null)}
            >
              Close
            </Button>
            <Button
              disabled={
                selectedLocations &&
                selectedLocations.filter(
                  (value) => value.id === locationData.id
                ).length > 0
              }
              type="primary"
              size="small"
              onClick={() => dispatch(addSelectedLocation(locationData))}
            >
              Add
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};

export default LocationInfo;
