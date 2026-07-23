const interests = [
  {
    title: "Post-training",
    text: "Improving reasoning, alignment, and adaptation after pretraining through data, optimization, and feedback.",
  },
  {
    title: "Graph4LLM",
    text: "Using structured and relational knowledge to strengthen language-model reasoning, retrieval, and memory.",
  },
  {
    title: "Efficient Learning & Inference",
    text: "Reducing memory, latency, and computation from model design to high-performance implementation.",
  },
];

const projects = [
  {
    name: "R-GFM",
    description: "Geometry-aware Graph Foundation Models with multi-scale expert routing.",
    tags: "Research · PyTorch · CUDA",
    href: "https://github.com/USTC-DataDarknessLab/R-GFM",
  },
  {
    name: "MinerU Local Orchestrator",
    description: "Local orchestration for document-processing workloads.",
    tags: "Systems · Python",
    href: "https://github.com/ability66/mineru-local-orchestrator",
  },
  {
    name: "VLM OCR",
    description: "OCR and document understanding with vision-language models.",
    tags: "VLM · Document AI",
    href: "https://github.com/ability66/VLM-ocr",
  },
  {
    name: "Server Watcher",
    description: "Lightweight monitoring utilities for servers and compute workloads.",
    tags: "Monitoring · Linux",
    href: "https://github.com/ability66/Server-Watcher",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">Haokun Liu</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publication">Publication</a>
            <a href="#projects">Projects</a>
            <a href="#honors">Honors</a>
            <a href="https://pre-interview-site.2510513455.workers.dev">PRE</a>
          </nav>
        </div>
      </header>

      <section className="hero container" id="top">
        <div className="hero-main">
          <p className="kicker">M.S. Student at USTC · Data Darkness Lab (DDL)</p>
          <h1>Haokun Liu</h1>
          <p className="lead">
            I am currently interested in <strong>post-training</strong>,
            <strong> Graph4LLM</strong>, and efficient learning and inference.
          </p>
          <div className="links">
            <a className="primary-link" href="https://scholar.google.com/citations?user=vE0PenEAAAAJ&hl=zh-CN">Google Scholar</a>
            <a href="https://github.com/ability66">GitHub</a>
            <a href="https://arxiv.org/abs/2605.09993">R-GFM Paper</a>
          </div>
        </div>
        <aside className="profile-note">
          <span className="note-label">Current focus</span>
          <p>Post-training and graph-augmented reasoning for language models.</p>
          <dl>
            <div><dt>Affiliation</dt><dd>USTC · DDL Lab</dd></div>
            <div>
              <dt>Advisor</dt>
              <dd><a href="https://staff.ustc.edu.cn/~xkxie/">Prof. Xike Xie</a></dd>
            </div>
            <div><dt>Open to</dt><dd>Research collaboration</dd></div>
          </dl>
        </aside>
      </section>

      <section className="section container two-column" id="about">
        <div className="section-title">
          <span>About</span>
          <h2>A researcher who also likes building things.</h2>
        </div>
        <div className="prose">
          <p>
            I am a master&apos;s student at the University of Science and Technology
            of China and a member of the <strong>Data Darkness Lab (DDL)</strong>,
            advised by <a href="https://staff.ustc.edu.cn/~xkxie/"><strong>Prof. Xike Xie</strong></a>.
            My current interests are post-training and Graph4LLM: improving
            model reasoning and adaptation while bringing structured knowledge
            into language-model systems.
          </p>
          <p>
            I enjoy working across the full path from modeling and experiments
            to CUDA acceleration, system implementation, and open-source tools.
            Before research, competitive programming shaped how I approach
            algorithms, debugging, and engineering trade-offs.
          </p>
        </div>
      </section>

      <section className="section container" id="research">
        <div className="section-heading">
          <div><span>Research</span><h2>Areas of interest</h2></div>
          <p>A focused set of questions rather than a long list of keywords.</p>
        </div>
        <div className="interest-grid">
          {interests.map((item, index) => (
            <article key={item.title}>
              <span className="number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="publication">
        <div className="section-heading">
          <div><span>Featured publication</span><h2>R-GFM</h2></div>
          <p>ICML 2026</p>
        </div>
        <article className="paper-card">
          <div className="paper-meta">
            <span>ICML 2026</span>
            <span>Graph Foundation Models</span>
          </div>
          <h3>Learning Graph Foundation Models on Riemannian Graph-of-Graphs</h3>
          <p className="authors"><strong>Haokun Liu</strong>, Zezhong Ding, Xike Xie</p>
          <p>
            R-GFM is a scale-adaptive and geometry-aware GFM designed for
            transferable representation learning across heterogeneous graph
            domains. It combines multi-scale modeling with mixture-of-experts
            routing and achieves state-of-the-art results across diverse tasks.
          </p>
          <div className="paper-links">
            <a href="https://arxiv.org/abs/2605.09993">Read paper →</a>
            <a href="https://github.com/USTC-DataDarknessLab/R-GFM">View code →</a>
          </div>
        </article>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <div><span>Selected work</span><h2>Projects</h2></div>
          <p>Research code and practical tools.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a href={project.href} className="project" key={project.name}>
              <div><h3>{project.name}</h3><p>{project.description}</p></div>
              <span>{project.tags}</span>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section container" id="honors">
        <div className="section-heading">
          <div><span>Competitive programming</span><h2>Honors</h2></div>
          <p>Selected ICPC achievements.</p>
        </div>
        <div className="honor-list">
          <article>
            <span>ICPC Asia Regional Contests</span>
            <h3>Multiple Bronze Medals</h3>
            <p>Medalist across multiple Asia Regional contests, with sustained experience in team-based algorithm design, implementation, and on-site problem solving.</p>
          </article>
          <article>
            <span>ICPC East Continent Final (EC-Final)</span>
            <h3>Consecutive Bronze Medals</h3>
            <p>Earned bronze medals in consecutive EC-Final appearances, competing against leading collegiate programming teams across East Asia.</p>
          </article>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>Haokun Liu</strong>
            <p>Post-training · Graph4LLM · Efficient AI</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/ability66">GitHub</a>
            <a href="https://scholar.google.com/citations?user=vE0PenEAAAAJ&hl=zh-CN">Scholar</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
