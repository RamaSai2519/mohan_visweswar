"use client";

import { useState } from "react";

const SERVICE_DEFS: Array<[string, string]> = [
  ["Two-wheeler & four-wheeler insurance", "Own damage, third party and renewals"],
  ["Health insurance", "Individual, family floater and top-ups"],
  ["Life insurance", "Term, endowment and savings plans"],
  ["Cattle insurance", "Cover for livestock against loss"],
  ["Business insurance", "Shop, stock, liability and fire cover"],
  ["Property insurance", "Home and commercial property"],
  ["Crop insurance", "Seasonal and PMFBY-linked cover"],
  ["Loans", "Personal, home, vehicle and business"],
  ["Credit cards", "Comparison and application support"],
  ["Demat account services", "Opening, transfer and support"],
];

const SERVICES = SERVICE_DEFS.map(([name, note], i) => ({
  num: String(i + 1).padStart(2, "0"),
  name,
  note,
}));

const SERVICE_OPTIONS = ["General enquiry", ...SERVICE_DEFS.map(([name]) => name)];

const WHATSAPP_NUMBER = "918297545757";
const PHONE_NUMBER = "8297545757";
const EMAIL = "mohanvisweswar@gmail.com";

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const EYEBROW = "text-[11px] tracking-[0.28em] uppercase font-medium";
const LABEL = "block text-[11px] tracking-[0.16em] uppercase text-[#8a8272] mb-1.5";
const FIELD =
  "w-full px-3.5 py-[13px] border border-[#ddd6c8] bg-white text-base text-[#0a1730] rounded-[2px] outline-none focus:border-[#c99b3c]";
