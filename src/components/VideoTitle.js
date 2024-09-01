import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent md:px-12 px-4 py-6 text-white flex flex-col justify-center items-start">
            <h1 className="text-md sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg pl-2 md:pl-0 mb-4">
                {title}
            </h1>

            <p className="hidden sm:block text-base md:text-xl py-4 w-full md:w-1/2 leading-relaxed opacity-90 drop-shadow-md">
                {overview}
            </p>

            <div className="flex space-x-4">
                <button className="flex items-center justify-center bg-white text-sm sm:text-base md:text-xl rounded-full py-2 px-4 sm:px-6 md:px-8 text-black font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Play
                </button>

                <button className="hidden md:flex items-center justify-center bg-gray-700 text-sm sm:text-base md:text-xl font-semibold rounded-full py-2 px-6 sm:px-8 text-white hover:bg-gray-600 transition duration-300 ease-in-out shadow-md border border-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
