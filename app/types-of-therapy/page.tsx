import { navMenus } from '@/lib/site-data';

export default function Page() {
  return (
    <main className="inner-page section-shell">
      <span className="eyebrow">疗法类型</span>
      <h1>支持方式</h1>
      <div className="simple-grid">
        {navMenus.therapies.map((item) => (
          <div key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
