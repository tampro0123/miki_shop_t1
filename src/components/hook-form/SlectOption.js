import React from 'react'
import { useFormContext } from 'react-hook-form';
export function SlectOption({ name, label, styleLabel, styleInput,
    styleMessage, className, passwordErr, userNameErr, valueOption = [], mailErr, ...passProps }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <div className={className}>
            <label className={styleLabel} htmlFor={name}>
                {label}
            </label>
            <select id="cars" className={styleInput} {...register(name)} {...passProps}>
                {valueOption.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.name}</option>
                    )
                })}
            </select>
            <span className={styleMessage}>{errors[name]?.message || userNameErr || passwordErr || mailErr}</span>
        </div>
    )
}

