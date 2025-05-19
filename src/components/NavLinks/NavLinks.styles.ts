import {LinkSize} from "./NavLinks.types.ts";
import clsx from "clsx";

export function getNavLinksStyle(
    size: LinkSize = 'md',
    isActive: boolean
) {

    const baseClasses = 'flex items-center gap-2 px-3 py-2 rounded transition-colors mt-1'

    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-xl',
    }

    const activeClass = isActive
        ? 'text-blue-600 bg-gray-200'
        : 'text-gray-700 hover:bg-gray-200'

    return clsx(baseClasses, sizeClasses[size], activeClass)
}
