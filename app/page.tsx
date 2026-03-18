import Link from 'next/link';
import SectionCards from '@/components/SectionCards';
import { faqItems } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow hero-badge">24/7 AI 支持</span>
          <h1>口袋里的 AI 心理支持</h1>
          <p>
            随时随地获得陪伴、梳理和引导。在压力、焦虑、关系与成长议题中，
            让你更平静地理解自己。
          </p>
          <div className="hero-actions">
            <Link href="/get-started" className="cta-button">立即开始聊天</Link>
            <Link href="/topics" className="ghost-button">查看支持话题</Link>
          </div>
          <div className="hero-points">
            <span>✓ 全天候可用</span>
            <span>✓ 即刻体验</span>
            <span>✓ 中文界面</span>
          </div>
        </div>
      </section>

      <SectionCards />

      <section className="section-shell split-section">
        <div>
          <span className="eyebrow">适用场景</span>
          <h2>当你不想一个人扛的时候</h2>
          <p>
            这个页面适合用来展示心理支持型产品、AI 对话产品、个人成长平台，
            或任何强调“陪伴 + 引导 + 随时可访问”的服务。
          </p>
        </div>
        <div className="split-card">
          <h3>你可以继续扩展</h3>
          <ul>
            <li>接入 OpenAI API 做真实聊天</li>
            <li>增加登录、注册、保存记录</li>
            <li>加入套餐页、定价页、博客页</li>
          </ul>
        </div>
      </section>

      <section id="faq" className="faq-section section-shell">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>常见问题</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <div key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
