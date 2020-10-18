import React from "react";
import styles from './FormsControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
    //<-- rest оператор!!! достаем input и meta деструктуризацией,
    // в пропсах будет все
    // кроме инпут и мета
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}