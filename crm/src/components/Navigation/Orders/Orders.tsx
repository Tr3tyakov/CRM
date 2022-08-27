import React from "react";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import "./orders.scss";

const table = [
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
  { "№": 1, type: "buy", Date: new Date(), Successful: true, price: 11000 },
];

function Orders() {
  return (
    <div className="table-container">
      <table className="table" cellSpacing={"0px"}>
        <caption className="table__caption">Заказы</caption>
        <tr>
          <td>№</td>
          <td>Тип</td>
          <td>Стоимость</td>
          <td>Date покупки</td>
          <td>Успешность</td>
        </tr>
        {table.map((element) => {
          return (
            <tr>
              <td>{element["№"]}</td>
              <td>{element.type}</td>
              <td>{element.price}</td>
              <td>{element.Date.toDateString()}</td>
              <td>{element.Successful}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Orders;
