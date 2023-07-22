import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const classname = (BadgeProps: BadgeProps) => `bg-${BadgeProps.type}`;
export interface BadgeProps {
    className?: string;
    label?: string;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

const Badge: React.FC<BadgeProps> = (BadgeProps) => {
    return <span className={[BadgeProps.className, "badge", classname(BadgeProps)].join(" ")}>{BadgeProps.label}</span>;
};
Badge.defaultProps = {
    type: "primary",
};
export default Badge;
