import React from 'react'

const Button = ({text,clickHandle,type}) => {
  return (
    <>
    <div>
        <button type={type} className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-500" onClick={clickHandle}>{text}</button>
    </div>
</>
  )
}

export default Button