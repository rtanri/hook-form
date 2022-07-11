import React from 'react';
import { useForm } from "react-hook-form";
import Header from './Header';

export default function IntExistingForm() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header title="3.) Watch (Get state value onChange)" />

            <input placeholder='first name' {...register("firstName")} />
            
            <input placeholder='last name' {...register("lastName")} />
            <input type="submit" />
        </form>
    )
}