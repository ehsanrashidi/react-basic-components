import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Image, { ImageProps } from "../Image/Image";

export interface CardProps {
    className?: string;
    title?: string;
    body?: JSX.Element | string;
    image?: ImageProps;
    width: number;
    header: string;
    footer?: JSX.Element | string;
    links?: JSX.Element;
}

const Card: React.FC<CardProps> = (CardProps) => {
    return (
        <div className="card" style={{ width: `${CardProps.width}rem` }}>
            {CardProps.header && <div className="card-header">{CardProps.header}</div>}
            {CardProps.image?.src && <Image src={CardProps.image.src} alt={CardProps.image.alt} className="card-img-top" />}
            <div className="card-body">
                {CardProps.title && <h5 className="card-title">{CardProps.title}</h5>}
                {CardProps.body && <p className="card-text">{CardProps.body}</p>}
                {CardProps.links}
            </div>
            {CardProps.footer && <div className="card-footer">{CardProps.footer}</div>}
        </div>
    );
};

Card.defaultProps = {
    width: 18,
};

export default Card;
