import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
      <div className="relative flex items-center justify-center">
        <div className="w-30 h-30 border-8 border-dashed rounded-full animate-spin border-purple-400"></div>
        <span className="absolute text-purple-600 font-bold text-lg animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Loader
