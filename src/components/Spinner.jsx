import React from 'react'
import { ClipLoader } from 'react-spinners'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#5a2abf",
};

const Spinner = () => {
  return (
    <div className="flex justify-center sweet-loading items-center h-[50vh]">
      <ClipLoader
        color="#4f46e5"
        size={100}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner