import ModernLogo1 from '../components/logos/ModernLogo1';
import ModernLogo2 from '../components/logos/ModernLogo2';
import ModernLogo3 from '../components/logos/ModernLogo3';
import ModernLogo4 from '../components/logos/ModernLogo4';
import ModernLogo5 from '../components/logos/ModernLogo5';
import { useTheme } from '../hooks/theme-provider';

export default function LogoPreview() {
  const { isDarkMode } = useTheme();
  
  const logos = [
    { component: ModernLogo1, name: "Interconnected Links", description: "Modern chain links with innovation accent" },
    { component: ModernLogo2, name: "Geometric A", description: "Bold A-shape with chain element" },
    { component: ModernLogo3, name: "Network Nodes", description: "Global connectivity visualization" },
    { component: ModernLogo4, name: "Hexagonal Badge", description: "Clean geometric form with letter A" },
    { component: ModernLogo5, name: "Minimal Monogram", description: "Ultra-clean letterform design" }
  ];

  return (
    <div className={`min-h-screen p-8 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">AltChain Logo Options</h1>
        <p className="text-center text-gray-500 mb-12">Modern, timeless designs optimized for favicon use</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo, index) => {
            const LogoComponent = logo.component;
            return (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  {/* Large preview */}
                  <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600">
                    <LogoComponent className="w-16 h-16" />
                  </div>
                  
                  {/* Different sizes */}
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded bg-gray-100 dark:bg-slate-700">
                      <LogoComponent className="w-8 h-8" />
                    </div>
                    <div className="p-1 rounded bg-gray-100 dark:bg-slate-700">
                      <LogoComponent className="w-6 h-6" />
                    </div>
                    <div className="p-1 rounded bg-gray-100 dark:bg-slate-700">
                      <LogoComponent className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-1">{logo.name}</h3>
                    <p className="text-sm text-gray-500">{logo.description}</p>
                  </div>
                  
                  {/* Favicon preview */}
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-2">Favicon Preview</p>
                    <div className="w-8 h-8 bg-gray-200 dark:bg-slate-600 rounded flex items-center justify-center">
                      <LogoComponent className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All logos are SVG-based, scalable, and optimized for both light and dark themes
          </p>
        </div>
      </div>
    </div>
  );
}