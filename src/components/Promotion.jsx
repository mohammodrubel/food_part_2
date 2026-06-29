"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { VendorAPi } from '@/app/api/vendor/vendorApi'
import Link from 'next/link'
import { Skeleton } from './ui/skeleton' 
import useTranslation from '@/hooks/useTranslation'

function Promotion() {
    const [vendorImages, setVendorImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchVendor = async () => {
            try {
                setLoading(true)
                const res = await VendorAPi()
                setVendorImages(res?.data || [])
            } catch (err) {
                console.error("Error fetching vendor:", err)
                setError('Failed to load promotions')
            } finally {
                setLoading(false)
            }
        }
        fetchVendor()
    }, [])
const t = useTranslation();
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(2)].map((_, i) => (
                        <Skeleton key={i} className="w-full h-64 rounded-lg" />
                    ))}
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
                <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </Button>
            </div>
        )
    }

    if (!vendorImages.length) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-gray-500">No promotions available at the moment</p>
            </div>
        )
    }

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8"> {t("navigation.special", "Special Promotions")} </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {vendorImages.map((item) => (
                    <Link 
                        href={item?.url || '#'} 
                        key={item.id}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9 w-full h-64 md:h-80 relative">
                            <Image
                                src={item?.media[0]?.original_url || '/placeholder.jpg'}
                                alt={item?.title || 'Promotion image'}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                {item?.title && (
                                    <h3 className="text-white text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Promotion