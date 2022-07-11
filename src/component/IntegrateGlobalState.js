// import React from 'react';
// import { useForm } from "react-hook-form";
// import {connect}  from 'react-redux';
// import updateAction from "./actions"
// import Header from './Header';

// const Input = ({ label, register, required }) => (
//     <>
//         <label>{label}</label>
//         <input {...register(label, { required })} />
//     </>
// );

// export default function IntGlobalState() {
//     const {register, handleSubmit, setValue} = useForm();
//     const onSubmit = data => props.updateAction(data);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Header title="5.) Integrate with Global State" />
//             {/* <Input label="First Name" register={register} required /> */}
//             <Input {...register("firstName")} defaultValue={props.firstName} />
//             <Input {...register("lastName")} defaultValue={props.lastName} />
//             <input type="submit" />
//         </form>
//     )
// }

// // Connect your component with redux
// connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm);