import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent = ({ label, className = "", onClick }) => {
  return (
    <Button
      variant="outlined"
      className={`calc-btn ${className}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
