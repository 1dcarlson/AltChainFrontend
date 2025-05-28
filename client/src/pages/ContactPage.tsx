import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';

export default function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ScrollProgressIndicator />
      <Header />
      
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">{t('contact.pageTitle').split(' ')[0]}</span>{' '}
              <span className="text-[#3B82F6]">{t('contact.pageTitle').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('contact.pageDescription')}
            </p>
          </div>
        
          <div className="border-t border-gray-200 pt-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{t('contact.office')}</h3>
                <address className="not-italic text-gray-800 leading-relaxed">
                  <span className="text-gray-800">{t('contact.companyName') || "AltChain Inc."}</span><br />
                  <span className="text-gray-800">{t('contact.companyLocation') || "Phoenix, AZ"}</span><br />
                  <span className="text-gray-800">{t('contact.companyCountry') || "United States"}</span>
                </address>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{t('contact.email')}</h3>
                <p className="leading-relaxed"><a href="mailto:daniel@altchain.tech" className="text-primary hover:underline">{t('contact.companyEmailAddress') || "daniel@altchain.tech"}</a></p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{t('contact.hours')}</h3>
                <p className="text-gray-800 leading-relaxed">{t('contact.businessHours')}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}