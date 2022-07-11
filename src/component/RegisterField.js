import React from 'react';
import { useForm } from "react-hook-form";
import Header from './Header';

export default function RegisterField(){
    const {register, handleSubmit, formState: {errors}} = useForm(
        {defaultValues: {
            firstName: "rev",
            lastName: "tan"
        }});
    // const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header title="2.) Register field, Validation & Errors" />

            <input placeholder='first name' {...register("firstName")} />

            <input placeholder='last name' 
                {...register("lastName", {
                    required: "this is required", 
                    minLength: {
                        value: 5,
                        message: "Min Length  is 5",    
                    } 
                })} 
            />
            <input placeholder="hobby" {...register("hobby", {
                pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Enter alphabets only"
                } 
            })} />
            <select {...register("gender")}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>

            {errors.lastName &&
                <span className="error__display--block">{errors.lastName.message}</span>
            }
            {errors.hobby &&
                <span className="error__display--block">{errors.hobby.message}</span>
            }
            <input type="submit" />
        </form>
    )
}