const BOTTOM_BAR_LINK =
  "flex-1 text-center px-2 py-[19px] text-[#e9c887] text-sm tracking-[0.1em] uppercase";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("General enquiry");
  const [message, setMessage] = useState("");

  const pickService = (serviceName: string) => {
    setService(serviceName);
    const target = document.getElementById("enquiry");
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 12,
        behavior: "smooth",
      });
    }
  };

  const sendEnquiry = () => {
    const lines = [
      "Hello, I would like to enquire.",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Service: ${service}`,
    ];
    if (message) lines.push(`Message: ${message}`);
    window.open(waLink(lines.join("\n")), "_blank");
  };

  const generalWaLink = waLink(
    "Hello, I would like to know more about your insurance and financial services."
  );
  const portfolioWaLink = waLink("Hi, I'd like a personalised portfolio website for ₹499.");

  return (
    <div className="min-h-screen bg-[#0a1730] font-jost flex justify-center">
      <div className="w-full max-w-120 bg-[#fdfcfa] relative overflow-hidden pb-10">
        {/* Hero */}
        <div className="bg-hero px-6 pt-8.5 pb-10 relative">
          <div className="absolute -top-17.5 -right-17.5 w-50 h-50 rounded-full border border-[rgba(212,165,68,0.18)]" />
          <div className="absolute -top-10 -right-10 w-35 h-35 rounded-full border border-[rgba(212,165,68,0.12)]" />

          <div className="flex items-center gap-2.5 mb-6.5">
            <div className="w-9 h-px bg-[linear-gradient(90deg,#d4a544,rgba(212,165,68,0))]" />
            <div className={`${EYEBROW} text-[#d4a544]`}>Insurance &amp; Financial Services</div>
          </div>

          <h1 className="m-0 font-playfair font-semibold text-white text-[38px] leading-[1.05] tracking-[0.01em]">
            Chandika
            <br />
            <span className="text-[#e9c887] text-[29px] tracking-[0.02em]">Mohan Visweswar</span>
          </h1>

          <div className="h-px bg-[linear-gradient(90deg,rgba(212,165,68,0.7),rgba(212,165,68,0))] mt-5.5 mb-4.5" />

          <p className="m-0 font-playfair text-[#f4efe6] text-[21px] leading-[1.35]">
            Securing today
            <br />
            for a better tomorrow.
          </p>
          <p className="mt-3.5 mb-0 text-[#9dabc4] text-[15px] leading-[1.6] max-w-82.5 text-pretty">
            Insurance, loans and investment services for families and businesses — advised
            personally, end to end.
          </p>

          <div className="flex gap-2.5 mt-6.5">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex-1 text-center px-2 py-3.5 bg-[linear-gradient(160deg,#e6c176,#c99b3c)] text-[#0a1730]! font-semibold text-[15px] tracking-[0.02em] rounded-xs"
            >
              Call now
            </a>
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-2 py-3.5 border border-[rgba(212,165,68,0.5)] text-[#e9c887] font-medium text-[15px] tracking-[0.02em] rounded-xs"
            >
              WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-4 gap-px mt-8 bg-[rgba(212,165,68,0.22)]">
            {["Trust", "Reliability", "Quick\nservice", "Customer\nfocused"].map((label) => (
              <div
                key={label}
                className="bg-[#0a1730] px-1 py-3.5 flex flex-col justify-center text-center text-[10.5px] tracking-[0.14em] text-[#c9b48c] uppercase"
              >
                {label.split("\n").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Services intro */}
        <div className="px-6 pt-11 pb-2">
          <div className={`${EYEBROW} text-[#b08d3c] mb-2.5`}>What I offer</div>
          <h2 className="m-0 mb-1.5 font-playfair text-[29px] text-[#0a1730] font-semibold leading-[1.15]">
            Ten services, one advisor
          </h2>
          <p className="m-0 mb-6 text-[#5c6577] text-[15px] leading-[1.6] text-pretty">
            Tap any service to send an enquiry about it.
          </p>
        </div>

        {/* Services list */}
        <div className="px-6">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              onClick={() => pickService(s.name)}
              className="border-t border-[#e7e2d8] py-4.25 px-1 flex items-baseline gap-3.5 cursor-pointer hover:bg-[#f7f3ea]"
            >
              <div className="font-playfair text-[13px] text-[#b08d3c] min-w-5.5">{s.num}</div>
              <div className="flex-1">
                <div className="text-[17px] text-[#0a1730] font-medium leading-[1.3]">
                  {s.name}
                </div>
                <div className="text-[13.5px] text-[#79808f] mt-0.75 leading-[1.45]">
                  {s.note}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e7e2d8]" />
        </div>

        {/* Why work with me */}
        <div className="mt-10 mx-6 bg-[#0a1730] px-6 py-7.5">
          <div className={`${EYEBROW} text-[#d4a544] mb-3.5`}>Why work with me</div>
          <div className="grid gap-4.5">
            {[
              [
                "Reliable service",
                "Policies explained in plain language, renewals tracked so nothing lapses.",
              ],
              [
                "Trusted guidance",
                "The right cover for your family, vehicle, livestock, crop or business — not the biggest one.",
              ],
              [
                "Prompt assistance",
                "Claims and paperwork handled personally, start to settlement.",
              ],
            ].map(([title, body]) => (
              <div key={title}>
                <div className="text-white font-playfair text-[19px]">{title}</div>
                <div className="text-[#9dabc4] text-[14.5px] leading-[1.55] mt-1">{body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry */}
        <div id="enquiry" className="px-6 pt-11">
          <div className={`${EYEBROW} text-[#b08d3c] mb-2.5`}>Enquiry</div>
          <h2 className="m-0 mb-1.5 font-playfair text-[29px] text-[#0a1730] font-semibold leading-[1.15]">
            Ask a question
          </h2>
          <p className="m-0 mb-5.5 text-[#5c6577] text-[15px] leading-[1.6]">
            Fill this in and it opens WhatsApp with your details ready to send.
          </p>

          <div className="grid gap-3.5">
            <div>
              <label className={LABEL}>Your name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={FIELD}
              />
            </div>
            <div>
              <label className={LABEL}>Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile"
                inputMode="tel"
                className={FIELD}
              />
            </div>
            <div>
              <label className={LABEL}>Interested in</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`${FIELD} appearance-none`}
              >
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL}>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Anything I should know?"
                className={`${FIELD} resize-y`}
              />
            </div>
            <div
              onClick={sendEnquiry}
              className="text-center py-4 bg-[#0a1730] text-[#e9c887] text-[15px] tracking-[0.08em] uppercase cursor-pointer rounded-xs hover:bg-[#12264f]"
            >
              Send on WhatsApp
            </div>
            <div className="text-center text-[13.5px] text-[#8a8272]">
              or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>

        {/* Portfolio upsell */}
        <div className="mt-11.5 mx-6 border border-[#d9cdb1] bg-[linear-gradient(170deg,#fbf6ea,#f5eddb)] px-6 py-7.5">
          <div className={`${EYEBROW} text-[#b08d3c] mb-3`}>Also available</div>
          <h2 className="m-0 mb-2.5 font-playfair text-[27px] text-[#0a1730] font-semibold leading-[1.2]">
            Want a site like this one?
          </h2>
          <p className="m-0 mb-5 text-[#5c6577] text-[15px] leading-[1.6] text-pretty">
            We build personalised portfolio websites for professionals — your photo, your
            services, your enquiry form, live on a link you can share on WhatsApp.
          </p>
          <div className="flex items-baseline gap-2.5 mb-5">
            <div className="font-playfair text-[44px] text-[#0a1730] leading-none">₹499</div>
            <div className="text-[13.5px] text-[#8a8272]">one-time, fully built for you</div>
          </div>
          <div className="grid gap-2.25 mb-5.5">
            {[
              "Built from your visiting card or details",
              "Mobile-first, loads instantly on any phone",
              "Call, WhatsApp and enquiry form built in",
              "Ready in 2–3 days",
            ].map((line) => (
              <div key={line} className="text-[14.5px] text-[#3d4657]">
                {line}
              </div>
            ))}
          </div>
          <a
            href={portfolioWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3.75 bg-[linear-gradient(160deg,#e6c176,#c99b3c)] text-[#0a1730]! font-semibold text-[15px] tracking-[0.04em] rounded-xs"
          >
            Get my own website
          </a>
        </div>

        {/* Footer */}
        <div className="mt-11.5 bg-[#060f22] px-6 pt-8.5 pb-7.5">
          <div className="font-playfair text-white text-[22px]">Chandika Mohan Visweswar</div>
          <div className="text-[11px] tracking-[0.2em] text-[#d4a544] uppercase mt-2">
            Insurance &amp; Financial Services
          </div>
          <div className="h-px bg-[rgba(212,165,68,0.25)] my-5" />
          <div className="grid gap-2.5 text-[15px]">
            <div className="text-[#9dabc4]">
              Phone <a href={`tel:${PHONE_NUMBER}`} className="ml-2">82975 45757</a>
            </div>
            <div className="text-[#9dabc4]">
              Email <a href={`mailto:${EMAIL}`} className="ml-2">{EMAIL}</a>
            </div>
          </div>
          <div className="mt-5.5 text-xs text-[#5f6c85] leading-[1.6]">
            Insurance is the subject matter of solicitation. Terms and conditions apply.
          </div>
        </div>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 inset-x-0 flex justify-center pointer-events-none">
          <div className="w-full max-w-120 flex bg-[#0a1730] border-t border-[rgba(212,165,68,0.3)] pointer-events-auto">
            <a href={`tel:${PHONE_NUMBER}`} className={BOTTOM_BAR_LINK}>
              Call
            </a>
            <div className="w-px bg-[rgba(212,165,68,0.3)]" />
            <a href={generalWaLink} target="_blank" rel="noopener noreferrer" className={BOTTOM_BAR_LINK}>
              WhatsApp
            </a>
            <div className="w-px bg-[rgba(212,165,68,0.3)]" />
            <a href="#enquiry" className={BOTTOM_BAR_LINK}>
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
