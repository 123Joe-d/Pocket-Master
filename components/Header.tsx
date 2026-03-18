'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navMenus } from '@/lib/site-data';

type MenuKey = 'therapies' | 'topics' | 'struggles' | 'faq' | null;

export default function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  const renderDropdown = (items: { title: string; desc: string }[]) => (
    <div className="dropdown-panel">
      {items.map((item) => (
        <div key={item.title} className="dropdown-item">
          <div className="dropdown-title">{item.title}</div>
          <div className="dropdown-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="brand">口袋伙伴</Link>

        <nav className="desktop-nav">
          <div
            className="nav-item"
            onMouseEnter={() => setOpen('therapies')}
            onMouseLeave={() => setOpen(null)}
          >
            <Link href="/types-of-therapy">疗法类型</Link>
            {open === 'therapies' && renderDropdown(navMenus.therapies)}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setOpen('topics')}
            onMouseLeave={() => setOpen(null)}
          >
            <Link href="/topics">话题</Link>
            {open === 'topics' && renderDropdown(navMenus.topics)}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setOpen('struggles')}
            onMouseLeave={() => setOpen(null)}
          >
            <Link href="/common-struggles">常见困扰</Link>
            {open === 'struggles' && renderDropdown(navMenus.struggles)}
          </div>

          <Link href="/enterprise">企业服务</Link>

          <div
            className="nav-item"
            onMouseEnter={() => setOpen('faq')}
            onMouseLeave={() => setOpen(null)}
          >
            <Link href="/faq">常见问题</Link>
            {open === 'faq' && renderDropdown(navMenus.faq)}
          </div>

          <span className="lang-pill">🇨🇳 中文</span>
          <Link href="/login">登录</Link>
        </nav>

        <div className="header-actions">
          <Link href="/get-started" className="cta-button small">立即开始</Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            菜单
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-drawer">
          <Link href="/types-of-therapy" onClick={handleMobileLinkClick}>
            疗法类型
          </Link>
          <Link href="/topics" onClick={handleMobileLinkClick}>
            话题
          </Link>
          <Link href="/common-struggles" onClick={handleMobileLinkClick}>
            常见困扰
          </Link>
          <Link href="/enterprise" onClick={handleMobileLinkClick}>
            企业服务
          </Link>
          <Link href="/login" onClick={handleMobileLinkClick}>
            登录
          </Link>
          <Link
            href="/get-started"
            className="cta-button mobile"
            onClick={handleMobileLinkClick}
          >
            立即开始
          </Link>
        </div>
      )}
    </header>
  );
}
