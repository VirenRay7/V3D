/* ═══════════════════════════════════════════════════════════
   SHARED DATA
═══════════════════════════════════════════════════════════ */
const ARTWORKS = [
  { id:1,  title:'Cyberpunk Warrior',      cat:'character',   views:14200, likes:892,  date:'Jan 2026', desc:'A hyper-detailed cyberpunk character with neon-lit armor and battle-worn textures. Sculpted in ZBrush, retopologized in Maya, and rendered in Blender Cycles.', img:'https://picsum.photos/seed/art1/700/520',  tags:['ZBrush','Blender','Character','Cyberpunk'] },
  { id:2,  title:'Ancient Temple',         cat:'environment', views:9800,  likes:541,  date:'Dec 2025', desc:'Atmospheric environment depicting a moss-covered ancient temple deep in a jungle. Modeled in Maya, textured in Substance Painter with full PBR workflow.', img:'https://picsum.photos/seed/art2/700/520',  tags:['Maya','Environment','Lighting','Nature'] },
  { id:3,  title:'Luxury Watch Viz',       cat:'product',     views:7300,  likes:410,  date:'Nov 2025', desc:'Photorealistic product visualization of a luxury timepiece. Studio lighting setup with HDRI and custom procedural shaders for metal and glass.', img:'https://picsum.photos/seed/art3/700/520',  tags:['Blender','Product','Realism','Studio'] },
  { id:4,  title:'Dragon Concept',         cat:'concept',     views:21000, likes:1340, date:'Oct 2025', desc:'Concept art exploration for a fire-breathing dragon creature. Multiple iterations of silhouette, form, and color studies before final render.', img:'https://picsum.photos/seed/art4/700/520',  tags:['Concept','Creature','Fantasy','2D'] },
  { id:5,  title:'Sci-Fi Corridor',        cat:'environment', views:11500, likes:720,  date:'Sep 2025', desc:'Modular sci-fi corridor environment built for real-time use in Unreal Engine 5. Full PBR material workflow with Lumen global illumination.', img:'https://picsum.photos/seed/art5/700/520',  tags:['UE5','Environment','Sci-Fi','Real-Time'] },
  { id:6,  title:'Mech Suit Animation',    cat:'animation',   views:18700, likes:1100, date:'Aug 2025', desc:'Full character animation cycle for a bipedal mech suit. Rigged in Maya with custom IK/FK controls, animated with motion capture cleanup.', img:'https://picsum.photos/seed/art6/700/520',  tags:['Animation','Maya','Mech','Rigging'] },
  { id:7,  title:'Forest Spirit',          cat:'character',   views:8900,  likes:560,  date:'Jul 2025', desc:'Stylized forest spirit character with bioluminescent details and flowing cloth simulation. Sculpted in ZBrush, rendered with Blender EEVEE.', img:'https://picsum.photos/seed/art7/700/520',  tags:['ZBrush','Stylized','Character','Fantasy'] },
  { id:8,  title:'Neon City Flythrough',   cat:'animation',   views:25000, likes:1800, date:'Jun 2025', desc:'Cinematic camera flythrough of a neon-drenched futuristic city. Procedural buildings with custom shader networks and volumetric fog.', img:'https://picsum.photos/seed/art8/700/520',  tags:['Blender','Animation','City','Cinematic'] },
  { id:9,  title:'Samurai Armor',          cat:'3d-art',      views:13400, likes:870,  date:'May 2025', desc:'Highly detailed samurai armor set with authentic historical references. Hand-painted textures in Substance Painter with 8K texture maps.', img:'https://picsum.photos/seed/art9/700/520',  tags:['Armor','Historical','3D','Substance'] },
  { id:10, title:'Underwater World',       cat:'environment', views:6700,  likes:390,  date:'Apr 2025', desc:'Serene underwater environment with volumetric light rays, procedural coral reef generation, and animated fish schools.', img:'https://picsum.photos/seed/art10/700/520', tags:['Environment','Underwater','VFX','Houdini'] },
  { id:11, title:'Robot Companion',        cat:'3d-art',      views:9200,  likes:610,  date:'Mar 2025', desc:'Friendly robot companion design with expressive face rig, full body animation rig, and worn metal shader with procedural scratches.', img:'https://picsum.photos/seed/art11/700/520', tags:['Robot','Rigging','3D','Hard-Surface'] },
  { id:12, title:'Volcano Eruption VFX',   cat:'animation',   views:31000, likes:2100, date:'Feb 2025', desc:'Real-time VFX simulation of a volcanic eruption using Houdini for fluid and particle dynamics, composited in Nuke.', img:'https://picsum.photos/seed/art12/700/520', tags:['Houdini','VFX','Simulation','Nuke'] },
  { id:13, title:'Elven Archer',           cat:'character',   views:7800,  likes:490,  date:'Jan 2025', desc:'Fantasy elven archer with intricate armor details, flowing cloth simulation, and hand-painted skin textures.', img:'https://picsum.photos/seed/art13/700/520', tags:['Fantasy','Character','Cloth','ZBrush'] },
  { id:14, title:'Space Station Interior', cat:'environment', views:10200, likes:640,  date:'Dec 2024', desc:'Detailed space station interior with functional control panels, zero-gravity environment design, and Lumen lighting.', img:'https://picsum.photos/seed/art14/700/520', tags:['Sci-Fi','Interior','Space','UE5'] },
  { id:15, title:'Sneaker Product Shot',   cat:'product',     views:5400,  likes:320,  date:'Nov 2024', desc:'Clean product visualization of a limited-edition sneaker with studio lighting, turntable animation, and fabric shader.', img:'https://picsum.photos/seed/art15/700/520', tags:['Product','Sneaker','Studio','Blender'] },
  { id:16, title:'Demon King Concept',     cat:'concept',     views:16800, likes:1050, date:'Oct 2024', desc:'Dark fantasy concept art for a demon king boss character. Exploration of form, silhouette, and color palette across 12 iterations.', img:'https://picsum.photos/seed/art16/700/520', tags:['Concept','Dark','Fantasy','Boss'] },
  { id:17, title:'Mechanical Spider',      cat:'3d-art',      views:8100,  likes:520,  date:'Sep 2024', desc:'Hard-surface mechanical spider with fully articulated legs, procedural rust and wear textures, and animated walk cycle.', img:'https://picsum.photos/seed/art17/700/520', tags:['Hard-Surface','Mechanical','3D','Blender'] },
  { id:18, title:'Waterfall Environment',  cat:'environment', views:7200,  likes:450,  date:'Aug 2024', desc:'Lush tropical waterfall environment with real-time water simulation, dynamic foliage, and volumetric atmosphere.', img:'https://picsum.photos/seed/art18/700/520', tags:['Nature','Environment','Water','UE5'] },
  { id:19, title:'Walk Cycle Study',       cat:'animation',   views:4900,  likes:280,  date:'Jul 2024', desc:'Stylized walk cycle animation study exploring weight, timing, and personality through movement. 12 principles of animation applied.', img:'https://picsum.photos/seed/art19/700/520', tags:['Animation','Walk','Study','Maya'] },
  { id:20, title:'Alien Creature',         cat:'character',   views:12300, likes:780,  date:'Jun 2024', desc:'Bioluminescent alien creature design with complex skin shader, subsurface scattering, and translucent membrane details.', img:'https://picsum.photos/seed/art20/700/520', tags:['Alien','Creature','SSS','ZBrush'] },
  { id:21, title:'Sports Car — GT3',       cat:'product',     views:9600,  likes:590,  date:'May 2024', desc:'Photorealistic sports car render with custom flake paint shader, HDR studio lighting, and motion blur post-processing.', img:'https://picsum.photos/seed/art21/700/520', tags:['Car','Product','Realism','Blender'] },
  { id:22, title:'Ruins at Dusk',          cat:'concept',     views:5800,  likes:360,  date:'Apr 2024', desc:'Atmospheric concept painting of ancient ruins at golden hour. Digital painting over a 3D base mesh for accurate perspective.', img:'https://picsum.photos/seed/art22/700/520', tags:['Concept','Ruins','Atmosphere','Painting'] },
  { id:23, title:'Stylized House',         cat:'3d-art',      views:6100,  likes:400,  date:'Mar 2024', desc:'Stylized low-poly house with hand-painted textures inspired by Studio Ghibli aesthetics. Rendered in Blender EEVEE.', img:'https://picsum.photos/seed/art23/700/520', tags:['Stylized','Low-Poly','Ghibli','Blender'] },
  { id:24, title:'Explosion FX Loop',      cat:'animation',   views:22000, likes:1450, date:'Feb 2024', desc:'Seamlessly looping explosion VFX created in Houdini and composited in Nuke. Optimized for game engine use as a sprite sheet.', img:'https://picsum.photos/seed/art24/700/520', tags:['VFX','Explosion','Loop','Houdini'] },
];

