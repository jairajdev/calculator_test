import {
  PRODUCT_LIST,
  LOCATION_LIST,
  ADD_SELECTED_LOCATION,
  REMOVE_SELECTED_LOCATION,
  ADD_SELECTED_PRODUCT,
  ADD_SELECTED_DATE,
} from "./action";

const initialState = {
  productList: [],
  locationList: [],
  selectedProduct: null,
  selectedDate: null,
  selectedLocations: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case LOCATION_LIST:
      return {
        ...state,
        locationList: action.payload,
        loading: false,
      };
    case ADD_SELECTED_LOCATION:
      const {
        payload: { data },
      } = action;

      return {
        ...state,
        selectedLocations: [...state.selectedLocations, data],
      };

    case REMOVE_SELECTED_LOCATION:
      const {
        payload: { data: id },
      } = action;

      return {
        ...state,
        selectedLocations: [
          ...state.selectedLocations.filter((value) => value.id !== id),
        ],
      };
    case ADD_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload.data,
      };
    case ADD_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload.data,
      };
    default:
      return initialState;
  }
};

export default reducer;
