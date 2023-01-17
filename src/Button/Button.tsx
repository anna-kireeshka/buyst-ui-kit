import React from 'react';
import { FC  } from 'react';
import './Button.scss'
import '../index.scss'
import cx from "classnames";

export interface MyButtonProps {
    children: React.ReactNode
    disabled?: boolean;
    outline?: boolean;
    block?: boolean;
    variant: 'primary' | 'red' | 'yellow' | 'green';
    large?: boolean;
    image?: {
        source: string,
        alt?: string,
    };
    onClick?: () => void;
}
const Button: FC<MyButtonProps> =
    ({
         variant,
         disabled,
         outline,
         block,
         large,
         children,
         ...props
    }) => {

    const btnClasses = cx(['btn', {
        [`btn-${variant}`]: variant,
        'btn-disabled': disabled,
        [`btn-outline-${variant}`]: variant && outline,
        'btn-block': block,
        'btn-large': large
    }])

    return (
        <button {...props} className={ btnClasses}>
            { children }
        </button>
    )
}

export default Button
