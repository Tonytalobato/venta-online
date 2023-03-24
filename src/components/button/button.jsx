import "./button.css";
const Button = ({buttonClass, buttonText, ...othersProps}) => {
    return(
        <button 
        {...othersProps}
        className={`button-container ${buttonClass}` } >
          {buttonText}
        </button>
    )
}

export default Button;