import React from "react";

export interface FlexProps {
    direction?: "row" | "column";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    basis?: number | string;
    grow?: number;
    shrink?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    gap?: number;
}

const Flex: React.FC<FlexProps> = ({
    direction = "row",
    justify = "flex-start",
    align = "stretch",
    wrap = "nowrap",
    basis,
    grow,
    shrink,
    className,
    style,
    children,
    gap = 0,
}) => {
    const flexStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        gap: `${gap}rem`,
        ...style,
    };

    return (
        <div className={className} style={flexStyle}>
            {children}
        </div>
    );
};

export default Flex;
