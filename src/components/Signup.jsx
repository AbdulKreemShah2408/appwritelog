import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError('');
        try {
           
            const userData = await authService.createAccount(data);
            
            if (userData) {
                
                const currentUserData = await authService.getCurrentUser();
                if (currentUserData) {
                    dispatch(login(currentUserData));
                    navigate('/');
                }
            }
        } catch (error) {
            
            if (error.message.includes("already exists") || error.code === 409) {
                try {
                  
                    const session = await authService.login(data);
                    if (session) {
                        const currentUserData = await authService.getCurrentUser();
                        if (currentUserData) {
                            dispatch(login(currentUserData));
                            navigate('/');
                        }
                    }
                } catch (loginErr) {
                    setError("Account already exists. Please use the correct password to login.");
                }
            } 
            else if (error.message.includes("session is active")) {
                const currentUserData = await authService.getCurrentUser();
                if (currentUserData) {
                    dispatch(login(currentUserData));
                    navigate('/');
                }
            }
            else {
                setError(error.message);
            }
        }
    };

    return (
        <div className="flex items-center justify-center w-full py-12 bg-gray-50">
            <div className="mx-auto w-full max-w-md bg-white p-10 rounded-xl shadow-lg">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Sign up to create an account</h2>
                <p className="text-center text-base text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-4 text-center text-sm font-medium bg-red-50 p-2 rounded">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
                    <div className="space-y-5">
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register('name', { required: true })}
                        />
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', { required: true })}
                        />
                        <Button type="submit" className="w-full py-3 shadow-md hover:shadow-lg transition-all duration-200">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
