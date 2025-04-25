import {InputFieldProps} from './InputField.types.ts'
import {getInputFieldStyle} from "./InputField.style.ts";

export default function InputField({
                                       id = '',
                                       label = '',
                                       style = 'primary',
                                       size = 'md',
                                       state = 'enabled',
                                       type = 'text',
                                       icon: Icon,
                                       iconPosition = 'left',
                                       onChange,
                                   }: InputFieldProps) {

    const {inputStyle, iconSize} = getInputFieldStyle(size, style, state, Icon ? iconPosition : 'alone');
    const isDisabled = state === 'disabled';

    return (
        <div className="relative w-full">
            {Icon && iconPosition === 'left' && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon size={iconSize}/>
                </div>
            )}

            <input
                type={type}
                id={id}
                className={inputStyle}
                placeholder={label}
                onChange={onChange}
                disabled={isDisabled}
            />

            {Icon && iconPosition === 'right' && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Icon size={iconSize}/>
                </div>
            )}
        </div>
    );
}
