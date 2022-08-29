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
    <table className="table" cellSpacing={cellSpacing}>
      {title && <caption className="table__caption">{title}</caption>}
      <tr>
        {header.map((element) => (
          <td>{element}</td>
        ))}
      </tr>
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
