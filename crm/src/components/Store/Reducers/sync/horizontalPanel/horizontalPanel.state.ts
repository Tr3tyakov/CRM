import { IHorizontalPanel } from './horizontalPanel..interfaces';

export const initialState: IHorizontalPanel = {
  panels: [
    { title: 'Пользователи', quantity: 0, checked: true },
    { title: 'Заказы', quantity: 0, checked: true },
    { title: 'Прибыль', quantity: 0, checked: true },
    { title: 'Сообщения', quantity: 0, checked: true },
  ],
  active: true,
};
