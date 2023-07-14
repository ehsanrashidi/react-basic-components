import React, { Children } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

export interface ButtonGroupProps {
    children: string | JSX.Element | JSX.Element[];
    ariaLabel?: string;
    size?: "sm" | "lg";
}

const handleSize = (size: string) => {
    return size && `btn-group-${size}`;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ariaLabel, size }: ButtonGroupProps) => {
    return (
        <div className={classNames("btn-group", handleSize(size as string))} role="group" aria-label={ariaLabel}>
            {children}
        </div>
    );
};

export default ButtonGroup;
