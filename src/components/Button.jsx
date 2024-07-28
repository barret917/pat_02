import React from "react";

export default function Button({onClick}){
    return(
        <button onClick={onClick}
        className='px-6 py-3 text-white bg-blue-500 rounded shadow hover:shadow-lg hover:-translate-y-1 transition duration-300'>
        Открыть окно
      </button>
    )
}