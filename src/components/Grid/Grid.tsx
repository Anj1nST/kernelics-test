import React from "react";
import { IEmployee } from "../../types";

import "./styles.scss";
import Card from "../Card/Card";

interface IGridProps {
  employees?: IEmployee[];
}
const Grid: React.FC<IGridProps> = ({ employees }) => {
  return (
    <div className="employees">
      {!!employees?.length &&
        employees.map((employee: IEmployee) => (
          <Card key={employee.id} employee={employee} />
        ))}
    </div>
  );
};

export default Grid;
