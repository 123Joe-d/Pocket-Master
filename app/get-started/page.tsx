export default function Page() {
  return (
    <main className="inner-page section-shell narrow-page">
      <span className="eyebrow">开始体验</span>
      <h1>和 AI 开启第一次对话</h1>
      <div className="form-card">
        <textarea placeholder="你现在最想聊的是什么？" rows={7} />
        <button className="cta-button form-btn">开始聊天</button>
      </div>
    </main>
  );
}
