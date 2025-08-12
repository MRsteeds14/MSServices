// app/contact/page.js

export const metadata = {
  title: 'Contact Us | MS Services Insight',
  description: 'Get in touch with the team at MS Services Insight.',
};

export default function ContactPage() {
  return (
    <section className="section space-y-10">
      {/* Center the heading */}
      <h1 className="section-title text-center">Contact Us</h1>

      {/* Center the description text */}
      <div className="section-description space-y-6 text-center">
        <p>
          Have a question or ready to start your project? Click on our logo below to get in
          touch with Miriam Stiefel, your Independent Energy Advisor.
        </p>
        <p>
          Or drop us a line at{' '}
          <a href="mailto:stiefelmiriamr@gmail.com" className="text-blue-600 underline">
            stiefelmiriamr@gmail.com
          </a>{' '}
          or call{' '}
          <a href="tel:2016383032" className="text-blue-600 underline">
            (201) 638-3032
          </a>.
        </p>
          <a
          href="mailto:stiefelmiriamr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/MS Services Logo.png"
            alt="MS Services Logo – Click to contact Energy Lady NJ"
            className="hero-logo mx-auto h-32 w-32 cursor-pointer object-contain transition-transform hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
}
