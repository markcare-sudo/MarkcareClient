const Button = ({ variant = "solid", className = "", children, ...props }) => {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:opacity-50";
    const styles =
        variant === "outline"
            ? "bg-white ring-1 ring-red-300 text-red-700 hover:bg-red-50"
            : variant === "ghost"
                ? "bg-transparent text-red-700 hover:bg-red-50"
                : "bg-red-700 text-white hover:bg-red-800";
    return (
        <button {...props} className={`${base} ${styles} ${className}`}>
            {children}
        </button>
    );
};

export default Button;