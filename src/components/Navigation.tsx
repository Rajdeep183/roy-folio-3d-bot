import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { icon: Home, label: 'Home', href: '#home', ariaLabel: 'Navigate to Rajdeep Roy\'s home section' },
    { icon: User, label: 'About', href: '#about', ariaLabel: 'Learn about Rajdeep Roy\'s background and skills' },
    { icon: Briefcase, label: 'Projects', href: '#projects', ariaLabel: 'View Rajdeep Roy\'s software and ML projects' },
    { icon: Mail, label: 'Contact', href: '#contact', ariaLabel: 'Contact Rajdeep Roy for opportunities' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6" aria-label="Main navigation for Rajdeep Roy's portfolio">
      <div className="mx-auto max-w-6xl rounded-full border border-border/70 bg-background/80 px-5 py-3 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold tracking-tight text-foreground"
            onClick={() => handleNavClick('#home')}
            aria-label="Rajdeep Roy's Portfolio"
          >
            RR
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-6 items-center"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                aria-label={item.ariaLabel}
              >
                <item.icon size={16} aria-hidden="true" />
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
          </motion.div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="rounded-full border border-border p-2" aria-label="Toggle theme">
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-border p-2"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mx-auto mt-3 max-w-6xl rounded-2xl border border-border bg-card p-4 shadow-sm md:hidden"
          role="menu"
          aria-label="Mobile navigation menu for Rajdeep Roy's portfolio"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-foreground/90 hover:text-foreground py-2.5 flex items-center gap-2"
              role="menuitem"
              aria-label={item.ariaLabel}
            >
              <item.icon size={16} aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
