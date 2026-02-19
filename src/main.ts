import './styles.css';

type Highlight = {
  icon: string;
  title: string;
  detail: string;
};

type Skill = {
  label: string;
  level: string;
};

const highlights: Highlight[] = [
  {
    icon: '💡',
    title: 'Creative Problem Solver',
    detail: 'I enjoy turning rough ideas into practical products and clean user experiences.'
  },
  {
    icon: '⚙️',
    title: 'Engineering Mindset',
    detail: 'I focus on scalable architecture, readable code, and automation-first workflows.'
  },
  {
    icon: '🚀',
    title: 'Continuous Improvement',
    detail: 'I iterate quickly, measure outcomes, and refine both product and process.'
  }
];

const skills: Skill[] = [
  {
    label: 'TypeScript / JavaScript',
    level: 'Advanced'
  },
  {
    label: 'Frontend Architecture',
    level: 'Advanced'
  },
  {
    label: 'CI/CD & GitHub Actions',
    level: 'Intermediate'
  }
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Missing #app container');
}

app.innerHTML = `
  <header class="hero container">
    <div class="hero__content">
      <p class="kicker">HELLO, I'M</p>
      <h1>Huy Le</h1>
      <p class="lead">Software developer building thoughtful web products with TypeScript, modern tooling, and strong delivery practices.</p>
      <p class="sublead">Additional profile details will be added here later.</p>

      <div class="hero__meta">
        <span class="chip">📍 Vietnam</span>
        <span class="chip">💼 Open to opportunities</span>
        <span class="chip">🛠️ Full-stack focused</span>
      </div>
    </div>

    <div class="hero__image-wrap">
      <img src="/profile-placeholder.svg" alt="Profile placeholder illustration" class="hero__image" />
    </div>
  </header>

  <main class="container page-body">
    <section>
      <h2>Highlights</h2>
      <div class="card-grid" id="highlightGrid"></div>
    </section>

    <section>
      <h2>Core Skills</h2>
      <ul class="skills" id="skillsList"></ul>
    </section>
  </main>

  <footer class="footer">
    <p>© 2026 Huy Le. Built with TypeScript and ready for GitHub Pages.</p>
  </footer>
`;

const highlightGrid = document.querySelector<HTMLDivElement>('#highlightGrid');
const skillsList = document.querySelector<HTMLUListElement>('#skillsList');

if (!highlightGrid || !skillsList) {
  throw new Error('Missing required UI containers');
}

highlightGrid.innerHTML = highlights
  .map(
    (item) => `
      <article class="card">
        <div class="card__icon" aria-hidden="true">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `
  )
  .join('');

skillsList.innerHTML = skills
  .map(
    (item) => `
      <li class="skill-item">
        <span class="skill-item__name">${item.label}</span>
        <span class="skill-item__level">${item.level}</span>
      </li>
    `
  )
  .join('');
