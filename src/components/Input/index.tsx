import {
    ForwardRefRenderFunction,
    InputHTMLAttributes,
    forwardRef,
} from 'react';

import { FieldError } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    addClassName?: string;
    labelClassName?: string;
    className?: string;
    disabledInput?: boolean;
    error?: FieldError;
    label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
    {
        error = null,
        addClassName = '',
        labelClassName = 'block text-xs text-slate-600 mb-1 font-normal font-roboto',
        className = `
        min-w-full
        p-2
        outline-none
        text-slate-600
        bg-white
        border-[1px]
        border-slate-400
        shadow-xl
        rounded-md
        focus:border-theme-blue-50
        focus:border-[1px]
    `,

        type = 'text',
        label,
        disabled,
        disabledInput = disabled ? 'bg-slate-300' : '',
        onBlur,
        onFocus,
        ...rest
    },
    ref
) => {
    return (
        <label className={`w-full max-h-fit ${addClassName}`}>
            {label && <span className={`${labelClassName}`}>{label}</span>}
            <input
                className={`${className} ${disabledInput}`}
                type={type}
                disabled={disabled}
                onBlur={onBlur}
                onFocus={onFocus}
                ref={ref}
                {...rest}
            />
            {error?.message ? (
                <span className="text-xs text-red-400">{error.message}</span>
            ) : null}
        </label>
    );
};

export const Input = forwardRef(InputBase);
