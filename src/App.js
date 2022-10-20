import { useState } from "react";
import "./App.css";
import { PasswordContext } from "./PasswordContext";
import Displaypassword from "./components/Displaypassword";
import Form from "./components/Form/Form";

function App() {

    {/* using useState  hooks to update the password  */} 

  const [value, setValue] = useState("P4$5W0rD!");

  return (
    <div className="App">

      {/* Adding the context to every components in the app  */} 

      <PasswordContext.Provider value={{ value, setValue }}>
        <h1 class="text-[#807c92] text-center mx-12 mt-8 mb-4 text-lg font-bold">
        Password Generator
        </h1>
        <Displaypassword />
        <Form />
      </PasswordContext.Provider>
    </div>
  );
}

export default App;
