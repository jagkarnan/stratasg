"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function RenovationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        body: JSON.stringify({
          ...formData,
          subject: `Renovation Quote Request - ${formData.serviceType}`,
        }),
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
        setFormData({
          name: "",
          email: "",
          phone: "",
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

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Start Your Renovation Today</h2>
          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Ready to transform your home, office, or commercial space? Contact Strata.sg for a free consultation and a
            detailed renovation plan tailored to your needs, style, and budget.
          </p>

          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Transform Your Space?</h3>

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

                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    required
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="mt-1">
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

                <div>
                  <Label htmlFor="message">Message / Project Details</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
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
