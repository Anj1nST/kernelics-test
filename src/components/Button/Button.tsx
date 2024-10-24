import React from "react";
import "./styles.scss";

interface IButtonProps {
  text: string;
  size?: "sm" | "lg";
  icon?: React.ReactElement;
  variant?: "outlined" | "filled";
  onClick: () => void;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  text,
  size = "sm",
  icon,
  variant = "filled",
  onClick,
  className,
}) => {
  return (
    <button
      className={`button button--${size} button--${variant} ${className}`}
      onClick={onClick}
    >
      <p>{text}</p>
      {icon}
    </button>
  );
};

export default Button;
