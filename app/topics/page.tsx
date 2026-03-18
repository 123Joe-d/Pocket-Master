import { navMenus } from '@/lib/site-data';

export default function Page() {
  return (
    <main className="inner-page section-shell">
      <span className="eyebrow">话题</span>
      <h1>你想聊什么</h1>
      <div className="simple-grid">
        {navMenus.topics.map((item) => (
          <div key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
