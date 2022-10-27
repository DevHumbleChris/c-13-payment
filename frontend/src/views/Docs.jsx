import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Docs() {
  return (
    <>
      <div className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
        <div className="h-52">
          <img
            src="https://resources.paymentexpert.com/paymentexpert/2021/03/shutterstock_1431394355.jpg"
            alt="banner"
            className="object-cover w-full"
          />
        </div>
      </div>
      <div className="my-3">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-3 max-w-full my-3">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  LIPA NA M-PESA PAYMENT INTERGRATION
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  HOW TO SETUP LIPA NA M-PESA ONLINE API
                </h2>
                <p className="text-body-color text-base">
                  Mpesa is a mobile money payment service by Safaricom based in
                  Kenya. It was released in 2007 and since then it has become
                  the common means of payment in Kenya. To help developers
                  implement Mpesa in their platforms, Safaricom released the
                  Daraja API.
                </p>
                <h3 className="text-primary my-3 block text-xl font-semibold uppercase">
                  Prerequisites
                </h3>
                <ul>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Have a Kenyan based Safaricom phone number.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Have Node.js installed on your computer.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Have some basic knowledge of JavaScript and Express JS.
                    </p>
                  </li>
                </ul>
                <h3 className="text-primary my-3 block text-xl font-semibold uppercase">
                  What we will cover
                </h3>
                <ul>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Creating a Safaricom developer account.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">Creating-an-app.</p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">Getting an Oauth token.</p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">Lipa na Mpesa online.</p>
                  </li>
                </ul>
                <h3 className="text-primary my-3 block text-xl font-semibold uppercase">
                  Creating a Safaricom developer account
                </h3>
                <p className="text-body-color text-base">
                  Safaricom controls all the operations concerning Mpesa and
                  Daraja API. For you to access Daraja API, you need to have a
                  developer account. The following steps explain how you can
                  create a developer account. Feel free to skip if you already
                  have one.
                </p>
                <ul className="my-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 1: The first step is to proceed to Safaricom
                      Developer website.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 2: Click on the signup button on the center or visit
                      directly from here. Proceed to the signup section.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 3: After registering, a welcome message with further
                      instructions is sent to your email address. In the email,
                      you shall find a confirmation link, click on it and it
                      shall direct you to a password entry page.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 4: Enter your password and confirm it and then click
                      login. On the page that follows, you shall view the
                      credentials that you have entered. If you want to edit the
                      credentials, make sure you do the changes and hit save.
                      Otherwise, you are all set.
                    </p>
                  </li>
                </ul>
                <h3 className="text-primary my-3 block text-xl font-semibold uppercase">
                  Creating an app
                </h3>
                <p className="text-body-color">
                  To be able to use the Daraja API, you need to have an app so
                  that you have the required access keys. Creating an app is a
                  very simple process.
                </p>
                <p className="text-body-color my-2">
                  Follow the following steps:
                </p>
                <ul className="my-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 1: Click on the My Apps link on the navbar in the
                      developer portal.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 2: On that page, click the Add a new app button.
                    </p>
                  </li>
                  <li className="flex">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 3: On the page that follows, enter your preferred app
                      name. Check the Lipa na Mpesa Sandbox and then click
                      create app. After that, you are all set.
                    </p>
                  </li>
                  <li className="flex">
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      className="text-green-600 mx-2"
                    />
                    <p className="text-body-color">
                      Step 4: Enter your password and confirm it and then click
                      login. On the page that follows, you shall view the
                      credentials that you have entered. If you want to edit the
                      credentials, make sure you do the changes and hit save.
                      Otherwise, you are all set.
                    </p>
                  </li>
                </ul>
                <h3 className="text-primary my-3 block text-xl font-semibold uppercase">
                  Configuring our application
                </h3>
                <p className="text-body-color">
                  Having set up the developer account and an app, it’s time we
                  set up our application. For this article, we shall implement a
                  REST API with Express.js framework. Our end goal is to
                  implement a working endpoint for Lipa na Mpesa online. To
                  handle communication to and from the Daraja API we shall use
                  Axios.
                </p>
                <p className="text-body-color my-2">
                  To follow along effectively, clone the finalized project from
                  here. To test our API, we will use Postman. If you are not
                  experienced in postman, feel free to watch this video.
                </p>
                <h3 className="text-primary my-3 block text-xl font-semibold uppercase">
                  Obtaining consumer key and consumer secret
                </h3>
                <p className="text-body-color mb-4">
                  On the portal’s apps page, click on the newly created app from
                  the previous process. In the keys section, copy the consumer
                  key and the consumer secret and paste them in your .env file
                  respectively as shown:
                </p>
                <pre className="scrollbar bg-black text-white p-2">
                  <code>
                    consumer_key = "your consumer key"
                    consumer_secret = "your consumer secret"
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
