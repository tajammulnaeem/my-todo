import "./Button.css"

const Button = (props) => {
  return (
    <button  type={props.type} className={`button ${props.isDelete ? "invalid" : ""}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
