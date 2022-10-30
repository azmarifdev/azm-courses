import React from 'react';

const Blog = () => {
    return (
        <div className="">
            <div className="h-[95%] mx-auto pb-7 col-span-3 w-3/4">
                <h1 className="text-center font-bold text-2xl text-purple-500 my-3">
                    Important question
                </h1>
                <div className="mt-5 flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse">
                        what is cors?
                    </label>
                    <input
                        className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                        type="checkbox"
                        name="collapse"
                        id="collapse"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // stroke-width="1.5"
                        stroke="currentColor"
                        className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                        <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                    <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                        header based mechanism that allows a server to indicate
                        any origins domain, scheme, or port other than its own
                        from which a browser should permit loading resources.
                        CORS also relies on a mechanism by which browsers make a
                        "preflight" request to the server hosting the
                        cross-origin resource, in order to check that the server
                        will permit the actual request. In that preflight, the
                        browser sends headers that indicate the HTTP method and
                        headers that will be used in the actual request.
                    </div>
                </div>

                <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse2">
                        Why are you using firebase? What other options do you
                        have to implement authentication?
                    </label>
                    <input
                        className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                        type="checkbox"
                        name="collapse2"
                        id="collapse2"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // stroke-width="1.5"
                        stroke="currentColor"
                        className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                        <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                    <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                        Firebase Authentication provides backend services,
                        easy-to-use SDKs, and ready-made UI libraries to
                        authenticate users to your app. It supports
                        authentication using passwords, phone numbers, popular
                        federated identity providers like Google, Facebook and
                        Twitter, and more.
                    </div>
                </div>
                <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse3">
                        How does the private route work?
                    </label>
                    <input
                        className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                        type="checkbox"
                        name="collapse3"
                        id="collapse3"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // stroke-width="1.5"
                        stroke="currentColor"
                        className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                        <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                    <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                        The private route component is similar to the public
                        route, the only change is that redirect URL and
                        authenticate condition. If the user is not authenticated
                        he will be redirected to the login page and the user can
                        only access the authenticated routes If he is
                        authenticated.
                    </div>
                </div>
                <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse4">
                        What is Node? How does Node work?
                    </label>
                    <input
                        className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                        type="checkbox"
                        name="collapse4"
                        id="collapse4"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        // stroke-width="1.5"
                        stroke="currentColor"
                        className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                        <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                    <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                        Node. js is a JavaScript runtime environment that
                        achieves low latency and high throughput by taking a
                        “non-blocking” approach to serving requests. In other
                        words, Node. js wastes no time or resources on waiting
                        for I/O requests to return.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
