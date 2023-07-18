import React, { useState } from "react";
import ListItemProps from "../ListItemProps/ListItemProps";
import Flex from "../Flex";
import Badge from "../Badge";

export interface ListProps {
    className?: string;
    items: Array<ListItemProps>;
    onSelected?(arg: ListItemProps): void;
}

const classname = (ListItemProps: ListItemProps) => "list-group-item-" + ListItemProps.type;

const List: React.FC<ListProps> = ({ className, items, onSelected }) => {
    const [selectedItem, setSelectedItem] = useState<ListItemProps>();

    return (
        <ul className={["list-group", className].join(" ")}>
            {items.map((x) => (
                <li
                    key={x.id}
                    role="button"
                    className={[x.className, "list-group-item", classname(x), selectedItem == x ? "active" : ""].join(" ")}
                    onClick={() => {
                        if (onSelected) onSelected(x);
                        setSelectedItem(x);
                    }}
                >
                    <Flex justify="space-between">
                        {x.label}
                        {x.badge && <Badge key={x.id} type={x.badgeType} label={x.badge} />}
                    </Flex>
                </li>
            ))}
        </ul>
    );
};

export default List;
