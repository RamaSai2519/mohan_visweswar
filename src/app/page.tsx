"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CarFront,
  CreditCard,
  HeartPulse,
  Home as HomeIcon,
  Landmark,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Ship,
  Sprout,
  Stethoscope,
  TrendingUp,
  Umbrella,
  UserRound,
  UsersRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "918297545757";
const PHONE_NUMBER = "8297545757";
const EMAIL = "mohanvisweswar@gmail.com";

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const categories = [
  {
    id: "motor",
    label: "Motor insurance",
    intro:
      "Confident cover for every journey, from everyday cars to commercial vehicles.",
    icon: CarFront,
    items: [
      ["Private car", "Comprehensive and third-party cover", CarFront],
      ["Two-wheeler", "Protection for daily rides and renewals", Zap],
      ["Goods carrying", "Commercial vehicle insurance", BriefcaseBusiness],
      [
        "Passenger carrying",
        "Cover for taxis and passenger vehicles",
        UsersRound,
      ],
    ],
  },
  {
    id: "health",
    label: "Health insurance",
    intro:
      "Plans that help your family focus on recovery, not unexpected hospital bills.",
    icon: HeartPulse,
    items: [
      ["Individual health", "Personal medical cover and top-ups", Stethoscope],
      ["Family health", "Floater plans for the people you love", UsersRound],
      ["Multi health", "Flexible protection for wider needs", HeartPulse],
    ],
  },
  {
    id: "travel",
    label: "Travel insurance",
    intro:
      "Travel lighter with support for trips, study, work and family holidays.",
    icon: Umbrella,
    items: [
      ["Individual travel", "International and domestic journeys", UserRound],
      ["Family travel", "One plan for the whole family", UsersRound],
      ["Student travel", "Protection while studying abroad", WalletCards],
    ],
  },
  {
    id: "business",
    label: "SME & business",
    intro:
      "Practical cover for your shop, people, property and business responsibilities.",
    icon: Building2,
    items: [
      ["Marine insurance", "Goods in transit and marine cargo", Ship],
      [
        "Business insurance",
        "Shop, stock, fire and liability cover",
        Building2,
      ],
      ["Employee cover", "Support for your most valuable asset", UsersRound],
      [
        "Professional indemnity",
        "Protection for professional advice",
        BadgeCheck,
      ],
    ],
  },
  {
    id: "protection",
    label: "Life & protection",
    intro:
      "Build a stronger financial safety net for the people and plans that matter.",
    icon: ShieldCheck,
    items: [
      ["Term life", "Straightforward income protection", Umbrella],
      ["Personal accident", "Support for unexpected accidents", ShieldCheck],
      ["Cattle insurance", "Cover for livestock against loss", Sprout],
      ["Home insurance", "Protection for your home and contents", HomeIcon],
    ],
  },
  {
    id: "finance",
    label: "Financial services",
    intro:
      "Clear, personal guidance for borrowing, cards and getting started with investing.",
    icon: TrendingUp,
    items: [
      ["Loans", "Personal, home, vehicle and business", Landmark],
      ["Credit cards", "Compare options and apply with confidence", CreditCard],
      ["Demat accounts", "Opening, transfer and support", TrendingUp],
    ],
  },
] as const;

const benefits = [
  [
    ShieldCheck,
    "Reliable service",
    "Policies explained clearly, renewals tracked and follow-ups handled.",
  ],
  [
    UsersRound,
    "Trusted guidance",
    "A personal advisor who understands your family, vehicle or business.",
  ],
  [
    Zap,
    "Prompt assistance",
    "From paperwork to claims, get support when it matters most.",
  ],
];

