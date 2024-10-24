import { StatusType } from "../../../../types";
import { splitCamelCase } from "../../../../utils/splitCamelCase";

interface IDropdownContentProps {
  statuses: StatusType[];
  handleSelectOption: (e: React.MouseEvent) => void;
}

const DropdownContent: React.FC<IDropdownContentProps> = ({
  statuses,
  handleSelectOption,
}) => {
  return (
    <ul className="dropdown__options-list">
      {statuses &&
        statuses.map((status: StatusType) => {
          return (
            <li
              key={status}
              className="dropdown__option"
              onClick={handleSelectOption}
              data-status={status}
            >
              {splitCamelCase(status)}
            </li>
          );
        })}
    </ul>
  );
};

export default DropdownContent;
