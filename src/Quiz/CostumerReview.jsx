import { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar";
import axios from "axios";

export default function CustomerReview() {

    const [Data, setData] = useState([])

    useEffect(() => { axios.get(import.meta.env.VITE_APICUSTMERDATA).then(res => setData(res.data.Reviews)).catch(err => console.log(err)) }, [Data])

    return (
        <div style={{
            width: "100vw",
            height: "100vh"
        }} class=" - my - 2 py - 2 overflow - x - auto sm: -mx - 6 sm: px - 6 lg: -mx - 8 pr - 10 lg: px - 8">
            <Navbar />
            < div style={{ marginTop: "8rem" }} class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12" >

                <h1 className="block text-xl font-bold text-black-800 sm:text-xl lg:text-3xl lg:leading-tight dark:text-black text-center md:text-left">
                    Table of <span className="text-blue-600">Customer Review!</span>
                </h1>

            </div >
            <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-900 tracking-wider">ID</th>
                            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-900 tracking-wider">Fullname</th>
                            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-900 tracking-wider">Email</th>
                            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-900 tracking-wider">Phone</th>
                            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-900 tracking-wider">Message</th>

                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        {Data.map((item, index) => (


                            <tr key={index}>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="flex items-center">
                                        <div>
                                            <div class="text-sm leading-5 text-gray-800">{index}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="text-sm leading-5 text-blue-900">{item.name}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{item.email}</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{item.phoneNumber}</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    {item.note}
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div >

    )
}