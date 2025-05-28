import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { useMemo } from 'react';
import LanguageSelector from './LanguageSelector';
import LogoIcon from './LogoIcon';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/theme-provider';

export default function Header() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  
  // Create dynamic header style
  const headerStyle = useMemo(() => {
    return {
      backgroundImage: 'var(--gradientPrimary)',
      boxShadow: isDarkMode ? '0 2px 12px rgba(0, 0, 0, 0.15)' : '0 2px 12px rgba(0, 0, 0, 0.08)'
    };
  }, [isDarkMode]);
  
  return (
    <header className="bg-white dark:bg-[#3B82F6] shadow-sm py-5 px-6 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="flex items-baseline gap-2 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <LogoIcon />
            <span className="text-gray-800 dark:text-white font-bold text-2xl">AltChain</span>
          </motion.div>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink 
            href="/" 
            className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-blue-100 text-sm font-medium transition-colors"
            activeClassName="text-gray-900 dark:text-white font-bold"
          >
            {t('about')}
          </NavLink>
          <NavLink 
            href="/contact" 
            className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-blue-100 text-sm font-medium transition-colors"
            activeClassName="text-gray-900 dark:text-white font-bold"
          >
            {t('contact.navLink') || "Contact"}
          </NavLink>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}
