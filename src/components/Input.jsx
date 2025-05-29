import { forwardRef } from "react";
const Input = forwardRef( function Input({label, textarea, ...props}, ref) {

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-800 focus:outline-none focus:border-stone-600"
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label className="text-sm font-bold text-sm text-stone-400">
                {label}
            </label>
            {textarea ? (
                <textarea
                    ref={ref}
                    className={classes}
                    {...props}
                />
            ) : (
                <input
                    
                    ref={ref}
                    className={classes}
                    {...props}
                />
            )}
        </div>
    );
});
export default Input;