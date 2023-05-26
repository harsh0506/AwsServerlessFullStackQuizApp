import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
function Auth() {

    const [email, setEmail] = useState("")
    const [password, setPassord] = useState("")

    const navigate = useNavigate();

    async function SIWG(key) {

        setPassord(password.trim())
        setEmail(email.trim())

        if (!email) {
            alert("Please enter your email");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email");
            return;
        }

        // Password validation
        if (!password) {
            alert("Please enter your password");
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert(
                "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character."
            );
            return;
        }

        if (password !== import.meta.env.VITE_PASS || email !== import.meta.env.VITE_USERNAME) {
            alert(" Email or Password is Wrong")
            return;
        }

        alert("successful")
        key === "Add" ? navigate("/AddQuestion") : navigate("/CustomerReview")
    };


    return (
        <div style={{ width: "98vw" }} class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <Navbar />
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    onChange={(e) => setPassord(e.target.value)}
                                    value={password}
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                />

                                <div className="flex space-x-4">
                                    <button onClick={()=>SIWG("Add")}
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
                                            Add Question
                                        </span>
                                    </button>

                                    <button onClick={()=>SIWG("dkjd")}
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
                                            View User Review
                                        </span>
                                    </button>
                                </div>
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