import { featureCards } from '@/lib/site-data';

export default function SectionCards() {
  return (
    <section className="cards-section section-shell">
      <div className="section-heading">
        <span className="eyebrow">产品特点</span>
        <h2>让支持更容易被触达</h2>
      </div>
      <div className="card-grid">
        {featureCards.map((card) => (
          <article key={card.title} className="info-card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
