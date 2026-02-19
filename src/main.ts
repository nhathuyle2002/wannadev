import './styles.css';

type Profile = {
  name: string;
  headline: string;
  location: string;
  about: string;
  linkedin: string;
  email: string;
};

type Item = {
  title: string;
  subtitle: string;
  detail: string;
};

type Skill = {
  label: string;
  level: string;
};

const profile: Profile = {
  name: 'Huy Le Nhat',
  headline: 'Software Developer | TypeScript, Frontend, CI/CD',
  location: 'Vietnam',
  about:
    'I build modern, responsive web experiences with a strong focus on performance, maintainability, and product quality. I enjoy solving practical business problems with clean engineering workflows.',
  linkedin: 'https://www.linkedin.com/in/huy-le-nhat/',
  email: 'huykvp@gmail.com'
};

const highlights: Item[] = [
  {
    title: 'Profile-driven portfolio',
    subtitle: 'Showcase personal brand',
    detail: 'This page is structured to map directly to LinkedIn-style sections for easier updates.'
  },
  {
    title: 'TypeScript-first implementation',
    subtitle: 'Production ready',
    detail: 'Built with Vite + TypeScript and prepared for GitHub Pages continuous deployment.'
  },
  {
    title: 'Easy content expansion',
    subtitle: 'Add details later',
    detail: 'Sections can be extended quickly with more jobs, projects, certifications, and contact channels.'
  }
];

const experience: Item[] = [
  {
    title: 'Software Developer',
    subtitle: 'Your Company • YYYY - Present',
    detail: 'Add your current role scope, ownership, and measurable impact here.'
  },
  {
    title: 'Frontend Developer',
    subtitle: 'Previous Company • YYYY - YYYY',
    detail: 'Add key responsibilities, technologies, and achievements from this role.'
  }
];

const education: Item[] = [
  {
    title: 'University Name',
    subtitle: 'Degree / Major • YYYY - YYYY',
    detail: 'Add notable coursework, projects, GPA, or awards if useful.'
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
      <h1>${profile.name}</h1>
      <p class="lead">${profile.headline}</p>
      <p class="sublead">${profile.about}</p>

      <div class="hero__meta">
        <span class="chip">📍 ${profile.location}</span>
        <span class="chip">💼 Open to opportunities</span>
        <span class="chip">🛠️ Full-stack focused</span>
      </div>

      <div class="hero__actions">
        <a class="link-btn" href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn Profile</a>
        <a class="link-btn link-btn--ghost" href="mailto:${profile.email}">Email Me</a>
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
      <h2>Experience</h2>
      <div class="stack-list" id="experienceList"></div>
    </section>

    <section>
      <h2>Education</h2>
      <div class="stack-list" id="educationList"></div>
    </section>

    <section>
      <h2>Core Skills</h2>
      <ul class="skills" id="skillsList"></ul>
    </section>
  </main>

  <footer class="footer">
    <p>© 2026 ${profile.name}. Built with TypeScript and ready for GitHub Pages.</p>
  </footer>
`;

const highlightGrid = document.querySelector<HTMLDivElement>('#highlightGrid');
const experienceList = document.querySelector<HTMLDivElement>('#experienceList');
const educationList = document.querySelector<HTMLDivElement>('#educationList');
const skillsList = document.querySelector<HTMLUListElement>('#skillsList');

if (!highlightGrid || !experienceList || !educationList || !skillsList) {
  throw new Error('Missing required UI containers');
}

highlightGrid.innerHTML = highlights
  .map(
    (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <p class="card__subtitle">${item.subtitle}</p>
        <p>${item.detail}</p>
      </article>
    `
  )
  .join('');

experienceList.innerHTML = experience
  .map(
    (item) => `
      <article class="entry">
        <h3>${item.title}</h3>
        <p class="entry__subtitle">${item.subtitle}</p>
        <p>${item.detail}</p>
      </article>
    `
  )
  .join('');

educationList.innerHTML = education
  .map(
    (item) => `
      <article class="entry">
        <h3>${item.title}</h3>
        <p class="entry__subtitle">${item.subtitle}</p>
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
