import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How long does an HDB renovation take?",
      answer:
        "Typically 6–8 weeks, depending on approvals and scope. Simple renovations may take 4-6 weeks, while major renovations with hacking and extensive carpentry can take 8-12 weeks. We provide a detailed timeline during the consultation phase.",
    },
    {
      question: "Do you handle HDB renovation permits?",
      answer:
        "Yes, we handle all necessary permits and approvals for your HDB renovation. Our team is familiar with HDB regulations and will ensure your renovation complies with all building codes and safety requirements.",
    },
    {
      question: "What's included in your renovation packages?",
      answer:
        "Our packages typically include design consultation, project management, materials, labor, and cleanup. Specific inclusions vary by package level. We provide detailed quotations outlining exactly what's covered in your renovation.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "We offer renovation solutions for various budgets. During our consultation, we'll discuss your budget and priorities to create a plan that maximizes value while staying within your financial comfort zone.",
    },
    {
      question: "Do you provide warranty for your work?",
      answer:
        "Yes, we provide comprehensive warranties on our workmanship and materials. Structural work comes with a 2-year warranty, while electrical and plumbing work includes a 1-year warranty. Specific warranty terms are detailed in your contract.",
    },
    {
      question: "What areas in Singapore do you serve?",
      answer:
        "We serve all areas across Singapore, including HDB estates, private condominiums, and commercial properties. Our team is familiar with regulations across different districts and housing types.",
    },
    {
      question: "How do you ensure quality control?",
      answer:
        "We have a dedicated project manager for each renovation who conducts regular quality checks. We also provide progress photos and updates, and conduct a final walkthrough with you before project completion.",
    },
    {
      question: "Can I stay in my home during renovation?",
      answer:
        "This depends on the scope of work. For minor renovations, you may be able to stay. For major renovations involving hacking or extensive work, temporary relocation is often recommended for safety and comfort. We'll advise you during planning.",
    },
    {
      question: "What payment terms do you offer?",
      answer:
        "We typically work on a progressive payment schedule tied to project milestones. A small deposit is required to start, with subsequent payments made as work progresses. Full payment terms are outlined in your contract.",
    },
    {
      question: "Do you help with interior design?",
      answer:
        "Yes, our team includes experienced interior designers who can help with space planning, color schemes, material selection, and furniture recommendations to create a cohesive and functional living space.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get answers to common questions about our renovation services, processes, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border shadow-sm">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
