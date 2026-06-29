"use client"

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useState, useEffect } from 'react'
import { getAllCustomers } from '@/app/api/customers'
import useTranslation from '@/hooks/useTranslation'
import { useLanguage } from '@/app/context/LanguageContext'

function Customar() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const res = await getAllCustomers()
                setData(res?.data || [])
            } catch (error) {
                console.error("Error fetching customers:", error)
            }
        }
        fetchCustomers()
    }, [])
const t = useTranslation();
const { currentLang } = useLanguage();
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20" dir={currentLang === "ar" ? "rtl" : "ltr"}>
            <div className="container mx-auto sm:px-6 lg:px-8">
                {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"> */}
                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                    {t("navigation.client", "Meet Some of Our Clients")}
                </h1>

                {/* Marquee Left to Right */}
                <Marquee
                    direction="right"
                    className="flex items-center gap-12 mb-10"
                    speed={40}
                    pauseOnHover
                    autoFill
                >
                    {data.map((customer) => (
                        <div
                            key={customer.id}
                            className="bg-white p-4 m-4 rounded shadow-md"
                        >
                            {customer?.photo?.url && (
                                <Image
                                    src={customer.photo.url}
                                    width={100}
                                    height={100}
                                    alt={customer.first_name || "Customer"}
                                    unoptimized // external image
                                />
                            )}
                        </div>
                    ))}
                </Marquee>

                {/* Marquee Right to Left */}
                <Marquee
                    direction="left"
                    className="flex items-center gap-12"
                    speed={40}
                    pauseOnHover
                    autoFill
                >
                    {data.map((customer) => (
                        <div
                            key={customer.id}
                            className="bg-white p-4 m-4 rounded shadow-md"
                        >
                            {customer?.photo?.url && (
                                <Image
                                    src={customer.photo.url}
                                    width={100}
                                    height={100}
                                    alt={customer.first_name || "Customer"}
                                    unoptimized
                                />
                            )}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Customar