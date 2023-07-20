import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export interface CardLinkProps {
    label: string;
    to: string;
}

const CardLink: React.FC<CardLinkProps> = (CardLinkProps) => {
    return (
        <a href={CardLinkProps.to} className="card-link">
            {CardLinkProps.label}
        </a>
    );
};

export default CardLink;