const CAT_LABELS = {
  'character':'Character','environment':'Environment',
  'animation':'Animation','product':'Product Viz',
  'concept':'Concept Art','3d-art':'3D Art'
};

/* ═══════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════ */
function fmt(n) { return n >= 1000 ? (n/1000).toFixed(1)+'K' : String(n); }

/* ═══════════════════════════════════════════════════════════
   SHARED — NAVBAR HAMBURGER
═══════════════════════════════════════════════════════════ */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    links.classList.remove('open');
  }));
}

/* ═══════════════════════════════════════════════════════════
   SHARED — NAVBAR SCROLL SHADOW
═══════════════════════════════════════════════════════════ */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10 ? '0 2px 24px rgba(0,0,0,.7)' : 'none';
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   SHARED — CARD BUILDER
═══════════════════════════════════════════════════════════ */
function buildCard(artwork, clickHandler) {
  const card = document.createElement('div');
  card.className = 'artwork-card';
  card.innerHTML = `
    <div class="card-thumb">
      <img src="${artwork.img}" alt="${artwork.title}" loading="lazy"
           onerror="this.src='https://picsum.photos/seed/fb${artwork.id}/700/520'" />
      <div class="card-overlay">
        <span class="overlay-stat">👁 ${fmt(artwork.views)}</span>
        <span class="overlay-stat">♥ ${fmt(artwork.likes)}</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-cat">${CAT_LABELS[artwork.cat] || artwork.cat}</div>
      <div class="card-title">${artwork.title}</div>
      <div class="card-tags">
        ${artwork.tags.slice(0,3).map(t=>`<span class="card-tag">${t}</span>`).join('')}
      </div>
    </div>`;
  card.addEventListener('click', () => clickHandler(artwork));
  return card;
}

