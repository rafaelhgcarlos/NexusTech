import {LucideIcon} from "lucide-react";
import {ChangeEvent} from "react";

export type InputStyle = 'primary' | 'secondary';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputIconPosition = 'left' | 'right' | 'alone';
export type InputState = 'enabled' | 'disabled';
export type InputType = 'date' | 'email' | 'text' | 'password' | 'number' | 'search';


export interface InputFieldProps {
    id?: string;
    label?: string;
    style?: InputStyle;
    size?: InputSize;
    state?: InputState;
    type?: InputType;
    icon?: LucideIcon;
    iconPosition?: InputIconPosition;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
