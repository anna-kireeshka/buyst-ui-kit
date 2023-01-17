import React, {FC, useEffect, useRef, useState} from 'react';
import './Range.scss'
import '../index.scss'

export interface MyInputProps {
    label?: string;
    step: number;
    min: number;
    max: number;
    onChange?: () => {};
    onBlur?: () => {};
    onFocus?: () => {};
}
 const Range: FC<MyInputProps> =
    ({
         min,
         max,
         ...props
     }) => {

       const [value, setValue] = useState(String(min));
       const [step, setStep] = useState(0);
       const refValue = useRef<HTMLLabelElement>(null);
       const refRange = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (refValue.current && refRange.current && Number(value) > min) {
                const rangeWidth = window.getComputedStyle(refRange.current).getPropertyValue('width')
                const labelWidth = window.getComputedStyle(refValue.current).getPropertyValue('width');

                const numLabelWidth = parseInt(labelWidth, 10);
                const numRangeWidth = parseInt(rangeWidth, 10)

                setStep(scale( Number(value), min, max, 10, -5));

                const left = Number(value) * (numRangeWidth / max) - numLabelWidth / 2 + step
                refValue.current.style.left = `${left}px`
            }
        }, [value]);

         const scale = (
             value: number,
             minValue: number,
             maxValue:number,
             outMin:number,
             outMax:number
         ) => {
             return (value - minValue) * (outMax - outMin) / (maxValue - minValue) + outMin
         };

       const setValueRange = (e: {target: HTMLInputElement}) => {
           setValue(e.target.value);
       }

        return (
            <div className='range-container'>
                <label htmlFor="range" className='pointer' ref={refValue}>{value}</label>
                    <input
                        {...props}
                        type='range'
                        className='input-range'
                        onChange={setValueRange}
                        defaultValue={value}
                        min={min}
                        max={max}
                        ref={refRange}
                        id='range'
                    />
                <div className="label-wrap">
                    <p className='range__label'>{min}</p>
                    <p className='range__label'>{max}</p>
                </div>

            </div>
        )

}

export default Range;
