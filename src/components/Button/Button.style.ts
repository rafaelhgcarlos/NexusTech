import {ButtonSize, ButtonStyle, ButtonState} from "./Button.types.ts";
import clsx from "clsx";

export default function getButtonStyle(
    size: ButtonSize,
    style: ButtonStyle,
    state: ButtonState
){
    const baseClasses = 'w-auto flex justify-center items-center transition-all rounded-md';

    const sizeClasses = {
        sm:'px-3 py-2 gap-1 text-sm',
        md:'px-3 py-2 gap-1 text-base',
        lg:'px-4 py-4 gap-2 text-lg',
        xl:'px-5 py-4 gap-2 text-2xl'
    }

    const iconSizeClasses = {
        sm: 14,
        md: 18,
        lg: 22,
        xl: 24,
    }

    const styleClasses = {
        primary: 'text-stone-50 bg-blue-500',
        secondary: 'text-blue-500 border border-blue-500',
    }

    const hoverClasses = {
        primary: 'hover:bg-blue-400',
        secondary: 'hover:bg-blue-300/80',
    }

    const stateClasses = {
        enabled: clsx('hover:cursor-pointer opacity-100', hoverClasses[style]),
        disabled: 'cursor-not-allowed opacity-50'
    }

    const buttonStyle = clsx(baseClasses, sizeClasses[size], styleClasses[style], stateClasses[state]);
    const iconSize = iconSizeClasses[size];

    return {buttonStyle, iconSize};
}
