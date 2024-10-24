import React, { useContext } from "react";
import StatusDropdown from "../StatusDropdown/StatusDropdown";
import { MutationContext } from "../../context/MutationContext";

import { checkStatus } from "../../utils/checkStatus";
import { IEmployee } from "../../types";
import "./styles.scss";

interface ICardProps {
  employee: IEmployee;
}

const Card: React.FC<ICardProps> = ({ employee }) => {
  const mutate = useContext(MutationContext);
  const { id, name, status, img } = employee;

  const handleChangeStatus = (newStatus: string | null) => {
    if (mutate && checkStatus(newStatus) && newStatus !== status) {
      mutate({ id, status: newStatus });
    }
  };

  return (
    <div key={id} className="card">
      <div className="card__photo-container">
        <img
          className={`card__photo`}
          src={img}
          alt={`${name}'s photo`}
          loading="lazy"
        />
      </div>
      <div className="card__info">
        <h3 className="card__name">{name}</h3>
        <StatusDropdown
          value={status}
          changeFn={handleChangeStatus}
          isWithIndicator
          isUnderscored
        />
      </div>
    </div>
  );
};

export default Card;
