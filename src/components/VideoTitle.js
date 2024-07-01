import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='px-12 w-full aspect-video absolute pt-[10%] text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-md py-6 w-1/3'>{overview}</p>
            <div className='flex'>
                <button className='flex justify-evenly align-bottom bg-white text-xl rounded py-3 px-10 m-2 text-black font-bold hover:bg-opacity-80'><span className='pr-2 pt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </span>Play</button>
                <button className='flex justify-evenly align-bottom bg-gray-400 text-xl font-bold rounded py-3 px-8 m-2 border-gray-50 bg-opacity-40 text-white'>
                    <span className='pr-2 pt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </span>
                    More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
