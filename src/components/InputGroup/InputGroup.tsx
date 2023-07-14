import classNames from "classnames";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface InputGroupProps {
    children: string | JSX.Element | JSX.Element[];
    className?: string;
}

const InputGroup: React.FC<InputGroupProps> = (InputGroupProps) => {
    return <div className={classNames("input-group", InputGroupProps.className)}>{InputGroupProps.children}</div>;
};
export default InputGroup;
