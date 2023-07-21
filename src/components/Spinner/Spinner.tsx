import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flex from "../Flex";

export interface SpinnerProps {
    className?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    type: "border" | "grow" | undefined;
    small: boolean;
}

const Spinner: React.FC<SpinnerProps> = (SpinnerProps) => {
    return (
        <div
            className={[
                `spinner-${SpinnerProps.type}`,
                `text-${SpinnerProps.color}`,
                SpinnerProps.className,
                SpinnerProps.small ? `spinner-${SpinnerProps.type || "border"}-sm` : "",
            ].join(" ")}
            role="status"
        />
    );
};
Spinner.defaultProps = {
    color: "primary",
    type: "border",
    small: false,
};
export default Spinner;
