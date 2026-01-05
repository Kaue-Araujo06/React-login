import "./input.css";
import {useState} from "react";

function Input({ label, type, placeholder, value, onChange, id }) {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="container-inp">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
        required/>
    </div>
  );
}

export default Input;
