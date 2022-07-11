import React from 'react';
import { useForm } from "react-hook-form";
import Header from './Header';


// 1. Passing Register Props
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

// 1. With React.forwardRef, to pass the "ref" too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select name={name} onChange={onChange} onBlur={onBlur} ref={ref} >
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
));

export default function IntExistingForm() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header title="4.) Integrate Existing Form" />
            <Input label="First Name" register={register} required />
            <Select label="age" {...register("Age")} />
            <input type="submit" />
        </form>
    )
}