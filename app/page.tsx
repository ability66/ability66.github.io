const research = [
  {
    index: "01",
    title: "Foundation Models",
    text: "Transferable models that generalize across domains, data regimes, and downstream tasks.",
  },
  {
    index: "02",
    title: "Efficient Inference",
    text: "Lower latency, memory use, and computational overhead for modern AI workloads.",
  },
  {
    index: "03",
    title: "AI Systems",
    text: "Turning research ideas into practical, scalable, and high-performance implementations.",
  },
];

const projects = [
  {
    name: "R-GFM",
    kind: "Research · ICML 2026",
    description:
      "A scale-adaptive foundation model with geometry-aware expert routing for transferable representation learning.",
    stack: ["PyTorch", "CUDA", "MoE"],
    href: "https://github.com/USTC-DataDarknessLab/R-GFM",
  },
  {
    name: "MinerU Local Orchestrator",
    kind: "AI Infrastructure",
    description:
      "Local orchestration for reliable, repeatable document-processing workloads.",
    stack: ["Python", "Systems", "Automation"],
    href: "https://github.com/ability66/mineru-local-orchestrator",
  },
  {
    name: "VLM OCR",
    kind: "Vision-Language Models",
    description:
      "Document understanding and OCR experiments powered by vision-language models.",
    stack: ["Python", "VLM", "OCR"],
    href: "https://github.com/ability66/VLM-ocr",
  },
  {
    name: "Server Watcher",
    kind: "Developer Tooling",
    description:
      "Lightweight monitoring utilities for servers and compute-intensive workloads.",
    stack: ["Python", "Monitoring", "Linux"],
    href: "https://github.com/ability66/Server-Watcher",
  },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Back to top">
          ability<span>66</span>
        </a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#publication">Publication</a>
          <a href="#projects">Projects</a>
        </div>
        <a className="nav-cta" href="https://github.com/ability66">
          GitHub ↗
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> M.S. Student · USTC</div>
          <h1>
            Building models that <em>generalize</em>,<br />
            systems that <em>scale</em>.
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>Haokun Liu</strong>, a researcher and engineer working
            on foundation models, efficient inference, and AI systems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#publication">Explore my work <span>↓</span></a>
            <a className="button quiet" href="https://scholar.google.com/citations?user=vE0PenEAAAAJ&hl=zh-CN">Google Scholar ↗</a>
          </div>
        </div>

        <aside className="signal-card" aria-label="Research snapshot">
          <div className="signal-header">
            <span>RESEARCH / SIGNAL</span>
            <i />
          </div>
          <div className="signal-orbit">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">FM</div>
            <span className="orbit-label label-one">TRANSFER</span>
            <span className="orbit-label label-two">EFFICIENCY</span>
            <span className="orbit-label label-three">SYSTEMS</span>
          </div>
          <div className="signal-stats">
            <div><strong>ICML</strong><span>2026</span></div>
            <div><strong>49%</strong><span>relative gain</span></div>
            <div><strong>3</strong><span>research pillars</span></div>
          </div>
        </aside>
      </section>

      <section className="ticker" aria-label="Research topics">
        <div>FOUNDATION MODELS <span>✦</span> EFFICIENT INFERENCE <span>✦</span> REPRESENTATION LEARNING <span>✦</span> AI SYSTEMS <span>✦</span> MIXTURE OF EXPERTS</div>
      </section>

      <section className="section shell" id="research">
        <div className="section-heading">
          <span className="section-number">01 / RESEARCH</span>
          <h2>What I care about</h2>
          <p>Research questions with a clear path from learning algorithms to working systems.</p>
        </div>
        <div className="research-grid">
          {research.map((item) => (
            <article className="research-card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="publication">
        <div className="section-heading compact">
          <span className="section-number">02 / FEATURED PUBLICATION</span>
          <h2>R-GFM</h2>
        </div>
        <article className="publication-card">
          <div className="publication-meta">
            <span className="venue">ICML 2026</span>
            <span>FOUNDATION MODEL · MIXTURE OF EXPERTS</span>
          </div>
          <h3>Learning Graph Foundation Models on Riemannian Graph-of-Graphs</h3>
          <p className="authors"><strong>Haokun Liu</strong>, Zezhong Ding, Xike Xie</p>
          <p className="publication-summary">
            R-GFM learns transferable representations across heterogeneous domains with
            multi-scale modeling and geometry-aware expert routing. It achieves
            state-of-the-art performance with up to <strong>49% relative improvement</strong>.
          </p>
          <div className="publication-footer">
            <div className="metric"><strong>49%</strong><span>UP TO RELATIVE IMPROVEMENT</span></div>
            <div className="publication-links">
              <a href="https://arxiv.org/abs/2605.09993">Paper ↗</a>
              <a href="https://github.com/USTC-DataDarknessLab/R-GFM">Code ↗</a>
            </div>
          </div>
        </article>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading">
          <span className="section-number">03 / SELECTED WORK</span>
          <h2>Research & engineering</h2>
          <p>Selected projects spanning model design, document AI, and practical infrastructure.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project-row" href={project.href} key={project.name}>
              <span className="project-count">0{index + 1}</span>
              <div className="project-name"><span>{project.kind}</span><h3>{project.name}</h3></div>
              <p>{project.description}</p>
              <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div>
          <span className="section-number">04 / ABOUT</span>
          <h2>Research should travel.</h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a master&apos;s student at the University of Science and Technology
            of China. I&apos;m interested in models that transfer across domains and
            implementations that make advanced AI genuinely usable.
          </p>
          <p>
            My work sits between representation learning, efficient inference,
            and systems engineering—from an idea on paper to performant code.
          </p>
          <div className="tool-row"><span>Python</span><span>PyTorch</span><span>CUDA</span><span>C++</span><span>Linux</span></div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <span className="section-number">LET&apos;S CONNECT</span>
          <h2>Open to research conversations<br />and collaborations.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/ability66">GitHub ↗</a>
          <a href="https://scholar.google.com/citations?user=vE0PenEAAAAJ&hl=zh-CN">Scholar ↗</a>
          <a href="https://arxiv.org/abs/2605.09993">arXiv ↗</a>
        </div>
        <div className="footer-bottom"><span>© 2026 Haokun Liu</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
