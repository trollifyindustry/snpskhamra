// Utils
const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

// Year
qs('#year').textContent = new Date().getFullYear();

// Mobile nav toggle
const mobileBtn = qs('#mobileMenuBtn');
const mobileNav = qs('#mobileNav');
mobileBtn?.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

// Routing
const routes = {
  '#login': {
    form: '#form-login',
    title: 'SNPS Khamra',
    subtitle: 'Access all features in one click.',
    icon: 'fa-right-to-bracket',
    altHref: '#register',
    altText: 'Create Account'
  },
  '#register': {
    form: '#form-register',
    title: 'Buat Akun Baru',
    subtitle: 'Bergabunglah dan mulai eksplor fitur kami.',
    icon: 'fa-user-plus',
    altHref: '#login',
    altText: 'Sudah punya akun?'
  },
  '#forgot': {
    form: '#form-forgot',
    title: 'Reset Password',
    subtitle: 'Kami akan kirim tautan untuk mengatur ulang.',
    icon: 'fa-key',
    altHref: '#login',
    altText: 'Ingat password? Masuk'
  }
};

const cardTitle = qs('#cardTitle');
const cardSubtitle = qs('#cardSubtitle');
const cardIcon = qs('#cardIcon i');
const altLink = qs('#altLink');

function setActiveNav(hash) {
  qsa('[data-route]').forEach(a => {
    const isActive = a.getAttribute('data-route') === hash;
    a.classList.toggle('nav-active', isActive);
  });
}

function switchTo(hash) {
  const route = routes[hash] || routes['#login'];

  Object.values(routes).forEach(r => {
    const form = qs(r.form);
    form.classList.toggle('hidden', r !== route);
  });

  cardTitle.textContent = route.title;
  cardSubtitle.textContent = route.subtitle;
  cardIcon.className = `fa-solid ${route.icon}`;
  altLink.href = route.altHref;
  altLink.textContent = route.altText;

  setActiveNav(hash);
}

window.addEventListener('hashchange', () => switchTo(location.hash));
switchTo(location.hash || '#login');

// Toggle password
document.addEventListener('click', e => {
  const btn = e.target.closest('.toggle-pass');
  if (!btn) return;
  const input = qs('#' + btn.dataset.target);
  const icon = btn.querySelector('i');

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa-solid fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fa-solid fa-eye';
  }
});

// ==========================
// ✅ LOGIN LOGIC (FIXED)
// ==========================
const loginForm = qs('#form-login');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm.querySelector('[name="email"]').value.trim();
  const password = loginForm.querySelector('[name="password"]').value.trim();

  if (email === 'prem@gmail.com' && password === '1234') {
    window.location.href = 'index.html';
  } else {
    showModal('Login Failed', {
      Error: 'Email ya Password galat hai'
    });
  }
});

// ==========================
// Demo submit for register & forgot
// ==========================
function demoSubmit(selector, title) {
  qs(selector)?.addEventListener('submit', e => {
    e.preventDefault();
    showModal(title, { Status: 'Demo only' });
  });
}

demoSubmit('#form-register', 'Registrasi Demo');
demoSubmit('#form-forgot', 'Reset Password Demo');

// Modal helpers
const modal = qs('#resultModal');
const modalTitle = qs('#modalTitle');
const modalBody = qs('#modalBody');
const closeModal = qs('#closeModal');

function showModal(title, data) {
  modalTitle.textContent = title;
  modalBody.innerHTML = Object.entries(data)
    .map(([k, v]) => `<p><b>${k}</b>: ${v}</p>`)
    .join('');
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});
