export default function Page() {
  return (
    <main className="inner-page section-shell narrow-page">
      <span className="eyebrow">登录</span>
      <h1>欢迎回来</h1>
      <div className="form-card">
        <input placeholder="邮箱地址" />
        <input placeholder="密码" type="password" />
        <button className="cta-button form-btn">登录</button>
      </div>
    </main>
  );
}
