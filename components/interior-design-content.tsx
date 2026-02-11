"use client"
import { ChevronLeft, ChevronRight, Home, Building2, Briefcase, Store, Hammer, Zap } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button"
import { Great_Vibes } from "next/font/google"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })

export function InteriorDesignContent() {
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

  // New Services Section
  const services = [
    {
      title: "HDB Renovation",
      description:
        "Transforming HDB flats into functional and stylish homes with creative layouts and custom carpentry.",
      icon: Home,
    },
    {
      title: "Condo Renovation",
      description:
        "Elegant, space-optimized condo interiors designed for comfort and sophistication.",
      icon: Building2,
    },
    {
      title: "Commercial Renovation",
      description:
        "Impactful and practical spaces for restaurants, showrooms, and retail environments.",
      icon: Store,
    },
    {
      title: "Office Renovation",
      description:
        "Modern offices designed for productivity, collaboration, and professional aesthetics.",
      icon: Briefcase,
    },
    {
      title: "Carpentry Services",
      description:
        "Bespoke carpentry solutions including wardrobes, feature walls, and functional furniture.",
      icon: Hammer,
    },
    {
      title: "Electrical Services",
      description:
        "Licensed electrical installations and maintenance ensuring safety and efficiency.",
      icon: Zap,
    },
  ];

  const portfolio = {
    residential: [
      {
        title: "HDB 4-Room – 664A Punggol Drive",
        duration: "8 weeks",
        description:
          "Complete 4-room HDB renovation featuring modern design, custom carpentry, and optimized living spaces.",
        location: "📍 Punggol Drive",
        image: "/images/projects/punggol-hdb/cover.jpg",
      },
      {
        title: "HDB 4-Room – Marine Terrace",
        duration: "10 weeks",
        description:
          "Luxury 4-room HDB renovation featuring premium black marble floors, geometric tile patterns, and sophisticated finishes.",
        location: "📍 Marine Terrace",
        image: "/images/projects/marine-terrace-hdb/completed-living.jpg",
      },
      {
        title: "Orchid Park Condo – Yishun",
        duration: "12 weeks",
        description:
          "Luxury condominium renovation with sophisticated color schemes, premium marble finishes, and custom built-in solutions.",
        location: "📍 Yishun",
        image: "/images/projects/orchid-park-condo/main-living.jpg",
      },
    ],
    commercial: [
      {
        title: "Luxury Skincare Shop at CityLink – City Hall",
        duration: "6 weeks",
        description:
          "High-end skincare and beauty shop featuring luxury marble finishes, professional treatment rooms, and sophisticated commercial design.",
        location: "📍 CityLink Mall, City Hall",
        image: "/images/projects/citylink-skincare-shop/corridor-marble.jpg",
      },
      {
        title: "Restaurant Bar at Novena Square – Novena",
        duration: "8 weeks",
        description:
          "Modern restaurant and sports bar featuring industrial design, extensive bar facilities, and contemporary dining spaces.",
        location: "📍 Novena Square, Novena",
        image: "/images/projects/novena-restaurant-bar/full-bar-view.jpg",
      },
    ],
  };

  const sections = [
    {
      title: "Commercial & Office Interiors",
      description:
        "Enhance productivity and brand image with modern, space-efficient office interiors. Our designs combine functionality with aesthetics to reflect your company’s professional identity.",
      image: "/images/projects/mandarin-gardens-condo/living-dining.jpg",
      reverse: false,
      buttons: [
        { text: "Find Out More", link: "https://www.strata.sg/about" },
        { text: "See Projects", link: "https://www.strata.sg/projects" },
      ],
      bg: "bg-white",
    },
    {
      title: "Residential Interior Design",
      description:
        "Create your dream home with elegant and functional interiors tailored to Singapore living. From HDBs to condos, we design every space for comfort, beauty, and lifestyle harmony.",
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
        "Maximize every inch of your space with smart renovation and layout planning. We deliver creative, practical solutions to make your interiors stylish, efficient, and uniquely yours.",
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
      heading: "Initial Consultation",
      description:
        "We begin by understanding your needs, budget, and timeline to create a personalized renovation or interior design plan that aligns with your goals.",
    },
    {
      heading: "Concept and Design Proposal",
      description:
        "Our team presents detailed mood boards, layout plans, and 3D renderings to help you visualize your space and fine-tune every design element before work begins.",
    },
    {
      heading: "Design Review and Approval",
      description:
        "You’ll review the proposed designs, and we’ll make refinements based on your feedback until every detail perfectly matches your vision and expectations.",
    },
    {
      heading: "Execution and Project Management",
      description:
        "We coordinate contractors, manage timelines, and oversee every stage of the renovation to ensure a seamless process with top-quality workmanship.",
    },
    {
      heading: "Delivery and Aftercare",
      description:
        "Once your project is complete, we handle the finishing touches, deliver your beautifully transformed space, and offer ongoing support to ensure your continued satisfaction.",
    },
  ];

  const faqs = [
    {
      question: "What is the cost of interior design in Singapore?",
      answer:
        "The cost depends on the size, style, and scope of your project. After an initial consultation, we provide a transparent quotation tailored to your requirements and budget.",
    },
    {
      question: "How long does a project take?",
      answer:
        "For most apartments, the renovation timeline is approximately 6–10 weeks. Larger or more complex projects, such as landed properties or commercial spaces, may require 12–20 weeks.",
    },
    {
      question: "Do you offer design-only packages?",
      answer:
        "Yes. If you already have your own contractors, we provide flexible design consultancy packages where we handle the creative planning and design, while your contractors manage the execution.",
    },
    {
      question: "Can you help with permits or regulatory requirements?",
      answer:
        "Yes. We take care of all necessary approvals with HDB, BCA, or your condo management and ensure your renovation fully complies with Singapore’s building regulations and safety standards.",
    },
    {
      question: "Do you offer sustainable or eco-friendly design solutions?",
      answer:
        "Yes. We incorporate energy-efficient lighting, eco-friendly materials, and space-saving layouts to create designs that are both stylish and environmentally responsible.",
    },
    {
      question: "Can you customize furniture and carpentry?",
      answer:
        "Definitely. We work with experienced carpenters to craft custom furniture, storage solutions, and built-ins that perfectly fit your space.",
    },
    {
      question: "What if I only need a small renovation?",
      answer:
        "No project is too small. Whether it’s a simple room makeover or a full renovation, we tailor our services to your needs.",
    },
  ];


  return (
    <div className="bg-background">
      {/* About Section */}
      <section className="py-20 bg-secondary/5 animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes
            <a href="https://www.strata.sg/about" className='text-secondary'> Strata Your Ideal Interior Design Partner</a>
          </h2>
          <p className="max-w-3xl mx-auto text-[14px] leading-[23px] font-light text-gray-700">
            Every home and workplace is unique. That’s why we start by understanding how you live, work, and use your space—so our interior design in Singapore enhances your lifestyle rather than simply following trends. We maximize your budget, ensuring every detail adds value. From lighting to layout, our focus is on blending elegance with functionality. With transparent pricing and no hidden costs, you’ll always know what to expect. Backed by years of experience across Singapore, our portfolio includes
            <a href="https://en.wikipedia.org/wiki/Public_housing_in_Singapore" className='text-secondary' target="_blank"> HDB flats </a>
            condominiums, offices, and industrial interiors.
          </p>
          <div className="mt-5">
            <a href="https://www.strata.sg/contact">
              <Button size="lg" className="bg-primary tracking-[1px] font-light text-[13px] text-white hover:bg-primary/90 px-8 py-4 rounded-[20px]">
                BOOK A FREE 15-MIN PHONE CONSULTATION
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className={` ${greatVibes.className} text-3xl md:text-5xl font-bold text-center mb-14`}>
            Our <span className="text-primary">Interior Design & Renovation</span> Services
          </h2>
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
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-[26px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section className="py-20 border-t border-gray-100 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
            From Our Portfolio:{" "}
            <span className="text-primary">Real Projects, Real Transformations</span>
          </h3>

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
                Our design process ensures every detail is thoughtfully planned and beautifully executed. See how our Singapore interior design team transforms spaces into elegant, functional, and inspiring environments.
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
            What <a href="https://www.strata.sg/reviews"> our customers</a> say
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
          <h3 className={` ${greatVibes.className} text-3xl md:text-5xl font-bold text-center text-secondary mb-14`}>Our Transparent and Customer-Centric Process</h3>
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[80%] p-8 shadow-sm rounded-none mx-auto"
            >
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {item.heading}
              </h3>
              <p className="text-gray-600 text-[15px] leading-[27px]">
                {item.description}
              </p>
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
              Let us help you by booking your <strong>FREE 15-minute consult call today!</strong>
            </p>
            <p className="text-gray-600 text-[14px] leading-[26px] mb-8 text-center">
              Share your vision with us, and we’ll bring it to life with creativity, care, and clarity. Schedule your <a href="https://www.strata.sg/contact" className="text-secondary"> free consultation today!</a>
            </p>
            <div className="flex justify-center">
              <a href="https://www.strata.sg/contact">
                <Button className="border border-black bg-white text-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all">
                  CONSULT NOW
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-5/12 h-100 w-100 relative">
            <Image
              src="/images/jennifer-wong-latest.png"
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
