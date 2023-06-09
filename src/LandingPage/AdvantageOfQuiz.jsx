import React from 'react'
const features = [
    {
        name: '1. Enhances Knowledge',
        description:
            ' Daily quizzes help expand your knowledge across various subjects and topics.',
    },
    {
        name: '2. Improves Memory',
        description:
            'Regular participation in quizzes aids in memory retention and recall.',

    },
    {
        name: '3. Boosts Confidence',
        description:
            ' Solving quizzes regularly boosts your confidence in tackling different challenges.',
    },
    {
        name: '4. Fun and Interactive',
        description:
            'Enjoy the excitement and interactive nature of daily quizzes,making learning enjoyable.',
    },
]
function AdvantageOfQuiz() {
    return (
        <div id="advantage" style={{paddingTop:"4rem" , paddingBottom:"4rem"}} className="bg-black py-16 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-white">Quiz faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#2dad58] sm:text-4xl">
                    Advantages of Daily Quiz
                    </p>
                    <p className="mt-6 text-lg leading-8 text-[#8b9bac]">
                    Engage in daily quizzes and enjoy a range of benefits! 
        Test your knowledge, learn something new, and have fun!
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-[#2dad58]">
                                    
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-[#8b9bac]">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default AdvantageOfQuiz