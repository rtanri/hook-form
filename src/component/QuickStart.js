import React from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

export default function QuickStart() {
    const onSubmit = data => console.log(data);
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm();

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header title="1.) R.Hook Form - Quick Start" />
            {/* register your input into the hook by invoking the "register" function */}
            <input 
                defaultValue="fill in" 
                {...register("example")}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input 
                {...register("exampleRequired", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && 
                <span className="error__display--block">This field is required</span>
            }
            <input type="submit" />
        </form>
    );
}