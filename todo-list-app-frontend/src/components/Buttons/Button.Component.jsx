import "./Button.Component.css";

const DefaultButtons = ({
  buttonText,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  useDefaultClass = true,
}) => {
  const buttonClassName = useDefaultClass
    ? `default-button ${className}`.trim()
    : className;

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default DefaultButtons;
