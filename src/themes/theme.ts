export const theme = {
    accordion: {
        defaultProps: {
            icon: undefined,
            className: "",
            animate: {
                unmount: {},
                mount: {},
            },
            disabled: false,
        },
        styles: {
            base: {
                container: {
                    display: "block",
                    width: "w-full",
                    margin: "mt-4"
                },
                header: {
                    initial: {
                        display: "flex",
                        justifyContent: "justify-between",
                        alignItems: "items-center",
                        width: "w-full",
                        py: "pb-4",
                        borderWidth: "border-b border-b-blue-gray-100",
                        color: "text-black",
                        fontSmoothing: "antialiased",
                        fontFamily: "font-sans",
                        fontSize: "text-xl",
                        textAlign: "text-left",
                        fontWeight: "font-semibold",
                        lineHeight: "leading-snug",
                        userSelect: "select-none",
                        hover: "hover:text-red-300",
                        transition: "transition-colors",
                    },
                    active: { color: "text-blue-gray-900" },
                    icon: {
                        ml: "ml-4",
                    },
                },
                body: {
                    display: "block",
                    width: "w-full",
                    py: "py-2 ps-4",
                    color: "text-black",
                    fontSmoothing: "",
                    fontFamily: "",
                    fontSize: "text-sx",
                    fontWeight: "font-base",
                    lineHeight: "leading-normal",
                    flex: "flex flex-row gap-2",
                    hover: "hover:bg-gray-400",
                    rounded: "rounded-lg",
                    margin: "mt-2"
                },
                disabled: {
                    pointerEvents: "pointer-events-none",
                    opacity: "opacity-50",
                },
            },
        },
    },
    collapse: {
        defaultProps: {
            animate: {
                unmount: {
                    maxWidth: "540px",
                    minWidth: "540px",
                    width: "540px"
                },
                mount: {
                    maxWidth: "540px",
                    minWidth: "540px",
                    width: "540px"
                },
            },
            className: "",
        },
        styles: {
            base: {
                display: "block",
                width: "w-full",
                basis: "basis-full",
                overflow: "overflow-hidden",
            },
        },
    },
    menu: {
        defaultProps: {
            placement: "bottom",
            offset: 5,
            dismiss: {
                itemPress: true
            },
            lockScroll: false,
        },
        styles: {
            base: {
                menu: {
                    bg: "bg-white",
                    minWidth: "min-w-[180px]",
                    p: "p-3",
                    border: "border border-blue-gray-50",
                    borderRadius: "rounded-md",
                    boxShadow: "shadow-lg shadow-blue-gray-500/10",
                    fontFamily: "font-sans",
                    fontSize: "text-sm",
                    fontWeight: "font-base",
                    color: "text-black",
                    overflow: "overflow-auto",
                    outline: "focus:outline-none",
                    zIndex: "z-[999]",
                },
                item: {
                    initial: {
                        display: "block",
                        width: "w-full",
                        pt: "pt-[9px]",
                        pb: "pb-2",
                        px: "px-3",
                        borderRadius: "rounded-md",
                        textAlign: "text-start",
                        lightHeight: "leading-tight",
                        cursor: "cursor-pointer",
                        userSelect: "select-none",
                        transition: "transition-all",
                        bg: "hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80",
                        color: "hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900",
                        outline: "outline-none",
                    },
                    disabled: {
                        opacity: "opacity-50",
                        cursor: "cursor-not-allowed",
                        pointerEvents: "pointer-events-none",
                        userSelect: "select-none",
                        bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
                        color: "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
                    },
                },
            },
        },
    },
}