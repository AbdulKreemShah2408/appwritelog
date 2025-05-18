import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transition-transform duration-300 hover:scale-[1.02]">
      <div className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
