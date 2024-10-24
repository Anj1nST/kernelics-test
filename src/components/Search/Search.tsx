import { StatusType } from "../../types";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import StatusDropdown from "../StatusDropdown/StatusDropdown";
import "./styles.scss";

interface ISearchProps {
  value: string;
  setValue: React.Dispatch<string>;
  filter: null | StatusType;
  setFilter: React.Dispatch<null | StatusType>;
}
const Search: React.FC<ISearchProps> = ({
  value,
  setValue,
  filter,
  setFilter,
}) => {
  const handleCreateEmployee = () => {};

  const handleChangeInputValue = (e: React.ChangeEvent) => {
    const inputElement = e.target as HTMLInputElement;
    setValue(inputElement.value);
  };

  const handleChangeFilter = (status: StatusType | null) => {
    setFilter(status);
  };

  return (
    <div className="search">
      <Button
        text="Create"
        size="lg"
        variant="filled"
        icon={<Icon variant="plus" />}
        onClick={handleCreateEmployee}
        className="search__button--fullwidth"
      />
      <div className="search__input">
        <Icon className="search__icon" variant="magnifyingGlass" />
        <input
          className="search__input-field"
          type="text"
          placeholder="Type to search"
          value={value}
          onChange={handleChangeInputValue}
        />
        <div className="search__divider"></div>
        <StatusDropdown value={filter || "Filter by status"} changeFn={handleChangeFilter} />
      </div>
    </div>
  );
};

export default Search;
