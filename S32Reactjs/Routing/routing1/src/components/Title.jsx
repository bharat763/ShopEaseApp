import React from 'react'

const Title = ({label,className}) => {
  return (
    <div className={`text-3xl text-teal-500 font-semibold text-blue-500${className}}`} >
      {label}
        
    </div>
  )
}

export default Title