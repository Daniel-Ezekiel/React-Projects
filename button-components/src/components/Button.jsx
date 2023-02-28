const Button = ({
  variant,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  size,
  color,
  value,
}) => {
  return (
    <button
      className={`${variant ? variant : ""}${
        disableShadow ? disableShadow : ""
      }${size ? size : ""}${color ? color : ""}`}
      type="button"
      disabled={disabled}
    >
      {startIcon && <i>{startIcon}</i>}

      <span>{value}</span>

      {endIcon && <i>{endIcon}</i>}
    </button>
  );
};

export default Button;
