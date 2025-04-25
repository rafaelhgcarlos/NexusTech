import {LucideIcon} from "lucide-react";

export type ButtonStyle = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonIconPosition = 'left' | 'right' | 'alone';
export type ButtonState = 'enabled' | 'disabled';

export interface ButtonProps {
    label?: string;
    style?: ButtonStyle;
    icon?: LucideIcon;
    iconPosition?: ButtonIconPosition;
    size?: ButtonSize;
    state?: ButtonState;
    onClick?: () => void;
}
