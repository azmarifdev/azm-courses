import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="h-[95%] pb-7 w-4/5 mx-auto">
                <h1 className="text-center font-bold text-2xl text-purple-500 my-3">
                    Frequently Asked Questions
                </h1>
                <div className="mt-5 flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse">
                        what is artificial intelligence?
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
                        Artificial intelligence (AI) is intelligence
                        demonstrated by machines, as opposed to the natural
                        intelligence displayed by animals and humans. AI
                        research has been defined as the field of study of
                        intelligent agents, which refers to any system that
                        perceives its environment and takes actions that
                        maximize its chance of achieving its goals.
                    </div>
                </div>

                <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse2">
                        what is robotic process automation?
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
                        Robotic process automation is a form of business process
                        automation technology based on metaphorical software
                        robots or on artificial intelligence /digital workers.
                        It is sometimes referred to as software robotics.
                    </div>
                </div>
                <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse3">
                        what is MERN stack?
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
                        MEAN is a free and open-source JavaScript software stack
                        for building dynamic web sites and web applications. A
                        variation known as MERN replaces Angular with React.
                    </div>
                </div>
                <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                    <label
                        className="grow px-4 py-3 font-medium"
                        for="collapse4">
                        what is wordpress?
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
                        WordPress is a free and open-source content management
                        system written in hypertext preprocessor language and
                        paired with a MySQL or MariaDB database with supported
                        HTTPS. Features include a plugin architecture and a
                        template system, referred to within WordPress as Themes.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
