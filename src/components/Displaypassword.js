import { React, useState, useContext } from "react";
import "../App.css";
import { AiOutlineCopy } from "react-icons/ai";
import { PasswordContext } from "../PasswordContext";

const Displaypassword = () => {

    {/* using Context  hooks to update the password  */} 

  const { value, setValue } = useContext(PasswordContext);

  return (
    <div class="Displaypassword relative bg-secondary w-96 16 mx-auto h-16 flex-row">
      <h1 class="text-[#535259]  p-4 text-2xl text-extrabold">{value}</h1>

      {/* Button as icon to copy the generated password */}
      <button
        class="button absolute right-3 bottom-4"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        <AiOutlineCopy
          onMouseOver={(e) => (e.target.style.marginBottom = 10)}
          onMouseOut={(e) => (e.target.style.marginBottom = 0)}
          color={"#a3ffae"}
          size={30}
        />
      </button>
    </div>
  );
};
export default Displaypassword;
