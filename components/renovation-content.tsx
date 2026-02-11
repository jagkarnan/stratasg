"use client"
import { ChevronLeft, ChevronRight, Home, Building2, Briefcase, Store, Hammer, Zap, Users, FileText, Layers, Clock } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button"
import { Great_Vibes } from "next/font/google"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })

export default function RenovationContent() {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false })

  const scrollToProcess = () => {
    const section = document.getElementById("our-process")
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay]
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    onSelect()
  }, [emblaApi])

  const features = [
    {
      title: "Experienced Team",
      description:
        "Our certified professionals bring years of expertise in residential, commercial, and office renovations across Singapore. From the first sketch to the final handover, we manage every detail with precision and care.",
      icon: Users,
      link: "https://www.strata.sg/about",
      linkText: "certified professionals",
    },
    {
      title: "Quality Craftsmanship",
      description:
        "We use premium materials and proven techniques to ensure exceptional results. Every project receives meticulous attention, delivering finishes that stand the test of time.",
      icon: Hammer,
    },
    {
      title: "Transparent Process",
      description:
        "We provide clear quotations, realistic timelines, and regular progress updates so you’ll always know what to expect with no hidden surprises.",
      icon: FileText,
    },
    {
      title: "Tailored Solutions",
      description:
        "Every design is customized to match your lifestyle, brand identity, and budget. The outcome is a space that feels uniquely yours.",
      icon: Layers,
    },
    {
      title: "Affordable & On-Time",
      description:
        "We’re committed to competitive pricing and timely delivery, ensuring minimal disruption to your home or business.",
      icon: Clock,
    },
  ]

  // New Services Section
  const services = [
    {
      title: "<a href='https://www.homeanddecor.com.sg/renovation/hdb-electrical-loading?ref=titlestacked' class='text-secondary' target='_blank'> HDB Renovation</a>",
      description:
        "We transform HDB flats into stylish and functional homes. From smart space planning to custom carpentry and modern finishes, we maximize every square foot for comfort and practicality.",
      icon: Home,
    },
    {
      title: "Condo Renovation",
      description:
        "Our <a href='https://gharpedia.com/blog/condo-renovation-tips/' class='text-secondary' target='_blank'> condominium renovations</a> combine luxury with functionality. Using premium materials and tailored layouts, we create elegant living spaces that match your lifestyle.",
      icon: Building2,
    },
    {
      title: "Commercial Renovation",
      description:
        "From retail outlets to restaurants and showrooms, we design and renovate commercial spaces that strengthen your brand identity while improving <a href='https://www.strata.sg/reviews' class='text-secondary'> customer experience</a>.",
      icon: Store,
    },
    {
      title: "Office Renovation",
      description:
        "We create modern, efficient, and inspiring office spaces that boost productivity. From open layouts to ergonomic solutions, we tailor designs to your team’s needs and business goals.",
      icon: Briefcase,
    },
    {
      title: "Carpentry Services",
      description:
        "Our skilled carpenters craft bespoke furniture, built-in storage, and cabinetry. Every piece is designed to fit your space perfectly while balancing durability and style.",
      icon: Hammer,
    },
    {
      title: "Electrical Services",
      description:
        "We provide safe, reliable, and professional electrical installations and upgrades for both residential and commercial projects handled by licensed electricians in compliance with Singapore regulations.",
      icon: Zap,
    },
  ];

  const portfolio = {
    residential: [
      {
        title: "HDB 4-Room – 664A Punggol Drive",
        duration: "8 weeks",
        description:
          "A complete 4-room HDB renovation featuring modern layouts, custom carpentry, and optimized living spaces for comfort and practicality.",
        location: "📍 Punggol Drive",
        image: "/images/projects/punggol-hdb/cover.jpg",
      },
      {
        title: "HDB 4-Room – Marine Terrace",
        duration: "10 weeks",
        description:
          "Luxury 4-room HDB transformation with premium black marble floors, geometric tile patterns, and sophisticated finishes.",
        location: "📍 Marine Terrace",
        image: "/images/projects/marine-terrace-hdb/completed-living.jpg",
      },
      {
        title: "Orchid Park Condo – Yishun",
        duration: "12 weeks",
        description:
          "Elegant condominium renovation with refined color schemes, premium marble finishes, and tailor-made built-in solutions.",
        location: "📍 Yishun",
        image: "/images/projects/orchid-park-condo/main-living.jpg",
      },
    ],
    commercial: [
      {
        title: "Luxury Skincare Shop at CityLink – City Hall",
        duration: "6 weeks",
        description:
          "High-end retail fit-out featuring marble finishes, professional treatment rooms, and a sophisticated design that elevates the brand.",
        location: "📍 CityLink Mall, City Hall",
        image: "/images/projects/citylink-skincare-shop/corridor-marble.jpg",
      },
      {
        title: "Restaurant Bar at Novena Square – Novena",
        duration: "8 weeks",
        description:
          "Modern restaurant and sports bar renovation with industrial aesthetics, extensive bar facilities, and contemporary dining layouts.",
        location: "📍 Novena Square, Novena",
        image: "/images/projects/novena-restaurant-bar/full-bar-view.jpg",
      },
    ],
  };

  const sections = [
    {
      title: "Commercial & Office Renovation",
      description:
        "Revamp your workspace with modern, functional, and stylish renovation solutions. We create office environments that enhance productivity, reflect your brand identity, and inspire success.",
      image: "/images/projects/mandarin-gardens-condo/living-dining.jpg",
      reverse: false,
      buttons: [
        { text: "Find Out More", link: "https://www.strata.sg/about" },
        { text: "See Projects", link: "https://www.strata.sg/projects" },
      ],
      bg: "bg-white",
    },
    {
      title: "Residential Renovation",
      description:
        "Transform your home with modern and functional renovation solutions. From HDBs to condos, we enhance every space for greater comfort, beauty, and harmony with your lifestyle.",
      image: "/images/projects/punggol-hdb/kitchen-cabinets.jpg",
      reverse: true,
      buttons: [
        { text: "Learn More", link: "https://www.strata.sg/about" },
        { text: "View Gallery", link: "https://www.strata.sg/projects" },
      ],
      bg: "bg-secondary/20",
    },
    {
      title: "Renovation & Space Planning",
      description:
        "Make the most of your space with smart renovation and thoughtful layout design. Our team creates stylish, efficient, and personalized spaces that perfectly fit your lifestyle and needs.",
      image: "/images/projects/mandarin-gardens-condo/kitchen.jpg",
      reverse: false,
      buttons: [
        { text: "Find Out More", link: "https://www.strata.sg/about" },
        { text: "See Projects", link: "https://www.strata.sg/projects" },
      ],
      bg: "bg-white",
    },
  ]

  const testimonials = [
    {
      name: "Vijaya Ramanathan K",
      text: "I got some renovation work done. Jag was very professional and took the job very seriously and ensured his team got the work completed on time and the quality of work is very good. Excellent service.",
    },
    {
      name: "Chong Wei Ang",
      text: "I engaged strata.sg for home renovation in Singapore. They were easy to work with and kept me updated. Their <a href='https://www.strata.sg/about' class='text-secondary'> premium interior design </a> touches gave my space a better look. I felt comfortable dealing with their Sims Avenue office.",
    },
    {
      name: "Thirumalai Srinivasan",
      text: "My office renovation in Singapore was managed by strata.sg. The team was responsive and professional. They gave me modern interior design suggestions that made sense. Glad I found them while looking for a renovation contractor near me.",
    },
    {
      name: "Jeeva Jasper Arvin",
      text: "Had a great experience with him at strata.sg. He's genuine, professional, and always ready to guide clearly. Highly recommend if you want someone you can trust.",
    },
  ]

  const process = [
    {
      heading: "Consultation & Requirements",
      description:
        "We start by understanding your vision, lifestyle, style preferences, and budget. This ensures every decision we make aligns with your expectations.",
    },
    {
      heading: "Concept & Design Planning",
      description:
        "<a href='https://www.strata.sg/about' class='text-secondary'> Our team</a> develops detailed design concepts, layouts, and 3D renderings so you can visualize the final space. We provide clear proposals that outline materials, timelines, and costs.",
    },
    {
      heading: "Execution & Quality Assurance",
      description:
        "We manage all contractors, suppliers, and on-site work, ensuring the highest standards of craftsmanship and safety. Only premium materials and proven techniques are used for lasting results.",
    },
    {
      heading: "Review & Final Approval",
      description:
        "Before project handover, we conduct a thorough inspection with you to ensure every detail meets your expectations. We make adjustments as needed to guarantee complete satisfaction.",
    },
    {
      heading: "Aftercare & Support ",
      description:
        "Our commitment doesn’t end at handover. We provide follow-up support, maintenance advice, and guidance to ensure your space continues to look and function beautifully.",
    },
  ];

  const faqs = [
    {
      question: "How long does a renovation project typically take in Singapore?",
      answer:
        "The timeline depends on the size and complexity of the project. Most HDB or condo renovations take 6–12 weeks, while larger commercial or office projects may require 12–20 weeks.",
    },
    {
      question: "How much does a renovation cost in Singapore?",
      answer:
        "Renovation costs vary depending on the project type, size, materials, and finishes. After an initial consultation, we provide a transparent, detailed quotation tailored to your budget and requirements.",
    },
    {
      question: "Can you help with permits and regulatory requirements?",
      answer:
        "Absolutely. We manage all approvals with HDB, BCA, and condo management, ensuring your project fully complies with Singapore’s building regulations and safety standards.",
    },
    {
      question: "Can you customize furniture and carpentry?",
      answer:
        "Yes. Our skilled carpenters craft custom furniture, built-in storage, and cabinetry designed to fit your space perfectly while maintaining style and durability.",
    },
    {
      question: "Do you use eco-friendly and durable materials?",
      answer:
        "We incorporate premium, long-lasting materials and offer sustainable solutions such as energy-efficient lighting and space-saving designs to create environmentally responsible spaces.",
    },
    {
      question: "Can you handle both small and large projects?",
      answer:
        "Absolutely. We manage everything from single-room makeovers to full-home, office, or commercial renovations, ensuring consistent quality and professionalism at every scale.",
    },
    {
      question: "What makes Strata.sg different from other renovation contractors?",
      answer:
        "We provide a transparent, customer-centric process, combining design expertise, high-quality craftsmanship, and clear communication from consultation to aftercare. Every project is tailored to your lifestyle, brand, and budget.",
    },
  ];

  return (
    <div className="bg-background">
      {/* About Section */}
      <section className="py-20 bg-secondary/5 animate-fade-in-up">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* Left Side Image */}
            <div className="md:w-5/12 w-full">
              <img
                src="/images/projects\punggol-hdb\living-ceiling.jpg"
                alt="Why Choose Strata"
                className="rounded-2xl shadow-md w-full object-cover"
              />
            </div>

            {/* Right Side Content */}
            <div className="md:w-7/12 w-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Why Choose Strata?
              </h2>

              <div className="space-y-8">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-[14px] font-light text-gray-700 leading-[22px]">
                        {item.link ? (
                          <>
                            Our{" "}
                            <a
                              href={item.link}
                              className="text-secondary"
                            >
                              {item.linkText}
                            </a>{" "}
                            {item.description.replace("Our certified professionals", "")}
                          </>
                        ) : (
                          item.description
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className={` ${greatVibes.className} text-3xl md:text-5xl font-bold text-center mb-5`}>
            Comprehensive Interior Design & Renovation Services
          </h2>
          <p className="text-center mb-14">
            At Strata.sg, we offer comprehensive renovation and
            <a href="https://strata.sg/interior-design-singapore/" className='text-secondary'> interior design solutions </a>
            for homes, condos, offices, and commercial spaces across Singapore. Our services combine style, functionality, and quality craftsmanship to create spaces that reflect your lifestyle, brand, and vision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <service.icon className="w-10 h-10 text-secondary mb-5" />
                    <h3
                      className="text-lg font-semibold mb-3 text-gray-800"
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                  </div>
                  <p
                    className="text-gray-600 text-[15px] leading-[26px]"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section className="py-20 border-t border-gray-100 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-5">
            From Our Portfolio:{" "}
            <span className="text-primary">Real Projects, Real Transformations</span>
          </h3>
          <p className="text-center mb-14">
            Explore our completed <a href='https://www.strata.sg/projects' className='text-secondary'> renovation projects</a> across Singapore, showcasing quality craftsmanship, attention to detail, and functional, stylish designs.
          </p>

          {/* Residential Projects */}
          <div className="mb-16">
            <h4 className={`${greatVibes.className} text-3xl md:text-4xl font-semibold text-[#aa5830] mb-8 text-center`}>
              Residential Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
              {portfolio.residential.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden border border-gray-100 group"
                >
                  <div className="relative h-56 md:h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-semibold mb-1 text-gray-800">
                      {project.title}
                    </h5>
                    <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <p className="text-gray-500 text-sm">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Commercial Projects */}
          <div>
            <h4 className={`${greatVibes.className} text-3xl md:text-4xl font-semibold text-[#aa5830] mb-8 text-center`}>
              Commercial Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
              {portfolio.commercial.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden border border-gray-100 group"
                >
                  <div className="relative h-56 md:h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-semibold mb-1 text-gray-800">
                      {project.title}
                    </h5>
                    <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <p className="text-gray-500 text-sm">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {sections.map((section, i) => (
        <section key={i} className={`${section.bg} py-20 transition-all duration-700`}>
          <div className={`container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center ${section.reverse ? "md:flex-row-reverse" : ""}`}>
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden rounded-xl">
              <Image src={section.image} alt={section.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>

            {/* Content */}
            <div className="space-y-6 md:w-1/2">
              <h2 className={`${greatVibes.className} text-center text-5xl font-extralight text-primary`}>
                {section.title}
              </h2>
              <p className="text-gray-600 text-[15px] text-justify leading-[27px]">{section.description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {section.buttons.map((btn, idx) => (
                  <Button key={idx} asChild variant={idx === 0 ? "default" : "outline"} className="rounded-full px-6 py-3">
                    <a href={btn.link}>{btn.text}</a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process & Inclusions Section */}
      <section className="relative bg-white text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/hero-interior.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-3 lg:px-20">
          <div className="py-30 px-10 m-auto bg-[#eeeeee]" style={{ width: "fit-content" }}>
            <div className="relative " style={{ zIndex: 1 }}>
              <h2 className={`${greatVibes.className} text-4xl md:text-6xl leading-[70px] font-light mb-6`} >
                Our Design Process &
                <br className="hidden md:block" />  Project Showcase
              </h2>
              <p className="text-gray-600 text-[15px] leading-[27px] max-w-2xl mx-auto mb-10 ">
                Every project begins with a clear vision and ends with a beautifully crafted space. Our Singapore interior design team follows a thoughtful process that ensures every detail is planned, refined, and perfectly executed creating interiors that are elegant, functional, and truly inspiring.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a onClick={scrollToProcess}>
                  <Button className="rounded-full border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all px-8 py-3 tracking-[1px] font-light text-[13px]">
                    VIEW OUR PROCESS
                  </Button>
                </a>
                <a href="https://strata.sg/projects">
                  <Button variant="outline" className="rounded-full bg-transparent border border-primary text-white bg-primary hover:text-white transition-all px-8 py-3 tracking-[1px] font-light text-[13px]" >
                    EXPLORE PROJECT PHOTOS
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#aa5830] mb-8 uppercase">
            What Our Clients Say About Us
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] px-6 md:px-20 flex flex-col items-center justify-center transition-transform duration-1000 ease-linear"
                  >
                    <div className="flex justify-center mb-4 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                    <p
                      className="text-gray-600 italic max-w-3xl mx-auto leading-relaxed text-[16px] mb-6"
                      dangerouslySetInnerHTML={{ __html: testimonial.text }}
                    />
                    <p className="text-gray-800 font-medium">— {testimonial.name}</p>
                    <p className="text-sm text-gray-500 mt-1">Renovation</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#aa5830]/80 text-white p-2 rounded-full hover:bg-[#aa5830] transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#aa5830]/80 text-white p-2 rounded-full hover:bg-[#aa5830] transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#aa5830]" : "bg-gray-300"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/10" id="our-process">
        <div className="container mx-auto px-6 lg:px-16 space-y-5 flex flex-col items-center">
          <h3 className={` ${greatVibes.className} text-3xl md:text-5xl font-bold text-center text-secondary mb-5`}>
            How Our Strata Team Works
          </h3>
          <p className="text-center mb-14">
            At Strata.sg, our goal is to make your renovation or interior design project smooth, transparent, and stress-free. From the initial consultation to the final handover, we manage every step with care, professionalism, and attention to detail.
          </p>
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[80%] p-8 shadow-sm rounded-none mx-auto"
            >
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {item.heading}
              </h3>
              <p
                className="text-gray-600 text-[15px] leading-[27px]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border rounded-xl"
                >
                  <AccordionTrigger
                    className="px-6 py-4 text-lg font-semibold text-left hover:text-primary transition-colors no-underline hover:no-underline [&>svg]:text-primary"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="relative py-20 bg-[#f9f9f9] overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="md:w-7/12 h-100 bg-white py-12 px-10 shadow-md text-center md:text-left">
            <h2 className={`${greatVibes.className} text-5xl text-[#aa5830] mb-4 text-center`}>
              Let us help you
            </h2>
            <h3 className="uppercase text-gray-800 text-sm font-semibold tracking-[1px] mb-6 text-center">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-700 text-[15px] leading-[27px] mb-6 text-center">
              Start Your <strong> Renovation Today</strong>
            </p>
            <p className="text-gray-600 text-[14px] leading-[26px] mb-8 text-center">
              Ready to transform your home, office, or commercial space?
              <a href="https://www.strata.sg/contact" className='text-secondary'> Contact Strata.sg </a>
              for a free consultation and a detailed renovation plan tailored to your needs, style, and budget.
            </p>
            <div className="flex justify-center">
              <a href="https://www.strata.sg/contact">
                <Button className="border border-black bg-white text-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all">
                  Request Your Free Quote
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-5/12 h-100 w-100 relative">
            <Image
              src="/images/sarah-chen-new.png"
              alt="Consultation"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </section>
    </div>
  )
}
