import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface ButtonIProps {
  children?: React.ReactNode;
  type?: any;
  onClick?: any;
}

function Button(props: ButtonIProps) {
  const { children, onClick, type } = props;
  const classProps = classNames("button");

  return (
    <button className={classProps} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
