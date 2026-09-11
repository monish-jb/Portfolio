/**
 * Main Portfolio Application Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  let neuralCanvas = null;

  // Initialize Canvas Background
  if (document.getElementById('hero-canvas')) {
    neuralCanvas = new NeuralCanvas('hero-canvas');
  }

  // Render All Content Sections
  renderStats();
  renderAboutSection();
  renderSkillsSection();
  renderProjectsSection();
  renderDsaSection();
  renderEducationSection();

  // Initialize UI Event Listeners
  initThemeToggle(neuralCanvas);
  initNavigation();
  initProjectFilters();
  initScrollAnimations();
  initClipboardActions();
  initLucideIcons();
});

/**
 * Theme Toggle Handler
 */
function initThemeToggle(canvasRef) {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const updateIcon = (theme) => {
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
      if (window.lucide) window.lucide.createIcons();
    }
    if (canvasRef) {
      canvasRef.setTheme(theme === 'dark');
    }
  };

  updateIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });
  }
}

/**
 * Render Header Stats
 */
function renderStats() {
  const statsContainer = document.getElementById('hero-stats-grid');
  if (!statsContainer || !PORTFOLIO_DATA.stats) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
      <div class="stat-sub">${stat.sub}</div>
    </div>
  `).join('');
}

/**
 * Render About Section
 */
function renderAboutSection() {
  const leftBio = document.getElementById('about-bio-left');
  const rightBio = document.getElementById('about-bio-right');
  const tagsContainer = document.getElementById('about-exploring-tags');

  if (leftBio) leftBio.textContent = PORTFOLIO_DATA.about.bioLeft;
  if (rightBio) rightBio.textContent = PORTFOLIO_DATA.about.bioRight;

  if (tagsContainer && PORTFOLIO_DATA.about.currentlyExploring) {
    tagsContainer.innerHTML = PORTFOLIO_DATA.about.currentlyExploring.map(item => `
      <span class="explore-pill"><i data-lucide="sparkles"></i> ${item}</span>
    `).join('');
  }
}

/**
 * Render Skills Section
 */
function renderSkillsSection() {
  const skillsGrid = document.getElementById('skills-container');
  if (!skillsGrid || !PORTFOLIO_DATA.skillCategories) return;

  skillsGrid.innerHTML = PORTFOLIO_DATA.skillCategories.map(category => `
    <div class="skill-category-card">
      <div class="category-header">
        <div class="category-icon">
          <i data-lucide="${category.icon}"></i>
        </div>
        <h3>${category.name}</h3>
      </div>
      <div class="skills-list">
        ${category.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-top">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level-badge level-${skill.level.toLowerCase()}">${skill.level}</span>
            </div>
            <p class="skill-desc">${skill.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Projects Section
 */
function renderProjectsSection() {
  const featuredContainer = document.getElementById('featured-project-container');
  const gridContainer = document.getElementById('projects-grid');

  if (!PORTFOLIO_DATA.projects) return;

  const featuredProject = PORTFOLIO_DATA.projects.find(p => p.featured);
  const otherProjects = PORTFOLIO_DATA.projects.filter(p => !p.featured);

  // Render Featured Project Case Study Card
  if (featuredContainer && featuredProject) {
    featuredContainer.innerHTML = `
      <div class="featured-case-study">
        <div class="case-study-badge">
          <i data-lucide="award"></i> ${featuredProject.badge}
        </div>
        <div class="case-study-grid">
          <div class="case-study-info">
            <h3 class="case-study-title">${featuredProject.title}</h3>
            <p class="case-study-short">${featuredProject.shortDesc}</p>
            
            <div class="problem-solution-box">
              <div class="ps-item">
                <span class="ps-label text-warning"><i data-lucide="alert-circle"></i> The Problem:</span>
                <p>${featuredProject.problem}</p>
              </div>
              <div class="ps-item">
                <span class="ps-label text-success"><i data-lucide="check-circle-2"></i> The Solution & Approach:</span>
                <p>${featuredProject.approach}</p>
              </div>
            </div>

            <div class="case-study-tech">
              <span class="tech-label">Tech Stack:</span>
              <div class="tech-pills">
                ${featuredProject.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
              </div>
            </div>

            <div class="case-study-actions">
              <a href="${featuredProject.github}" target="_blank" rel="noopener" class="btn btn-primary">
                <i data-lucide="github"></i> View Source Code
              </a>
            </div>
          </div>

          <div class="case-study-architecture">
            <h4 class="arch-title"><i data-lucide="git-merge"></i> Multi-Agent Workflow Architecture</h4>
            <div class="agent-pipeline">
              ${featuredProject.architecture.map((arch, idx) => `
                <div class="agent-step">
                  <div class="step-number">${idx + 1}</div>
                  <div class="step-content">
                    <div class="agent-name">${arch.agent}</div>
                    <div class="agent-role">${arch.role}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Secondary Projects Grid
  if (gridContainer) {
    gridContainer.innerHTML = PORTFOLIO_DATA.projects.map(project => `
      <div class="project-card" data-category="${project.category}">
        <div class="project-card-header">
          <span class="project-badge">${project.badge}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
        </div>

        <div class="project-card-body">
          <div class="project-section-title">Key Capabilities:</div>
          <ul class="project-features">
            ${project.keyFeatures.map(feat => `<li><i data-lucide="chevron-right"></i> ${feat}</li>`).join('')}
          </ul>

          ${project.architecture ? `
            <div class="project-pipeline-mini">
              ${project.architecture.map(stg => `
                <div class="mini-stage">
                  <strong>${stg.stage}:</strong> ${stg.detail}
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="project-card-footer">
          <div class="tech-pills">
            ${project.techStack.map(t => `<span class="tech-pill-sm">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener" class="btn-icon-link" title="GitHub Repository">
              <i data-lucide="github"></i> Repository
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

/**
 * Render DSA Section
 */
function renderDsaSection() {
  const container = document.getElementById('dsa-container');
  if (!container || !PORTFOLIO_DATA.dsaProfile) return;

  const dsa = PORTFOLIO_DATA.dsaProfile;
  container.innerHTML = `
    <div class="dsa-card-wrapper">
      <div class="dsa-left-panel">
        <div class="dsa-header-badge">
          <i data-lucide="terminal"></i> Technical Competency
        </div>
        <h3 class="dsa-headline">${dsa.headline}</h3>
        <p class="dsa-summary">${dsa.summary}</p>
        
        <div class="dsa-profile-links">
          <a href="${dsa.leetcodeUrl}" target="_blank" rel="noopener" class="btn btn-leetcode">
            <i data-lucide="code-2"></i> LeetCode Profile (${dsa.leetcodeUsername})
          </a>
          <a href="${dsa.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
            <i data-lucide="github"></i> Algorithmic Repositories
          </a>
        </div>
      </div>

      <div class="dsa-right-panel">
        ${dsa.topics.map(topic => `
          <div class="dsa-topic-group">
            <h4 class="topic-group-title">${topic.name}</h4>
            <div class="topic-tags">
              ${topic.items.map(item => `<span class="topic-tag"><i data-lucide="check"></i> ${item}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Render Education & Timeline
 */
function renderEducationSection() {
  const container = document.getElementById('education-timeline');
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <i data-lucide="graduation-cap"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3 class="degree-title">${item.degree}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="institution-name">${item.institution}</div>
        <div class="grade-badge">${item.grade}</div>
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li><i data-lucide="arrow-right-s"></i> ${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/**
 * Initialize Project Category Filtering
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Initialize Sticky Header & Active Nav Tracking
 */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Sticky header background shift on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Active section observer
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const isOpen = navMenu.classList.contains('mobile-open');
      mobileToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
        if (window.lucide) window.lucide.createIcons();
      });
    });
  }
}

/**
 * Scroll Reveal Animations
 */
function initScrollAnimations() {
  const animateElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));
}

/**
 * Clipboard & Contact Buttons
 */
function initClipboardActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Lucide Icons Refresh Utility
 */
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
