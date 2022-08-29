import React from "react";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import Table from "../../Elements/Table/Table";
import "./orders.scss";

const table = [
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
  { "№": 1, type: "buy", Successful: true, price: 11000 },
];

const Orders = () => {
  return (
    <div className="table-container">
      <Table
        title={"Заказы"}
        header={Object.keys(table[0])}
        body={table}
      ></Table>
    </div>
  );
};
export default Orders;
