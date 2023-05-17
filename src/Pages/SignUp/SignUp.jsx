
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form className="mt-8">
          <div>
            <label htmlFor="name" className="text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="photo" className="text-gray-700">Photo</label>
            <input
              type="file"
              id="photo"
              className="mt-2 w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mt-6">

          <input type="submit" className="w-full py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none" value="Sign Up" />
            
          </div>
        </form>
        <div className="flex items-center justify-between mt-4 gap-2">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-500 ">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-700 text-sm">Already have an account?  <Link className='text-blue-600 font-semibold' to='/login'>Login Now</Link> </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full py-2 px-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Sign in with Google
          </button>
        </div>
        <div className="mt-2">
          <button
            type="button"
            className="w-full py-2 px-4 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
