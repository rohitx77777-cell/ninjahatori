import React, { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { HOME } from "@/constants/testIds";
import {
    Menu, X, ArrowRight, Sparkles, BookOpen, Users, GraduationCap,
    School, Heart, Globe, Star, Calendar, Clock, MapPin, Mail, Phone,
    MessageCircle, ChevronDown, Award, Quote, PartyPopper
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Toaster, toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const IMG = {
    nidhiPink: "/images/nidhi-pink.jpg",
    classroom: "/images/classroom.jpg",
    women: "/images/women.jpg",
    invite: "/images/invite.jpg",
    nidhiTeachable: "/images/nidhi-teachable.png",
    banner: "/images/nidhi-teachable.png",
    reading: "/images/classroom.jpg",
    workshop: "/images/women.jpg",
    kidsBooks: "/images/classroom.jpg",
    seminar: "/images/women.jpg",
    teamAnjali: "/images/team-anjali.jpg",
    teamStuti: "/images/team-stuti.jpg",
    teamSamina: "/images/team-samina.jpg",
    awardPankho: "/images/award-pankho.jpg",
    group1: "/images/group-1.jpg",
    group2: "/images/group-2.jpg",
    phonicsLevel1: "/images/phonics-level1.jpg",
    phonicsLevel2: "/images/phonics-level2.jpg",
    phonicsLevel3: "/images/phonics-level3.jpg",
    galTeamPhotoshoot: "/images/gallery/team-photoshoot.jpg",
    galNirvi1: "/images/gallery/star-reader-nirvi-1.jpg",
    galStarGroup1: "/images/gallery/star-reader-group-1.jpg",
    galParentTalk: "/images/gallery/parent-talk.jpg",
    galNirvi2: "/images/gallery/star-reader-nirvi-2.jpg",
    galPranav1: "/images/gallery/star-reader-pranav-1.jpg",
    galTeamMeeting: "/images/gallery/team-meeting.jpg",
    galFamilyReading: "/images/gallery/family-reading.jpg",
    galKidsCelebrating: "/images/gallery/kids-celebrating.jpg",
    galAward: "/images/gallery/award-ceremony.jpg",
    galPranav2: "/images/gallery/star-reader-pranav-2.jpg",
    galJungleRoom: "/images/gallery/jungle-room-fun.jpg",
    galEkansh: "/images/gallery/star-reader-ekansh.jpg",
    galPranav3: "/images/gallery/star-reader-pranav-3.jpg",
};
const VID = {
    testimonial: "/videos/testimonial-video.mp4",
    moment1: "/videos/gallery/moment-1.mp4",
    moment2: "/videos/gallery/moment-2.mp4",
    moment3: "/videos/gallery/moment-3.mp4",
    moment4: "/videos/gallery/moment-4.mp4",
};

/* ---------------- NAVBAR ---------------- */
const Nav = () => {
    const [open, setOpen] = useState(false);
    const links = [
        ["About", "about"], ["Impact", "impact"], ["Programs", "programs"],
        ["Alpha Sonic", "alphasonic"], ["Journey", "journey"], ["Our Presence", "presence"],
        ["Women Empowerment", "women-empowerment"], ["Grand Opening", "franchise"],
        ["Franchise Enquiry", "franchise-enquiry"], ["Team", "team"],
        ["Testimonials", "testimonials"], ["Contact", "contact"],
    ];
    const scrollTo = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <nav data-testid={HOME.nav} className="sticky top-0 z-50 backdrop-blur-md bg-[#FFF7EC]/85 border-b border-[#E8DCC7]">
            <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
                <button data-testid={HOME.navLogo} onClick={() => scrollTo("top")} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#F26522] text-white grid place-items-center font-display font-bold text-lg shadow-md group-hover:rotate-6 transition-transform">E</div>
                    <div className="text-left leading-tight">
                        <div className="font-display font-semibold text-[15px] text-[#1F1A17]">EliKids</div>
                        <div className="text-[11px] text-[#3E332A]/70 -mt-0.5">Preschool & Enrichment Center</div>
                    </div>
                </button>
                <div className="hidden lg:flex items-center gap-7">
                    {links.map(([l, id]) => (
                        <button key={id} onClick={() => scrollTo(id)} className="text-sm font-medium text-[#3E332A] hover:text-[#F26522] transition-colors">
                            {l}
                        </button>
                    ))}
                    <Button data-testid={HOME.ctaConsultation} onClick={() => scrollTo("contact")} className="bg-[#1F1A17] hover:bg-[#F26522] text-white rounded-full px-5 h-10 text-sm font-semibold transition-colors">
                        Book Consultation <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
                <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {open && (
                <div className="lg:hidden border-t border-[#E8DCC7] bg-[#FFF7EC]">
                    <div className="px-5 py-4 flex flex-col gap-3">
                        {links.map(([l, id]) => (
                            <button key={id} onClick={() => scrollTo(id)} className="text-left py-2 text-[#3E332A] font-medium border-b border-[#E8DCC7]/60">
                                {l}
                            </button>
                        ))}
                        <Button onClick={() => scrollTo("contact")} className="mt-2 bg-[#F26522] hover:bg-[#D74E10] text-white rounded-full">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

/* ---------------- HERO ---------------- */
const Hero = () => (
    <section id="top" data-testid={HOME.heroSection} className="relative overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#F4B301]/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#158A73]/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
            <div className="lg:col-span-7">
                <div className="chip mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#F26522]" />
                    EliKids Preschool & Enrichment Center
                </div>
                <h1 className="font-display text-[42px] sm:text-6xl lg:text-[76px] leading-[1.02] font-semibold text-[#1F1A17]">
                    Where little minds <span className="scribble italic">explore</span><br />
                    and <span className="text-[#F26522]">learn</span> to shine.
                </h1>
                <p className="mt-7 text-lg text-[#3E332A]/85 max-w-2xl leading-relaxed">
                    <span className="font-semibold">EliKids</span> is a nurturing preschool & enrichment center where children
                    <em className="font-script text-2xl text-[#F26522] not-italic ml-1">Explore, Learn and Innovate</em>
                    every day — built on the Alpha Sonic Phonics methodology and 16+ years of early-childhood expertise
                    from founder Nidhi Sarna.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                    <Button data-testid={HOME.ctaPrograms} onClick={() => document.getElementById("programs")?.scrollIntoView({behavior:"smooth"})}
                        className="bg-[#F26522] hover:bg-[#D74E10] text-white rounded-full h-12 px-6 font-semibold">
                        Explore Programs <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button onClick={() => document.getElementById("franchise-enquiry")?.scrollIntoView({behavior:"smooth"})}
                        variant="outline" className="bg-white hover:bg-[#158A73] hover:text-white border-[#158A73] text-[#158A73] rounded-full h-12 px-6 font-semibold">
                        <PartyPopper className="w-4 h-4 mr-2" /> Enquire About a Franchise
                    </Button>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                    {[["250+", "Centers PAN India"], ["15K+", "Lives Touched"], ["16+", "Years of Expertise"]].map(([n, l]) => (
                        <div key={l}>
                            <div className="font-display text-3xl lg:text-4xl text-[#1F1A17]">{n}</div>
                            <div className="text-xs text-[#3E332A]/70 mt-0.5">{l}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl bg-[#FFEED9] rotate-1">
                    <img src={IMG.classroom} alt="EliKids Preschool & Enrichment Center" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl p-4 rotate-[-4deg] border border-[#E8DCC7]">
                    <div className="font-script text-2xl text-[#F26522] leading-none">Explore</div>
                    <div className="font-display text-lg font-semibold">Learn · Innovate</div>
                    <div className="text-xs text-[#3E332A]/70">EliKids Preschool</div>
                </div>
            </div>
        </div>
        {/* Marquee */}
        <div className="border-y border-[#E8DCC7] bg-[#1F1A17] text-[#FFF7EC] overflow-hidden">
            <div className="flex marquee-track whitespace-nowrap py-3 text-sm font-medium">
                {Array(2).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center shrink-0">
                        {["250+ Alpha Sonic Phonics centers PAN India", "5000+ children learned to read", "5000+ solopreneurs empowered via EYFC", "5000+ underprivileged children served via CSR", "New: EliKids Preschool & Enrichment Center", "Explore · Learn · Innovate"].map((t, j) => (
                            <span key={j} className="flex items-center px-8">
                                <Sparkles className="w-3.5 h-3.5 mr-3 text-[#F4B301]" /> {t}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ---------------- ABOUT ---------------- */
const About = () => (
    <section id="about" data-testid={HOME.aboutSection} className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5">
                <div className="chip mb-5"><BookOpen className="w-3.5 h-3.5 text-[#158A73]" /> About Nidhi</div>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight text-[#1F1A17]">
                    A passionate educator who <span className="italic text-[#158A73]">transforms</span> how children learn.
                </h2>
                <p className="mt-6 text-[#3E332A]/85 leading-relaxed">
                    With over 16 years of dedicated experience in early childhood education, Nidhi Sarna has built
                    her career around one belief: every child deserves the gift of confident communication and joyful reading —
                    and every woman deserves the courage to build something of her own.
                </p>
                <p className="mt-4 text-[#3E332A]/85 leading-relaxed">
                    Her journey began in India, took her to Saudi Arabia, and matured in London, where she earned her
                    EYFS (Early Years Foundation Stage) certification. The culmination of her research, practice, and
                    passion is the <strong>Alpha Sonic Phonics & Reading Program</strong> and the <strong>EYFC brand</strong>,
                    empowering thousands of solopreneurs and educators PAN India.
                </p>
                <p className="mt-4 text-[#3E332A]/85 leading-relaxed">
                    Today, she also works as an <strong>industry consultant</strong> — advising schools and daycare
                    centers on early-literacy strategy — while personally training and mentoring solopreneurs who
                    want to build their own preschool or coaching venture.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
                    {[
                        { icon: GraduationCap, t: "EYFS Certified · London", c: "#F26522" },
                        { icon: Globe, t: "India · KSA · UK", c: "#158A73" },
                        { icon: BookOpen, t: "Alpha Sonic Phonics", c: "#F4B301" },
                        { icon: Heart, t: "CSR & Community", c: "#D74E10" },
                    ].map(({ icon: Ic, t, c }) => (
                        <div key={t} className="flex items-center gap-2.5 bg-white border border-[#E8DCC7] rounded-xl px-3 py-2.5">
                            <div className="w-8 h-8 rounded-lg grid place-items-center shrink-0" style={{ background: c + "22", color: c }}>
                                <Ic className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold text-[#3E332A]">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-7">
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#F4B301]/40 blur-2xl" />
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-[#158A73]/25 blur-2xl" />
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-[#FFF7EC] to-[#FFEED9] border border-[#E8DCC7] rotate-[-2deg] shadow-xl p-4">
                            <img
                                src={IMG.nidhiTeachable}
                                alt="Nidhi Sarna — Alpha Sonic Phonics CEO"
                                onError={(e) => { e.currentTarget.src = IMG.nidhiPink; e.currentTarget.className = "w-full h-full object-cover rounded-2xl"; }}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="space-y-4 mt-8">
                            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl rotate-[1.5deg]">
                                <img src={IMG.group1} alt="Nidhi with her team and educators" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
                { icon: GraduationCap, t: "EYFS Certified — London, UK", d: "International certification in Early Years Foundation Stage education.", c: "#F26522" },
                { icon: Globe, t: "Global Teaching Experience", d: "India, Saudi Arabia & London — diverse, multicultural classrooms.", c: "#158A73" },
                { icon: BookOpen, t: "Research-Backed Methodology", d: "Alpha Sonic Phonics built on proven language acquisition science.", c: "#F4B301" },
                { icon: Heart, t: "CSR & Community Impact", d: "5000+ underprivileged children helped to read & write independently.", c: "#D74E10" },
            ].map(({ icon: Ic, t, d, c }) => (
                <div key={t} className="card-tilt bg-white border border-[#E8DCC7] rounded-2xl p-6 shadow-sm">
                    <div className="w-11 h-11 rounded-xl grid place-items-center mb-4" style={{ background: c + "22", color: c }}>
                        <Ic className="w-5 h-5" />
                    </div>
                    <div className="font-display text-lg font-semibold">{t}</div>
                    <p className="text-sm text-[#3E332A]/75 mt-1.5 leading-relaxed">{d}</p>
                </div>
            ))}
        </div>
    </section>
);

/* ---------------- IMPACT ---------------- */
const Impact = () => {
    const stats = [
        { n: "5,000+", l: "Underprivileged children under CSR — helped to read & write independently, bridging the learning gap", ic: Heart, c: "#F4B301", featured: true },
        { n: "5,000+", l: "Children benefited from her Phonics & Reading Program in Literacy PAN India", ic: BookOpen, c: "#F26522" },
        { n: "5,000+", l: "Solopreneurs empowered through her EYFC skill-based teacher training (offline & online)", ic: Users, c: "#158A73" },
        { n: "3", l: "Countries — India, Saudi Arabia & the United Kingdom", ic: Globe, c: "#D74E10" },
    ];
    return (
        <section id="impact" data-testid={HOME.impactSection} className="relative bg-[#1F1A17] text-[#FFF7EC] py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 grain" />
            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
                <div className="max-w-3xl">
                    <div className="chip mb-5 bg-white/10 border-white/15 text-white/80"><Award className="w-3.5 h-3.5 text-[#F4B301]" /> The Real Impact</div>
                    <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
                        Numbers that tell <span className="italic text-[#F4B301]">the real story</span>.
                    </h2>
                    <p className="mt-5 text-white/70 max-w-2xl">
                        Sixteen years of dedication — measured in confident readers, empowered women, and communities that now believe in themselves.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-14">
                    {stats.map(({ n, l, ic: Ic, c, featured }) => (
                        <div key={l} className={`rounded-2xl p-8 backdrop-blur-sm transition-colors ${featured ? "border-2 border-[#F4B301]/70 bg-white/[0.09] hover:bg-white/[0.12] md:col-span-2 relative" : "border border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"}`}>
                            {featured && (
                                <div className="absolute -top-3 left-8 bg-[#F4B301] text-[#1F1A17] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow">
                                    Flagship Impact
                                </div>
                            )}
                            <div className="flex items-start gap-5">
                                <div className={`rounded-xl grid place-items-center shrink-0 ${featured ? "w-14 h-14" : "w-12 h-12"}`} style={{ background: c + "33", color: c }}>
                                    <Ic className={featured ? "w-7 h-7" : "w-6 h-6"} />
                                </div>
                                <div>
                                    <div className={`font-display leading-none ${featured ? "text-6xl lg:text-7xl" : "text-5xl lg:text-6xl"}`} style={{ color: c }}>{n}</div>
                                    <p className={`mt-3 text-white/80 leading-relaxed ${featured ? "text-lg" : ""}`}>{l}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------------- PROGRAMS ---------------- */
const Programs = () => {
    const items = [
        { icon: "🔤", t: "Alpha Sonic Phonics Program", d: "Sonic methodology & phonological awareness to make reading natural for children aged 3–10.", pts: ["Structured sound-to-letter mapping", "Multi-sensory learning activities", "Pre-phonics to Advanced levels", "Online & offline delivery"] },
        { icon: "👩‍👧", t: "Parent Learning Program", d: "Become your child's first literacy coach — no teaching experience required.", pts: ["Home reading strategies", "Age-appropriate activities", "Common mistake prevention", "Weekly Q&A with Nidhi"] },
        { icon: "👩‍🏫", t: "EYFC Teacher Training", d: "Skill-based certification empowering 5000+ solopreneurs & educators PAN India.", pts: ["Phonics methodology certification", "Classroom implementation toolkit", "Business & solopreneur mentorship", "Offline & online cohorts"] },
        { icon: "🏫", t: "School Collaboration", d: "Complete literacy transformation partnership for schools & daycare centers.", pts: ["Whole-school literacy audit", "Curriculum integration", "Staff training & certification", "Parent engagement workshops"] },
    ];
    return (
        <section id="programs" data-testid={HOME.programsSection} className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
                <div className="max-w-2xl">
                    <div className="chip mb-5"><Sparkles className="w-3.5 h-3.5 text-[#F26522]" /> Programs</div>
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                        Transformative learning for <span className="italic text-[#F26522]">every</span> need.
                    </h2>
                </div>
                <p className="text-[#3E332A]/75 max-w-md">
                    Whether you're a parent, teacher, or a woman ready to build her own venture — there's a path designed for you.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {items.map((p, i) => (
                    <div key={p.t} className="card-tilt bg-white border border-[#E8DCC7] rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-6 right-6 text-5xl opacity-90">{p.icon}</div>
                        <div className="text-xs font-semibold text-[#F26522] tracking-widest">0{i + 1}</div>
                        <h3 className="font-display text-2xl mt-2 pr-14">{p.t}</h3>
                        <p className="mt-3 text-[#3E332A]/80">{p.d}</p>
                        <ul className="mt-5 space-y-2">
                            {p.pts.map(pt => (
                                <li key={pt} className="flex items-start gap-2 text-sm text-[#3E332A]/85">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F26522] shrink-0" /> {pt}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1F1A17] hover:text-[#F26522]">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

/* ---------------- ALPHA SONIC PHONICS ---------------- */
const AlphaSonicPhonics = () => {
    const levels = [
        { src: IMG.phonicsLevel1, t: "Level 1", d: "Phonemic sounds, letter formation & first vocabulary." },
        { src: IMG.phonicsLevel2, t: "Level 2", d: "Short vowel sounds, CVC blending & simple sight words." },
        { src: IMG.phonicsLevel3, t: "Level 3", d: "CVC reading, comprehension & sentence formation." },
    ];
    const points = [
        "Structured, level-wise phonics curriculum",
        "Designed for ages 3–10, offline & online",
        "Used across preschools & enrichment centers",
        "Opportunity for Solopreneurs",
    ];
    return (
        <section id="alphasonic" data-testid={HOME.alphaSonicSection} className="bg-[#FFEED9] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <div className="chip mb-5"><BookOpen className="w-3.5 h-3.5 text-[#158A73]" /> Alpha Sonic Phonics</div>
                        <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                            Building strong <span className="italic text-[#158A73]">English foundations</span>.
                        </h2>
                        <p className="mt-6 text-[#3E332A]/85 leading-relaxed">
                            Alpha Sonic Phonics is Nidhi's signature reading program — a simple, level-wise path that
                            takes children from sounds and letters to confident, independent reading. It's one part
                            of her wider work, alongside teacher training and school partnerships.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {points.map(pt => (
                                <li key={pt} className="flex items-start gap-2 text-sm text-[#3E332A]/90">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#158A73] shrink-0" /> {pt}
                                </li>
                            ))}
                        </ul>
                        <a href="https://alphasonicphonics.com" target="_blank" rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#158A73] hover:text-[#0E5D4E]">
                            Visit alphasonicphonics.com <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
                        {levels.map(lv => (
                            <div key={lv.t} className="rounded-2xl overflow-hidden bg-white border border-[#E8DCC7] shadow-sm">
                                <img src={lv.src} alt={`Alpha Sonic Phonics ${lv.t}`} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <div className="font-display text-lg">{lv.t}</div>
                                    <p className="text-xs text-[#3E332A]/75 mt-1 leading-relaxed">{lv.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------------- JOURNEY ---------------- */
const Journey = () => {
    const items = [
        { y: "The Beginning", t: "Started teaching young learners", d: "Discovered a deep passion for language development in children aged 2–8." },
        { y: "Specialization", t: "Deep dive into phonics & language", d: "Studied the science behind how children acquire language and reading skills." },
        { y: "International", t: "Teaching & training in Saudi Arabia", d: "Refined her methodology across diverse, multicultural classrooms." },
        { y: "UK Certification", t: "EYFS Certification from London", d: "Integrated the UK's world-renowned early education frameworks." },
        { y: "Program Born", t: "Founded Alpha Sonic Phonics", d: "Launched her signature program — sonic methodology meets phonics." },
        { y: "EYFC Brand", t: "Empowered 5000+ solopreneurs", d: "Skill-based teacher training that turned educators into entrepreneurs." },
        { y: "Community", t: "5000+ CSR children served", d: "Bridged the learning gap for underprivileged children across India." },
        { y: "Today", t: "EliKids Preschool — Grand Opening", d: "A new franchise, a new beginning. Explore · Learn · Innovate." },
    ];
    return (
        <section id="journey" data-testid={HOME.journeySection} className="bg-[#FFEED9] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
                <div className="max-w-3xl mb-14">
                    <div className="chip mb-5"><Clock className="w-3.5 h-3.5 text-[#158A73]" /> The Journey</div>
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                        16+ years of <span className="italic text-[#158A73]">shaping</span> young minds.
                    </h2>
                </div>
                <div className="relative">
                    <div className="absolute left-4 lg:left-1/2 top-2 bottom-2 w-px bg-[#1F1A17]/15" />
                    <div className="space-y-8">
                        {items.map((it, i) => (
                            <div key={it.t} className={`relative grid lg:grid-cols-2 gap-4 lg:gap-16 items-start ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                                <div className="pl-12 lg:pl-0 lg:pr-10 lg:text-right">
                                    <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#F26522]">
                                        <span className="w-6 h-px bg-[#F26522]" /> {it.y}
                                    </div>
                                    <div className="mt-2 font-display text-2xl">{it.t}</div>
                                </div>
                                <div className="pl-12 lg:pl-10 relative">
                                    <div className="absolute left-[10px] lg:left-[-9px] top-2 w-4 h-4 rounded-full bg-[#F26522] ring-4 ring-[#FFEED9]" />
                                    <p className="text-[#3E332A]/85 leading-relaxed">{it.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------------- PRESENCE MAP ---------------- */
const PresenceMap = () => {
    // Illustrative (non-interactive) positions on a simplified India outline.
    // Concentrated in the South, with strong presence in Mumbai & Pune, and a few scattered elsewhere.
    const southDots = [
        [52, 63], [56, 66], [49, 69], [58, 71], [53, 74], [61, 68], [46, 66], [55, 78],
        [50, 81], [59, 76], [63, 73], [47, 73], [57, 84], [52, 87], [61, 80], [44, 70],
        [65, 77], [55, 90], [49, 92], [58, 93], [42, 76], [63, 85], [47, 88], [66, 82],
        [52, 95], [60, 89], [45, 82], [68, 70], [40, 80], [64, 92],
    ];
    const mumbaiPuneDots = [
        [30, 51], [33, 53], [28, 54], [35, 50], [31, 56], [37, 53], [29, 58], [34, 56],
    ];
    const scattered = [
        [45, 20], [38, 25], [55, 15], [62, 30], [70, 35], [25, 35], [48, 40], [32, 60],
    ];
    return (
        <section id="presence" data-testid={HOME.presenceSection} className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-14 items-center">
                <div className="lg:col-span-5">
                    <div className="chip mb-5"><MapPin className="w-3.5 h-3.5 text-[#158A73]" /> Our Presence</div>
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                        <span className="italic text-[#F26522]">250+</span> centers, and growing PAN India.
                    </h2>
                    <p className="mt-6 text-[#3E332A]/85 leading-relaxed">
                        Alpha Sonic Phonics has a strong footprint across India, with the deepest concentration
                        of centers in <strong>South India</strong>, and thriving hubs in <strong>Pune</strong> and
                        <strong> Mumbai</strong>. A handful of centers are also spread across the rest of the country.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                        <div className="rounded-2xl bg-white border border-[#E8DCC7] p-5">
                            <div className="font-display text-3xl text-[#F26522]">250+</div>
                            <div className="text-xs text-[#3E332A]/70 mt-1">Centers PAN India</div>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#E8DCC7] p-5">
                            <div className="font-display text-3xl text-[#158A73]">South India</div>
                            <div className="text-xs text-[#3E332A]/70 mt-1">Strongest presence</div>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["South India", "Pune", "Mumbai", "& more across India"].map(l => (
                            <span key={l} className="text-xs font-semibold bg-[#FFEED9] border border-[#E8DCC7] rounded-full px-3 py-1.5 text-[#3E332A]">{l}</span>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="relative rounded-[28px] bg-white border border-[#E8DCC7] shadow-sm p-6 lg:p-10">
                        <svg viewBox="0 0 100 100" className="w-full h-auto max-h-[480px] mx-auto" aria-label="Illustrative map of India showing Alpha Sonic Phonics center presence">
                            <path
                                d="M38 4 L58 3 L66 10 L70 18 L64 22 L68 28 L62 34 L66 40 L60 46 L63 52 L58 58 L60 64 L55 72 L57 80 L52 90 L48 98 L44 90 L40 82 L42 72 L37 64 L39 56 L34 50 L36 42 L30 36 L33 28 L27 22 L30 15 L26 10 L34 8 Z"
                                fill="#FFEED9"
                                stroke="#E8DCC7"
                                strokeWidth="0.6"
                            />
                            {mumbaiPuneDots.map(([x, y], i) => (
                                <circle key={`mp-${i}`} cx={x} cy={y} r="1.15" fill="#F26522" opacity="0.9" />
                            ))}
                            {southDots.map(([x, y], i) => (
                                <circle key={`s-${i}`} cx={x} cy={y} r="1.15" fill="#158A73" opacity="0.9" />
                            ))}
                            {scattered.map(([x, y], i) => (
                                <circle key={`sc-${i}`} cx={x} cy={y} r="0.9" fill="#F4B301" opacity="0.85" />
                            ))}
                        </svg>
                        <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs font-medium text-[#3E332A]/80">
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#158A73] inline-block" /> South India</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F26522] inline-block" /> Mumbai & Pune</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F4B301] inline-block" /> Other regions</span>
                        </div>
                        <p className="mt-3 text-center text-[11px] text-[#3E332A]/50">Illustrative representation, not to scale.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------------- WOMEN EMPOWERMENT ---------------- */
const WomenEmpowerment = () => (
    <section id="women-empowerment" data-testid={HOME.womenEmpowermentSection} className="bg-[#FFEED9] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-xl bg-white rotate-[-1deg]">
                    <img src={IMG.women} alt="Women empowerment through EYFC training" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 bg-[#158A73] text-white rounded-2xl shadow-xl px-5 py-3 rotate-2">
                    <div className="font-display text-2xl leading-none">5,000+</div>
                    <div className="text-xs opacity-85 mt-1">Women solopreneurs empowered</div>
                </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="chip mb-5"><Heart className="w-3.5 h-3.5 text-[#D74E10]" /> Women Empowerment</div>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                    Helping women <span className="italic text-[#158A73]">invest in themselves</span>.
                </h2>
                <p className="mt-6 text-[#3E332A]/85 leading-relaxed">
                    Beyond the classroom, this work is about giving women the confidence and skills to build something
                    of their own. Through the EYFC skill-based teacher training, thousands of women have turned a
                    passion for early education into their own preschools, coaching ventures, and careers.
                </p>
                <p className="mt-4 text-[#3E332A]/85 leading-relaxed">
                    From methodology and curriculum to hands-on business mentorship, every woman is supported end-to-end —
                    because empowered women raise confident children.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-lg">
                    {[
                        { t: "Skill-based certification", d: "Phonics & early-literacy methodology training" },
                        { t: "Business mentorship", d: "Guidance to launch and run your own venture" },
                    ].map(({ t, d }) => (
                        <div key={t} className="rounded-2xl bg-white border border-[#E8DCC7] p-5">
                            <div className="font-display text-base font-semibold">{t}</div>
                            <p className="text-xs text-[#3E332A]/70 mt-1.5 leading-relaxed">{d}</p>
                        </div>
                    ))}
                </div>
                <Button onClick={() => document.getElementById("franchise-enquiry")?.scrollIntoView({behavior:"smooth"})}
                    className="mt-8 bg-[#158A73] hover:bg-[#0E5D4E] text-white rounded-full h-12 px-6 font-semibold">
                    Start Your Own Journey <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    </section>
);

/* ---------------- FRANCHISE ---------------- */
const Franchise = () => (
    <section id="franchise" data-testid={HOME.franchiseSection} className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7EC] via-[#FFF7EC] to-[#FFE7B0]" />
        <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[#F26522]/15 blur-3xl" />
        <div className="absolute -bottom-24 left-10 w-72 h-72 rounded-full bg-[#158A73]/15 blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="chip mb-5"><PartyPopper className="w-3.5 h-3.5 text-[#F26522]" /> New Franchise · Grand Opening</div>
                    <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
                        <span className="text-[#F26522]">EliKids</span> Preschool<br />
                        <span className="italic">&</span> Enrichment Center
                    </h2>
                    <p className="mt-5 text-lg text-[#3E332A]/85 max-w-xl leading-relaxed">
                        A new beginning for a bright future and endless possibilities. Elikids is Nidhi's latest venture —
                        a nurturing, joyful, and innovative environment where children <em>Explore, Learn and Innovate</em> every day,
                        blending new-age digital tools with moral & cultural values.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white border border-[#E8DCC7] p-5">
                            <div className="flex items-center gap-2 text-[#F26522] font-semibold text-sm">
                                <Calendar className="w-4 h-4" /> DATE
                            </div>
                            <div className="mt-1 font-display text-xl">Saturday, 20th Jun 2026</div>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#E8DCC7] p-5">
                            <div className="flex items-center gap-2 text-[#158A73] font-semibold text-sm">
                                <Clock className="w-4 h-4" /> TIME
                            </div>
                            <div className="mt-1 font-display text-xl">4:00 PM – 6:00 PM</div>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#E8DCC7] p-5 sm:col-span-2">
                            <div className="flex items-center gap-2 text-[#D74E10] font-semibold text-sm">
                                <MapPin className="w-4 h-4" /> VENUE
                            </div>
                            <div className="mt-1 font-display text-xl">EliKids Preschool & Enrichment Center</div>
                            <div className="text-sm text-[#3E332A]/80 mt-1.5 leading-relaxed">Shop No. 1, 1st Floor, Tiwari House,<br/>Hanuman Road, IIT Market, Powai, Mumbai</div>
                            <a
                                href="https://maps.google.com/?q=Tiwari+House+Hanuman+Road+IIT+Market+Powai+Mumbai"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#158A73] hover:text-[#0E5D4E]"
                            >
                                Open in Google Maps <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button data-testid={HOME.franchiseRsvp} onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
                            className="bg-[#F26522] hover:bg-[#D74E10] text-white rounded-full h-12 px-6 font-semibold">
                            RSVP to Grand Opening <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <a href="https://wa.me/" target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#158A73] text-[#158A73] font-semibold hover:bg-[#158A73] hover:text-white transition-colors">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                    </div>
                    <div className="mt-8 flex items-center gap-3 text-sm text-[#3E332A]/70">
                        <div className="flex -space-x-2">
                            <span className="w-8 h-8 rounded-full bg-[#F26522] grid place-items-center text-white text-xs font-bold">E</span>
                            <span className="w-8 h-8 rounded-full bg-[#F4B301] grid place-items-center text-white text-xs font-bold">L</span>
                            <span className="w-8 h-8 rounded-full bg-[#158A73] grid place-items-center text-white text-xs font-bold">I</span>
                        </div>
                        <span>Explore · Learn · Innovate</span>
                    </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2 relative">
                    <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white border border-[#E8DCC7] rotate-[-1.5deg]">
                        <img src={IMG.invite} alt="EliKids Grand Opening Invitation" className="w-full h-auto block" />
                    </div>
                    <div className="absolute -bottom-6 -right-4 bg-[#1F1A17] text-white rounded-2xl px-4 py-3 rotate-3 shadow-xl">
                        <div className="font-script text-2xl text-[#F4B301] leading-none">You're invited!</div>
                        <div className="text-xs opacity-80 mt-0.5">A day of joy, learning & new beginnings</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/* ---------------- FRANCHISE ENQUIRY ---------------- */
const FranchiseEnquiry = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", investment: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) {
            toast.error("Please fill in your name, email and phone.");
            return;
        }
        setSubmitting(true);
        try {
            await axios.post(`${API}/franchise-enquiry`, form).catch(() => {});
            toast.success("Thank you! Our franchise team will reach out shortly.");
            setForm({ name: "", email: "", phone: "", city: "", investment: "", message: "" });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="franchise-enquiry" data-testid={HOME.franchiseEnquirySection} className="bg-[#1F1A17] text-[#FFF7EC] py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 grain opacity-40" />
            <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12 relative">
                <div className="lg:col-span-5">
                    <div className="chip mb-5 bg-white/10 border-white/15 text-white/80"><PartyPopper className="w-3.5 h-3.5 text-[#F4B301]" /> Franchise Enquiry</div>
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                        Bring <span className="italic text-[#F4B301]">EliKids</span> to your city.
                    </h2>
                    <p className="mt-5 text-white/70 max-w-md leading-relaxed">
                        Interested in opening an EliKids Preschool & Enrichment Center or an Alpha Sonic Phonics
                        center in your city? Share a few details and our team will get in touch with the full
                        franchise proposal.
                    </p>
                    <div className="mt-8 space-y-4">
                        {[
                            { ic: Mail, l: "nidhisarna@alphasonicphonics.com" },
                            { ic: MessageCircle, l: "WhatsApp available on request" },
                        ].map((it, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center border border-white/15">
                                    <it.ic className="w-4 h-4 text-[#F4B301]" />
                                </div>
                                <span className="text-white/85">{it.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <form data-testid={HOME.franchiseEnquiryForm} onSubmit={submit} className="lg:col-span-7 bg-white text-[#1F1A17] rounded-3xl border border-[#E8DCC7] p-6 lg:p-10 shadow-sm">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Your Name *</label>
                            <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="e.g. Ravi Kumar" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">City of Interest</label>
                            <Input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="e.g. Bengaluru" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Email Address *</label>
                            <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Phone / WhatsApp *</label>
                            <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="+91 ..." />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-xs font-semibold text-[#3E332A]/80">Investment Range</label>
                            <Select value={form.investment} onValueChange={v => setForm({ ...form, investment: v })}>
                                <SelectTrigger className="mt-1 h-11 rounded-xl border-[#E8DCC7]">
                                    <SelectValue placeholder="Select a range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="under-10L">Under ₹10 Lakhs</SelectItem>
                                    <SelectItem value="10-25L">₹10–25 Lakhs</SelectItem>
                                    <SelectItem value="25-50L">₹25–50 Lakhs</SelectItem>
                                    <SelectItem value="50L+">₹50 Lakhs+</SelectItem>
                                    <SelectItem value="exploring">Just exploring</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-xs font-semibold text-[#3E332A]/80">Message</label>
                            <Textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="mt-1 rounded-xl border-[#E8DCC7]" placeholder="Tell us about your background and goals..." />
                        </div>
                    </div>
                    <Button data-testid={HOME.franchiseEnquirySubmit} type="submit" disabled={submitting}
                        className="mt-6 bg-[#F26522] hover:bg-[#D74E10] text-white rounded-full h-12 px-8 font-semibold w-full sm:w-auto">
                        {submitting ? "Sending..." : "Submit Franchise Enquiry"} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            </div>
        </section>
    );
};

/* ---------------- GALLERY ---------------- */
const Gallery = () => {
    const shots = [
        { src: IMG.nidhiPink, label: "Nidhi at the new EliKids Preschool center", tag: "EliKids", rotate: "-1deg" },
        { src: IMG.awardPankho, label: "Honoured at the Pankho Ko Udne Do Awards", tag: "Award", rotate: "1deg" },
        { src: IMG.women, label: "EYFC training — 5000+ solopreneurs empowered", tag: "Teacher Training", rotate: "-2deg" },
        { src: IMG.invite, label: "EliKids Grand Opening — 20th June 2026", tag: "Grand Opening", rotate: "1deg" },
        { src: IMG.nidhiTeachable, label: "Alpha Sonic Phonics & Reading Program", tag: "Phonics", rotate: "-1.5deg", contain: true },
        { src: IMG.group1, label: "With the EliKids team & educators", tag: "Team", rotate: "1.5deg" },
        { src: IMG.group2, label: "Celebrating together at EliKids", tag: "Team", rotate: "-1deg" },
        { src: IMG.reading, label: "The joy of reading — every child, every day", tag: "Reading", rotate: "2deg", fallback: IMG.classroom },
        { src: IMG.galTeamPhotoshoot, label: "The EliKids team at the center", tag: "Team", rotate: "-1deg" },
        { src: IMG.galStarGroup1, label: "Little readers with their Star Reader certificates", tag: "Star Reader", rotate: "1.5deg" },
        { src: IMG.galNirvi1, label: "Nirvi receiving her Star Reader award", tag: "Star Reader", rotate: "-2deg" },
        { src: IMG.galNirvi2, label: "A proud family moment for Nirvi", tag: "Star Reader", rotate: "1deg" },
        { src: IMG.galPranav1, label: "Pranav being felicitated as a Star Reader", tag: "Star Reader", rotate: "-1.5deg" },
        { src: IMG.galEkansh, label: "Ekansh with his Star Reader certificate", tag: "Star Reader", rotate: "2deg" },
        { src: IMG.galParentTalk, label: "A parent session at EliKids", tag: "Parent Session", rotate: "-1deg" },
        { src: IMG.galTeamMeeting, label: "Team huddle & planning session", tag: "Team", rotate: "1deg" },
        { src: IMG.galFamilyReading, label: "Little ones reading together with family", tag: "Reading", rotate: "-1.5deg" },
        { src: IMG.galKidsCelebrating, label: "Kids celebrating their reading milestones", tag: "Celebration", rotate: "1.5deg" },
        { src: IMG.galAward, label: "The team with an award of recognition", tag: "Award", rotate: "-1deg" },
        { src: IMG.galJungleRoom, label: "Playtime in the jungle-themed activity room", tag: "Playtime", rotate: "1deg" },
        { src: IMG.galPranav2, label: "More cheer for Pranav's Star Reader win", tag: "Star Reader", rotate: "-2deg" },
        { src: IMG.galPranav3, label: "The whole gang celebrating with Pranav", tag: "Star Reader", rotate: "2deg" },
    ];
    return (
        <section id="gallery" data-testid={HOME.gallerySection} className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
            <div className="max-w-2xl mb-14">
                <div className="chip mb-5"><Star className="w-3.5 h-3.5 text-[#F4B301]" /> Photo Gallery</div>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight">Moments that <span className="italic text-[#F26522]">matter</span>.</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                {shots.map((s, i) => (
                    <figure key={i} className="card-tilt group relative" style={{ transform: `rotate(${s.rotate})` }}>
                        <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg ${s.contain ? "bg-gradient-to-br from-[#FFF7EC] to-[#FFEED9] p-4" : "bg-[#FFEED9]"}`}>
                            <img
                                src={s.src}
                                alt={s.label}
                                onError={(e) => { if (s.fallback) e.currentTarget.src = s.fallback; else e.currentTarget.style.display = 'none'; }}
                                className={`w-full h-full ${s.contain ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-700`}
                            />
                            <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-white/95 rounded-full px-3 py-1">{s.tag}</span>
                        </div>
                        <figcaption className="mt-3 text-sm text-[#3E332A]/85 leading-snug">{s.label}</figcaption>
                    </figure>
                ))}
            </div>
            <div className="mt-16">
                <div className="chip mb-5"><PartyPopper className="w-3.5 h-3.5 text-[#158A73]" /> Video Moments</div>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-8">See EliKids <span className="italic text-[#158A73]">in action</span>.</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {[
                        { src: VID.moment1, label: "Life at EliKids" },
                        { src: VID.moment2, label: "Celebration moments" },
                        { src: VID.moment3, label: "A day at the center" },
                        { src: VID.moment4, label: "Kids in action" },
                    ].map((v, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-black">
                            <video src={v.src} controls playsInline preload="metadata" className="w-full aspect-[9/16] object-cover bg-black" />
                            <div className="text-xs text-white/90 bg-[#1F1A17] px-3 py-2">{v.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------------- TEAM ---------------- */
const Team = () => {
    const members = [
        { src: IMG.teamStuti, n: "Stuti", r: "Finance & PR", d: "CFA candidate, handling finance and PR." },
        { src: IMG.teamAnjali, n: "Anjali Kumar", r: "Head — Customer Success & Phonics", d: "Trained under Nidhi; now guides 500+ students." },
        { src: IMG.teamSamina, n: "Samina Pereira", r: "Trainer", d: "Former Centre Head, now a trainer with the team." },
    ];
    return (
        <section id="team" data-testid={HOME.teamSection} className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
            <div className="max-w-2xl mb-12">
                <div className="chip mb-5"><Users className="w-3.5 h-3.5 text-[#158A73]" /> The Team</div>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight">The people behind the scenes.</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
                {members.map(m => (
                    <div key={m.n} className="bg-white border border-[#E8DCC7] rounded-2xl p-5 text-center">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-[#E8DCC7]">
                            <img src={m.src} alt={m.n} className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-4 font-display text-lg">{m.n}</div>
                        <div className="text-xs font-semibold text-[#F26522] mt-0.5">{m.r}</div>
                        <p className="text-xs text-[#3E332A]/70 mt-2 leading-relaxed">{m.d}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

/* ---------------- TESTIMONIALS ---------------- */
const Testimonials = () => {
    const t = [
        { q: "My 5-year-old was struggling to recognize letter sounds. After just 3 months with Nidhi's program, he's reading simple books on his own.", n: "Priya Mehta", r: "Parent, Mumbai" },
        { q: "As a teacher, the training I received from Nidhi completely changed how I approach early literacy. The methodology is scientifically sound and practically brilliant.", n: "Rekha Sharma", r: "Kindergarten Teacher, Delhi" },
        { q: "We partnered with Nidhi to implement Alpha Sonic across our 3 daycare centers. Reading outcomes improved dramatically within one academic year.", n: "Anjali Kapoor", r: "Director, Sunshine Daycare" },
        { q: "The EYFC training gave me confidence and skills to start my own preschool. Nidhi doesn't just teach — she empowers women to build.", n: "Sunita Rao", r: "Solopreneur, Pune" },
        { q: "Bedtime reading is something we both look forward to every night now. Thank you Nidhi!", n: "Meera Joshi", r: "Parent, Bangalore" },
        { q: "Our school adopted Alpha Sonic and within 6 months, early reading scores went up by 40%. Warm, thorough, incredibly practical.", n: "Vidya Krishnan", r: "Principal, Little Stars Academy" },
    ];
    return (
        <section id="testimonials" data-testid={HOME.testimonialsSection} className="bg-[#158A73] text-white py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 grain opacity-40" />
            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
                <div className="max-w-2xl mb-14">
                    <div className="chip mb-5 bg-white/10 border-white/15 text-white/80"><Quote className="w-3.5 h-3.5 text-[#F4B301]" /> Testimonials</div>
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight">What parents, teachers & women say.</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/[0.06]">
                        <video src={VID.testimonial} controls className="w-full aspect-[9/16] object-cover bg-black" />
                    </div>
                    {["pg6No_76o50", "v8mFSAiOUIc", "Fw9vwKRSfaM"].map(id => (
                        <div key={id} className="rounded-2xl overflow-hidden border border-white/15 bg-white/[0.06]">
                            <iframe
                                className="w-full aspect-video"
                                src={`https://www.youtube.com/embed/${id}`}
                                title="Testimonial video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {t.map((it, i) => (
                        <div key={i} className="rounded-2xl bg-white/[0.06] border border-white/15 p-6 backdrop-blur-sm hover:bg-white/[0.09] transition-colors">
                            <div className="flex text-[#F4B301]">
                                {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="mt-4 text-white/90 leading-relaxed">“{it.q}”</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#F4B301] text-[#1F1A17] grid place-items-center font-bold">{it.n[0]}</div>
                                <div>
                                    <div className="font-semibold">{it.n}</div>
                                    <div className="text-xs text-white/70">{it.r}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------------- FAQ ---------------- */
const FAQ = () => {
    const items = [
        { q: "What age is suitable for phonics learning?", a: "Children can begin phonological awareness activities as early as 2.5–3 years old. Formal phonics instruction is most effective between 3.5–7 years, though the Alpha Sonic program has helped children as old as 10 build strong foundations." },
        { q: "How long does the Alpha Sonic program take?", a: "Most children see significant progress within 8–12 weeks of consistent practice. A complete phonics foundation is typically built over 6–12 months depending on age and starting point." },
        { q: "Is the program available online or only offline?", a: "Both. Nidhi's programs are delivered fully online through her learning platform, and in-person via school partnerships and the new EliKids center." },
        { q: "Do parents need any teaching experience?", a: "Not at all. The Parent Learning Program is designed for parents with no teaching background — just 15–20 minutes a day with your child." },
        { q: "How does EYFC empower solopreneurs?", a: "The EYFC skill-based teacher training equips women with the methodology, curriculum, and business mentorship to start their own preschools or coaching ventures. Over 5000 solopreneurs have been trained offline & online." },
        { q: "Can schools or daycare centers partner with Nidhi?", a: "Absolutely. The School Collaboration Program includes literacy audit, curriculum integration, teacher training, and parent engagement workshops. Contact directly for a tailored partnership." },
    ];
    return (
        <section id="faq" data-testid={HOME.faqSection} className="max-w-4xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
            <div className="text-center mb-12">
                <div className="chip mb-5"><ChevronDown className="w-3.5 h-3.5 text-[#F26522]" /> FAQ</div>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
                {items.map((it, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-[#E8DCC7] rounded-2xl bg-white px-5">
                        <AccordionTrigger className="font-display text-lg text-left hover:no-underline py-5">{it.q}</AccordionTrigger>
                        <AccordionContent className="text-[#3E332A]/85 leading-relaxed pb-5">{it.a}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

/* ---------------- CONTACT ---------------- */
const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", age: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) {
            toast.error("Please fill in your name, email and phone.");
            return;
        }
        setSubmitting(true);
        try {
            await axios.post(`${API}/contact`, form).catch(() => {});
            toast.success("Thank you! Nidhi's team will reach out shortly.");
            setForm({ name: "", email: "", phone: "", age: "", message: "" });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" data-testid={HOME.contactSection} className="bg-[#FFEED9] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <div className="chip mb-5"><Mail className="w-3.5 h-3.5 text-[#F26522]" /> Get In Touch</div>
                    <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                        Start your child's <span className="italic text-[#F26522]">reading</span> journey today.
                    </h2>
                    <p className="mt-5 text-[#3E332A]/85 max-w-md leading-relaxed">
                        Book a free 30-minute consultation to find the right program for your child, your classroom, or your own preschool venture.
                    </p>
                    <div className="mt-8 space-y-4">
                        {[
                            { ic: Mail, l: "nidhisarna@alphasonicphonics.com" },
                            { ic: Globe, l: "nidhisarna.teachable.com" },
                            { ic: MapPin, l: "Powai, Mumbai · Saudi Arabia · London" },
                            { ic: Phone, l: "WhatsApp available on request" },
                        ].map((it, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white grid place-items-center border border-[#E8DCC7]">
                                    <it.ic className="w-4 h-4 text-[#F26522]" />
                                </div>
                                <span className="text-[#3E332A]/90">{it.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <form data-testid={HOME.contactForm} onSubmit={submit} className="lg:col-span-7 bg-white rounded-3xl border border-[#E8DCC7] p-6 lg:p-10 shadow-sm">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Your Name *</label>
                            <Input data-testid={HOME.contactName} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="e.g. Priya Mehta" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Child's Age</label>
                            <Select value={form.age} onValueChange={v => setForm({ ...form, age: v })}>
                                <SelectTrigger data-testid={HOME.contactAge} className="mt-1 h-11 rounded-xl border-[#E8DCC7]">
                                    <SelectValue placeholder="Select age" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2-3">2–3 years</SelectItem>
                                    <SelectItem value="3-4">3–4 years</SelectItem>
                                    <SelectItem value="4-5">4–5 years</SelectItem>
                                    <SelectItem value="5-6">5–6 years</SelectItem>
                                    <SelectItem value="6-8">6–8 years</SelectItem>
                                    <SelectItem value="8-10">8–10 years</SelectItem>
                                    <SelectItem value="teacher">I'm a Teacher / School</SelectItem>
                                    <SelectItem value="entrepreneur">I want to start my own preschool</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Email Address *</label>
                            <Input data-testid={HOME.contactEmail} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#3E332A]/80">Phone / WhatsApp *</label>
                            <Input data-testid={HOME.contactPhone} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1 h-11 rounded-xl border-[#E8DCC7]" placeholder="+91 ..." />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-xs font-semibold text-[#3E332A]/80">Message</label>
                            <Textarea data-testid={HOME.contactMessage} rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="mt-1 rounded-xl border-[#E8DCC7]" placeholder="Tell us a little about your child or your goals..." />
                        </div>
                    </div>
                    <Button data-testid={HOME.contactSubmit} type="submit" disabled={submitting}
                        className="mt-6 bg-[#F26522] hover:bg-[#D74E10] text-white rounded-full h-12 px-8 font-semibold w-full sm:w-auto">
                        {submitting ? "Sending..." : "Send Message & Book Consultation"} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            </div>
        </section>
    );
};

/* ---------------- FOOTER ---------------- */
const Footer = () => (
    <footer className="bg-[#1F1A17] text-[#FFF7EC] py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#F26522] grid place-items-center font-display font-bold text-lg">N</div>
                    <div>
                        <div className="font-display text-lg">Nidhi Sarna</div>
                        <div className="text-xs text-white/60">Educator · Entrepreneur · CEO, EliKids</div>
                    </div>
                </div>
                <p className="mt-5 text-white/70 max-w-md leading-relaxed">
                    Early Childhood Educator, Phonics Expert & CEO of Alpha Sonic Phonics, the EYFC brand,
                    and EliKids Preschool & Enrichment Center. Empowering children, teachers, and women to invest in themselves.
                </p>
                <div className="mt-4 text-2xl">🇮🇳 🇸🇦 🇬🇧</div>
            </div>
            <div>
                <div className="text-xs uppercase tracking-widest text-white/50">Programs</div>
                <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>Alpha Sonic Phonics</li>
                    <li>Parent Learning Program</li>
                    <li>EYFC Teacher Training</li>
                    <li>School Collaboration</li>
                    <li>EliKids Preschool</li>
                </ul>
            </div>
            <div>
                <div className="text-xs uppercase tracking-widest text-white/50">Connect</div>
                <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>Book Consultation</li>
                    <li>School Partnerships</li>
                    <li>Solopreneur Mentorship</li>
                    <li>Franchise Enquiries</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
            <div>© 2026 Nidhi Sarna · Alpha Sonic Phonics · EliKids. All rights reserved.</div>
            <div>Empowering Young Minds · India · Saudi Arabia · London</div>
        </div>
    </footer>
);

/* ---------------- HOME ---------------- */
const Home = () => (
    <div className="min-h-screen bg-[#FFF7EC] text-[#1F1A17]">
        <Nav />
        <Hero />
        <About />
        <Impact />
        <Programs />
        <AlphaSonicPhonics />
        <Journey />
        <PresenceMap />
        <WomenEmpowerment />
        <Franchise />
        <FranchiseEnquiry />
        <Gallery />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <Toaster position="top-center" richColors />
    </div>
);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
