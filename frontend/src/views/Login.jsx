import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { Watch } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../store/slices/authSlice";

export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.info("Login successfull!");
        setLoading(false)
        console.log(userCredential.user);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false)
      });
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setAuthentication())
        navigate('/')
      }
    })
    return () => {
      unsub()
    }
  }, [])
  return (
    <section className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto w-44"
            src="https://www.safaricom.co.ke/images/Lipanampesa.png"
            alt="Lipanampesa"
          />
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            C-13 LIPA NA M-PESA - PAYMENT INTEGRATION
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {loading ? (
                <>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Watch
                      height="20"
                      width="20"
                      radius="48"
                      color="white"
                      ariaLabel="watch-loading"
                      visible={true}
                    />
                  </span>
                  <span> Processing</span>
                </>
              ) : (
                <>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  <span>Sign in</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-gray-900">
            Dont have an account?
            <Link to='/signup' className="font-medium mx-2 text-indigo-600 hover:text-indigo-500">
              Create an account.
            </Link>
          </p>
          <div>
            <p className="text-body-color mb-2 flex justify-center items-center text-xs font-normal uppercase">
              <span className="bg-body-color ml-2 inline-block h-[1px] w-24 mx-2"></span>
              Or continue with
              <span className="bg-body-color ml-2 inline-block h-[1px] w-24 mx-2"></span>
            </p>
            <button className="group relative flex w-full justify-center rounded-md border  py-2 px-4 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              Google Signin
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
