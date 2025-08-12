export const metadata = {
  title: 'Services | MS Services Installation',
  description: 'Explore the community solar services provided by MS Services Installation.',
};

export default function ServicesPage() {
  return (
    <section className="section">
      <h1 className="section-title">Our Services</h1>
      <p className="section-description">
      MS Services & Installation, we are committed to helping businesses and households access clean, 
      affordable energy  through various programs, including natural gas and electricity procurement, 
      demand response, utility bill auditing, on-site solar panel installations as well as community solar.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Enrollment Assistance</h3>
          <p>
          We guide all our customers, whether commercial or residential, 
          through the enrollment process in all of our money saving energy programs whether they are large or small, rent or own.
          </p>
        </div>

        <div className="service-card">
          <h3>Bill Review & Savings Analysis</h3>
          <p>
          Our team helps analyze your current utility usage and shows you how to lower your monthly costs. For example, 
          fixed gas and electric rates mitigate the risk of the volatility in the energy market while 
          assisting businesses in calculating their annual energy budget at the same time.
          </p>
        </div>

        <div className="service-card">
          <h3>The Affinity Program</h3>
          <p>
          We partner with local organizations, schools, houses of worship and nonprofits as our way of giving 
          back to the community. As mentioned, to date, our Affinity Program has generated over $2 Million to 
          participating nonprofit organizations through quarterly checks. Our senior citizens' lunch-and-learns are a favorite event.
          </p>
        </div>

        <div className="service-card">
          <h3>Program Eligibility Screening</h3>
          <p>
            We assist residents in confirming eligibility for the program and help low-income
            applicants access enhanced savings if they qualify for state or local assistance.
          </p>
        </div>

        <div className="service-card">
          <h3>Advisor Training & Support</h3>
          <p>
            Interested in becoming a community solar advisor? We offer onboarding, training materials, 
            and tools to help you grow your impact in your neighborhood.
          </p>
        </div>

        <div className="service-card">
          <h3>Customer Support & Follow-Up</h3>
          <p>
          We provide ongoing support after enrollment <strong>in all of our programs-</strong> 
          answering billing <strong>or any other questions</strong> ensuring continued customer satisfaction.
          </p>
        </div>
        <div className="service-card">
          <h3>Community Solar</h3>
          <p>
          Enjoy solar savings without any rooftop panels. Clean energy is delivered through the local grid
              and credited directly to your utility bill. Participants receive a 20–25% discount every month on the electricity portion of their bill—
              with no cost to join or cancel.
          </p>
        </div>
      </div>
    </section>
  );
}
