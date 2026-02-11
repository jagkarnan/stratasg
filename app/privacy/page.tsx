import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Strata.SG | Singapore Renovation Company",
  description:
    "Strata.SG's Privacy Policy outlining how we collect, use, and protect your personal data in compliance with Singapore's PDPA.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
                <p className="mb-4">
                  STRATA.SG ("we", "our", or "us") is committed to protecting your privacy and personal data. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your personal data in accordance
                  with Singapore's Personal Data Protection Act 2012 ("PDPA") and other applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Personal Data We Collect</h2>
                <p className="mb-4">We may collect the following types of personal data:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, phone number, email address, mailing address)</li>
                  <li>Property information (address, type of property, renovation requirements)</li>
                  <li>Communication records (emails, messages, call logs)</li>
                  <li>Project documentation (photos, measurements, specifications)</li>
                  <li>Payment information (billing address, payment method details)</li>
                  <li>Website usage data (IP address, browser information, cookies)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Personal Data</h2>
                <p className="mb-4">We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Providing renovation and construction services</li>
                  <li>Processing quotations and managing projects</li>
                  <li>Communicating with you about our services</li>
                  <li>Processing payments and managing accounts</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our services and website functionality</li>
                  <li>Marketing our services (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Disclosure of Personal Data</h2>
                <p className="mb-4">We may disclose your personal data to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Our employees, contractors, and subcontractors involved in your project</li>
                  <li>Third-party service providers (payment processors, suppliers, logistics)</li>
                  <li>Government authorities when required by law</li>
                  <li>Professional advisors (lawyers, accountants, auditors)</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against
                  unauthorized access, disclosure, alteration, or destruction. This includes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Secure data storage and transmission</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Your Rights</h2>
                <p className="mb-4">Under the PDPA, you have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate personal data</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request deletion of your personal data (subject to legal requirements)</li>
                  <li>Object to direct marketing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Data Retention</h2>
                <p className="mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was
                  collected, comply with legal obligations, or resolve disputes. Project-related data may be retained
                  for up to 7 years for warranty and legal purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Cookies and Website Data</h2>
                <p className="mb-4">
                  Our website uses cookies to improve user experience and analyze website traffic. You can control
                  cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Updates to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact
                  us:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p>
                    <strong>STRATA.SG</strong>
                  </p>
                  <p>540 Sims Avenue, Singapore 387603</p>
                  <p>Phone: +65 8188 8935</p>
                  <p>Email: hello@strata.sg</p>
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
