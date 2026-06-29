import Image from 'next/image'
import { Button } from './ui/button'

function PromotionalBanners() {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-lg p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">Green Tea</h3>
                    <h4 className="text-2xl font-bold mb-3">Longing</h4>
                    <p className="text-sm mb-4 opacity-90">
                        Cleaners which enjoy health benefits
                        <br />
                        is bookloo1 und pastam honix
                    </p>
                    <Button variant="secondary" size="sm" className="bg-white text-green-800 hover:bg-gray-100">
                        SHOP NOW
                    </Button>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold text-green-800 mb-1">On Trending</h3>
                            <h4 className="text-xl font-bold text-green-800 mb-3">Coconut Milk</h4>
                            <p className="text-sm text-green-700 mb-4">
                                Enjoy a cream, for short
                                <br />
                                and mild
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/placeholder.svg?height=150&width=150"
                                alt="Coconut Milk"
                                width={150}
                                height={150}
                                className="h-auto w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PromotionalBanners