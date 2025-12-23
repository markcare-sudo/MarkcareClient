import { Badge } from "lucide-react";

export const Card = ({ className = "", children }) => (
    <div className={`rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm ${className}`}>{children}</div>
);
export const CardHeader = ({ className = "", children }) => <div className={`p-4 pb-0 ${className}`}>{children}</div>;
export const CardTitle = ({ className = "", children }) => <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
export const CardContent = ({ className = "", children }) => <div className={`p-4 pt-3 ${className}`}>{children}</div>;



export const SectionHeader = ({ kicker, title, subtitle }) => (
    <div className="max-w-2xl">
        {kicker && <Badge>{kicker}</Badge>}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
);

export const Button = ({ variant = "solid", className = "", children, ...props }) => {
    const base =
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:opacity-50";
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