const enquiryMessages: Record<string, string> = {
  "Private car":
    "I would like a quote for private car insurance. Please share the coverage and premium options.",
  "Two-wheeler":
    "I would like help choosing or renewing two-wheeler insurance. Please share the available options.",
  "Goods carrying":
    "I would like a quote for goods carrying vehicle insurance. Please share the coverage and premium details.",
  "Passenger carrying":
    "I would like a quote for passenger carrying vehicle insurance. Please share the coverage and premium details.",
  "Individual health":
    "I would like to know more about individual health insurance plans and premium options.",
  "Family health":
    "I would like to explore family health insurance plans. Please share suitable coverage options.",
  "Multi health":
    "I would like to know more about flexible multi health insurance options.",
  "Individual travel":
    "I would like a quote for individual travel insurance. Please share the available coverage options.",
  "Family travel":
    "I would like a quote for family travel insurance. Please share the available coverage options.",
  "Student travel":
    "I would like to know more about travel insurance for studying abroad.",
  "Marine insurance":
    "I would like a quote for marine insurance for goods in transit or cargo.",
  "Business insurance":
    "I would like to discuss insurance cover for my business, shop, stock or property.",
  "Employee cover":
    "I would like to explore insurance cover options for my employees.",
  "Professional indemnity":
    "I would like to know more about professional indemnity insurance for my work.",
  "Term life":
    "I would like to discuss term life insurance options for income protection.",
  "Personal accident":
    "I would like to know more about personal accident insurance coverage.",
  "Cattle insurance":
    "I would like a quote for cattle insurance. Please share the coverage details.",
  "Home insurance":
    "I would like to explore home insurance for my property and contents.",
  "Loans":
    "I would like guidance on loan options. Please contact me to discuss my requirements.",
  "Credit cards":
    "I would like help comparing credit card options and applying for a suitable card.",
  "Demat accounts":
    "I would like help opening, transferring or managing a Demat account.",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("has-motion");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            const categoryId = (entry.target as HTMLElement).dataset.categoryId;
            const categoryLabel = (entry.target as HTMLElement).dataset
              .categoryLabel;
            if (categoryId && categoryLabel) {
              trackEvent("service_category_impression", {
                category_id: categoryId,
                category_label: categoryLabel,
              });
            }
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0,
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      document.documentElement.classList.remove("has-motion");
    };
  }, []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("General enquiry");
  const [message, setMessage] = useState("");

  const serviceOptions = [
    "General enquiry",
    ...categories.flatMap((category) => category.items.map(([name]) => name)),
  ];
  const generalWaLink = waLink(
    "Hello, I would like to know more about your insurance and financial services.",
  );

  const findCategoryForService = (serviceName: string) =>
    categories.find((category) =>
      category.items.some(([itemName]) => itemName === serviceName),
    );

  const pickService = (serviceName: string, categoryLabel?: string) => {
    setService(serviceName);
    setMessage(enquiryMessages[serviceName] ?? "");
    trackEvent("select_content", {
      content_type: "service",
      item_id: serviceName,
      category: categoryLabel ?? findCategoryForService(serviceName)?.label,
      source: "service_card",
    });
    document
      .getElementById("enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleServiceDropdownChange = (serviceName: string) => {
    setService(serviceName);
    setMessage(enquiryMessages[serviceName] ?? "");
    trackEvent("select_content", {
      content_type: "service",
      item_id: serviceName,
      category: findCategoryForService(serviceName)?.label ?? "General",
      source: "enquiry_dropdown",
    });
  };

  const sendEnquiry = () => {
    const lines = [
      "Hello, I would like to enquire.",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Service: ${service}`,
    ];
    if (message) lines.push(`\n${message}`);
    trackEvent("generate_lead", {
      method: "whatsapp",
      service,
      category: findCategoryForService(service)?.label ?? "General",
    });
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const formStarted = useRef(false);
  const trackFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("form_start", { form_name: "enquiry" });
  };

  return (
    <main className="min-h-screen bg-ink font-jost pb-20 sm:pb-0">
      <div className="mx-auto w-full overflow-hidden bg-paper shadow-2xl">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/95 text-white backdrop-blur-md">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10">
            <span
              className="block h-full origin-left bg-gold transition-[width] duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <a
              href="#top"
              className="flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <span className="grid size-10 place-items-center rounded-full border border-gold/60 text-gold">
                <Umbrella size={20} />
              </span>
              <span>
                <span className="block font-playfair text-lg leading-none">
                  Chandika
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Mohan Visweswar
                </span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
              <a
                href="#services"
                className="transition hover:text-gold"
                onClick={() =>
                  trackEvent("nav_click", {
                    link_text: "Services",
                    location: "header_desktop",
                  })
                }
              >
                Services
              </a>
              <a
                href="#about"
                className="transition hover:text-gold"
                onClick={() =>
                  trackEvent("nav_click", {
                    link_text: "Why choose me",
                    location: "header_desktop",
                  })
                }
              >
                Why choose me
              </a>
              <a
                href="#enquiry"
                className="transition hover:text-gold"
                onClick={() =>
                  trackEvent("nav_click", {
                    link_text: "Contact",
                    location: "header_desktop",
                  })
                }
              >
                Contact
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 font-semibold text-ink"
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "call",
                    location: "header_desktop",
                  })
                }
              >
                <Phone size={15} /> Call now
              </a>
            </nav>
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden"
              onClick={() => {
                const next = !menuOpen;
                setMenuOpen(next);
                trackEvent("menu_toggle", { state: next ? "open" : "close" });
              }}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <nav className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 text-sm text-slate-200 md:hidden">
              <a
                href="#services"
                onClick={() => {
                  setMenuOpen(false);
                  trackEvent("nav_click", {
                    link_text: "Services",
                    location: "header_mobile",
                  });
                }}
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => {
                  setMenuOpen(false);
                  trackEvent("nav_click", {
                    link_text: "Why choose me",
                    location: "header_mobile",
                  });
                }}
              >
                Why choose me
              </a>
              <a
                href="#enquiry"
                onClick={() => {
                  setMenuOpen(false);
                  trackEvent("nav_click", {
                    link_text: "Contact",
                    location: "header_mobile",
                  });
                }}
              >
                Contact
              </a>
            </nav>
          )}
        </header>

        <section
          id="top"
          className="bg-hero px-5 py-12 text-white lg:px-16 lg:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div
              data-reveal="hero"
              className="animate-[fadeUp_.7s_ease-out_both]"
            >
              <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
                <span className="h-px w-10 bg-gold" />
                Insurance &amp; financial services
              </div>
              <h1 className="max-w-3xl font-playfair text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
                Securing today
                <br />
                <span className="text-gold-soft">for a better tomorrow.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                Personal insurance, loans and investment guidance for families,
                professionals and growing businesses.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="flex items-center gap-2 rounded-sm bg-gold px-5 py-3.5 font-semibold text-ink transition hover:bg-gold-soft"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta_name: "explore_services",
                      location: "hero",
                    })
                  }
                >
                  Explore services <ArrowRight size={17} />
                </a>
                <a
                  href={generalWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-sm border border-gold/50 px-5 py-3.5 font-medium text-gold-soft transition hover:bg-white/10"
                  onClick={() =>
                    trackEvent("contact_click", {
                      method: "whatsapp",
                      location: "hero",
                    })
                  }
                >
                  <span className="flex w-full gap-2 items-center">
                    <MessageCircle size={17} /> WhatsApp Me
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-5 py-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {benefits.map(([Icon, title, body], index) => (
              <div
                key={title as string}
                data-reveal="benefit"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                className="flex gap-4"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-mist text-navy">
                  <Icon size={23} />
                </span>
                <div>
                  <h2 className="font-playfair text-xl font-semibold text-ink">
                    {title as string}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-ink">
                    {body as string}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="px-5 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto ">
            <div
              data-reveal="section-heading"
              className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
            >
              <div>
                <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
                  A complete protection portfolio
                </div>
                <h2 className="font-playfair text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                  The Right cover for every chapter.
                </h2>
                <p className="text-base leading-relaxed text-muted-ink">
                  Browse by category and tap any service to start a personalised
                  conversation.
                </p>
              </div>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <article
                    key={category.id}
                    data-reveal="card"
                    data-category-id={category.id}
                    data-category-label={category.label}
                    style={
                      { "--reveal-delay": `${index * 70}ms` } as CSSProperties
                    }
                    className="border-t-2 border-navy pt-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="mb-3 grid size-11 place-items-center rounded-full bg-mist text-navy">
                          <CategoryIcon size={22} />
                        </span>
                        <h3 className="font-playfair text-2xl font-semibold text-ink">
                          {category.label}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                          {category.intro}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-gold">
                        {String(category.items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-5 grid gap-2">
                      {category.items.map(([name, note, Icon]) => (
                        <button
                          type="button"
                          key={name}
                          onClick={() => pickService(name, category.label)}
                          className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-gold hover:shadow-md"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-mist text-navy">
                            <Icon size={17} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-ink">
                              {name}
                            </span>
                            <span className="block truncate text-xs text-muted-ink">
                              {note}
                            </span>
                          </span>
                          <ArrowRight
                            size={15}
                            className="text-gold transition group-hover:translate-x-1"
                          />
                        </button>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-mist px-5 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div data-reveal="about-copy">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
                Personal guidance, made simple
              </div>
              <h2 className="font-playfair text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Advice that stays with you.
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-ink">
                Insurance should feel like a safety net, not a maze of fine
                print. I help you understand your options, choose suitable cover
                and stay supported after the policy is issued.
              </p>
              <a
                href="#enquiry"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_name: "start_conversation",
                    location: "about",
                  })
                }
              >
                Start a conversation <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-ink p-7 text-white sm:col-span-2">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-gold" />
                  <span className="text-sm uppercase tracking-[0.18em] text-gold-soft">
                    A simpler experience
                  </span>
                </div>
                <p className="mt-5 max-w-2xl font-playfair text-3xl leading-tight">
                  Clear explanations. Thoughtful recommendations. Help when you
                  need it.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-playfair text-3xl text-ink">01</p>
                <p className="mt-2 font-semibold text-ink">Understand</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-ink">
                  We look at your needs, not just a product list.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-playfair text-3xl text-ink">02</p>
                <p className="mt-2 font-semibold text-ink">Protect</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-ink">
                  You get cover and continued support, end to end.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="enquiry"
          className="scroll-mt-20 px-5 py-16 lg:px-16 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div data-reveal="enquiry-copy">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
                Let&apos;s talk
              </div>
              <h2 className="font-playfair text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Your next step can be simple.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-ink">
                Share a few details and I&apos;ll get back to you on WhatsApp
                with a clear way forward.
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-ink hover:text-gold"
                  onClick={() =>
                    trackEvent("contact_click", {
                      method: "call",
                      location: "enquiry",
                    })
                  }
                >
                  <Phone size={18} className="text-gold" /> +91 82975 45757
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-ink hover:text-gold"
                  onClick={() =>
                    trackEvent("contact_click", {
                      method: "email",
                      location: "enquiry",
                    })
                  }
                >
                  <Mail size={18} className="text-gold" /> {EMAIL}
                </a>
              </div>
            </div>
            <div
              data-reveal="enquiry-form"
              className="rounded-2xl bg-mist p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-ink">
                  Your name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={trackFormStart}
                    placeholder="Full name"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-gold"
                  />
                </label>
                <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-ink">
                  Phone
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={trackFormStart}
                    placeholder="10-digit mobile"
                    inputMode="tel"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-gold"
                  />
                </label>
                <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-ink sm:col-span-2">
                  Interested in
                  <select
                    value={service}
                    onChange={(e) =>
                      handleServiceDropdownChange(e.target.value)
                    }
                    onFocus={trackFormStart}
                    className="mt-2 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-gold"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-ink sm:col-span-2">
                  Message
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={trackFormStart}
                    rows={4}
                    placeholder="Tell me what you need help with"
                    className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-gold"
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={sendEnquiry}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-4 font-semibold text-gold-soft transition hover:bg-navy"
              >
                <MessageCircle size={18} /> Send enquiry on WhatsApp
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-ink px-5 py-10 text-white lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="font-playfair text-2xl">
                Chandika Mohan Visweswar
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-gold">
                Insurance &amp; financial consultant
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                Reliable service, trusted guidance and prompt assistance for the
                things that matter most.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-300 md:items-end">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="hover:text-gold"
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "call",
                    location: "footer",
                  })
                }
              >
                +91 82975 45757
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-gold"
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "email",
                    location: "footer",
                  })
                }
              >
                {EMAIL}
              </a>
              <p className="mt-3 text-xs text-slate-500">
                Insurance is the subject matter of solicitation. Terms and
                conditions apply.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-30 mx-auto flex max-w-360 justify-center px-3 pb-3 md:hidden">
        <div className="flex w-full max-w-md items-center justify-around rounded-full bg-ink p-2 text-sm text-gold-soft shadow-xl">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 px-4 py-2"
            onClick={() =>
              trackEvent("contact_click", {
                method: "call",
                location: "sticky_bar",
              })
            }
          >
            <Phone size={16} /> Call
          </a>
          <a
            href={generalWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-x border-gold/30 px-4 py-2"
            onClick={() =>
              trackEvent("contact_click", {
                method: "whatsapp",
                location: "sticky_bar",
              })
            }
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href="#enquiry"
            className="flex items-center gap-2 px-4 py-2"
            onClick={() =>
              trackEvent("cta_click", {
                cta_name: "enquire",
                location: "sticky_bar",
              })
            }
          >
            <Mail size={16} /> Enquire
          </a>
        </div>
      </div>
    </main>
  );
}
