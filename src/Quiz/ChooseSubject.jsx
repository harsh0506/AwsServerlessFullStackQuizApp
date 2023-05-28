import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

const subject = ["Computers", "Mathematics", "History", "Science", "Geography"]

const WordCard = () => {

    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate("/quiz", { state: { name: item } });
    };

    return (
        <>
            <Navbar />
            <div style={{
                background:"black",
                width: "98vw",
                height: "100vh"
                , flexDirection: "column"
            }} className="flex justify-center items-center h-screen bg-gray-100">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1 style={{color:"#2dad58"}} className="text-3xl font-bold text-center mb-4">Subject Selection</h1>
                    <p style={{color:"white"}} className="text-lg text-center mb-8">
                        Choose a Subject from the options below:
                    </p>
                </div>
                <div style={{ width: "50vw" }} className="grid grid-cols-2 gap-4 max-w-3xl mx-4 md:mx-auto">
                    {
                        subject.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                                onClick={()=>handleClick(item)}
                            >
                                <h3 className="text-xl font-semibold">{item}</h3>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default WordCard;
