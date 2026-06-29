import Image from 'next/image'
import React from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'

function OnSale() {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
            <h2 className="font-bold text-lg mb-4">On Sale</h2>
            <div className="space-y-4">
                <div className="bg-[#f5f5f0] rounded-lg p-2 flex justify-center">
                    <Image
                        src={banner1}
                        alt="Pineapple"
                        width={150}
                        height={150}
                        className="h-auto w-auto"
                    />
                </div>
                <div className="bg-[#f5f5f0] rounded-lg p-2 flex justify-center">
                    <Image
                        src={banner2}
                        alt="Orange"
                        width={150}
                        height={150}
                        className="h-auto w-auto"
                    />
                </div>
            </div>
        </div>

    )
}

export default OnSale