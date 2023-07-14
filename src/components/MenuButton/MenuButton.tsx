import React, { useEffect, useRef } from "react";
import classNames from "classnames";

export interface IMenuButtonProps {
    options: Array<JSX.Element> | JSX.Element[];
    required?: boolean;
    className?: string;
    placeHolder?: string;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ options, placeHolder, className }: IMenuButtonProps) => {
    const [isFocused, setIsFocused] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState<string | number>();

    React.useEffect(() => {
        setIsFocused(false);
    }, [selectedItem]);

    return (
        <>
            <div className={classNames("dropdown", className)}>
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setIsFocused(!isFocused)}
                >
                    <span>{placeHolder}</span>
                </button>
                <div className={classNames("dropdown-menu", { show: isFocused })}>
                    {options.map((option, index) => (
                        <li onClick={() => setSelectedItem(index)}>{option}</li>
                    ))}
                </div>
            </div>
        </>
    );
};

MenuButton.defaultProps = {
    className: "",
    placeHolder: "",
    required: false,
};

export default MenuButton;
