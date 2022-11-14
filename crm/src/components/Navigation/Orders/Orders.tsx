import React from 'react';
import Checkbox from '../../Elements/Checkbox/Checkbox';
import Table from '../../Elements/Table/Table';
import reload from '../../../images/reload.svg';
import filter from '../../../images/filter.svg';
import './orders.scss';
import ImageContainer from '../../Elements/ImageContainer/ImageContainer';
import Button from '../../theme/buttonTheme';
import Pagination from '../../Elements/Pagination/Pagination';
import ContainerLayouts from '../../layouts/ContainerLayout';

const table = [
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
  {
    '№': 1,
    'Тип покупки': 'Покупка снасти',
    'Успешность операции': true,
    Цена: 11000,
    Выбрать: <Checkbox checked={false} onChange={() => console.log('clicked')}></Checkbox>,
  },
];

const Orders = () => {
  return (
    <ContainerLayouts>
      <p className="table__title">Заказы</p>
      <div className="table__bar">
        <ImageContainer image={reload} alt="reload" />
        <Button theme="white" onClick={() => console.log('click')}>
          Новый заказ
        </Button>
        <ImageContainer image={filter} alt="filter" />
      </div>
      <Table header={Object.keys(table[0])} body={table} />
      <Pagination quantity={6} arrows={true}></Pagination>
    </ContainerLayouts>
  );
};
export default Orders;
