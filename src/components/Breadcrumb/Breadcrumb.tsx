import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface BreadcrumbItemProps {
    label?: string;
    href?: string;
    active?: boolean;
}

export interface BreadcrumbProps {
    className?: string;
    list?: Array<BreadcrumbItemProps>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (BreadcrumbProps) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {BreadcrumbProps.list?.map((x) => (
                <li className={["breadcrumb-item", BreadcrumbProps.className, x.active ? "active" : ""].join(" ")}>
                    <a href={x.href}>{x.label}</a>
                </li>
            ))}
        </ol>
    </nav>
);

Breadcrumb.defaultProps = {
    
}

export default Breadcrumb;
