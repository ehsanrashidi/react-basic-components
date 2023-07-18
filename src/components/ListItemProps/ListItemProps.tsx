export default interface ListItemProps {
    className?: string;
    label: string;
    id?: string | number;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    badge?: string;
    badgeType?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}
