import React, { Fragment } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Snackbar, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ProductSelector from "../components/ProductSelector";
import DatePicker from "../components/DatePicker";
import MapModal from "../components/MapModal";
import Table from "../components/TableComponent";
import { theme } from "../styles";

const CalculatorPage = (props) => {
  const {
    getInitialValue,
    selectedLocations,
    selectedProduct,
    selectedDate,
    openMap,
    handleMap,
    handleSubmit,
    openSnackBar,
    handleSnackBarClose,
  } = props;
  const classes = theme();

  return (
    <Fragment>
      <Formik
        initialValues={getInitialValue()}
        validationSchema={yup.object().shape({
          product: yup.number().required("Require"),
          date: yup.string().required("Require"),
        })}
        onSubmit={(values) => {
          handleSubmit();
        }}
        render={({ values, errors, touched, handleSubmit, setFieldValue }) => (
          <form>
            <Grid container>
              <Grid container item lg={3} sm={6} xl={3} xs={12}>
                <ProductSelector
                  classes={classes}
                  formik={{ values, touched, errors, setFieldValue }}
                />
              </Grid>
              <Grid container item lg={3} sm={6} xl={3} xs={12}>
                <DatePicker
                  classes={classes}
                  formik={{ values, touched, errors, setFieldValue }}
                />
              </Grid>
            </Grid>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleMap}
            >
              Add Location
            </Button>
            <MapModal openMap={openMap} handleMap={handleMap}></MapModal>
            <Table
              selectedLocations={selectedLocations}
              selectedProduct={selectedProduct}
              selectedDate={selectedDate}
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Snackbar
              open={openSnackBar !== null}
              autoHideDuration={6000}
              onClose={handleSnackBarClose}
            >
              <Alert
                severity={openSnackBar && openSnackBar.type}
                elevation={6}
                variant="filled"
              >
                {openSnackBar && openSnackBar.message}
              </Alert>
            </Snackbar>
          </form>
        )}
      />
    </Fragment>
  );
};

export default CalculatorPage;
