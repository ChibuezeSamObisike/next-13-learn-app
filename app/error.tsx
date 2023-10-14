"use client";
import React from "react";

interface Props {
  error: Error;
  reset: VoidFunction;
}

const Error = ({ error, reset }: Props) => {
  console.log("Error is", error);
  return (
    <div>
      <p>An unexpected error has occured</p>
      <button className='btn' onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default Error;
