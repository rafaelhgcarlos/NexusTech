import {LucideIcon} from "lucide-react";

export type LinkIconPosition = 'left' | 'right' | 'alone';
export type LinkSize = 'sm' | 'md' | 'lg';

export interface NavLinksProps {
    iconPosition?: LinkIconPosition;
    size?: LinkSize;
    links: {
        id: string;
        label: string;
        href: string;
        icon?: LucideIcon;
    }[];
}