/* ═══════════════════════════════════════════════════════════
   LIGHTBOX (portfolio page)
═══════════════════════════════════════════════════════════ */
let currentLightboxId = null;
const likedItems = new Set();

function openLightbox(artwork) {
  currentLightboxId = artwork.id;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lightboxImg').src           = artwork.img;
  document.getElementById('lightboxImg').alt           = artwork.title;
  document.getElementById('lightboxCat').textContent   = CAT_LABELS[artwork.cat] || artwork.cat;
  document.getElementById('lightboxTitle').textContent = artwork.title;
  document.getElementById('lightboxDesc').textContent  = artwork.desc;
  document.getElementById('lightboxViews').textContent = `👁 ${fmt(artwork.views)}`;
  document.getElementById('lightboxLikes').textContent = `♥ ${fmt(artwork.likes)}`;
  document.getElementById('lightboxDate').textContent  = `📅 ${artwork.date}`;
  document.getElementById('lightboxTags').innerHTML    = artwork.tags.map(t=>`<span class="card-tag">${t}</span>`).join('');
  const likeBtn = document.getElementById('likeBtn');
  likeBtn.textContent       = likedItems.has(artwork.id) ? '♥ Liked' : '♥ Like';
  likeBtn.style.background  = likedItems.has(artwork.id) ? '#e74c3c' : '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
  currentLightboxId = null;
}

