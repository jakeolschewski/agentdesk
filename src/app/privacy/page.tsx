import type { Metadata } from "next";
import Link from "next/link";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — AgentDesk",
  description:
    "Privacy Policy for AgentDesk, an AI agent platform by WEDGE Method LLC.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                AgentDesk
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-10">
            Effective Date: March 26, 2026 &middot; Last Updated: March 26,
            2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <p>
              This Privacy Policy describes how{" "}
              <strong>WEDGE Method LLC</strong> (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
              uses, shares, and protects personal information when you use the
              AgentDesk platform and related services (the
              &quot;Service&quot;). By using the Service, you consent to the
              practices described in this policy.
            </p>

            <Section title="1. Information We Collect">
              <h3 className="text-base font-semibold text-slate-800 mt-2">
                Information You Provide
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  and company name when you create an account or join our
                  waitlist.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card or other
                  payment details processed securely through Stripe. We do not
                  store your full payment card numbers on our servers.
                </li>
                <li>
                  <strong>Content and Inputs:</strong> Data, text, documents,
                  and other content you provide to the Service for AI
                  processing.
                </li>
                <li>
                  <strong>Communications:</strong> Emails, support requests,
                  and other correspondence you send to us.
                </li>
              </ul>
              <h3 className="text-base font-semibold text-slate-800 mt-4">
                Information Collected Automatically
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Usage Data:</strong> Pages visited, features used,
                  actions taken, timestamps, and interaction patterns within
                  the Service.
                </li>
                <li>
                  <strong>Device and Browser Information:</strong> IP address,
                  browser type and version, operating system, device type, and
                  screen resolution.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use
                  minimal cookies for session management and basic analytics.
                  See Section 7 for details.
                </li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Provide the Service:</strong> Process your inputs
                  through AI agents, generate outputs, and deliver the core
                  functionality of the platform.
                </li>
                <li>
                  <strong>Process Payments:</strong> Manage subscriptions,
                  billing, and invoicing through Stripe.
                </li>
                <li>
                  <strong>Improve the Service:</strong> Analyze usage patterns
                  to improve features, performance, and user experience.
                </li>
                <li>
                  <strong>Provide Support:</strong> Respond to your inquiries,
                  troubleshoot issues, and provide customer support.
                </li>
                <li>
                  <strong>Communicate with You:</strong> Send service-related
                  notices, billing confirmations, security alerts, and product
                  updates.
                </li>
                <li>
                  <strong>Ensure Security:</strong> Detect, prevent, and
                  address fraud, abuse, and security incidents.
                </li>
                <li>
                  <strong>Comply with Legal Obligations:</strong> Meet
                  applicable legal, regulatory, and tax requirements.
                </li>
              </ul>
            </Section>

            <Section title="3. Third-Party Service Providers">
              <p>
                We share your information with the following third-party
                service providers, solely as necessary to operate the Service:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">
                        Provider
                      </th>
                      <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">
                        Purpose
                      </th>
                      <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">
                        Data Shared
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium">Stripe, Inc.</td>
                      <td className="p-3">Payment processing</td>
                      <td className="p-3">
                        Name, email, payment card details
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium">Anthropic, PBC</td>
                      <td className="p-3">AI processing (Claude API)</td>
                      <td className="p-3">
                        Content inputs for AI processing
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium">Vercel, Inc.</td>
                      <td className="p-3">Website and application hosting</td>
                      <td className="p-3">
                        IP address, usage data, request logs
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Resend, Inc.</td>
                      <td className="p-3">Transactional email delivery</td>
                      <td className="p-3">Name, email address</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to any
                third party. We require all service providers to handle your
                data in accordance with applicable privacy laws.
              </p>
            </Section>

            <Section title="4. Data Retention">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account Data:</strong> Retained for as long as your
                  account is active. Upon account closure, we will delete your
                  personal data within 30 days, except where retention is
                  required by law (e.g., tax records, billing history).
                </li>
                <li>
                  <strong>AI Processing Data:</strong> Content inputs submitted
                  to AI agents are not permanently stored by default. They are
                  processed in real-time and discarded after the output is
                  generated.
                </li>
                <li>
                  <strong>Usage and Analytics Data:</strong> Aggregated,
                  anonymized usage data may be retained indefinitely for
                  product improvement purposes.
                </li>
                <li>
                  <strong>Billing Records:</strong> Transaction records are
                  retained for 7 years to comply with tax and accounting
                  requirements.
                </li>
              </ul>
            </Section>

            <Section title="5. Your Rights">
              <p>
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data
                  we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of
                  inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data, subject to legal retention requirements.
                </li>
                <li>
                  <strong>Data Export:</strong> Request a portable copy of your
                  data in a commonly used, machine-readable format.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications at any time using the link in any email we
                  send.
                </li>
                <li>
                  <strong>Restriction:</strong> Request that we restrict
                  processing of your personal data in certain circumstances.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:jacob@thewedgemethodai.com"
                  className="text-blue-600 hover:underline"
                >
                  jacob@thewedgemethodai.com
                </a>
                . We will respond to all verifiable requests within 30 days.
              </p>
            </Section>

            <Section title="6. CCPA Compliance (California Residents)">
              <p>
                If you are a California resident, you have the following rights
                under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Right to Know:</strong> You may request disclosure of
                  the categories and specific pieces of personal information we
                  have collected about you.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You may request deletion of
                  your personal information, subject to certain exceptions.
                </li>
                <li>
                  <strong>Right to Opt-Out of Sale:</strong> We do not sell
                  personal information. No opt-out is necessary.
                </li>
                <li>
                  <strong>Non-Discrimination:</strong> We will not
                  discriminate against you for exercising any of your CCPA
                  rights.
                </li>
              </ul>
            </Section>

            <Section title="7. GDPR Compliance (EEA/UK Residents)">
              <p>
                If you are located in the European Economic Area or the United
                Kingdom, the following provisions apply:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Legal Basis:</strong> We process your personal data
                  based on: (a) your consent; (b) performance of a contract;
                  (c) our legitimate business interests; or (d) compliance with
                  legal obligations.
                </li>
                <li>
                  <strong>Data Transfers:</strong> Your data may be transferred
                  to and processed in the United States. We ensure appropriate
                  safeguards are in place for international transfers.
                </li>
                <li>
                  <strong>Data Protection Officer:</strong> For GDPR-related
                  inquiries, contact us at{" "}
                  <a
                    href="mailto:jacob@thewedgemethodai.com"
                    className="text-blue-600 hover:underline"
                  >
                    jacob@thewedgemethodai.com
                  </a>
                  .
                </li>
                <li>
                  <strong>Supervisory Authority:</strong> You have the right to
                  lodge a complaint with your local data protection authority.
                </li>
              </ul>
            </Section>

            <Section title="8. Cookies and Tracking Technologies">
              <p>
                We use minimal cookies and similar technologies to operate the
                Service:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">
                        Cookie Type
                      </th>
                      <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">
                        Purpose
                      </th>
                      <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium">Session Cookies</td>
                      <td className="p-3">
                        Authentication and session management
                      </td>
                      <td className="p-3">Browser session</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Analytics Cookies</td>
                      <td className="p-3">
                        Understand usage patterns and improve the Service
                      </td>
                      <td className="p-3">Up to 12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                You can control cookies through your browser settings. Blocking
                certain cookies may affect the functionality of the Service.
              </p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                The Service is not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                anyone under 18 years of age. If we become aware that we have
                collected personal data from a child under 18, we will take
                steps to delete that information promptly. If you believe a
                child under 18 has provided us with personal information,
                please contact us at{" "}
                <a
                  href="mailto:jacob@thewedgemethodai.com"
                  className="text-blue-600 hover:underline"
                >
                  jacob@thewedgemethodai.com
                </a>
                .
              </p>
            </Section>

            <Section title="10. Data Security">
              <p>
                We implement reasonable technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Encryption of data in transit (TLS/HTTPS)</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Regular security assessments</li>
                <li>
                  Access controls limiting employee access to personal data
                </li>
                <li>Secure payment processing through PCI-DSS compliant Stripe</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. We cannot guarantee absolute
                security.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by email or through a
                prominent notice on the Service at least 30 days before the
                changes take effect. Your continued use of the Service after
                changes are posted constitutes acceptance of the revised
                policy.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                For questions, concerns, or requests regarding this Privacy
                Policy or your personal data, please contact us at:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm space-y-1">
                <p className="font-semibold text-slate-900">
                  WEDGE Method LLC
                </p>
                <p>8977 S 1300 W, Unit #615</p>
                <p>West Jordan, UT 84088</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:jacob@thewedgemethodai.com"
                    className="text-blue-600 hover:underline"
                  >
                    jacob@thewedgemethodai.com
                  </a>
                </p>
                <p>Phone: (801) 513-0752</p>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm">AgentDesk</span>
            <span className="text-xs text-slate-400">by WEDGE Method LLC</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/terms" className="hover:text-slate-600 transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-slate-600 transition">
              Privacy Policy
            </Link>
            <span>
              &copy; {new Date().getFullYear()} WEDGE Method LLC. All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
