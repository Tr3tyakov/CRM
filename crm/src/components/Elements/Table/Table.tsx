import React from 'react';
import './table.scss';

interface ITable {
  header: any[];
  body: any[];
  cellSpacing?: number;
  title?: string;
}

const Table: React.FC<ITable> = ({ cellSpacing = 0, title, header, body }) => {
  return (
    <table className="table" cellSpacing={cellSpacing}>
      <thead>
        {title && <caption className="table__caption">{title}</caption>}
        <tr className="table__header">
          {header.map((element, index) => (
            <td key={index} width={index == 1 ? '50%' : ''} className="table__header-title">
              {element}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((currentObject, indexObject) => (
          <tr key={indexObject}>
            {Object.values(currentObject).map((element: any, index) => (
              <td key={index}>{element}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
