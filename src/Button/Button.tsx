import React from 'react';
import { FC  } from 'react';
import './Button.css'
import '../index.css'
import cx from "classnames";

export interface MyButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    block?: boolean
    variant: 'primary' | 'red' | 'yellow' | 'green' | 'violet'
    onClick?: () => void;
}
const Button: FC<MyButtonProps> =
    ({
         variant,
         disabled,
         outline,
         block,
         ...props
    }) => {

    const btnClasses = cx(['my-button', {
        'btn-primary': variant === 'primary',
        'btn-red': variant === 'red',
        'btn-yellow': variant === 'yellow',
        'btn-green': variant === 'green',
        'btn-violet': variant === 'violet',
        'btn-disabled': disabled,
        'btn-outline-primary': variant === 'primary' && outline,
        'btn-outline-yellow': variant === 'yellow' && outline,
        'btn-outline-red': variant === 'red' && outline,
        'btn-outline-green': variant === 'green' && outline,
        'btn-outline-violet': variant === 'violet' && outline,
        'my-button-large' : block
    }])

    return (
        <button {...props} className={ btnClasses}>
            { props.label }
        </button>
    )
}

export default Button
