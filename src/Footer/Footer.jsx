import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import SandIcon from '../Icon/Icon';

/**
 * SandFooter - A premium page footer matching the SandurTech design.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for overrides.
 * @param {string} [props.brandLogo] - URL to the brand logo image.
 * @param {string} [props.brand='SandurTech'] - Brand name text.
 * @param {string} [props.brandUrl='https://sandurtech.vercel.app'] - URL the brand name links to.
 * @param {string} [props.description] - Brand description text.
 * @param {Array<{label: string, href: string}>} [props.navLinks] - Array of links for navigation column.
 * @param {Array<{label: string, href: string}>} [props.supportLinks] - Array of links for support column.
 * @param {Array<{icon: string, href: string, label: string}>} [props.socials] - Array of social icons.
 * @param {React.ReactNode} [props.children] - Additional footer content.
 * @returns {React.ReactElement} The rendered footer component.
 *
 * @example
 * return (
 *   <SandFooter brand="My Brand" description="My brand description." />
 * )
 */
const SandFooter = React.forwardRef(({
  className,
  brandLogo,
  brand = 'SandurTech',
  brandUrl = 'https://sandurtech.vercel.app',
  description = 'SandurTech is a solo-venture project dedicated to creating lightweight, efficient, and user-centric microservices that solve everyday digital problems.',
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  supportLinks = [
    { label: 'Connect Directly', href: 'https://www.linkedin.com/in/amogharajsandur/' },
    { label: 'Review on Google Business?', href: '#' },
  ],
  socials = [
    { icon: 'code', href: 'https://github.com/amogharajsandur', label: 'GitHub' },
    { icon: 'link', href: 'https://www.linkedin.com/in/amogharajsandur/', label: 'LinkedIn' },
    { icon: 'mail', href: 'mailto:contact@sandurtech.com', label: 'Email' },
  ],
  children,
  ...props
}, ref) => (
  <footer ref={ref} className={`${styles.footer} ${className || ''}`} {...props}>
    <div className={styles.main}>
      {/* Brand Column */}
      <div className={styles.brandCol}>
        <a href={brandUrl} target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
          {brandLogo && <img src={brandLogo} alt={brand} className={styles.brandLogoImage} />}
          <span className={styles.brandName}>
            <span className={styles.brandAccent}>Sandur</span>Tech
          </span>
        </a>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Navigation Column */}
      <div className={styles.linkCol}>
        <h4 className={styles.colTitle}>Navigation</h4>
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>

      {/* Legal & Support Column */}
      <div className={styles.linkCol}>
        <h4 className={styles.colTitle}>Legal & Support</h4>
        {supportLinks.map((link, i) => (
          <a key={i} href={link.href} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>

      {children}
    </div>

    {/* Bottom Bar */}
    <div className={styles.bottom}>
      <span className={styles.copyright}>
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://www.linkedin.com/in/amogharajsandur/" target="_blank" rel="noopener noreferrer">
          Amogha Raj Sandur
        </a>
        {' & '}
        <a href={brandUrl} target="_blank" rel="noopener noreferrer">
          SandurTech
        </a>
        {' (Sandur Technologies).'}
      </span>
      <div className={styles.socials}>
        {socials.map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={s.label}>
            <SandIcon name={s.icon} size={18} />
          </a>
        ))}
      </div>
    </div>

    {/* Large Brand Watermark */}
    <div className={styles.watermark}>SANDURTECH</div>
  </footer>
));

SandFooter.propTypes = {
  className: PropTypes.string,
  brand: PropTypes.string,
  brandUrl: PropTypes.string,
  description: PropTypes.string,
  navLinks: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })),
  supportLinks: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })),
  socials: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.string, href: PropTypes.string, label: PropTypes.string })),
  children: PropTypes.node,
};

SandFooter.displayName = 'SandFooter';
export { SandFooter };
export default SandFooter;
