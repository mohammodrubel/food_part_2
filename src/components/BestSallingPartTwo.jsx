"use client"

import { getbestproduct } from '@/app/api/bestSale'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DetailsModal } from './DetailsModal'
import { Button } from './ui/button'

function BestSallingPartTwo() {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [bestProductLoading, setBestProductLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [bestProductData, setBestProductData] = useState([])
    

    const openDetails = (product) => {
        setSelectedProduct(product)
        setIsDetailsOpen(true)
    }

    useEffect(() => {
        const fetchBestSaleProduct = async () => {
            try {
                const res = await getbestproduct()
                setBestProductData(res?.data || [])
            } catch (error) {
                console.error(error)
            } finally {
                setBestProductLoading(false)
            }
        }

        fetchBestSaleProduct()
    }, [])

    return (
        <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Best Selling</h2>
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-1">
                {bestProductData.slice(0, 2).map((product, index) => (
                    <div key={index} className="flex items-center gap-3 pb-3 last:border-0">
                        <div className="w-16 h-16 bg-[#f5f5f0] rounded-md flex items-center justify-center">
                            <Image
                                src={product.photo?.[0]?.original_url || "/placeholder.png"}
                                alt={product.name}
                                width={50}
                                height={50}
                                className="h-10 w-auto object-cover"
                            />
                        </div>
                        <div className="flex justify-between items-center flex-1">
                            <h3 className="font-medium">{product.name}</h3>
                            <Button
                                variant="outline"
                                size="sm"
                                className="px-3 hover:bg-gray-50"
                                onClick={() => openDetails(product)}
                            >
                                Details
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Details Modal */}
            <DetailsModal
                product={selectedProduct}
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
            />
        </div>
    )
}

export default BestSallingPartTwo
