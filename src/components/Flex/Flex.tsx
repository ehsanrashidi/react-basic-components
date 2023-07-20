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
    elementName?:string;
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
    elementName = "span",
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
    
    return React.createElement(elementName,{className,style:{...flexStyle}} ,children);
};

export default Flex;
