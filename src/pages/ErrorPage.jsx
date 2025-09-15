import React from 'react'
import ErrorImage from '../assets/error.jpg'

const ErrorPage = ({ error }) => {
    return (
        <div className='w-full h-full flex flex-col gap-y-4 my-6 items-center justify-center'>
            <div className='lg:w-1/2 w-full lg:h-1/2'>
                <img src={ErrorImage} alt="Something went wrong" className='rounded-lg'/>
            </div>
            <h1 className='text-4xl text-center text-foreground font-semibold'>
                {error ? error : "404: Page Not Found"}
            </h1>
        </div>
    )
}

export default ErrorPage