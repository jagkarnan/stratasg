"use client"

import Image from "next/image"

export default function FloatingWhatsApp() {
  const phoneNumber = "+6581888935" // WhatsApp number without spaces or special characters
  const message = "Strata.sg Website - I am interested in your renovation services. Please contact me."

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-full h-full object-contain"
      />
    </button>
  )
}
