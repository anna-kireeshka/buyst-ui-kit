import React from 'react';
import { FC  } from 'react';
import './Input.css'
import '../index.css'
import cx from "classnames";

export interface MyInputProps {
    block?: boolean,
    placeholder?: string,
    label?: string,
    onChange?: () => void,
    type: 'text' | 'phone' | 'email',
    column?: boolean,
}
const Input: FC<MyInputProps> =
    ({
         type,
         column,
         block,
         ...props
     }) => {

    const inputStyle = cx(['my-input'], {
        'my-input-block': block,
    })

        const formStyle = cx( {
            'my-input-column': column
        })

        return (
            <div className={formStyle} style={{margin: '1rem'}}>
            <label className={'label'}> {props.label} </label>
                <input type={'text'} {...props} className={inputStyle}/>

            </div>

        )
    }

    export default Input;
