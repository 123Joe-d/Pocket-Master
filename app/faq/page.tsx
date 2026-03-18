const faqItems = [
  {
    q: '什么是口袋伙伴？',
    a: '口袋伙伴就像一个随时在线的倾听者，不会评判你，你可以放心跟它说自己的烦恼、压力、或者情绪问题。它会用最先进的心理学模型解答你的疑惑，引导你思考，帮助你走出心理困境。'
  },
  {
    q: '这是心理治疗的替代品吗？',
    a: '口袋伙伴是 24/7 的 AI 心理咨询应用，但在临床上不建议完全替代心理治疗和药物使用。'
  },
  {
    q: '口袋伙伴是如何给出针对我个人的建议的？',
    a: '口袋伙伴会通过机器学习不断从你们的对话中学习。它会记住一些关键细节，追踪你的情绪变化模式，并根据你的个人目标和经历来给出更贴合的建议。你用得越多，它的回应就会越符合你的需求。'
  },
  {
    q: '免费的版本有什么功能？',
    a: '口袋伙伴的免费版本包含一些核心功能，比如支持文字和语音聊天、基础的情绪支持，以及引导式的自我反思练习。如果你想用更高级的功能，比如更深入的分析、情绪记录，以及不限消息次数，可以考虑升级到我们的付费版本。'
  }
];

export default function FAQPage() {
  return (
    <main className="inner-page">
      <section className="section-shell faq-page-shell">
        <div className="section-heading faq-page-heading">
          <span className="eyebrow">FAQ</span>
          <h1>常见问题</h1>
          <p>
            关于口袋伙伴的功能、使用方式以及个性化建议机制，你可以在这里快速找到答案。
          </p>
        </div>

        <div className="faq-list faq-list-large">
          {faqItems.map((item, index) => (
            <article key={index} className="faq-item faq-item-large">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}