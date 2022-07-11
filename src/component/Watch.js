import React from 'react';
import { useForm } from "react-hook-form";
import Header from './Header';

export default function Watch() {
    const {register, handleSubmit, watch} = useForm();
    const onSubmit = data => console.log(data);
    
    // console.log(watch()); //this is subscribing all inputs

    // only look for firstName input onChange, ignore 'lastName'
    console.log(watch('firstName'));

    // subscribing individual input, and get their value without causing re-render your app.
    const firstNameValue = watch('firstName');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header title="3.) Watch (Get state value onChange)" />

            <input placeholder='first name' {...register("firstName")} />
            <p>{firstNameValue}</p>
            
            <input placeholder='last name' {...register("lastName")} />
            <input type="submit" />
        </form>
    )
}