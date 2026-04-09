import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group">
      <div className="w-full bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
        <div className="w-full mb-4 overflow-hidden rounded-2xl aspect-video relative">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-widest shadow-sm">
            Technology
          </div>
        </div>
        
        <div className="px-2 pb-2">
          <h2 className="text-xl font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300 min-h-[56px]">
            {title}
          </h2>
          
          <div className="flex items-center mt-4 pt-4 border-t border-slate-50 text-indigo-600 font-bold text-sm">
            <span>Read Article</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
