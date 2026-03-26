import type { Metadata } from "next";
import Link from "next/link";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — AgentDesk",
  description:
    "Terms of Service for AgentDesk, an AI agent platform by WEDGE Method LLC.",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mb-10">
            Effective Date: March 26, 2026 &middot; Last Updated: March 26,
            2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally
              binding agreement between you (&quot;Customer,&quot;
              &quot;you,&quot; or &quot;your&quot;) and{" "}
              <strong>WEDGE Method LLC</strong>, a Utah limited liability
              company (EIN 41-4360476) (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;), governing your access to and
              use of the AgentDesk platform, including all related services,
              APIs, and documentation (collectively, the &quot;Service&quot;).
            </p>
            <p>
              By creating an account, subscribing to a plan, or otherwise
              accessing or using the Service, you acknowledge that you have
              read, understood, and agree to be bound by these Terms.{" "}
              <strong>
                If you do not agree to these Terms, do not use the Service.
              </strong>
            </p>

            <Section title="1. Service Description">
              <p>
                AgentDesk provides pre-built AI agents designed for professional
                services firms, including but not limited to client intake
                automation, proposal generation, and report creation. The
                Service uses artificial intelligence, including third-party AI
                models, to process your inputs and generate outputs on your
                behalf.
              </p>
              <p>
                The Service is provided on a &quot;professional best
                efforts&quot; basis. While we strive for high-quality,
                accurate, and useful AI outputs, we do not guarantee that any
                output will be error-free, complete, or suitable for any
                specific purpose. You are responsible for reviewing and
                approving all AI-generated content before use.
              </p>
            </Section>

            <Section title="2. Account Registration and Eligibility">
              <p>
                You must be at least 18 years of age and capable of forming a
                binding contract to use the Service. By registering, you
                represent that all information you provide is accurate and
                current. You are responsible for maintaining the confidentiality
                of your account credentials and for all activity that occurs
                under your account.
              </p>
            </Section>

            <Section title="3. Subscription Terms and Billing">
              <p>
                The Service is offered on a monthly subscription basis. All
                payments are processed through Stripe, Inc. By subscribing, you
                authorize us to charge your designated payment method on a
                recurring monthly basis.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Billing Cycle:</strong> Subscriptions are billed
                  monthly on the anniversary of your subscription start date.
                </li>
                <li>
                  <strong>Cancellation:</strong> You may cancel your
                  subscription at any time through your account dashboard or by
                  contacting us at{" "}
                  <a
                    href="mailto:jacob@thewedgemethodai.com"
                    className="text-blue-600 hover:underline"
                  >
                    jacob@thewedgemethodai.com
                  </a>
                  . Cancellation takes effect at the end of the current billing
                  period. No refunds are issued for partial months.
                </li>
                <li>
                  <strong>Price Changes:</strong> We may adjust pricing with at
                  least 30 days&apos; notice. Continued use after a price
                  change constitutes acceptance of the new pricing.
                </li>
                <li>
                  <strong>Free Trials:</strong> If a free trial is offered, you
                  will not be charged until the trial period expires. You may
                  cancel before the trial ends to avoid charges.
                </li>
              </ul>
            </Section>

            <Section title="4. Acceptable Use">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Engage in any activity that is illegal, fraudulent, or
                  harmful, or that violates any applicable law or regulation.
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or otherwise
                  attempt to derive the source code or underlying algorithms of
                  the Service.
                </li>
                <li>
                  Share, transfer, sell, or sublicense your API keys, account
                  credentials, or access to the Service to any third party.
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  Service, its servers, or connected networks.
                </li>
                <li>
                  Use the Service to generate content that is defamatory,
                  obscene, threatening, or that infringes on the rights of
                  others.
                </li>
                <li>
                  Use automated means (bots, scrapers, etc.) to access the
                  Service beyond the intended API usage.
                </li>
                <li>
                  Circumvent any rate limits, usage quotas, or access controls
                  imposed by the Service.
                </li>
              </ul>
              <p>
                Violation of this section may result in immediate suspension or
                termination of your account without refund.
              </p>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                <strong>Platform Ownership:</strong> The Service, including all
                software, algorithms, designs, documentation, trademarks, and
                other intellectual property, is and remains the exclusive
                property of WEDGE Method LLC. Nothing in these Terms grants you
                any ownership interest in the Service.
              </p>
              <p>
                <strong>Your Content:</strong> You retain full ownership of all
                data, content, and materials you provide to the Service
                (&quot;Your Content&quot;). You also retain ownership of all
                outputs generated by the Service using Your Content. We claim
                no ownership over Your Content or outputs.
              </p>
              <p>
                <strong>License to Us:</strong> You grant us a limited,
                non-exclusive, worldwide license to process Your Content solely
                as necessary to provide the Service to you. This license
                terminates when you delete Your Content or close your account.
              </p>
            </Section>

            <Section title="6. Data Processing">
              <p>
                The Service uses the Anthropic Claude API and other third-party
                AI services to process your inputs and generate outputs. By
                using the Service, you acknowledge and consent to this
                processing.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Your inputs are transmitted to third-party AI providers
                  solely for the purpose of generating outputs.
                </li>
                <li>
                  By default, your inputs are not permanently stored by us or
                  by our AI processing partners beyond what is necessary to
                  fulfill the immediate request.
                </li>
                <li>
                  We may retain metadata (such as timestamps and task types)
                  for analytics, billing, and service improvement purposes.
                </li>
                <li>
                  You should not submit sensitive personal data, protected
                  health information, or other regulated data to the Service
                  unless you have independently confirmed compliance with
                  applicable regulations.
                </li>
              </ul>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL WEDGE METHOD LLC, ITS OFFICERS, DIRECTORS, MEMBERS,
                EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR
                GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR
                INABILITY TO USE THE SERVICE, REGARDLESS OF THE THEORY OF
                LIABILITY.
              </p>
              <p>
                <strong>
                  OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING
                  OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT
                  EXCEED THE TOTAL FEES PAID BY YOU TO US DURING THE TWELVE
                  (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO
                  THE CLAIM.
                </strong>
              </p>
            </Section>

            <Section title="8. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless WEDGE Method
                LLC and its officers, directors, members, employees, and agents
                from and against any and all claims, liabilities, damages,
                losses, costs, and expenses (including reasonable
                attorneys&apos; fees) arising out of or related to: (a) your
                use of the Service; (b) Your Content or any outputs you
                generate using the Service; (c) your violation of these Terms;
                or (d) your violation of any applicable law or regulation or
                the rights of any third party.
              </p>
            </Section>

            <Section title="9. Dispute Resolution">
              <p>
                <strong>
                  PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL
                  RIGHTS.
                </strong>
              </p>
              <p>
                <strong>30-Day Resolution Period:</strong> Before initiating
                any formal dispute resolution, you agree to first contact us at{" "}
                <a
                  href="mailto:jacob@thewedgemethodai.com"
                  className="text-blue-600 hover:underline"
                >
                  jacob@thewedgemethodai.com
                </a>{" "}
                and provide a written description of your claim. Both parties
                agree to engage in good-faith negotiations for a period of
                thirty (30) days from the date of such notice before pursuing
                any formal proceedings.
              </p>
              <p>
                <strong>Binding Arbitration:</strong> If the dispute is not
                resolved within the 30-day resolution period, any controversy
                or claim arising out of or relating to these Terms or the
                Service shall be settled by binding arbitration administered by
                the American Arbitration Association (&quot;AAA&quot;) in
                accordance with its Commercial Arbitration Rules. The
                arbitration shall take place in Salt Lake County, Utah. The
                arbitrator&apos;s decision shall be final and binding and may
                be entered as a judgment in any court of competent
                jurisdiction.
              </p>
              <p>
                <strong>Class Action Waiver:</strong> You agree that any
                arbitration or proceeding shall be conducted only on an
                individual basis and not in a class, consolidated, or
                representative action. If for any reason a claim proceeds in
                court rather than in arbitration, each party waives any right
                to a jury trial.
              </p>
            </Section>

            <Section title="10. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Utah, without regard to its
                conflict of laws provisions. Any legal action or proceeding not
                subject to arbitration shall be brought exclusively in the
                state or federal courts located in Salt Lake County, Utah.
              </p>
            </Section>

            <Section title="11. Termination">
              <p>
                We may suspend or terminate your access to the Service at any
                time, with or without cause, and with or without notice. Upon
                termination, your right to use the Service ceases immediately.
                Sections 5, 7, 8, 9, 10, and 12 shall survive termination.
              </p>
              <p>
                You may terminate your account at any time by canceling your
                subscription and contacting us to request account deletion.
              </p>
            </Section>

            <Section title="12. Disclaimers">
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
                IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted,
                error-free, secure, or that any defects will be corrected. AI
                outputs may contain inaccuracies and should be reviewed before
                reliance or distribution.
              </p>
            </Section>

            <Section title="13. Modifications to Terms">
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify you of material changes by email or through the Service
                at least 30 days before the changes take effect. Your continued
                use of the Service after such changes constitutes acceptance of
                the modified Terms.
              </p>
            </Section>

            <Section title="14. Active Acceptance">
              <p>
                By clicking &quot;I Agree,&quot; creating an account, or using
                the Service in any way, you affirmatively and actively accept
                these Terms in their entirety. This constitutes your electronic
                signature and has the same force and effect as a handwritten
                signature.
              </p>
            </Section>

            <Section title="15. Miscellaneous">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Entire Agreement:</strong> These Terms, together with
                  our Privacy Policy, constitute the entire agreement between
                  you and WEDGE Method LLC regarding the Service.
                </li>
                <li>
                  <strong>Severability:</strong> If any provision of these
                  Terms is found to be unenforceable, the remaining provisions
                  shall continue in full force and effect.
                </li>
                <li>
                  <strong>Waiver:</strong> Our failure to enforce any provision
                  of these Terms shall not constitute a waiver of that
                  provision.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign or transfer
                  these Terms without our prior written consent. We may assign
                  these Terms without restriction.
                </li>
                <li>
                  <strong>Force Majeure:</strong> We shall not be liable for
                  any failure or delay in performing our obligations due to
                  circumstances beyond our reasonable control.
                </li>
              </ul>
            </Section>

            <Section title="16. Contact Information">
              <p>
                For questions, concerns, or notices regarding these Terms,
                please contact us at:
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
