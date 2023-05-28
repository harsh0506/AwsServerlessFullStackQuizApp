import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css"
const ContactUsPage = () => {

    const [name, setNAme] = useState()
    const [LAstname, setLastNAme] = useState()
    const [email, setemail] = useState()
    const [phoneNumber, setphoneNumber] = useState()
    const [note, setnote] = useState()

    async function PostData(e) {
        e.preventDefault()
        if (!note || !email || !name || !phoneNumber) {
            alert("fill all details")
            return
        }
        try {
            let data = {
                "note": note,
                "email": email,
                "name": name + LAstname,
                "phoneNumber": phoneNumber,
                "id": String(Math.floor(Math.random() * 1000001))
            }
            console.log(data)

            await axios.post(import.meta.env.VITE_APICUSTMERDATA, data);

            setNAme("")
            setLastNAme("")
            setemail("")
            setphoneNumber("")
            setnote("")
            alert("Note sent")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id="contactusID" className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div style={{
                    background: "#2dad52",
                    borderRadius: "25px"
                }} className="relative ml-4">
                    <img className="w-full rounded-md" src="https://firebasestorage.googleapis.com/v0/b/notes-5bb98.appspot.com/o/Contact%20us-pana.png?alt=media&token=42362b35-b8a7-494e-86e3-8a65e0db872a" alt="Image Description" />
                </div>
                <div class="max-w-screen-md mx-auto p-5">
                    <div class="text-center mb-16">
                        <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                            Contact
                        </p>
                        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
                            Get In <span class="text-[#2dad58]">Touch</span>
                        </h3>
                    </div>

                    <form class="w-full">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                    full name
                                </label>
                                <input value={name} onChange={(e) => setNAme(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First name" />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input value={LAstname} onChange={(e) => setLastNAme(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                    Email Address
                                </label>
                                <input value={email} onChange={(e) => setemail(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                    PhoneNumber
                                </label>
                                <input value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" placeholder="phone number" />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                    Your Message
                                </label>
                                <textarea value={note} onChange={(e) => setnote(e.target.value)} rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                </textarea>
                            </div>
                            <div class="flex justify-between w-full px-3">
                                <button style={{background:"#2dad58" , color:'white'}} onClick={(e) => PostData(e)} class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                    Send Message
                                </button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUsPage;
