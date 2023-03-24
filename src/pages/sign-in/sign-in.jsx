import SignInForm from '../../components/sign-in-form/sign-in-form';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import "./sign-in.css";



const SignIn = () => {
     
  return (
   <div className="authentication-container">
    
    <SignInForm /> 
    
    <SignUpForm />
   
   </div>
  );
}
export default SignIn;
