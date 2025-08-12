import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'MS Services & Installation, LLC',
  description: 'Innovative energy solutions for the energy economy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">MS Services & Installations</Link>
            <nav className="navigation">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/contact" className="nav-link">Contact Today</Link>
            </nav>
          </div>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} MS Services & Installation, LLC. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}