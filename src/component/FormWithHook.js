import React from "react";
import { useForm } from "react-hook-form";

export default function FormWithHook() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="fill in" {...register("example")} className="display--block"/>

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} className="display--block"/>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span className="error__display--block">This field is required</span>}

            <input type="submit" />
        </form>
    );
}