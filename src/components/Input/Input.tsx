import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

const classname = (InputProps: InputProps) => {
    let className = "";

    if (InputProps.border) className += `border-${InputProps.border}`;
    return className;
};

export interface InputProps {
    className?: string;
    value?: string;
    placeHolder?: string;
    border?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    icon?: string | JSX.Element | JSX.Element[];
    type?:
        | "text"
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "time"
        | "url"
        | "week";
}

const Input: React.FC<InputProps> = (InputProps) => {
    if (InputProps.icon)
        return (
            <div className={classNames("input-group", InputProps.className)}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <div>{InputProps.icon}</div>
                    </div>
                </div>
                <input
                    type={InputProps.type}
                    className={classNames("form-control ", classname(InputProps))}
                    placeholder={InputProps.placeHolder}
                    value={InputProps.value}
                />
            </div>
        );
    return (
        <input
            type={InputProps.type}
            className={classNames(InputProps.className, "form-control ", classname(InputProps))}
            placeholder={InputProps.placeHolder}
            value={InputProps.value}
        />
    );
};

Input.defaultProps = {
    type: "text",
};
export default Input;
