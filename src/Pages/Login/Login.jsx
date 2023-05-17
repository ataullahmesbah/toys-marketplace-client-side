import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                <form onSubmit={handleLogIn} className="mt-8">
                    <div>
                        <label htmlFor="email" className="text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="mt-6">

                        <input type="submit" className="w-full py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none" value="Log in" />

                    </div>

                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <span>Do not have an account?</span>
                        <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500"> Sign Up here</Link>
                    </div>
                </form>
                <div className="flex items-center justify-between mt-4 gap-2">
                    <hr className="w-full border-gray-300" />
                    <span className="text-gray-500 ">or</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <div className="mt-4">
                    <button onClick={handleGoogleSignIn}
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

export default Login;
