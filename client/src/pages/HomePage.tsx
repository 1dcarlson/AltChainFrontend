import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import SimpleWaitlistForm from "../components/SimpleWaitlistForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import PersonalWelcome from "../components/PersonalWelcome";
import ModernLogo1 from "../components/logos/ModernLogo1";
import ModernLogo2 from "../components/logos/ModernLogo2";
import ModernLogo3 from "../components/logos/ModernLogo3";
import ModernLogo4 from "../components/logos/ModernLogo4";
import ModernLogo5 from "../components/logos/ModernLogo5";
import { CheckCircle } from "lucide-react";

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Logo Preview Section - TEMPORARY */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 py-8 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">New Logo Design Options</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
              <ModernLogo1 className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-300">Interconnected Links</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
              <ModernLogo2 className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-300">Geometric A</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
              <ModernLogo3 className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-300">Network Nodes</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
              <ModernLogo4 className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-300">Hexagonal Badge</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm">
              <ModernLogo5 className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-300">Minimal Monogram</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">All designs are modern, timeless, and optimized for favicon use</p>
        </div>
      </div>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center animate-pulse-once">
            <PersonalWelcome />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
              {t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <div id="waitlist-form" className="max-w-lg mx-auto bg-white/10 p-6 rounded-lg shadow-sm flex justify-center">
              <SimpleWaitlistForm />
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-gray-800">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t('benefits.free')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t('benefits.noCard')}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Value Proposition */}
        <Features />
        
        {/* Detailed Benefits */}
        <Benefits />
        
        {/* How It Works Process */}
        <HowItWorks />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{t('cta.title')}</h2>
            <p className="text-lg text-gray-800 font-medium mb-8">
              {t('cta.description')}
            </p>
            <button 
              className="px-8 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden focus:outline-none hover:shadow-lg hover:shadow-primary/30 group hover-lift hover-glow"
              onClick={() => {
                // Smooth scroll to waitlist form
                const el = document.getElementById('waitlist-form');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              {t('cta.button')}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
