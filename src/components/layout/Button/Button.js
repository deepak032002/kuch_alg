import React from 'react'
import './Button.css'

const Button = ({text, icon}) => {
  return (
    <button type='button' className='custom_btn'>
        {text}
      {icon && <i className={`fa ${icon}`} style={{color: '#fff', marginLeft: '5px', fontSize: '16px', fontWeight: '700'}} aria-hidden="true"></i>}
    </button>
  )
}

export default Button