import { benefitsData } from "../Data"


const BenifitsSection = () => {
    return (
        <>
            <section className="relative bg-[#FFF7E0] py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-black">
                        Benefits of Joining Golden Today
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Includes ₹1,00,000+ worth of wellness products, income benefits, and lifestyle perks — all for a one-time ₹5000 membership.
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefitsData.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center border border-[#FFD700]">
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                                    <img src={benefit.icon} alt={`${benefit.title} Icon`} className="w-6 h-6" />
                                </div>
                                <div className="text-left flex-1">
                                    <h3 className="text-lg font-medium text-[#222]">{benefit.title}</h3>
                                    <span className="text-gray-500 text-sm">→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Text */}
                    <p className="text-lg text-gray-800 mt-8">
                        Already worth ₹1,00,000+. And now, your free herbal wellness kit awaits.
                    </p>
                </div>

                {/* Decorative leaves */}
                <div className="absolute left-0 bottom-0 w-64 h-64 -z-1 pointer-events-none" style={{ background: `url('/leaves-decor.png') no-repeat left bottom / contain` }} />
            </section></>
    )
}

export default BenifitsSection