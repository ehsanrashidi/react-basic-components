export default interface IDropdownOptions {
    id: string | number;
    title: string | number | Array<JSX.Element> | JSX.Element[];
    showDivider?: boolean;
    href?: string;
    icon?: JSX.Element;
    disabled?: boolean;
}
