
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    form.reset();

    if(password.length < 6){
      setError('Password added at least 6 characters long')
      return;
    }

    if(email.is() === '' || password.is() === ''){
      setError('Please Enter a valid email and password');
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error))


  }

  const handleGoogleSignUp = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

        {error && (
          <div className="bg-yellow-100 border border-gray-400 text-red-700 px-4 py-3 rounded relative mb-4 mt-4">
            <h5 className='text-bold font-medium'>VALIDATION ERROR:</h5>
            Password must be at least 6 characters long
          </div>
        )}

        <form onSubmit={handleSignUp} className="mt-8">
          <div>
            <label htmlFor="name" className="text-gray-700">Name</label>
            <input
              type="text"
              name='name'
              id="name"
              className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              id="email"
              className="mt-2 w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              id="password"
              className="mt-2 w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="photo" className="text-gray-700">Photo</label>
            <input
              type="photo"
              name='photo'
              id="photo"
              className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
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
          <button onClick={handleGoogleSignUp}
            type="button"
            className="w-full py-2 px-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Sign in with Google
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
