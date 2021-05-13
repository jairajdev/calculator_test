import axios from "axios";
import { product_url, location_url } from "../api/endPoints";

const PRODUCT_LIST = "PRODUCT_LIST";
const LOCATION_LIST = "LOCATION_LIST";
const ADD_SELECTED_LOCATION = "ADD_SELECTED_LOCATION";
const REMOVE_SELECTED_LOCATION = "REMOVE_SELECTED_LOCATION";
const ADD_SELECTED_PRODUCT = "ADD_SELECTED_PRODUCT";
const ADD_SELECTED_DATE = "ADD_SELECTED_DATE";

const headers = {
  "Content-Type": "application/json",
};

const getProductlist = () => (dispatch) => {
  axios
    .get(product_url, { headers })
    .then(function (response) {
      dispatch({
        type: PRODUCT_LIST,
        payload: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getLocationList = () => (dispatch) => {
  axios
    .get(location_url, { headers })
    .then(function (response) {
      dispatch({
        type: LOCATION_LIST,
        payload: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const addSelectedLocation = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: ADD_SELECTED_LOCATION,
    payload: { data },
  });
};

const removeSelectedLocation = (data) => (dispatch) => {
  dispatch({
    type: REMOVE_SELECTED_LOCATION,
    payload: { data },
  });
};

const addSelectedProduct = (data) => (dispatch) => {
  dispatch({
    type: ADD_SELECTED_PRODUCT,
    payload: { data },
  });
};

const addSelectedDate = (data) => (dispatch) => {
  dispatch({
    type: ADD_SELECTED_DATE,
    payload: { data },
  });
};

export {
  PRODUCT_LIST,
  LOCATION_LIST,
  ADD_SELECTED_LOCATION,
  REMOVE_SELECTED_LOCATION,
  ADD_SELECTED_PRODUCT,
  ADD_SELECTED_DATE,
  getProductlist,
  getLocationList,
  addSelectedLocation,
  removeSelectedLocation,
  addSelectedProduct,
  addSelectedDate,
};
