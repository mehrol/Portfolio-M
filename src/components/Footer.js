import React from 'react'
import userImage from '../assets/img/shubham.jpg'

const Footer = () => {
    return (
        <>
            <div className=' bg-zinc-800 p-5 mt-20 '>
                <div className='flex justify-center h-24'>
                    <img src={userImage} />
                </div>
                <div className='flex justify-center align-center text-gray-300 text-lg'>
                    <ul>
                        <li>shubhamtalreja2@gmail.com &nbsp; +91 9560249747</li>
                        <li>Designed and Developed By Shubham Talreja</li>
                    </ul>


                </div>
            </div>
        </>)
}

export default Footer