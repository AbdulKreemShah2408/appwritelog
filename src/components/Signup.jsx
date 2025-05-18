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
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
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

        {error && <p className="text-red-600 mt-4 text-center text-sm">{error}</p>}

        <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
          <div>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register('name', {
                required: 'Full Name is required',
              })}
            />
          </div>
          <div>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register('email', {
                required: 'Email is required',
                validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Invalid email address',
              })}
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register('password', {
                required: 'Password is required',
              })}
            />
          </div>
          <Button type="submit" className="w-full transition duration-300 hover:bg-blue-700">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
