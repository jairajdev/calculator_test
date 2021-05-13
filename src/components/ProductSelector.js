import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedProduct } from "../redux/action";

const ProductSelector = ({
  classes: { formControl },
  formik: {
    values: { product: selectedProduct },
    touched: { product: touchedElement },
    errors,
    errors: { product: errorsElement },
    setFieldValue,
  },
}) => {
  const { productList } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <FormControl
      className={formControl}
      error={
        (touchedElement && errorsElement) || (errors && errorsElement)
          ? true
          : false
      }
    >
      <InputLabel id="product-label">Select Product</InputLabel>
      <Select
        labelId="product-label"
        id="product"
        name="product"
        value={selectedProduct}
        onChange={({ target: { value } }) => {
          setFieldValue("product", value);
          dispatch(
            addSelectedProduct(
              productList.filter((product) => product.id === value)[0]
            )
          );
        }}
      >
        {productList &&
          productList.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>
        {errors && errorsElement ? errorsElement : null}
      </FormHelperText>
    </FormControl>
  );
};

export default ProductSelector;
