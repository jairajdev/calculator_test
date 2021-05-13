import React, { useState, useEffect } from "react";
import * as moment from "moment";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProductlist, getLocationList } from "../redux/action";
import CalculatorPage from "../views/CalculatorPage";
import { cart_url } from "../api/endPoints";

const CalculatorComponent = () => {
  const [openMap, setOpenMap] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(null);

  const handleMap = () => {
    if (openMap) {
      setOpenMap(false);
    } else {
      setOpenMap(true);
    }
  };

  const handleSnackBarOpen = (data) => {
    console.log(data);
    setOpenSnackBar(data);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(null);
  };

  const { productList, selectedProduct, selectedDate, selectedLocations } =
    useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductlist());
  }, []);

  useEffect(() => {
    dispatch(getLocationList());
  }, []);

  const getInitialValue = () => {
    return selectedProduct && selectedDate
      ? { product: selectedProduct.id, date: moment(selectedDate) }
      : selectedProduct
      ? { product: selectedProduct.id, date: moment().add(1, "days") }
      : { product: "", date: moment().add(1, "days") };
  };

  const handleSubmit = async () => {
    if (selectedDate || selectedProduct || selectedLocations.length > 0) {
      const data = {
        date: moment(selectedDate).format("YYYY-MM-DD"),
        product: parseInt(selectedProduct.id),
        locations: selectedLocations.map(({ id, max_dist }) => ({
          id: parseInt(id),
          quantity: max_dist,
        })),
      };
      let result = await axios({
        method: "post",
        url: cart_url,
        data: data,
      });

      const { status } = result;
      if (status === 200 || status === 201) {
        alert("Successfully Submitted!");
        handleSnackBarOpen({
          type: "success",
          message: "Successfully Submitted!",
        });
      } else {
        handleSnackBarOpen({ type: "error", message: "Submit Fail!" });
        alert("Submit Fail!");
      }
    } else {
      handleSnackBarOpen({
        type: "error",
        message: "Select Product,Date and Location First!",
      });
      alert("Select Product,Date and Location First!");
    }
  };

  return productList ? (
    <CalculatorPage
      getInitialValue={getInitialValue}
      selectedLocations={selectedLocations}
      selectedProduct={selectedProduct}
      selectedDate={selectedDate}
      openMap={openMap}
      handleMap={handleMap}
      handleSubmit={handleSubmit}
      openSnackBar={openSnackBar}
      handleSnackBarClose={handleSnackBarClose}
    />
  ) : null;
};

export default CalculatorComponent;
