import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';

export default function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgressIndicator />
      <Header />
      
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
              {t('contact.pageTitle')}
            </h1>
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('contact.pageDescription')}
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 bg-white/10 p-6 rounded-xl shadow-sm">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{t('contact.office')}</h3>
                <address className="not-italic text-gray-800">
                  {t('contact.companyName') || "AltChain Inc."}<br />
                  {t('contact.companyLocation') || "Phoenix, AZ"}<br />
                  {t('contact.companyCountry') || "United States"}
                </address>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{t('contact.email')}</h3>
                <p><a href="mailto:daniel@altchain.tech" className="text-primary hover:underline">{t('contact.companyEmailAddress') || "daniel@altchain.tech"}</a></p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{t('contact.hours')}</h3>
                <p className="text-gray-800">{t('contact.businessHours')}</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}