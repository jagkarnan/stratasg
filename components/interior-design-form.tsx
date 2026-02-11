"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle } from "lucide-react"

export function InteriorDesignForm() {
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

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Transform Your <span className="text-primary">Space</span>?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Share your vision with us, and we'll bring it to life with creativity, care, and clarity.{" "}
              <a href="https://www.strata.sg/contact" className="text-primary hover:underline">
                Schedule your free consultation today
              </a>
              !
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Request Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus !== "idle" && (
                  <div
                    className={`p-4 rounded-lg flex items-start gap-3 ${submitStatus === "success"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
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
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
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
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                      Service Type *
                    </label>
                    <Select
                      onValueChange={(value) => handleInputChange("serviceType", value)}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HDB Renovation">HDB Renovation</SelectItem>
                        <SelectItem value="Condo Renovation">Condo Renovation</SelectItem>
                        <SelectItem value="Office Renovation">Office Renovation</SelectItem>
                        <SelectItem value="Commercial Renovation">Commercial Renovation</SelectItem>
                        <SelectItem value="Carpentry Service">Carpentry Service</SelectItem>
                        <SelectItem value="Electrical Service">Electrical Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message / Project Details *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    rows={6}
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
                  {isSubmitting ? "Sending..." : "Request Your Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
