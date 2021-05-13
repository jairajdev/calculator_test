import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
}));

const TopBar = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6">Rabbit Finance</Typography>
        </Toolbar>
        <div className={classes.flexGrow} />
      </AppBar>
    </Fragment>
  );
};

export default TopBar;
