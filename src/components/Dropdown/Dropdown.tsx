import React, { useState } from "react";
import classNames from "classnames";
import Link from "../Link/Link";
import Flex from "../Flex";
import DropdownDivider from "./DropdownDivider";
import IDropdownOptions from "./IDropdownOption";
import SvgCheck from "../../assets/icons/Check";
import { useOutsideClick } from "../../hooks";

export interface IDropdownProps {
    options: Array<IDropdownOptions>;
    className?: string;
    placeHolder?: string;
    selectable: boolean;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    variant: "containted" | "outline";
    splitButton?: boolean;
    size?: "sm" | "lg";
    onChange?(selectedOption: IDropdownOptions): void;
}

const renderRow = (selectable: boolean, option: IDropdownOptions, selectedOption?: IDropdownOptions) => {
    return (
        <Flex justify="space-between" align="center">
            <Flex justify="flex-start" align="center" gap={0.5}>
                <div style={option.disabled ? { opacity: 0.3 } : {}}>{option.icon}</div> {option.title}
            </Flex>
            {selectable && option.id == selectedOption?.id && (
                <div>
                    <SvgCheck />
                </div>
            )}
        </Flex>
    );
};

const Dropdown: React.FC<IDropdownProps> = ({
    options,
    placeHolder,
    className,
    selectable,
    color,
    variant,
    splitButton,
    size,
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
    const handleSize = (size?: string) => (size ? `btn-${size}` : "");
    return (
        <div ref={ref} className={classNames({ dropdown: !splitButton }, { "btn-group": splitButton }, className)}>
            {!splitButton && (
                <button
                    className={classNames("dropdown-toggle", "btn ", handleColors(color, variant), handleSize(size))}
                    onClick={() => setIsFocused(!isFocused)}
                >
                    {selectable && <span>{selectedOption?.title || placeHolder}</span>}
                    {!selectable && <span>{placeHolder}</span>}
                </button>
            )}
            {splitButton && (
                <>
                    <div className={classNames("btn ", handleColors(color, variant))}>
                        {selectable && <span>{selectedOption?.title || placeHolder}</span>}
                        {!selectable && <span>{placeHolder}</span>}
                    </div>
                    <button
                        ref={buttonRef}
                        type="button"
                        className={classNames(
                            "dropdown-toggle dropdown-toggle-split",
                            "btn ",
                            handleColors(color, variant),
                            handleSize(size)
                        )}
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
                                className={classNames("dropdown-item", { disabled: option.disabled })}
                                onClick={() => {
                                    setSelectedOption(option);
                                    if (onChange) onChange(option);
                                }}
                                role="button"
                            >
                                {renderRow(selectable, option, selectedOption)}
                            </li>
                        )}
                        {option.href && (
                            <Link className={classNames("dropdown-item", { disabled: option.disabled })} to={option.href}>
                                {renderRow(selectable, option, selectedOption)}
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
    selectable: false,
};

export default Dropdown;
