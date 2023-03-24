import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import { createAuthUser, createUserDocFromAuth } from "../../utils/fire-base";
import Button from "../button/button";
import "./sign-up-form.css";


const SignUpForm = () => {
  const navigate = useNavigate();//me falta hacer el funcionamiento del navigate
  const {setCurrentUser} = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, //devuelve el valor de lo que se está escribiendo
    reset
  } = useForm();

  const onFormSubmit = async (data) => {
    const response = await createAuthUser(data.email, data.password1)
    try {
      createUserDocFromAuth(response.user.uid, data.name, data.email)
      setCurrentUser(response)
      navigate("/")
      reset()
    } catch (err) {
        console.log(err);
    }
  };
  return (
    <form className="sign-form-up" onSubmit={handleSubmit(onFormSubmit)}> 
      <h1 className="h1-signUp" >Sign Up</h1>
      <input placeholder="Name" {...register("name", { 
        required: true,
        pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/})}/>  
        {/* EXPRESION REGULAR PARA NOMBRE Y APELLIDOS*/}

        {errors?.name?.type === "required" && <p>Please enter name.</p>}
        {errors?.name?.type === "pattern" && <p>Please enter correct name.</p>}
      
      <input placeholder="Email"  className="sign-email" {...register("email", { 
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/})}/>  
        {/* EXPRESION REGULAR PARA EMAIL*/}
        {errors?.email?.type === "required" && <p>Please enter email.</p>}
        {errors?.email?.type === "pattern" && <p>Please enter correct email.</p>}
        
  
      <input placeholder="Password"  className="sign-password" type="password" 
        {...register("password1", { 
          required: true, 
          pattern: /(?=.*[0-9a-zA-Z]).{6,}/ })}/>
        {errors?.password?.type === "pattern" && <p>Password is required.</p>}

      <input placeholder="Repeat password" className="sign-password" type="password" 
        {...register("password2", { 
          required: true,
          pattern: /(?=.*[0-9a-zA-Z]).{6,}/ })}/>
        {errors?.password?.type === "pattern" && <p>Password is required.</p>}

        {watch("password1") !== watch("password2") && <p>Password do not match</p>}
      
       <Button buttonText = "Sign Up" />
    </form>
  );
};

export default SignUpForm;
