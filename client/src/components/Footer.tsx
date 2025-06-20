import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import LogoIcon from './LogoIcon';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import ModernLogo3 from './logos/ModernLogo3';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-300 py-8 px-6 shadow-sm mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <ModernLogo3 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h2 className="text-primary font-bold text-lg">AltChain</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-sm mt-1 font-medium">{t('hero.title')}</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink href="/privacy-policy" className="text-gray-800 dark:text-gray-400 hover:text-primary text-sm font-medium">
              {t('footer.privacy')}
            </NavLink>
            <NavLink href="/terms-of-service" className="text-gray-800 dark:text-gray-400 hover:text-primary text-sm font-medium">
              {t('footer.terms')}
            </NavLink>
            <NavLink href="/contact" className="text-gray-800 dark:text-gray-400 hover:text-primary text-sm font-medium">
              {t('footer.contact')}
            </NavLink>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 text-center text-gray-700 dark:text-gray-400 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} AltChain. {t('footer.copyright')}
        </motion.div>
      </div>
    </footer>
  );
}
