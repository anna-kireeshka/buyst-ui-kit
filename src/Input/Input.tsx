import React, {useState} from 'react';
import { FC  } from 'react';
import './Input.scss'
import '../index.scss'
import cx from "classnames";

export interface MyInputProps {
    type: 'text' | 'password';
    value: 'danger' | 'success' | '';
    size?: 'lg' | 'md' | 'sm';
    disabled?: boolean;
    placeholder?: string;
    label?: string;
    column?: boolean;
    onChange: () => {};
    onBlur: () => {};
    onFocus: () => {};
}
const Input: FC<MyInputProps> =
    ({
         column,
         size,
         type,
         value,
         disabled,
         ...props
     }) => {

        const inputStyle = cx( {
            [`input-${type}`]: type,
            [`input-${value}`]: value,
            [`input-${size}`]: size,
            'input-disabled': disabled,
        })

        return (
                <label> {props.label}
                <input type={type} {...props} className={inputStyle} />
                </label>
        )
    }

export default Input;
