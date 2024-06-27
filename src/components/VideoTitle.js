import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12 w-full aspect-video absolute pt-[20%] text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='text-lg py-6 w-1/3'>{overview}</p>
            <div>
                <button className='bg-white text-xl rounded py-3 px-12 m-2 text-black font-bold hover:bg-opacity-80'>▶️ Play</button>
                <button className='bg-gray-400 text-xl rounded py-3 px-12 m-2 border-gray-50 bg-opacity-50 text-white'> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
