import classNames from "classnames";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flex from "../Flex";
import Spinner from "../Spinner";

const handleColors = (props: ButtonProps) => {
    if (props.variant === "outline") return `btn-outline-${props.color}`;
    else if (props.variant === "link") return "btn-link";
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
    loadingColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    disabled?: boolean;
    badge?: string;
    badgeType?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    loading?: boolean;
    loadingType?: "border" | "grow" | undefined;
    onClick?(): void;
}

const Button: React.FC<ButtonProps> = (ButtonProps) => {
    if (ButtonProps.href)
        return (
            <a href={ButtonProps.href} className={classname(ButtonProps)}>
                <Flex align="center" gap={0.5}>
                    {ButtonProps.loading && (
                        <Spinner
                            small={ButtonProps.size != "lg"}
                            color={ButtonProps.loadingColor}
                            type={ButtonProps.loadingType || "border"}
                        />
                    )}

                    {ButtonProps.label}
                </Flex>
            </a>
        );

    return (
        <button onClick={ButtonProps.onClick} className={classNames(ButtonProps.className, classname(ButtonProps))}>
            {ButtonProps.loading && (
                <Spinner
                    className="me-2"
                    small={ButtonProps.size != "lg"}
                    color={ButtonProps.loadingColor}
                    type={ButtonProps.loadingType}
                />
            )}

            <span>{ButtonProps.label}</span>
            {ButtonProps.badge && <span className={classNames("badge ms-2", handleBadge(ButtonProps))}> {ButtonProps.badge}</span>}
        </button>
    );
};

Button.defaultProps = {
    variant: "containted",
    color: "primary",
    disabled: false,
    loading: false,
    loadingColor: "light",
    loadingType: "border",
};

export default Button;
