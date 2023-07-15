import React, { ReactNode } from "react";

export interface LinkProps {
    to: string;
    className?: string;
    children: ReactNode;
}

const Link: React.FC<LinkProps> = (LinkProps) => {
    return (
        <a href={LinkProps.to} className={LinkProps.className}>
            {LinkProps.children}
        </a>
    );
};

export default Link;
