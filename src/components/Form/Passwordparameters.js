import { React, useState } from "react";

const Passwordparameters = (props) => {



  return (
    <div>
      <div class="relative">
        <label>
          <input
            class="w-7 h-7 my-2 rounded border-gray-300 accent-primary"
            type="checkbox"
            name="uppercase"
            value={props.uppercase}
            onChange={props.handleChange}
          />
          <span class="absolute px-4 top-3">Include Uppercase Letters</span>
        </label>
      </div>
      <div class="relative">
        <label>
          <input
            class="w-7 h-7 my-2 rounded border-gray-300 accent-primary"
            type="checkbox"
            name="lowercase"
            value={props.lowercase}
            onChange={props.handleChange}
          />
          <span class="absolute px-4 top-3">Include Lowercase Letters</span>
        </label>
      </div>
      <div class="relative">
        <label>
          <input
            class="w-7 h-7 my-2 rounded border-gray-300 accent-primary"
            type="checkbox"
            name="number"
            value={props.number}
            onChange={props.handleChange}
          />
          <span class="absolute px-4 top-3">Include Numbers</span>
        </label>
      </div>
      <div class="relative">
        <label>
          <input
            class="w-7 h-7 my-2 rounded border-gray-300 accent-primary"
            type="checkbox"
            name="symbol"
            value={props.symbol}
            onChange={props.handleChange}
          />
          <span class="absolute px-4 top-3">Include Symbols</span>
        </label>
      </div>
    </div>
  );
};

export default Passwordparameters;
