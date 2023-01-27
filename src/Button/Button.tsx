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
    rounded?: boolean;
    loading?: boolean;
    variant: 'primary' | 'danger' | 'warning' | 'success';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;


}
const Button: FC<MyButtonProps> =
    ({
         variant,
         disabled,
         outline,
         block,
         children,
         rounded,
         size,
         loading,
         ...props
    }) => {

    const btnClasses = cx(['btn', {
        [`btn-${variant}`]: variant,
        'btn-disabled': disabled,
        [`btn-outline-${variant}`]: variant && outline,
        'btn__block': block,
        'btn__rounded': rounded,
        [`btn__${size}`]: size,
    }])

        const btnLoaderClass = cx([{
            'btn__loading': loading,
             'btn__loading--outline': loading,
        }])

    return (
        <button {...props} className={ btnClasses}>
            <span className={ loading ? 'btn-loading-label' : ''}> { children } </span>
            <div className='btn__loading-container'>
                <span className={ btnLoaderClass }/>
            </div>
        </button>
    )
}

export default Button
