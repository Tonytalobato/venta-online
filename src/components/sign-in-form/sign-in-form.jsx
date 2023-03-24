import { createUserDocFromAuth, signInUser, signInWithGooglePopUp } from '../../utils/fire-base';
import { useForm } from "react-hook-form";
import Button from '../button/button';
import "./sign-in-form.css";
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();//me falta hacer el funcionamiento del navigate
  const {setCurrentUser} = useContext(UserContext)
    // console.log(currentUser);
  
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const LogGoogle = async() => {
    const response = await signInWithGooglePopUp()
    setCurrentUser(response)
    navigate("/")
    createUserDocFromAuth(
        response.user.uid, 
        response.user.displayName, 
        response.user.email
    )
  }
const signInUserForm = async(data) => {
  console.log(data);
  try {
    const response = await signInUser(data.email, data.password)
    setCurrentUser(response)
    navigate("/")
    reset()
  } catch (error) {
    console.log(error);
  }
}
  return (
    <form className="sign-form-in" onSubmit={handleSubmit(signInUserForm)}>
        <h1 className="h1-signUp" >Sign In</h1>
      <input className="sign-email" {...register("email", { 
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/})}/>  
        {/* EXPRESION REGULAR PARA EMAIL*/}
          
        {errors?.email?.type === "required" && <p>Please enter email.</p>}
        {errors?.email?.type === "pattern" && <p>Please enter correct email.</p>}
  
      <input className="sign-password" type="password" {...register("password", { required: true })}/>
        {errors.password && <p>Password is required.</p>}

        <Button buttonText = "Sign In" />
        
        <Button 
            type = "button"
            onClick = {LogGoogle}
            buttonClass = "google-sign-in"
            buttonText = "Login with Google"
        />

    </form>
  );
};
export default SignInForm;

