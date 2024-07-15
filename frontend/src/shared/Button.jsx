import { forwardRef } from "react";

const Button = forwardRef(
  (
    { onClick, varient, disabled, type = "button", className, children },
    ref
  ) => {
    return (
      <button
        className={` px-4 text-lg py-2 w-fit flex items-center justify-center gap-x-2 rounded-sm shadow-[#63c4f13e_0px_8px_24px] ${
          varient === "primary"
            ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
            : "bg-zinc-100 text-zinc-900"
        } ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;

// bg-gradient-to-r from-teal-400 to-gray-800