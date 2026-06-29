"use client"
import { getAllBlog } from '@/app/api/blog'
import { useEffect, useState } from 'react'
import { CarouselPlugin } from '../Slider'
import { Button } from '../ui/button'
import Link from 'next/link'
import useTranslation from '@/hooks/useTranslation'

function Review() {
    const [blog, setBlog] = useState([])
    const [blogLoading, setBlogLoading] = useState(true)
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getAllBlog()
                setBlog(data)
            } catch (error) {
            } finally {
                setBlogLoading(false)
            }
        }
        fetchBlog()
    }, [])
const t = useTranslation();
    return (
        <div>
            <CarouselPlugin data={blog?.data} />
            <div className='text-center py-5'>
                <Link href="/blog">
                <Button className="bg-[#287D50] px-10 hover:bg-[#287D50]">   {t("navigation.btn", "All Blogs")}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Review