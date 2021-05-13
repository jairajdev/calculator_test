import React from "react";
import TableView from "../views/TableView";

const Table = ({ selectedProduct, selectedDate, selectedLocations }) => {
  return (
    <TableView
      selectedProduct={selectedProduct}
      selectedDate={selectedDate}
      selectedLocations={selectedLocations}
    />
  );
};

export default Table;
