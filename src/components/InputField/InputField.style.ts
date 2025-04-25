import {InputSize, InputStyle, InputState, InputIconPosition} from "./InputField.types.ts";
import clsx from "clsx";

export function getInputFieldStyle(size: InputSize,
                                   style: InputStyle,
                                   state: InputState,
                                   iconPosition?: InputIconPosition
) {

    const baseClasses = 'w-full px-2 py-2 peer border-1 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400';

    const sizeClasses = {
        sm: 'text-sm h-10',
        md: 'text-md h-11',
        lg: 'text-xl h-13',
    };

    const iconSizeClasses = {
        sm: 14,
        md: 18,
        lg: 22,
    }

    const paddingWithIcon = {
        sm: 'pl-8',
        md: 'pl-10',
        lg: 'pl-12',
    };

    const paddingWithIconRight = {
        sm: 'pr-8',
        md: 'pr-10',
        lg: 'pr-12',
    };

    const styleClasses = {
        primary: 'bg-green-200/10 border-green-500 text-green-950',
        secondary: 'bg-green-200 border-green-500 text-black',
    };

    const hoverClasses = {
        primary: 'hover:border-green-400 hover:bg-green-200/15',
        secondary: 'hover:bg-green-200/90',
    }

    const stateClasses = {
        enabled: clsx('hover:cursor-text opacity-100', hoverClasses[style]),
        disabled: 'opacity-50 cursor-not-allowed',
    };

    const iconPadding = iconPosition === 'left'
        ? paddingWithIcon[size]
        : iconPosition === 'right'
            ? paddingWithIconRight[size]
            : '';


    const inputStyle = clsx(baseClasses, sizeClasses[size], styleClasses[style], stateClasses[state], iconPadding);
    const iconSize = iconSizeClasses[size];

    return {inputStyle, iconSize};
}
