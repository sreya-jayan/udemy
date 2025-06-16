import React from 'react'

function Wrapper({ children }) {
  return (
    <div className="w-[93%] mx-auto px-4">
       {children}
    </div>
  )
}

export default Wrapper;
