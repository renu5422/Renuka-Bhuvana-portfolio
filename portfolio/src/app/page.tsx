import HeroSection from "../components/HeroSection";
import ProfessionalSummarySection from "../components/ProfessionalSummarySection";
import KeyStrengthsSection from "../components/KeyStrengthsSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsDashboardSection from "../components/SkillsDashboardSection";
import ProjectsSection from "../components/ProjectsSection";
import AchievementsSection from "../components/AchievementsSection";
import EducationSection from "../components/EducationSection";
import CareerGoalsSection from "../components/CareerGoalsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Renuka Bhuvana — SDET & QA Automation Engineer",
  description: "SDET | QA Automation Engineer | Python · Playwright · Java · Selenium | API Testing | GitHub Actions CI/CD | Bengaluru",
};

const navLinks = [
  { label: "Summary", href: "#summary" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      {/* Dark sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A12]/90 backdrop-blur-md border-b border-white/10 px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-[13px] font-medium text-[#2D9566] tracking-wide">
          RB // SDET
        </span>
        <ul className="hidden md:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[12px] text-white/50 hover:text-[#2D9566] transition-colors no-underline tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://mail.google.com/mail/?view=cm&to=renukabhuvanac05@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[#1A6B4A] text-[#2D9566] text-[12px] font-medium hover:bg-[#1A6B4A] hover:text-white transition-colors no-underline"
        >
          ✉ Hire me
        </a>
      </nav>

      <main className="text-slate-900 pt-14">
        <HeroSection />
        <ProfessionalSummarySection />
        <KeyStrengthsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsDashboardSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
        <CareerGoalsSection />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
