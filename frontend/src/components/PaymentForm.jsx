import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Watch } from "react-loader-spinner";
import axios from "axios";
import { useEffect } from "react";

export default function PaymentForm() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("https://api-c-13-payment.vercel.app/stk", {
        phoneNumber,
        amount,
      })
      .then(( { data }) => {
        setTimeout(() => {
          setMessage(data.response.CustomerMessage);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
    setAmount("");
    setPhoneNumber("");
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }, [message])
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('')
    }, 3000)
  }, [errorMessage])
  return (
    <form onSubmit={handleSubmit}>
      {message && (
        <>
          <div className="bg-green-600 p-3 my-2 text-white rounded-xl">
            { message }
          </div>
        </>
      )}
      {errorMessage && (
        <>
          <div className="bg-red-600 p-3 my-2 text-white rounded-xl">
            { errorMessage }
          </div>
        </>
      )}
      <div className="mb-3">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <FontAwesomeIcon icon={["fas", "phone"]} />
            </span>
          </div>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full rounded-md border-gray-300 pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="e.g 07xxxxxx"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <FontAwesomeIcon icon={["fas", "money-bill"]} />
            </span>
          </div>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full rounded-md border-gray-300 pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
            required
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90 flex items-center space-x-3 justify-center"
        >
          {loading ? (
            <>
              <Watch
                height="25"
                width="25"
                radius="48"
                color="white"
                ariaLabel="watch-loading"
                visible={true}
              />
              <span className="mx-3">Processing</span>
            </>
          ) : (
            <>
              <span className="mx-3">Pay Now</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
