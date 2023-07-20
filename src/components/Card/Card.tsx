import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardLinks from "./CardLink";
import Image, { ImageProps } from "../Image/Image";
import Flex from "../Flex/Flex";

export interface CardProps {
    className?: string;
    title?: string;
    description?: string;
    image?:ImageProps,
    width:number,
    links?: Array<CardLinks>;
}

const Card: React.FC<CardProps> = (CardProps) => {
    return <div className="card" style={{width: `${CardProps.width}rem`}}>
            {CardProps.image?.src && <Image src={CardProps.image.src} alt={CardProps.image.alt} className="card-img-top" />}
            <div className="card-body">
                {CardProps.title && <h5 className="card-title">{CardProps.title}</h5>}
                {CardProps.description && <p className="card-text">{CardProps.description}</p>}
                <Flex gap={0.5}> {CardProps.links?.map(x=><a href={x.to}>{x.label}</a>)}</Flex>
            </div>
        </div>;
};

Card.defaultProps = {
    width:18
};

export default Card;
