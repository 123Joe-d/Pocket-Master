import { featureCards } from '@/lib/site-data';

export default function SectionCards() {
  return (
    <section className="cards-section section-shell">
      <div className="section-heading">
        <span className="eyebrow">产品特点</span>
        <h2>让支持更容易被触达</h2>
        <p>适合做心理支持产品首页，也适合作为 AI 对话产品展示模板。</p>
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
