interface IIconProps {
  variant: "plus" | "magnifyingGlass";
  size?: number;
  className?: string;
}

const Icon: React.FC<IIconProps> = ({ variant, size = 15, className }) => {
  switch (variant) {
    case "plus": {
      return (
        <svg
          className={`search__create-button-icon ${className}`}
          width={size}
          height={size}
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.35968 0.148087V7.86239H0.645386V10.4338H8.35968V18.1481H10.9311V10.4338H18.6454V7.86239H10.9311V0.148087H8.35968Z"
            fill="white"
          />
        </svg>
      );
    }
    case "magnifyingGlass": {
      return (
        <svg
          className="search__icon"
          width="15"
          height="15"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5621 9.81475H9.90372L9.67039 9.58975C10.4871 8.63975 10.9787 7.40642 10.9787 6.06475C10.9787 3.0731 8.55372 0.648096 5.56206 0.648096C2.57039 0.648096 0.145386 3.0731 0.145386 6.06475C0.145386 9.05642 2.57039 11.4814 5.56206 11.4814C6.90372 11.4814 8.13706 10.9897 9.08706 10.1731L9.31206 10.4064V11.0647L13.4787 15.2231L14.7204 13.9814L10.5621 9.81475ZM5.56206 9.81475C3.48706 9.81475 1.81206 8.13975 1.81206 6.06475C1.81206 3.9898 3.48706 2.3148 5.56206 2.3148C7.63706 2.3148 9.31206 3.9898 9.31206 6.06475C9.31206 8.13975 7.63706 9.81475 5.56206 9.81475Z"
            fill="#C2CFE0"
          />
        </svg>
      );
    }
    default:
      return null;
  }
};

export default Icon;
