import { navMenus } from '@/lib/site-data';

export default function Page() {
  return (
    <main className="inner-page section-shell">
      <span className="eyebrow">常见困扰</span>
      <h1>常见支持议题</h1>
      <div className="simple-grid">
        {navMenus.struggles.map((item) => (
          <div key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
