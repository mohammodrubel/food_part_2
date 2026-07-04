"use client"
import Image from 'next/image'
import customer1 from '../../assets/customarlogo/img1.png'
import customer2 from '../../assets/customarlogo/img2.png'
import customer3 from '../../assets/customarlogo/img3.png'
import customer4 from '../../assets/customarlogo/img4.png'
import customer5 from '../../assets/customarlogo/img5.png'
import customer6 from '../../assets/customarlogo/img6.png'
import customer7 from '../../assets/customarlogo/img7.png'
import customer8 from '../../assets/customarlogo/img8.png'
import customer9 from '../../assets/customarlogo/img9.png'
import testimonialimg from '../../assets/testimonial.jpg'

import { ChevronRightIcon, StarIcon } from "lucide-react"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { getProductSuccessStory } from '../api/successStory'

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {

    const fetchBlog = async () => {
      try {
        const data = await getProductSuccessStory()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
  }, [])
  const clientLogos = [
    { name: "Client 1", logo: customer1 },
    { name: "Client 2", logo: customer2 },
    { name: "Client 3", logo: customer3 },
    { name: "Client 4", logo: customer4 },
    { name: "Client 5", logo: customer5 },
    { name: "Client 6", logo: customer6 },
    { name: "Client 7", logo: customer7 },
    { name: "Client 8", logo: customer8 },
    { name: "Client 9", logo: customer9 },
  ]



  const testimonials = [
    {
      quote:
        "The food importers platform has revolutionized how we source ingredients. We've reduced our procurement time by 50% and discovered suppliers we never would have found otherwise.",
      author: "Jennifer Martinez",
      role: "Head of Procurement",
      company: "Gourmet Foods Inc.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      quote:
        "Working with this network has been transformative for our business. The quality of suppliers and the efficiency of the process has exceeded all our expectations.",
      author: "Thomas Anderson",
      role: "Supply Chain Manager",
      company: "Fresh Market Solutions",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      quote:
        "The platform's commitment to sustainability and quality has helped us build stronger relationships with our customers while maintaining competitive pricing.",
      author: "Maria Gonzalez",
      role: "Operations Director",
      company: "Organic Imports Ltd.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Meet Some of Our Clientss
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Discover how leading food businesses have transformed their supply chains through our comprehensive
                import and distribution network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#7CAE4D] hover:bg-[#7CAE4D] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Explore Success Stories
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </button>
                <Link href='/client'>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                    View All Clients
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-10 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
                {clientLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-20 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Image width={200} height={200} src={client.logo} alt="Image"
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real clients who have achieved remarkable results through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data?.data?.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={story?.photo?.original_url || '/default-image.jpg'} // fallback image in public folder
                    alt='image customers'
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold line-clamp-2 text-gray-900 mb-3">{story.title}</h3>
                  <p className='line-clamp-5'>{story.description?.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').trim()}</p>
                  <div className='flex bg-gray-100 rounded-2xl gap-2'>
                    <p>{story?.author?.first_name}</p>
                    <p>{story?.author?.last_name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-12 sm:mb-20 last:mb-0">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="p-4 sm:p-8">
                    <StarIcon className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mb-4 sm:mb-6" />
                    <blockquote className="text-lg sm:text-2xl md:text-3xl font-medium text-gray-900 italic mb-6 sm:mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={testimonialimg}
                      width={500}
                      height={500}
                      alt="Testimonial"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
              {index < testimonials.length - 1 && <div className="border-t border-gray-200 mt-20"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Food Import Business?
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed">
            Join thousands of successful food businesses that have streamlined their supply chain with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7CAE4D] hover:bg-[#7CAE4D] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start Your Journey
            </button>
            <button className="border border-gray-400 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
