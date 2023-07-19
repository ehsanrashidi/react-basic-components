import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface ProgressProps {
    className?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    value: number;
    showValue?: boolean;
    height: string;
    striped: boolean;
    animated: boolean;
}

const Progress: React.FC<ProgressProps> = (ProgressProps) => {
    return (
        <div className="progress" style={ProgressProps.height ? { height: `${ProgressProps.height}px` } : {}}>
            <div
                className={[
                    "progress-bar",
                    `bg-${ProgressProps.color}`,
                    ProgressProps.striped ? "progress-bar-striped" : "",
                    ProgressProps.animated ? "progress-bar-animated" : "",
                ].join(" ")}
                role="progressbar"
                style={{ width: `${ProgressProps.value}%` }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {ProgressProps.showValue && `${ProgressProps.value}%`}
            </div>
        </div>
    );
};
Progress.defaultProps = {
    color: "primary",
    showValue: false,
    height: "",
    striped: false,
    animated: false,
};
export default Progress;
