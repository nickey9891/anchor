// ============================================================
// ANCHOR DEVOTIONAL ADDON
// Drop this file next to index.html and add ONE line before </body>:
//   <script src="devotional-addon.js"></script>
// That's it. Everything else is automatic.
// ============================================================

(function() {
'use strict';

// ── DEVOTIONAL DATA ──────────────────────────────────────────
const DEVOTIONALS = {
  morning: [
    { id:'m1', title:'Begin in His Presence', scripture:'This is the day that the LORD has made; let us rejoice and be glad in it.', reference:'Psalm 118:24', reflection:'Before the world presses in with its demands, pause. You were not made to rush into the day — you were made to receive it. The Lord has already gone before you into every hour that awaits. What is one thing you can surrender to Him before you begin?', prayer:'Father, before anything else, I offer You this day. Still my mind, order my steps, and let my first thought be of You. I receive today as a gift. Amen.' },
    { id:'m2', title:'Renewed Every Morning', scripture:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.', reference:'Lamentations 3:22\u201323', reflection:'Yesterday\'s failures have no claim on this morning. His mercies reset \u2014 not because your record improved, but because His love never fluctuates. You are meeting a God who is not tired of you. Receive that freshness today.', prayer:'Lord, thank You that I don\'t carry yesterday\'s weight into today. Your mercies are new, and so is my trust in You. Help me walk in that freedom. Amen.' },
    { id:'m3', title:'Strength for the Hours Ahead', scripture:'But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.', reference:'Isaiah 40:31', reflection:'Waiting is not passive \u2014 it is the act of turning your attention fully toward the One who holds all things. In stillness, strength is deposited. The eagle does not strain against the wind; it opens its wings and rises. Let today begin with that kind of rest.', prayer:'God, I wait on You this morning. Fill what is empty, steady what is anxious, and carry what is heavy. I trust You with the hours ahead. Amen.' },
    { id:'m4', title:'Known Before the Day Begins', scripture:'O LORD, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar.', reference:'Psalm 139:1\u20132', reflection:'He already knows what this day will hold. He knows the meeting that worries you, the conversation you are dreading, the decision that has no clear answer. You are not stepping into the unknown alone \u2014 you are stepping into what He already sees.', prayer:'Lord, You know this day before I do. Walk through it with me. Let Your knowing be a comfort rather than a pressure. I am not hidden from You, and that is a gift. Amen.' },
    { id:'m5', title:'The Armor Before the Battle', scripture:'Put on the whole armor of God, that you may be able to stand against the schemes of the devil.', reference:'Ephesians 6:11', reflection:'Every morning is a suiting up. The day will have its pressures, its provocations, its quiet temptations. You do not fight in your own strength. The armor is already provided \u2014 truth, righteousness, peace, faith, salvation, the Word. Come to the morning dressed.', prayer:'Father, I put on Your armor today. Guard my mind with Your truth, my heart with righteousness, my steps with the gospel of peace. I walk today under Your protection. Amen.' },
    { id:'m6', title:'First Things', scripture:'But seek first the kingdom of God and his righteousness, and all these things will be added to you.', reference:'Matthew 6:33', reflection:'What gets your first attention shapes everything that follows. The morning is an invitation to set the order right before the world sets it for you. Seek the kingdom first \u2014 not as a religious obligation, but as the orientation that makes the rest of the day make sense.', prayer:'Lord, before the list and the noise, I seek You. Set the order of this day. Let the kingdom be my first concern, and let everything else fall into place beneath it. Amen.' },
    { id:'m7', title:'Guided by the Shepherd', scripture:'The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.', reference:'Psalm 23:1\u20133', reflection:'The shepherd does not rush the sheep. He leads them to provision and rest at a pace the sheep can sustain. This is how God intends to lead you through today \u2014 not frantically, not recklessly, but surely. Let Him set the pace this morning.', prayer:'Lord, You are my shepherd and I am following You today. Lead me where You want me to go. Provide what I need. Restore what is depleted. I trust Your path. Amen.' },
  ],
  nightly: [
    { id:'n1', title:'He Gives Sleep to His Beloved', scripture:'In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.', reference:'Psalm 4:8', reflection:'The day is done. Whatever it held \u2014 victories or failures, moments of faith or moments of fear \u2014 you can set it down. God watches through the night. Your rest is an act of trust: you are saying that He does not need your vigilance to hold the world together.', prayer:'Father, I release this day to You. Guard my sleep, quiet my thoughts, and let me rest in Your nearness. I trust You with tomorrow before it begins. Amen.' },
    { id:'n2', title:'He Who Keeps You Does Not Slumber', scripture:'He who keeps Israel will neither slumber nor sleep. The LORD is your keeper; the LORD is your shade on your right hand.', reference:'Psalm 121:4\u20135', reflection:'You are permitted to sleep precisely because He is not. While you are still, He is active \u2014 working things together, ordering what you cannot see, keeping covenant with you. The one on watch is faithful. Lean into that reality tonight.', prayer:'Lord, You are my keeper. I do not have to hold everything tonight \u2014 You are already holding it. Thank You for the gift of rest without fear. Amen.' },
    { id:'n3', title:'Examine and Rest', scripture:'Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting.', reference:'Psalm 139:23\u201324', reflection:'End of day is a good time for honest inventory. Not condemnation \u2014 but openness. Where did grace show up today? Where did you miss it? Ask the Spirit to show you, receive what He reveals without shame, and close the night with a clean slate before Him.', prayer:'Father, search me. Where I fell short today, forgive and restore me. Where You showed up and I almost missed it, help me see it clearly now. I close this day in Your hands. Amen.' },
    { id:'n4', title:'Cast It All Before You Sleep', scripture:'Casting all your anxieties on him, because he cares for you.', reference:'1 Peter 5:7', reflection:'The night has a way of amplifying what the day kept manageable. The worry you carried all day gets louder in the quiet. The instruction is not to suppress it \u2014 it is to hand it over. Cast means to throw. He can hold what you cannot sleep holding.', prayer:'Lord, I give You the worries I have been carrying. The ones I cannot solve and the ones I could not let go of today. You care for me. That is enough for tonight. Amen.' },
    { id:'n5', title:'The Day\'s Work, His Hands', scripture:'Unless the LORD builds the house, those who build it labor in vain. Unless the LORD watches over the city, the watchman stays awake in vain.', reference:'Psalm 127:1', reflection:'You worked today. You gave effort to things that matter. But the outcome was never entirely in your hands, and it doesn\'t need to be tonight. What you built today \u2014 let Him watch over it through the night. Your labor is offered; His hands hold it.', prayer:'Father, I offer You the work of today. The things I accomplished and the things I didn\'t. Watch over what I cannot. I rest knowing You are building what matters. Amen.' },
    { id:'n6', title:'Forgive Before You Sleep', scripture:'Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil.', reference:'Ephesians 4:26\u201327', reflection:'Something may have happened today that still sits wrong. A word that landed hard, a moment of friction left unresolved. Paul sets a clock on anger \u2014 don\'t carry it into the night. Forgiveness tonight is not excusing what happened. It is refusing to let it have the night.', prayer:'Lord, I choose to forgive tonight. What happened today that wounded me \u2014 I release it to You. Don\'t let bitterness take root while I sleep. Let me wake clean. Amen.' },
    { id:'n7', title:'Gratitude as the Last Word', scripture:'Oh give thanks to the LORD, for he is good, for his steadfast love endures forever!', reference:'Psalm 107:1', reflection:'End the day in gratitude \u2014 not because everything went well, but because He is good regardless. Name three things, however small: a breath, a conversation, a moment of grace. Let thanksgiving be the last word before sleep. It shapes the next morning.', prayer:'Father, thank You. For this day \u2014 all of it. For the grace that held me, the mercy that covered my failures, the love that does not run out. You are good. I rest in that. Amen.' },
  ],
};

// ── INJECT CSS ───────────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
.devot-toggle{display:inline-flex;border:1px solid var(--rule);background:var(--bg-soft);margin:20px auto 0;overflow:hidden}
.devot-toggle button{background:none;border:none;padding:12px 28px;font-family:var(--ui);font-size:11px;text-transform:uppercase;letter-spacing:.22em;cursor:pointer;transition:all .2s;color:var(--text-faint)}
.devot-toggle button.active{background:var(--bg-card);color:var(--accent-bright)}
.devot-streak{display:flex;justify-content:center;align-items:center;gap:6px;margin-bottom:28px;flex-wrap:wrap}
.streak-dot{width:10px;height:10px;border-radius:50%;background:var(--rule);transition:background .3s}
.streak-dot.filled{background:var(--accent)}
.streak-dot.today{background:var(--accent-bright);box-shadow:0 0 8px rgba(230,200,150,.5)}
.streak-label{font-family:var(--ui);font-size:10px;text-transform:uppercase;letter-spacing:.22em;color:var(--text-faint);margin-left:8px}
.streak-label span{color:var(--accent-bright);font-weight:600}
.devot-card{border:1px solid var(--rule);margin-bottom:20px;overflow:hidden;animation:fadein .5s ease}
.devot-card-top{height:3px}
.devot-card-top.morning{background:linear-gradient(90deg,#e8c170,#c9a876,transparent)}
.devot-card-top.nightly{background:linear-gradient(90deg,#8fa4c8,#6b82a8,transparent)}
.devot-card-header{background:var(--bg-soft);padding:28px 32px 20px}
.devot-card-badge{font-family:var(--ui);font-size:9px;text-transform:uppercase;letter-spacing:.3em;font-weight:700;margin-bottom:12px}
.devot-card-badge.morning{color:#e8c170}
.devot-card-badge.nightly{color:#8fa4c8}
.devot-card-title{font-family:var(--display);font-style:italic;font-weight:300;font-size:28px;color:var(--text);line-height:1.3;font-variation-settings:"opsz" 144}
.devot-scripture{background:var(--bg-card);padding:28px 32px;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}
.devot-scripture-ref{font-family:var(--ui);font-size:10px;text-transform:uppercase;letter-spacing:.3em;font-weight:600;color:var(--accent);margin-bottom:12px}
.devot-scripture-text{font-family:var(--display);font-style:italic;font-weight:300;font-size:22px;line-height:1.6;color:var(--text);font-variation-settings:"opsz" 144}
.devot-body{background:var(--bg-soft);padding:28px 32px}
.devot-section-label{font-family:var(--ui);font-size:9px;text-transform:uppercase;letter-spacing:.3em;color:var(--text-faint);font-weight:600;margin-bottom:10px}
.devot-reflection{font-family:var(--display);font-size:17px;line-height:1.75;color:var(--text-soft);margin-bottom:28px}
.devot-prayer-box{background:var(--bg-deep);border:1px solid var(--rule);padding:24px;position:relative}
.devot-prayer-text{font-family:var(--display);font-style:italic;font-weight:300;font-size:17px;line-height:1.7;color:var(--text)}
.devot-actions{background:var(--bg-soft);padding:18px 32px;border-top:1px solid var(--rule);display:flex;gap:12px;align-items:center;flex-wrap:wrap}
.devot-btn{border:none;padding:10px 24px;font-family:var(--ui);font-size:11px;text-transform:uppercase;letter-spacing:.22em;font-weight:600;cursor:pointer;transition:all .25s}
.devot-btn.primary{background:var(--accent);color:var(--bg-deep)}
.devot-btn.primary:hover{background:var(--accent-bright);transform:translateY(-1px)}
.devot-btn.primary.done{background:var(--bg-card);color:var(--accent-bright);border:1px solid var(--accent);cursor:default}
.devot-btn.secondary{background:transparent;color:var(--text-soft);border:1px solid var(--rule)}
.devot-btn.secondary:hover{border-color:var(--accent);color:var(--accent-bright)}
.devot-btn.ai{background:transparent;color:var(--text-faint);border:1px solid var(--rule);margin-left:auto}
.devot-btn.ai:hover{border-color:var(--warm);color:var(--warm)}
.devot-nav{display:flex;justify-content:center;gap:6px;margin-top:20px}
.devot-nav-dot{width:28px;height:28px;border:1px solid var(--rule);background:var(--bg-soft);color:var(--text-faint);font-family:var(--ui);font-size:10px;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center}
.devot-nav-dot:hover{border-color:var(--accent);color:var(--accent-bright)}
.devot-nav-dot.active{background:var(--accent);color:var(--bg-deep);border-color:var(--accent)}
.devot-nav-dot.completed{border-color:var(--accent-deep);color:var(--accent)}
@media(max-width:600px){.devot-card-header{padding:20px}.devot-scripture{padding:20px}.devot-body{padding:20px}.devot-actions{padding:14px 20px}.devot-card-title{font-size:22px}.devot-scripture-text{font-size:19px}}
`;
document.head.appendChild(style);

// ── INJECT TAB ───────────────────────────────────────────────
const studyTab = document.querySelector('[data-tab="study"]');
if (studyTab) {
  const devotTab = document.createElement('button');
  devotTab.className = 'tab';
  devotTab.dataset.tab = 'devotional';
  devotTab.textContent = 'Devotional';
  studyTab.after(devotTab);
  
  // Hook into existing tab system
  devotTab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    devotTab.classList.add('active');
    document.getElementById('panel-devotional').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── INJECT PANEL HTML ────────────────────────────────────────
const devotPanel = document.createElement('section');
devotPanel.className = 'panel';
devotPanel.id = 'panel-devotional';
devotPanel.innerHTML = `
  <div style="text-align:center;margin-bottom:32px">
    <div class="prompt-question" id="devotGreeting"></div>
    <div class="prompt-sub" id="devotSub"></div>
    <div class="devot-toggle">
      <button class="morning" id="btnMorning">\u2600 Morning</button>
      <button class="nightly" id="btnNightly">\u263D Nightly</button>
    </div>
  </div>
  <div class="devot-streak" id="devotStreak"></div>
  <div id="devotContent"></div>
  <div class="devot-nav" id="devotNav"></div>
`;

// Insert before history panel
const historyPanel = document.getElementById('panel-history');
if (historyPanel) {
  historyPanel.parentNode.insertBefore(devotPanel, historyPanel);
}

// ── DEVOTIONAL STATE ─────────────────────────────────────────
const DEVOT_KEY = 'anchor_devotional';
let devotState = {
  completedDays: {}, // { '2026-05-14_morning_m1': true }
  currentMode: null, // auto-detected
  currentIndex: 0,
};

function loadDevotState() {
  try {
    const s = JSON.parse(localStorage.getItem(DEVOT_KEY) || '{}');
    Object.assign(devotState, s);
  } catch(e) {}
}

function saveDevotState() {
  localStorage.setItem(DEVOT_KEY, JSON.stringify(devotState));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function autoDetectMode() {
  const hour = new Date().getHours();
  return (hour >= 5 && hour < 17) ? 'morning' : 'nightly';
}

function getDevotionForToday(mode) {
  // Cycle through 7 devotionals based on day of year
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const idx = dayOfYear % 7;
  return { devotion: DEVOTIONALS[mode][idx], index: idx };
}

function getStreakCount() {
  const keys = Object.keys(devotState.completedDays).filter(k => devotState.completedDays[k]);
  const dates = [...new Set(keys.map(k => k.split('_')[0]))].sort().reverse();
  if (dates.length === 0) return 0;
  
  let streak = 0;
  const today = todayKey();
  let checkDate = new Date(today);
  
  // Allow today or yesterday as starting point
  const todayStr = checkDate.toISOString().slice(0,10);
  const yesterdayStr = new Date(checkDate - 86400000).toISOString().slice(0,10);
  
  if (!dates.includes(todayStr) && !dates.includes(yesterdayStr)) return 0;
  if (!dates.includes(todayStr)) {
    checkDate = new Date(checkDate - 86400000);
  }
  
  while (true) {
    const ds = checkDate.toISOString().slice(0,10);
    if (dates.includes(ds)) {
      streak++;
      checkDate = new Date(checkDate - 86400000);
    } else {
      break;
    }
  }
  return streak;
}

function isCompletedToday(mode, id) {
  return !!devotState.completedDays[todayKey() + '_' + mode + '_' + id];
}

function markComplete(mode, id) {
  devotState.completedDays[todayKey() + '_' + mode + '_' + id] = true;
  saveDevotState();
}

// ── RENDER ───────────────────────────────────────────────────
function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderDevotional() {
  const mode = devotState.currentMode || autoDetectMode();
  devotState.currentMode = mode;
  
  const isMorning = mode === 'morning';
  const greeting = document.getElementById('devotGreeting');
  const sub = document.getElementById('devotSub');
  
  greeting.textContent = isMorning ? 'Morning Devotional' : 'Nightly Devotional';
  sub.textContent = isMorning ? 'begin the day in his word' : 'close the day in his presence';
  
  // Toggle buttons
  document.getElementById('btnMorning').className = 'morning' + (isMorning ? ' active' : '');
  document.getElementById('btnNightly').className = 'nightly' + (!isMorning ? ' active' : '');
  
  // Streak
  const streak = getStreakCount();
  const streakEl = document.getElementById('devotStreak');
  let streakHTML = '';
  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const ds = d.toISOString().slice(0,10);
    const hasAny = Object.keys(devotState.completedDays).some(k => k.startsWith(ds) && devotState.completedDays[k]);
    const isToday = i === 0;
    last7.push({ filled: hasAny, today: isToday });
  }
  streakHTML = last7.map(d => 
    '<div class="streak-dot' + (d.filled ? ' filled' : '') + (d.today ? ' today' : '') + '"></div>'
  ).join('');
  streakHTML += '<div class="streak-label"><span>' + streak + '</span> day streak</div>';
  streakEl.innerHTML = streakHTML;
  
  // Get today's devotional
  const { devotion, index } = getDevotionForToday(mode);
  devotState.currentIndex = index;
  
  renderCard(devotion, mode);
  renderNav(mode, index);
}

function renderCard(d, mode) {
  const container = document.getElementById('devotContent');
  const completed = isCompletedToday(mode, d.id);
  
  container.innerHTML = `
    <div class="devot-card">
      <div class="devot-card-top ${mode}"></div>
      <div class="devot-card-header">
        <div class="devot-card-badge ${mode}">${mode === 'morning' ? '\u2600 morning' : '\u263D nightly'} \u2022 day ${DEVOTIONALS[mode].indexOf(d) + 1} of 7</div>
        <div class="devot-card-title">${esc(d.title)}</div>
      </div>
      <div class="devot-scripture">
        <div class="devot-scripture-ref">${esc(d.reference)}</div>
        <div class="devot-scripture-text">\u201C${esc(d.scripture)}\u201D</div>
      </div>
      <div class="devot-body">
        <div class="devot-section-label">Reflection</div>
        <div class="devot-reflection">${esc(d.reflection)}</div>
        <div class="devot-section-label">Prayer</div>
        <div class="devot-prayer-box">
          <div class="devot-prayer-text">${esc(d.prayer)}</div>
        </div>
      </div>
      <div class="devot-actions">
        <button class="devot-btn primary ${completed ? 'done' : ''}" id="devotCompleteBtn">
          ${completed ? '\u2713 Completed' : 'Mark Complete'}
        </button>
        <button class="devot-btn secondary" id="devotPrevBtn">\u2190 Prev</button>
        <button class="devot-btn secondary" id="devotNextBtn">Next \u2192</button>
      </div>
    </div>
  `;
  
  // Complete button
  document.getElementById('devotCompleteBtn').addEventListener('click', function() {
    if (!completed) {
      markComplete(mode, d.id);
      renderDevotional();
    }
  });
  
  // Nav buttons
  document.getElementById('devotPrevBtn').addEventListener('click', function() {
    const list = DEVOTIONALS[mode];
    const cur = list.indexOf(d);
    const prev = (cur - 1 + list.length) % list.length;
    renderCard(list[prev], mode);
    renderNav(mode, prev);
  });
  
  document.getElementById('devotNextBtn').addEventListener('click', function() {
    const list = DEVOTIONALS[mode];
    const cur = list.indexOf(d);
    const next = (cur + 1) % list.length;
    renderCard(list[next], mode);
    renderNav(mode, next);
  });
}

function renderNav(mode, activeIdx) {
  const nav = document.getElementById('devotNav');
  const list = DEVOTIONALS[mode];
  nav.innerHTML = list.map((d, i) => {
    const completed = isCompletedToday(mode, d.id);
    let cls = 'devot-nav-dot';
    if (i === activeIdx) cls += ' active';
    else if (completed) cls += ' completed';
    return `<div class="${cls}" data-idx="${i}">${i + 1}</div>`;
  }).join('');
  
  nav.querySelectorAll('.devot-nav-dot').forEach(dot => {
    dot.addEventListener('click', function() {
      const idx = parseInt(this.dataset.idx);
      renderCard(list[idx], mode);
      renderNav(mode, idx);
    });
  });
}

// ── INIT ─────────────────────────────────────────────────────
loadDevotState();

// Mode toggle
document.getElementById('btnMorning').addEventListener('click', function() {
  devotState.currentMode = 'morning';
  saveDevotState();
  renderDevotional();
});

document.getElementById('btnNightly').addEventListener('click', function() {
  devotState.currentMode = 'nightly';
  saveDevotState();
  renderDevotional();
});

// Auto-render when tab is shown
const observer = new MutationObserver(function() {
  if (devotPanel.classList.contains('active')) {
    renderDevotional();
  }
});
observer.observe(devotPanel, { attributes: true, attributeFilter: ['class'] });

// Initial render if panel is already active
if (devotPanel.classList.contains('active')) {
  renderDevotional();
}

console.log('Anchor Devotional addon loaded.');

})();
