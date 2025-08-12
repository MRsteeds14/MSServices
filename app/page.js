import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */} 
      <section
        className="hero"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Energy Solutions for All</h1>
          <p>
          Cut overhead costs and boost sustainability. 
          Reduce operating expenses and unlock long-term savings.
          </p>
          <Link href="/services" className="btn btn-primary">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">Why Choose MS Services & Installation?</h2>
        <p className="section-description">
        We are customer advocates who are vendor neutral, 
        allowing us to consistently help our customers make the right energy decisions for their businesses and homes.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h3>The Affinity Program</h3>
            <p>
            Our Affinity Program has generated over $2 Million to participating nonprofit organizations 
            through quarterly checks.
            </p>
          </div>
          <div className="service-card">
            <h3>Guaranteed Monthly Savings</h3>
            <p>
              Participants receive the Most cost effective electric and gas rates. Recieve a 20–25% discount every month on the electricity portion of their bill—
              with no cost to join or cancel.
            </p>
          </div>
          <div className="service-card">
            <h3>Simple, Guided Installation & Enrollment</h3>
            <p>
              Our team walks you through every step. All you need is an electric bill, an email address, 
              and a few minutes to get started.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
