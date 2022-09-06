import React from "react";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import Table from "../../Elements/Table/Table";
import reload from "../../../images/reload.svg";
import filter from "../../../images/filter.svg";
import "./orders.scss";
import ImageContainer from "../../Elements/ImageContainer/ImageContainer";
import Button from "../../theme/buttonTheme";
import Pagination from "../../Elements/Pagination/Pagination";
const table = [
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
  {
    "Номер покупки": 1,
    "Тип покупки": "Покупка снасти",
    "Успешность операции": true,
    Цена: 11000,
    Выбрать: (
      <Checkbox
        checked={false}
        onChange={() => console.log("clicked")}
      ></Checkbox>
    ),
  },
];

const Orders = () => {
  console.log(<Button />, "buttoWithTheme");

  return (
    <div className="table-container">
      <p className="table-container__title">Заказы</p>
      <div className="table__panel-bar">
        <ImageContainer image={reload} alt="reload" />
        <Button theme="white" onClick={() => console.log("click")}>
          Новый заказ
        </Button>
        <ImageContainer image={filter} alt="filter" />
      </div>
      <Table header={Object.keys(table[0])} body={table} />
      <Pagination quantity={6} arrows={true}></Pagination>
    </div>
  );
};
export default Orders;
