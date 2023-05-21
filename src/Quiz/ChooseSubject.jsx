import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

const WordCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/quiz", { state: { name: "Science: Mathematics" } });
    };

    return (
        <>
            <Navbar />
            <div style={{
                width: "100vw",
                height: "100vh"
                , flexDirection: "column"
            }} className="flex justify-center items-center h-screen bg-gray-100">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1 className="text-3xl font-bold text-center mb-4">Word Selection</h1>
                    <p className="text-lg text-center mb-8">
                        Choose a word from the options below:
                    </p>
                </div>
                <div style={{ width: "50vw" }} className="grid grid-cols-2 gap-4 max-w-3xl mx-4 md:mx-auto">

                    <div
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold">Word 1</h3>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold">Word 2</h3>
                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold">Word 3</h3>
                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold">Word 4</h3>
                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold">Word 5</h3>
                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold">Word 6</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WordCard;
