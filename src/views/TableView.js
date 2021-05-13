import React, { useState, useEffect } from "react";
import {
  Table as MeterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeSelectedLocation } from "../redux/action";

import { theme } from "../styles";

const TableView = ({ selectedDate, selectedProduct, selectedLocations }) => {
  const classes = theme();
  const { table } = classes;
  const [totalUnit, setTotalUnit] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    let cost = 0;
    let unit = 0;
    selectedProduct &&
      selectedLocations.map((location) => {
        cost +=
          location.fee + selectedProduct.price_per_unit * location.max_dist;
        unit += location.max_dist;

        return false;
      });

    setTotalUnit(unit);
    setTotalCost(cost);
  }, [selectedProduct, selectedDate, selectedLocations]);

  return (
    <TableContainer className={table} component={Paper}>
      <MeterialTable size="small">
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell align="right">Units</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedLocations &&
            selectedLocations.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.name}</TableCell>
                <TableCell align="right">{location.max_dist}</TableCell>

                <TableCell align="right">
                  {selectedProduct &&
                    location.fee +
                      selectedProduct.price_per_unit * location.max_dist}
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="primary"
                    onClick={() =>
                      dispatch(removeSelectedLocation(location.id))
                    }
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Total Unit</b>
            </TableCell>
            <TableCell align="right">
              <i>{totalUnit}</i>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Total Cost</b>
            </TableCell>
            <TableCell align="right">
              <i>{totalCost}</i>
            </TableCell>
          </TableRow>
        </TableBody>
      </MeterialTable>
    </TableContainer>
  );
};

export default TableView;
