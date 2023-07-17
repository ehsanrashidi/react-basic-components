import React, { useState } from "react";
import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Link from "../Link/Link";
import Flex from "../Flex";
import IDropdownOptions from "./IDropDownOption";
import DropdownDivider from "./DropdownDivider";

export interface IDropdownProps {
    options: Array<IDropdownOptions>;
    className?: string;
    placeHolder?: string;
    showSelectedItem?: boolean;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    variant: "containted" | "outline";
    splitButton?: boolean;

    onChange?(selectedOption: IDropdownOptions): void;
}

const Dropdown: React.FC<IDropdownProps> = ({
    options,
    placeHolder,
    className,
    showSelectedItem,
    color,
    variant,
    splitButton,
    onChange,
}: IDropdownProps) => {
    const [isFocused, setIsFocused] = React.useState(true);
    const [selectedOption, setSelectedOption] = useState<IDropdownOptions>();

    React.useEffect(() => {
        setIsFocused(false);
    }, [selectedOption]);

    const ref = useOutsideClick(() => setIsFocused(false));
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleColors = (color: string, variant: string) => (variant === "outline" ? `btn-outline-${color}` : `btn-${color}`);

    return (
        <div ref={ref} className={classNames({ dropdown: !splitButton }, { "btn-group": splitButton }, className)}>
            {!splitButton && (
                <button
                    className={classNames("dropdown-toggle", "btn ", handleColors(color, variant))}
                    onClick={() => setIsFocused(!isFocused)}
                >
                    {showSelectedItem && <span>{selectedOption?.title || placeHolder}</span>}
                    {!showSelectedItem && <span>{placeHolder}</span>}
                </button>
            )}
            {splitButton && (
                <>
                    <div className={classNames("btn ", handleColors(color, variant))}>
                        {showSelectedItem && <span>{selectedOption?.title || placeHolder}</span>}
                        {!showSelectedItem && <span>{placeHolder}</span>}
                    </div>
                    <button
                        ref={buttonRef}
                        type="button"
                        className={classNames("dropdown-toggle dropdown-toggle-split", "btn ", handleColors(color, variant))}
                        onClick={() => setIsFocused(!isFocused)}
                    >
                        <span className="sr-only" />
                    </button>
                </>
            )}

            <div
                className={classNames("dropdown-menu", { show: isFocused })}
                style={{ transform: `translate3d(0px, ${buttonRef.current?.offsetHeight}px, 0px)` }}
            >
                {options.map((option) => (
                    <>
                        {!option.href && (
                            <li
                                className="dropdown-item"
                                onClick={() => {
                                    setSelectedOption(option);
                                    if (onChange) onChange(option);
                                }}
                                role="button"
                            >
                                <Flex justify="space-between" align="center">
                                    {option.title}
                                    <div>{option.icon}</div>
                                </Flex>
                            </li>
                        )}
                        {option.href && (
                            <Link className="dropdown-item" to={option.href}>
                                <Flex justify="space-between" align="center">
                                    {option.title}
                                    <div>{option.icon}</div>
                                </Flex>
                            </Link>
                        )}
                        {option.showDivider && <DropdownDivider />}
                    </>
                ))}
            </div>
        </div>
    );
};

Dropdown.defaultProps = {
    className: "",
    placeHolder: "",
    variant: "containted",
    color: "primary",
};

export default Dropdown;
