"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      let result
      try {
        const contentType = response.headers.get("content-type")
        if (contentType && contentType.includes("application/json")) {
          result = await response.json()
        } else {
          // Non-JSON response
          result = { error: "Server returned an invalid response" }
        }
      } catch (jsonError) {
        // JSON parsing failed
        console.error("[v0] JSON parse error:", jsonError)

      }

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.")
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Network error:", error)
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const topContactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+65 8188 8935", "Mon-Fri: 9AM-6PM", "Sat: 9AM-2PM"],
      action: "Call Now",
      href: "tel:+6581888935",
      showOnMobile: true, // Only show on mobile/tablet
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      details: ["+65 8188 8935", "Quick responses", "24/7 availability"],
      action: "WhatsApp",
      href: "https://wa.me/6581888935?text=Strata.sg%20Website%20-%20I%20am%20interested%20in%20your%20renovation%20services.%20Please%20contact%20me.",
      showOnMobile: false,
    },
  ]

  const bottomContactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@strata.sg", "Response within 24hrs"],
      action: "Send Email",
      href: "mailto:hello@strata.sg",
      showOnMobile: false,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Emergency services available 24/7",
      ],
      action: null,
      href: null,
      showOnMobile: false,
    },
    {
      icon: MapPin,
      title: "Our Office",
      details: ["540 Sims Avenue", "Singapore 387603", "By appointment only"],
      action: null, // Removed Get Directions button
      href: null,
      showOnMobile: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to start your renovation project? Contact us for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus !== "idle" && (
                  <div
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <p className={`text-sm ${submitStatus === "success" ? "text-green-800" : "text-red-800"}`}>
                      {submitMessage}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+65 XXXX XXXX"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                    Service Type
                  </label>
                  <Select onValueChange={(value) => handleInputChange("serviceType", value)} disabled={isSubmitting}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hdb-renovation">HDB Renovation</SelectItem>
                      <SelectItem value="condo-renovation">Condo Renovation</SelectItem>
                      <SelectItem value="commercial-renovation">Commercial Renovation</SelectItem>
                      <SelectItem value="office-renovation">Office Renovation</SelectItem>
                      <SelectItem value="carpentry">Carpentry Services</SelectItem>
                      <SelectItem value="electrical">Electrical Services</SelectItem>
                      <SelectItem value="plumbing">Plumbing Services</SelectItem>
                      <SelectItem value="painting">Painting Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your renovation project..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {topContactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <div className="space-y-1 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && info.href && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className={`bg-transparent hover:bg-secondary hover:text-secondary-foreground ${
                            info.showOnMobile ? "md:hidden" : ""
                          }`}
                        >
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.action}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomContactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <info.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className={`text-muted-foreground ${info.title === "Business Hours" && idx === 3 ? "text-sm text-secondary" : ""}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.action && info.href && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="bg-transparent hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.action}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-[16/9] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7793234567!2d103.8776!3d1.3138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19d8b6b5b5b5%3A0x1234567890abcdef!2s540%20Sims%20Ave%2C%20Singapore%20387603!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Strata.SG Office Location - 540 Sims Avenue, Singapore 387603"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
