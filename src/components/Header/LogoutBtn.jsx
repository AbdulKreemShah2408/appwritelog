import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


import { LogOut } from 'lucide-react' // optional icon

function LogoutBtn() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-full transition duration-300 shadow-sm hover:shadow-md"
        >
            <LogOut size={18} /> {/* icon for better UX, optional */}
            <span>Logout</span>
        </button>
    )
}

export default LogoutBtn
