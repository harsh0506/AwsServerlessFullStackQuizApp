import { useNavigate } from "react-router-dom";
function Auth() {

    const navigate = useNavigate();

    async function SIWG(key) {
        navigate("/AddQuestion")
    };


    return (
        <div style={{ width: "98vw" }} class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div
                class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
            >
                <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                    <div class="mt-12 flex flex-col items-center">
                        <h1 class="text-2xl xl:text-3xl font-extrabold">
                            Log in for Adding questions
                        </h1>
                        <div class="w-full flex-1 mt-8">

                            <div class="mx-auto max-w-xs">
                                <input
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                />
                                <button onClick={SIWG}
                                    class="mt-5 tracking-wide font-semibold bg-[#E7B3AE] text-gray-100 w-full py-4 rounded-lg hover:bg-[#A6271E] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg
                                        class="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span class="ml-3">
                                        Log in
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-[#E7B3AE] text-center hidden lg:flex">
                    <div
                        class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/notes-5bb98.appspot.com/o/Online%20test-pana%20(1).png?alt=media&token=1c22c800-6c58-4788-b403-efbd3882fa4c')" }}
                    ></div>
                </div>
            </div>

        </div>
    )
}

export default Auth