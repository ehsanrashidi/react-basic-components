import classNames from "classnames";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const handleColors = (props: ButtonProps) => {
    let variant = "";

    if (props.variant === "outline") {
        variant = props.variant ? `-${props.variant}` : "";
        return `btn-outline-${props.color}`;
    } else if (props.variant === "link") return "btn-link";
    else return `btn-${props.color}`;
};

const handleBadge = (props: ButtonProps) => {
    if (props.badge) {
        return `bg-${props.badgeType}`;
    }
    return "";
};

const handleSize = (props: ButtonProps) => (props.size ? `btn-${props.size}` : "");

const classname = (ButtonProps: ButtonProps) => {
    return classNames("btn", handleColors(ButtonProps), handleSize(ButtonProps), {
        disabled: ButtonProps.disabled,
    });
};
export interface ButtonProps {
    className?: string;
    label?: string;
    size?: "sm" | "lg";
    href?: string;
    variant?: "containted" | "outline" | "link";
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    disabled?: boolean;
    badge?: string;
    badgeType?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    onClick?(): void;
}

const Button: React.FC<ButtonProps> = (ButtonProps) => {
    if (ButtonProps.href)
        return (
            <a href={ButtonProps.href} className={classname(ButtonProps)}>
                {ButtonProps.label}
            </a>
        );

    return (
        <button onClick={ButtonProps.onClick} className={classNames(ButtonProps.className, classname(ButtonProps))}>
            <span>{ButtonProps.label}</span>
            {ButtonProps.badge && <span className={classNames("badge ms-2", handleBadge(ButtonProps))}> {ButtonProps.badge}</span>}
        </button>
    );
};

Button.defaultProps = {
    variant: "containted",
    color: "primary",
    disabled: false,
};

export default Button;
