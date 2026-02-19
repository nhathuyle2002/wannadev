import './styles.css';

type Profile = {
  name: string;
  headline: string;
  location: string;
  about: string;
  linkedin: string;
  github: string;
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
  headline: 'Software Engineer | Kotlin, Rust, TypeScript | Competitive Programming Background',
  location: 'Binh Thanh district, Ho Chi Minh City, Vietnam',
  about:
    'Software engineer with strong foundations in algorithms and system thinking, experienced in backend services, blockchain communication, and modern web development. I enjoy building reliable products with practical impact and clean engineering practices.',
  linkedin: 'https://www.linkedin.com/in/huy-le-nhat/',
  github: 'https://github.com/nhathuyle2002',
  email: 'huylenhat.2810@gmail.com'
};

const highlights: Item[] = [
  {
    title: 'Competitive Algorithmic Foundation',
    subtitle: 'Olympiads, ICPC, IEEEXtreme',
    detail: 'Proven ability to solve complex problems quickly and accurately under pressure.'
  },
  {
    title: 'Production Engineering Delivery',
    subtitle: 'Backend + frontend ownership',
    detail: 'Delivered real product features using Kotlin, Rust, React, and TypeScript with CI/CD workflows.'
  },
  {
    title: 'Fast Learner with Strong Fundamentals',
    subtitle: 'CS honors + scholarship support',
    detail: 'Combines deep fundamentals with practical execution for rapid onboarding in new domains.'
  }
];

const experience: Item[] = [
  {
    title: 'Software Engineer',
    subtitle: 'Spartan Dev Inc. • Oct 2024 - Present • Ho Chi Minh City',
    detail:
      'Project: Charge Fuze battery rental service. Developed backend services with Kotlin (Micronaut), implemented frontend features with React (TypeScript), and worked with GitHub, Jira, and Jenkins for delivery workflows.'
  },
  {
    title: 'Fresher Back-end Engineer',
    subtitle: 'Codelight Co., Ltd. • Apr 2024 - Sep 2024 • Ho Chi Minh City',
    detail:
      'Engineered gRPC communication for a layer-1 blockchain protocol using Rust, executed performance testing, managed Docker-based environments, and contributed to a wallet extension service in TypeScript.'
  },
  {
    title: 'Teaching Assistant',
    subtitle: 'University of Information Technology • Sep 2023 - Jan 2024 • Ho Chi Minh City',
    detail:
      'Supported IT001 - Introduction to Programming with lectures, lab tutoring, exam preparation, assignment grading, and detailed student feedback.'
  }
];

const education: Item[] = [
  {
    title: 'VNUHCM - University of Information Technology',
    subtitle: 'Computer Science, Honors Program (top 5%) • Sep 2020 - Feb 2024',
    detail: 'Full tuition and living entrance scholarship. GPA: 8.8/10.'
  },
  {
    title: 'Binh Long Specialized and Gifted High School',
    subtitle: 'Specialized Math Class • Aug 2017 - May 2020',
    detail: 'First prize in Vietnam National Olympiad of Informatics. GPA: 9.3/10.'
  }
];

const awards: string[] = [
  'First Prize and Third Prize in Vietnam National Olympiad in Informatics (2020, 2019).',
  'First Prize in National Youth Informatics Contest (2019).',
  'Second Prize in 30th Vietnam Student Olympiad in Informatics, Super Cup Division (2021).',
  'Silver Medal and Bronze Medal in ICPC Asia Regional Contest (Can Tho, Hue) (2020, 2023).',
  'Ranked 16 / 2992 teams globally in IEEEXtreme 16.0 Programming Competition (2022).',
  'Special Prize in UIT HONORS CHALLENGE scholarship (2021).'
];

const projects: Item[] = [
  {
    title: 'E-commerce Application (Backend)',
    subtitle: 'Jul 2024 • NestJS, PostgreSQL, TypeORM, Docker',
    detail:
      'Built scalable REST APIs with JWT authentication, optimized queries and caching, and set up Dockerized deployment for consistent environments.'
  },
  {
    title: 'Comparative Analysis of Hashing Algorithms for Image Retrieval',
    subtitle: 'Aug 2023 • Python, PyTorch',
    detail:
      'Analyzed DSH and LSH methods for image retrieval, with experiments on MNIST and Fashion-MNIST to compare retrieval effectiveness.'
  }
];

const skills: Skill[] = [
  {
    label: 'Programming: Kotlin (Micronaut), Rust, TypeScript, React, NestJS, C++, Python',
    level: 'Advanced'
  },
  {
    label: 'Database: PostgreSQL, ORM / TypeORM',
    level: 'Strong'
  },
  {
    label: 'Tools: Git, GitHub, Docker, Jenkins, Jira',
    level: 'Strong'
  },
  {
    label: 'English: B2 VSTEP',
    level: 'Professional'
  }
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Missing #app container');
}

app.innerHTML = `
  <header class="hero container">
    <div class="hero__content">
      <p class="kicker">SOFTWARE ENGINEER PROFILE</p>
      <h1>${profile.name}</h1>
      <p class="lead">${profile.headline}</p>
      <p class="sublead">${profile.about}</p>

      <div class="hero__meta">
        <span class="chip">📍 ${profile.location}</span>
        <span class="chip">💼 Open to opportunities</span>
        <span class="chip">🏆 Competitive Programming</span>
      </div>

      <div class="hero__actions">
        <a class="link-btn" href="${profile.linkedin}" target="_blank" rel="noreferrer">View LinkedIn</a>
        <a class="link-btn" href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a>
        <a class="link-btn link-btn--ghost" href="mailto:${profile.email}">Contact via Email</a>
      </div>
    </div>

    <div class="hero__image-wrap">
      <img src="/profile.jpg" alt="Portrait of Huy Le Nhat" class="hero__image" />
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
      <h2>Awards</h2>
      <ul class="awards" id="awardsList"></ul>
    </section>

    <section>
      <h2>Selected Projects</h2>
      <div class="stack-list" id="projectsList"></div>
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
const awardsList = document.querySelector<HTMLUListElement>('#awardsList');
const projectsList = document.querySelector<HTMLDivElement>('#projectsList');
const skillsList = document.querySelector<HTMLUListElement>('#skillsList');

if (!highlightGrid || !experienceList || !educationList || !awardsList || !projectsList || !skillsList) {
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

awardsList.innerHTML = awards
  .map(
    (award) => `
      <li class="award-item">${award}</li>
    `
  )
  .join('');

projectsList.innerHTML = projects
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
