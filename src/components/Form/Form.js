import { React, useState, useContext } from "react";
import Rangecharacter from "./Rangecharacter";
import Passwordparameters from "./Passwordparameters";
import { PasswordContext } from "../../PasswordContext";

const Form = () => {

  {/* using Context  hooks to update the password  */} 

  const { value, setValue } = useContext(PasswordContext);

    {/* useState hook to change the length of the password  */} 

  const [characterlength, setCharacterlength] = useState([12]);

    {/* useState hook to detect if the checkbox clicked or not 
      by updating the state from true to false  */} 

  const [passwordcombination, setPasswordcombination] = useState({
    uppercase: false,
    lowercase: false,
    symbol: false,
    number: false,
  });

  {/* function to update the length of the password  */} 

  const updateLength = (characterlength) => setCharacterlength(characterlength);

  {/* function to update checkbox 
     and keep the previous state  */} 

  const handleChange = (event) => {


  {/* Detecting what checkbox the user clicked from the event target */} 

    const { name, value } = event.target;
    setPasswordcombination((prevState) => {
      if (name === "uppercase") {
        return {
          uppercase: !prevState.uppercase,
          lowercase: prevState.lowercase,
          symbol: prevState.symbol,
          number: prevState.number,
        };
      } else if (name === "lowercase") {
        return {
          uppercase: prevState.uppercase,
          lowercase: !prevState.lowercase,
          symbol: prevState.symbol,
          number: prevState.number,
        };
      } else if (name === "symbol") {
        return {
          uppercase: prevState.uppercase,
          lowercase: prevState.lowercase,
          symbol: !prevState.symbol,
          number: prevState.number,
        };
      } else if (name === "number") {
        return {
          uppercase: prevState.uppercase,
          lowercase: prevState.lowercase,
          symbol: prevState.symbol,
          number: !prevState.number,
        };
      }
    });
  };

    {/* Function to generate the password */} 

  const Generatepassword = () => {

    {/* two empty array one for storing password and
       one for storing  upper/lowercases letters, digits symbol ...*/}
    let password = [];

    let finalPassword = [];

    const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbols = ["~", "!", "@", "#", "$", "%", "^", "*", "-", "+", "="];

     {/* if statement to add the selected characters into an array*/}

    if (passwordcombination.uppercase) {
      password = password.concat(uppercaseLetters);
    }
    if (passwordcombination.lowercase) {
      password = password.concat(lowercaseLetters);
    }
    if (passwordcombination.number) {
      password = password.concat(digits);
    }
    if (passwordcombination.symbol) {
      password = password.concat(symbols);
    }

    {/* for loop to push the selected characters randomly into an array  */}

    for (let i = 0; i < characterlength; i++) {
      const randomint = Math.floor(Math.random() * (password.length + 1));
      finalPassword.push(password[randomint]);
    }

    {/* convert the password from an array to a string  */}

    password = finalPassword.join("");

     {/* pop-up an alertk if the password is an empty string   */}

    if (password === "") {
      alert("Please select an option  ");
    }

    {/* add the generated password to the Context  hook   */}

    setValue(password);
  };

  return (
    <div class="mt-8 p-10 Displaypassword relative bg-secondary w-96 h-fit mx-auto flex-row">
      <Rangecharacter length={characterlength} onChange={updateLength} />
      <Passwordparameters
        handleChange={handleChange}
        uppercase={passwordcombination.uppercase}
        lowercase={passwordcombination.lowercase}
        symbol={passwordcombination.symbol}
        number={passwordcombination.number}
        name="uppercase"
      />
      <button
        class="w-full mt-8 h-12 bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
        onClick={Generatepassword}
      >
        Generate
      </button>
    </div>
  );
};

export default Form;
