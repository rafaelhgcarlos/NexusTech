import {ButtonProps} from "./Button.types.ts";
import getButtonStyle from "./Button.style.ts";

function Button({
                    style = 'primary',
                    size = 'md',
                    state = 'enabled',
                    label = 'label',
                    icon: Icon,
                    iconPosition = 'left',
                    onClick,
                }: ButtonProps) {

    const {buttonStyle, iconSize} = getButtonStyle(size, style, state);
    const isDisabled = state === 'disabled';

    return (
        <button onClick={onClick} className={buttonStyle} disabled={isDisabled}>
            {Icon && iconPosition === 'left' && <Icon size={iconSize}/>}
            {iconPosition != 'alone' && label}
            {Icon && iconPosition === 'right' && <Icon size={iconSize}/>}
            {Icon && iconPosition === 'alone' && <Icon size={iconSize}/>}
        </button>
    )
}

export default Button
