export const metadata = {
  title: 'About Us | MS Services Installation',
  description: 'Learn more about our mission, vision and the team behind MS Services Installation.',
};

export default function AboutPage() {
  return (
    <section className="section space-y-10">
      <h1 className="section-title">About Us</h1>
      <div className="section-description space-y-6">
        <p>
          At MS Services & Installation, our mission is to empower businesses, individuals and communities to access the benefits of clean energy through inclusive and innovative technology. Miriam Stiefel, co-owner of MS Services and Installation, LLC, has over 20 years of energy industry experience helping businesses and residential customers save money on their energy costs throughout the USA. To date, our Affinity Program has generated over $2 Million to participating nonprofit organizations.
        </p>
        <p>
          Miriam works directly with the <strong>New Jersey Community Solar Program</strong>, helping residents—whether they rent or own—gain access to solar energy without the need to install any panels or change their existing utility provider. With energy prices rising rapidly, this initiative allows customers to secure a <strong>20–25% monthly discount</strong> on their electric bills simply by enrolling their address.
        </p>
        <p>
          Community solar farms generate clean electricity and feed it into the local grid. Enrolled households then receive solar credits that offset their utility charges—<strong>at no cost to enroll or cancel</strong>. Those receiving state or local assistance may qualify for even greater savings.
        </p>
        <p>
          To learn more about enrolling with Miriam Stiefel, email <a href="mailto:stiefelmiriamr@gmail.com" className="text-blue-600 underline">stiefelmiriamr@gmail.com</a> 
        </p>
      </div>

      {/* Featured Blog Post with Clickable Animated Thumbnail */}
<div className="section-title text-center">
  <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 shadow-sm max-w-xl w-full text-center">
    <h2 className="text-xl font-semibold mb-4">Featured Blog Post</h2>
    <a
      href="https://www.homeownering.com/blog/2024/07/29/when-buying-a-home-with-solar-be-aware-of-these-5-things/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src="/solar-home-thumbnail.png"
        alt="Buying a Home with Solar Tips"
        className="mx-auto w-full md:w-72 rounded-lg shadow-lg object-cover"
      />
    </a>
    <p className="mt-4">
      Thinking about buying a home with solar? Learn what to watch out for before making the leap—
      including ownership transfer issues, solar loans, and long-term maintenance.
    </p>
    <a
      href="https://www.homeownering.com/blog/2024/07/29/when-buying-a-home-with-solar-be-aware-of-these-5-things/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 text-blue-700 font-medium hover:underline"
    >
      Read the full article →
    </a>
  </div>
</div>

    </section>
  );
}
