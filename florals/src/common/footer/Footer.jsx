import React from 'react'

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear()
    return (
      
        <div className='container fixed-bottom text-center'>
            <p className='fw-bold'>
                &copy; {year} Caleb's Florals Kenya.
            </p>
        </div>
    )
}

export default Footer
