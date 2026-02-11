import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Strata.SG | Singapore Renovation Company",
  description:
    "Strata.SG's Terms of Service outlining the terms and conditions for our renovation and construction services in Singapore.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  By engaging STRATA.SG for renovation or construction services, you agree to be bound by these Terms of
                  Service. These terms constitute a legally binding agreement between you ("Client") and STRATA.SG
                  ("Company", "we", "us", or "our").
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Services</h2>
                <p className="mb-4">STRATA.SG provides renovation and construction services including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>HDB and condominium renovations</li>
                  <li>Commercial and office renovations</li>
                  <li>Carpentry and electrical services</li>
                  <li>Design consultation and project management</li>
                  <li>Related construction and renovation services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Quotations and Contracts</h2>
                <p className="mb-4">
                  All quotations are valid for 30 days unless otherwise specified. A formal contract will be executed
                  before commencement of work, detailing scope, timeline, and payment terms. Variations to the original
                  scope may result in additional charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Payment Terms</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Payment schedule will be specified in the contract</li>
                  <li>Progress payments are typically required at key milestones</li>
                  <li>Final payment is due upon project completion and handover</li>
                  <li>Late payment may incur interest charges</li>
                  <li>All prices are in Singapore Dollars and inclusive of GST where applicable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Client Responsibilities</h2>
                <p className="mb-4">The Client agrees to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate information about the property and requirements</li>
                  <li>Obtain necessary permits and approvals where required</li>
                  <li>Provide safe and reasonable access to the work site</li>
                  <li>Make timely decisions on materials and design choices</li>
                  <li>Ensure utilities and services are available as needed</li>
                  <li>Remove or protect personal belongings as advised</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Timeline and Delays</h2>
                <p className="mb-4">
                  Project timelines are estimates based on normal working conditions. Delays may occur due to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Weather conditions or unforeseen circumstances</li>
                  <li>Changes in scope or specifications</li>
                  <li>Permit delays or regulatory requirements</li>
                  <li>Material availability or delivery issues</li>
                  <li>Client-requested modifications or delays</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Warranty</h2>
                <p className="mb-4">
                  We provide a 12-month warranty on workmanship from the date of project completion. This warranty
                  covers defects in materials and workmanship under normal use. The warranty does not cover normal wear
                  and tear, misuse, or damage caused by third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  Our liability is limited to the contract value. We are not liable for indirect, consequential, or
                  incidental damages. We maintain appropriate insurance coverage for our operations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Intellectual Property</h2>
                <p className="mb-4">
                  All designs, plans, and specifications created by STRATA.SG remain our intellectual property. Clients
                  receive a license to use these materials for the specific project only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Termination</h2>
                <p className="mb-4">
                  Either party may terminate the contract with written notice. In case of termination, the Client is
                  liable for work completed and materials ordered. Termination fees may apply as specified in the
                  contract.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Dispute Resolution</h2>
                <p className="mb-4">
                  Any disputes will be resolved through mediation first, and if unsuccessful, through arbitration in
                  Singapore under the Singapore Arbitration Act. These terms are governed by Singapore law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Compliance</h2>
                <p className="mb-4">
                  STRATA.SG is BCA registered and HDB licensed (HB-06-6178B). We comply with all relevant Singapore
                  building codes, safety regulations, and industry standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. Contact Information</h2>
                <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
                <div className="bg-muted p-6 rounded-lg">
                  <p>
                    <strong>STRATA.SG</strong>
                  </p>
                  <p>540 Sims Avenue, Singapore 387603</p>
                  <p>Phone: +65 8188 8935</p>
                  <p>Email: hello@strata.sg</p>
                  <p>BCA Registration | HDB Licensed (HB-06-6178B)</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
