import { React, useState } from "react";
import { Range } from "react-range";
import "../../App.css";

const Rangecharacter = (props) => {
  return (
    <div>
      <div class="flex flex-row space-x-24">
        <h1 class="text-xl whitespace-nowrap">Character Length</h1>
        <h1 class="RangeCharacter text-4xl text-primary">{props.length}</h1>
      </div>
      <Range
        step={1}
        min={0}
        max={18}
        values={props.length}
        onChange={props.onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-2 pr-2 my-8 bg-gray-200 rounded-full"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-10 h-10 transform translate-x-10 bg-[#e7e6eb]  focus:outline-none focus:ring-2  focus:ring-[#08070b] focus:bg-primary rounded-full"
          />
        )}
      />
    </div>
  );
};

export default Rangecharacter;
