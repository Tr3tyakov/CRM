import React from "react";
import "./table.scss";

interface ITable {
  header: any[];
  body: any[];
  cellSpacing?: number;
  title?: String;
}

const Table: React.FC<ITable> = ({ cellSpacing = 0, title, header, body }) => {
  return (
    <table className="table" cellSpacing={cellSpacing} align="center">
      {title && <caption className="table__caption">{title}</caption>}
      <tbody>
        <tr className="table__header">
          {header.map((element, index) => (
            <td className="table__header-title" key={index}>
              {element}
            </td>
          ))}
        </tr>
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
