import {NavLink, useLocation} from "react-router-dom";
import {NavLinksProps} from "./NavLinks.types.ts";
import {getNavLinksStyle} from "./NavLinks.styles.ts";

export default function NavLinks({
                                     links,
                                     iconPosition = 'left',
                                     size = 'md',
                                 }: NavLinksProps) {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <ul>
            {links.map((link, index) => {
                const Icon = link.icon;
                const isActive = currentPath.startsWith(link.href);
                const linkStyle = getNavLinksStyle(size, isActive);

                return (
                    <li key={index}>
                        <NavLink
                            to={link.href}
                            className={linkStyle}
                        >
                            {Icon && iconPosition === 'left' && <Icon className="w-5 h-5"/>}
                            {iconPosition !== "alone" && <span>{link.label}</span>}
                            {Icon && iconPosition === 'right' && <Icon className="w-5 h-5"/>}
                            {Icon && iconPosition === "alone" && <Icon className="w-5 h-5"/>}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

