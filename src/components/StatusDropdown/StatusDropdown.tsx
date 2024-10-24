import React, { Suspense, useState } from "react";
import "./styles.scss";
import { StatusType } from "../../types";
import { chooseIndicatorColor } from "../../utils/chooseIndicatorColor";
import { checkStatus } from "../../utils/checkStatus";
import Spinner from "../../Spinner/Spinner";
import { splitCamelCase } from "../../utils/splitCamelCase";

const DropdownContent = React.lazy(
  () => import("./components/DropdownContent/DropdownContent")
);

interface IDropdownProps {
  value: string;
  changeFn: (selectedOption: StatusType | null) => void;
  isWithIndicator?: boolean;
  isUnderscored?: boolean;
}

const StatusDropdown: React.FC<IDropdownProps> = ({
  value,
  changeFn,
  isWithIndicator = false,
  isUnderscored = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const statuses = Object.keys(StatusType) as StatusType[];

  const handleToggleOptions = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelectOption = (e: React.MouseEvent) => {
    const selectedElement = e.target as HTMLElement;
    const newValue = selectedElement.dataset.status;
    setIsExpanded(false);
    if (newValue === value) {
      changeFn(null);
      return;
    }
    if (checkStatus(newValue)) {
      changeFn(newValue);
    }
  };

  return (
    <div
      className={`dropdown ${isUnderscored && "dropdown--underscored"}`}
      onClick={handleToggleOptions}
    >
      {isWithIndicator && (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.57143 6.28566C8.57143 7.54803 7.54808 8.57138 6.28571 8.57138V12.5714C9.75722 12.5714 12.5714 9.75717 12.5714 6.28566H8.57143ZM6.28571 8.57138C5.02335 8.57138 4 7.54803 4 6.28566H0C0 9.75717 2.81421 12.5714 6.28571 12.5714V8.57138ZM4 6.28566C4 5.0233 5.02335 3.99995 6.28571 3.99995V-9.53674e-06C2.81421 -9.53674e-06 0 2.81416 0 6.28566H4ZM6.28571 3.99995C7.54808 3.99995 8.57143 5.0233 8.57143 6.28566H12.5714C12.5714 2.81416 9.75722 -9.53674e-06 6.28571 -9.53674e-06V3.99995Z"
            fill={chooseIndicatorColor(value)}
          />
        </svg>
      )}
      <button className="dropdown__button">{splitCamelCase(value)}</button>
      <svg
        className={`dropdown__chevron ${
          isExpanded && "dropdown__chevron--expanded"
        }`}
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.14537 6.14809L0.516171 0.898087H11.7745L6.14537 6.14809Z"
          fill="#AEAEAE"
        />
      </svg>
      {isExpanded && (
        <Suspense fallback={<Spinner />}>
          <DropdownContent
            statuses={statuses}
            handleSelectOption={handleSelectOption}
          />
        </Suspense>
      )}
    </div>
  );
};

export default StatusDropdown;
