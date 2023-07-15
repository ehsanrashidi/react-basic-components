import React from "react";

export const useOutsideClick = (callback: () => void) => {
    const ref = React.createRef<HTMLInputElement>();

    React.useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Element)) {
                callback();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [ref]);

    return ref;
};