function initLightbox() {
  const closeBtn = document.getElementById('lightboxClose');
  const overlay  = document.getElementById('lightboxOverlay');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay)  overlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  const likeBtn = document.getElementById('likeBtn');
  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
      if (!currentLightboxId) return;
      const a = ARTWORKS.find(x => x.id === currentLightboxId);
      if (!a) return;
      if (likedItems.has(a.id)) { likedItems.delete(a.id); a.likes--; }
      else                       { likedItems.add(a.id);   a.likes++; }
      likeBtn.textContent      = likedItems.has(a.id) ? '♥ Liked' : '♥ Like';
      likeBtn.style.background = likedItems.has(a.id) ? '#e74c3c' : '';
      document.getElementById('lightboxLikes').textContent = `♥ ${fmt(a.likes)}`;
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   PORTFOLIO PAGE — full grid with filter + search + load more
═══════════════════════════════════════════════════════════ */
const PAGE_SIZE = 12;
let currentCat     = 'all';
let searchQuery    = '';
let displayedCount = 0;

function getFiltered() {
  return ARTWORKS.filter(a => {
    const matchCat    = currentCat === 'all' || a.cat === currentCat;
    const matchSearch = !searchQuery ||
      a.title.toLowerCase().includes(searchQuery) ||
      a.tags.some(t => t.toLowerCase().includes(searchQuery));
    return matchCat && matchSearch;
  });
}

function renderGrid(reset = true) {
  const grid    = document.getElementById('artworkGrid');
  const loadBtn = document.getElementById('loadMoreBtn');
  const info    = document.getElementById('searchInfo');
  if (!grid) return;
  const filtered = getFiltered();
  if (reset) { grid.innerHTML = ''; displayedCount = 0; }
  if (info) info.textContent = searchQuery
    ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${searchQuery}"`
    : '';
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><h3>No projects found</h3><p>Try a different category or search term.</p></div>`;
    if (loadBtn) loadBtn.style.display = 'none';
    return;
  }
  const batch = filtered.slice(displayedCount, displayedCount + PAGE_SIZE);
  batch.forEach(a => grid.appendChild(buildCard(a, openLightbox)));
  displayedCount += batch.length;
  if (loadBtn) loadBtn.style.display = displayedCount < filtered.length ? 'inline-block' : 'none';
}

function initPortfolioPage() {
  renderGrid(true);
  initLightbox();

  const filterBar = document.getElementById('filterBar');
  if (filterBar) {
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderGrid(true);
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        searchQuery = searchInput.value.trim().toLowerCase();
        renderGrid(true);
      }, 250);
    });
  }

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => renderGrid(false));
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE — featured 4 cards (no lightbox, link to portfolio)
═══════════════════════════════════════════════════════════ */
function initHomePage() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = ARTWORKS.slice(0, 4);
  featured.forEach(a => {
    const card = buildCard(a, () => { window.location.href = 'portfolio.html'; });
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════
   SKILLS PAGE — animate proficiency bars on scroll
═══════════════════════════════════════════════════════════ */
function initSkillsPage() {
  const fills = document.querySelectorAll('.prof-fill');
  if (!fills.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.style.width; // trigger reflow
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => {
    const target = f.style.width;
    f.style.width = '0';
    setTimeout(() => { f.style.width = target; }, 100);
    observer.observe(f);
  });
}

/* ═══════════════════════════════════════════════════════════
   CONTACT PAGE — submit via fetch to Formspree
═══════════════════════════════════════════════════════════ */
function initContactPage() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form ? form.querySelector('button[type="submit"]') : null;
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        // Success
        form.reset();
        if (success) {
          success.style.display = 'block';
          setTimeout(() => { success.style.display = 'none'; }, 5000);
        }
      } else {
        // Formspree returned an error
        const data = await res.json();
        const msg  = data.errors ? data.errors.map(e => e.message).join(', ') : 'Submission failed. Please try again.';
        alert(msg);
      }
    } catch (err) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   PAGE DETECTION & INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Always run
  initHamburger();
  initNavbarScroll();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') {
    initHomePage();
  } else if (page === 'portfolio.html') {
    initPortfolioPage();
  } else if (page === 'skills.html') {
    initSkillsPage();
  } else if (page === 'contact.html') {
    initContactPage();
  }
  // about.html needs no JS beyond shared navbar
});
