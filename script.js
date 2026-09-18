/* ==========================================================================
   MARKETING CHAPTER 1 INTERACTIVE APPLICATION SCRIPT
   Based strictly on Kotler & Armstrong Chapter 1 Presentation Content[cite: 1]
   ========================================================================== */

// DATA STRUCTURES

// 1. Entities Marketed
const entitiesData = [
    { name: "Goods", icon: "fa-box", desc: "Physical tangible items.", ex: "Smartphones, Cars, Clothing[cite: 1]." },
    { name: "Services", icon: "fa-hand-holding-heart", desc: "Intangible activities or benefits.", ex: "Banking, Airlines, Hotels[cite: 1]." },
    { name: "Events", icon: "fa-calendar-check", desc: "Time-based occurrences.", ex: "Olympic Games 2016 promotion[cite: 1]." },
    { name: "Experiences", icon: "fa-vr-cardboard", desc: "Orchestrated multi-sensory customer journeys.", ex: "Shampoo hair growth experience[cite: 1]." },
    { name: "Persons", icon: "fa-user-tie", desc: "Building celebrity or personal brands.", ex: "Political party candidates[cite: 1]." },
    { name: "Places", icon: "fa-location-dot", desc: "Promoting cities, states, or nations.", ex: "Kerala - God's Own Country[cite: 1]." },
    { name: "Properties", icon: "fa-city", desc: "Intangible rights of ownership.", ex: "Parkview City Lahore real estate[cite: 1]." },
    { name: "Organizations", icon: "fa-building", desc: "Building positive public reputation.", ex: "Shaukat Khanum Memorial Trust via Foodpanda[cite: 1]." },
    { name: "Information", icon: "fa-circle-info", desc: "Production, packaging, and distribution of data.", ex: "FBR tax deadline notifications[cite: 1]." },
    { name: "Ideas", icon: "fa-lightbulb", desc: "Basic social concepts or causes.", ex: "Beti Bachao Beti Padhao campaign[cite: 1]." }
];

// 2. Demand Types
const demandData = [
    { title: "Negative Demand", icon: "fa-thumbs-down", def: "Consumers dislike the product and may even pay to avoid it[cite: 1].", response: "Analyze why market dislikes product; redesign offer or positioning[cite: 1].", ex: "Vaccinations, dental surgery[cite: 1]." },
    { title: "Non-existent Demand", icon: "fa-eye-slash", def: "Consumers are uninterested or unaware of the product[cite: 1].", response: "Connect product benefits to natural human needs & wants[cite: 1].", ex: "College students learning foreign languages[cite: 1]." },
    { title: "Latent Demand", icon: "fa-hourglass-half", def: "Consumers have a strong need that existing products cannot fulfill[cite: 1].", response: "Measure market size and develop effective product solution[cite: 1].", ex: "Harmless cigarettes, fuel-efficient cars[cite: 1]." },
    { title: "Declining Demand", icon: "fa-chart-line-down", def: "Consumers begin to buy less frequently or stop purchasing entirely[cite: 1].", response: "Analyze causes of decay; target new markets or revamp offerings[cite: 1].", ex: "DVD players, landline telephones[cite: 1]." },
    { title: "Irregular Demand", icon: "fa-wave-square", def: "Purchases vary on a seasonal, monthly, or daily basis[cite: 1].", response: "Use flexible pricing and promotion (Synchromarketing)[cite: 1].", ex: "Museum visits on weekdays, water parks in winter[cite: 1]." },
    { title: "Full Demand", icon: "fa-circle-check", def: "Consumers are satisfactorily buying all products placed in the market[cite: 1].", response: "Maintain current quality, measure satisfaction, counter competition[cite: 1].", ex: "Popular everyday consumer goods[cite: 1]." },
    { title: "Overfull Demand", icon: "fa-triangle-exclamation", def: "Demand is higher than the company can or wants to handle[cite: 1].", response: "Demarketing: Raise prices, reduce promotion temporarily[cite: 1].", ex: "Overcrowded national parks or highways[cite: 1]." },
    { title: "Unwholesome Demand", icon: "fa-ban", def: "Consumers are attracted to products with undesirable social consequences[cite: 1].", response: "Use fear appeals and price increases to destroy demand[cite: 1].", ex: "Cigarettes, illegal drugs, polluting appliances[cite: 1]." }
];

// 3. Marketing Process Steps
const processData = [
    { step: 1, title: "Understand Marketplace", desc: "Research customer needs, wants, and demands[cite: 1].", details: "Marketplace research identifies felt deprivations and cultural wants backed by buying power[cite: 1]." },
    { step: 2, title: "Design Strategy", desc: "Select target customers & choose a value proposition[cite: 1].", details: "Decide target market via segmentation and establish positioning differentiation[cite: 1]." },
    { step: 3, title: "Construct 4Ps Program", desc: "Develop an integrated marketing mix[cite: 1].", details: "Product (Value creation), Price (Value capture), Place (Availability), Promotion (Communication)[cite: 1]." },
    { step: 4, title: "Build Relationships", desc: "Create CRM & customer delight[cite: 1].", details: "Exceed expectations to build strong emotional and functional ties[cite: 1]." },
    { step: 5, title: "Capture Value", desc: "Harvest customer lifetime value & equity[cite: 1].", details: "Turn customer satisfaction into long-term sales, share of customer, and brand equity[cite: 1]." }
];

// 4. Marketing Orientations
const orientationsData = [
    { title: "Production Concept", focus: "Efficiency & High Availability", desc: "Consumers favor products that are available and highly affordable[cite: 1].", ex: "Focusing heavily on distribution and low cost manufacturing[cite: 1]." },
    { title: "Product Concept", focus: "Quality & Performance", desc: "Consumers favor products offering the highest quality, performance, and innovation[cite: 1].", ex: "Devoting energy to continuous product improvement[cite: 1]." },
    { title: "Selling Concept", focus: "Large-Scale Sales & Promotion", desc: "Consumers will not buy enough products unless the firm undertakes aggressive selling efforts[cite: 1].", ex: "Inside-out view starting at factory focusing on existing products[cite: 1]." },
    { title: "Marketing Concept", focus: "Customer Needs Satisfaction", desc: "Achieving goals depends on knowing customer needs better than competitors[cite: 1].", ex: "Outside-in perspective focusing on customer delight[cite: 1]." },
    { title: "Societal Marketing Concept", focus: "Triple Bottom Line (Society, Consumer, Company)", desc: "Considers consumer wants, company requirements, long-run consumer & societal interests[cite: 1].", ex: "Eco-friendly packaging and ethical sourcing[cite: 1]." }
];

// 5. Mini Cases
const casesData = [
    { company: "Google", scenario: "Recognized that society needed rapid access to web information and built a search tool[cite: 1].", question: "Which core marketing philosophy does this demonstrate?", options: ["Marketing Myopia", "Identifying Social Needs Profitably", "Selling Concept", "Negative Demand"], answer: 1, explanation: "Google identified a fundamental social need and fulfilled it profitably[cite: 1]." },
    { company: "Nike", scenario: "Fosters direct, continuous customer engagement through social media, sports events, and user communities[cite: 1].", question: "What concept is Nike showcasing?", options: ["Customer-Engagement Marketing", "Production Concept", "Demarketing", "Negative Demand"], answer: 0, explanation: "Nike makes the brand part of customers' lives and conversations[cite: 1]." }
];

// 6. Flashcards
const flashcardsData = [
    { term: "Marketing Myopia", def: "Paying more attention to specific products than to the benefits/experiences produced[cite: 1].", ex: "Focusing on drill bits rather than 1/2-inch holes[cite: 1]." },
    { term: "Customer Lifetime Value", def: "Value of the entire stream of purchases a customer makes over a lifetime[cite: 1].", ex: "A loyal coffee drinker spending $25,000 over 20 years[cite: 1]." },
    { term: "Share of Customer", def: "Portion of customer's purchasing that a company gets in its product categories[cite: 1].", ex: "A bank getting 80% of a client's financial business[cite: 1]." },
    { term: "Customer Equity", def: "Total combined customer lifetime values of all of the company's customers[cite: 1].", ex: "High equity indicates strong future profitability[cite: 1]." },
    { term: "Value Proposition", def: "Set of benefits or values a brand promises to deliver to satisfy needs[cite: 1].", ex: "BMW promising the Ultimate Driving Machine[cite: 1]." },
    { term: "CRM", def: "Overall process of building & maintaining profitable customer relationships through superior value[cite: 1].", ex: "Rewards loyalty programs[cite: 1]." },
    { term: "Demands", def: "Human wants backed by purchasing power[cite: 1].", ex: "Wanting a luxury car and having funds to purchase it[cite: 1]." },
    { term: "Market Offerings", def: "Combination of products, services, info, or experiences offered to satisfy needs[cite: 1].", ex: "Disney World vacations[cite: 1]." },
    { term: "Negative Demand", def: "Major part of market dislikes the product and may pay to avoid it[cite: 1].", ex: "Dental surgery[cite: 1]." },
    { term: "Latent Demand", def: "Strong desire that cannot be satisfied by existing products[cite: 1].", ex: "Eco-friendly zero-emission planes[cite: 1]." },
    { term: "Marketer", def: "Someone seeking a response (purchase, vote, donation) from a prospect[cite: 1].", ex: "Political campaign manager[cite: 1]." },
    { term: "Prospect", def: "Target party from whom a marketer seeks a response[cite: 1].", ex: "Voter or buyer[cite: 1]." },
    { term: "Exchange", def: "Act of obtaining a desired object by offering something in return[cite: 1].", ex: "Trading cash for a laptop[cite: 1]." },
    { term: "Societal Marketing", def: "Balancing company profits, consumer wants, and public long-run welfare[cite: 1].", ex: "Biodegradable packaging initiatives[cite: 1]." },
    { term: "Partner Relationship Management", def: "Working closely with internal & external partners to create value[cite: 1].", ex: "Cooperating with channel distributors[cite: 1]." }
];

// 7. Quiz Questions (15 Questions)
const quizData = [
    { q: "Selling is described in Chapter 1 as:", opts: ["The entire scope of marketing", "The tip of the marketing iceberg", "Unrelated to business", "The primary focus of modern marketing"], correct: 1 },
    { q: "Which concept involves paying more attention to specific products than customer benefits?", opts: ["Customer Equity", "Marketing Myopia", "Societal Marketing", "Synchromarketing"], correct: 1 },
    { q: "Human wants backed by buying power are known as:", opts: ["Needs", "Wants", "Demands", "Offerings"], correct: 2 },
    { q: "Which demand state exists when consumers dislike a product and may pay to avoid it?", opts: ["Latent Demand", "Negative Demand", "Declining Demand", "Unwholesome Demand"], correct: 1 },
    { q: "A party from whom a marketer seeks a response (purchase, vote, donation) is called a:", opts: ["Supplier", "Prospect", "Intermediary", "Barnacle"], correct: 1 },
    { q: "Step 3 of the 5-Step Marketing Process focuses on constructing:", opts: ["Customer Equity", "The 4Ps Integrated Program", "Market Research", "Mission Statement"], correct: 1 },
    { q: "The Production Concept holds that consumers favor products that are:", opts: ["Highest in quality", "Available and highly affordable", "Aggressively promoted", "Eco-friendly"], correct: 1 },
    { q: "Customer-perceived value is defined as benefits minus:", opts: ["Promotions", "Costs", "Competitor prices", "Expectations"], correct: 1 },
    { q: "High potential profitability combined with short-term projected loyalty defines which customer group?", opts: ["Strangers", "True Friends", "Butterflies", "Barnacles"], correct: 2 },
    { q: "Total combined customer lifetime values across all customers represents:", opts: ["Share of Customer", "Customer Equity", "Customer Satisfaction", "Market Share"], correct: 1 },
    { q: "Promoting 'Kerala - God's Own Country' is an example of marketing a:", opts: ["Goods", "Property", "Place", "Person"], correct: 2 },
    { q: "Which concept balances company profits, consumer desires, and society's long-run interests?", opts: ["Selling Concept", "Product Concept", "Societal Marketing Concept", "Production Concept"], correct: 2 },
    { q: "When a product's performance matches customer expectations, the result is:", opts: ["Marketing Myopia", "Customer Satisfaction", "Demarketing", "Latent Demand"], correct: 1 },
    { q: "Working closely with suppliers and retailers to create value is called:", opts: ["Consumer-Generated Marketing", "Partner Relationship Management", "Direct Marketing", "Myopia"], correct: 1 },
    { q: "Which platform is cited as the fastest-growing digital marketing channel?", opts: ["Print Ads", "Mobile Marketing", "Radio", "Direct Mail"], correct: 1 }
];

// STATE MANAGEMENT
let currentCardIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let progressState = JSON.parse(localStorage.getItem('mktg_progress')) || { completedTopics: [], quizScore: 0 };

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    initOverview();
    initEntities();
    initDemandSimulator();
    initProcessTimeline();
    initOrientations();
    initValueCalculators();
    initCases();
    initFlashcards();
    initQuiz();
    initGlossary();
    initIceberg();
    initTheme();
    updateProgressUI();
});

// UI RENDERING FUNCTIONS

function initOverview() {
    const grid = document.getElementById("overviewGrid");
    const topics = [
        "Value of Marketing", "Selling vs Marketing", "What is Marketed", "Who is Marketer",
        "Types of Demand", "Basic Markets", "5-Step Process", "Needs/Wants/Demands",
        "Marketing Myopia", "5 Orientations", "CRM & Value", "Capturing Value"
    ];
    grid.innerHTML = topics.map((t, idx) => `
        <div class="card overview-card card-glass" onclick="scrollToSection('${t}')">
            <i class="fa-solid fa-bookmark"></i>
            <h4>${t}</h4>
            <small>Chapter Topic ${idx+1}</small>
        </div>
    `).join("");
}

function initEntities() {
    const grid = document.getElementById("entitiesGrid");
    grid.innerHTML = entitiesData.map(e => `
        <div class="card card-glass">
            <i class="fa-solid ${e.icon}" style="font-size:1.5rem; color:var(--accent-blue);"></i>
            <h4 style="margin:0.5rem 0;">${e.name}</h4>
            <p style="font-size:0.85rem;">${e.desc}</p>
            <small style="color:var(--text-secondary);">Ex: ${e.ex}</small>
        </div>
    `).join("");
}

function initDemandSimulator() {
    const tabs = document.getElementById("demandTabs");
    tabs.innerHTML = demandData.map((d, i) => `
        <button class="sim-tab-btn ${i===0?'active':''}" onclick="selectDemand(${i})">
            <i class="fa-solid ${d.icon}"></i> ${d.title}
        </button>
    `).join("");
    selectDemand(0);
}

function selectDemand(index) {
    document.querySelectorAll(".sim-tab-btn").forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
    const d = demandData[index];
    document.getElementById("demandDisplay").innerHTML = `
        <h3><i class="fa-solid ${d.icon}"></i> ${d.title}</h3>
        <hr style="margin:0.8rem 0; border-color:var(--border-color);">
        <p><strong>Definition:</strong> ${d.def}</p>
        <p style="margin:0.5rem 0;"><strong>Marketing Response:</strong> ${d.response}</p>
        <p style="color:var(--text-secondary);"><strong>Example:</strong> ${d.ex}</p>
    `;
    markTopicCompleted(`Demand: ${d.title}`);
}

function initIceberg() {
    document.querySelectorAll(".interactive-part").forEach(el => {
        el.addEventListener("click", () => {
            const info = el.getAttribute("data-info");
            document.getElementById("icebergDetailBox").innerHTML = `
                <h4><i class="fa-solid fa-circle-info"></i> Part Selected</h4>
                <p style="margin-top:0.5rem;">${info}</p>
            `;
            markTopicCompleted("Iceberg Concept");
        });
    });
}

function initProcessTimeline() {
    const container = document.getElementById("processTimeline");
    container.innerHTML = processData.map((p, i) => `
        <div class="step-node ${i===0?'active':''}" onclick="selectProcessStep(${i})">
            <strong>Step ${p.step}</strong><br>${p.title}
        </div>
    `).join("");
    selectProcessStep(0);
}

function selectProcessStep(index) {
    document.querySelectorAll(".step-node").forEach((node, i) => {
        node.classList.toggle("active", i === index);
    });
    const p = processData[index];
    document.getElementById("processDetail").innerHTML = `
        <h3>Step ${p.step}: ${p.title}</h3>
        <p style="margin:0.5rem 0;">${p.desc}</p>
        <div class="card" style="background:rgba(255,255,255,0.03); margin-top:0.5rem;">
            <small><strong>In-Depth Detail:</strong> ${p.details}</small>
        </div>
    `;
    markTopicCompleted(`Process Step ${p.step}`);
}

function initOrientations() {
    const nav = document.getElementById("orientationsNav");
    nav.innerHTML = orientationsData.map((o, i) => `
        <button class="btn btn-secondary ${i===0?'active':''}" onclick="selectOrientation(${i})" style="margin:0.2rem;">${o.title}</button>
    `).join("");
    selectOrientation(0);
}

function selectOrientation(index) {
    const o = orientationsData[index];
    document.getElementById("orientationCard").innerHTML = `
        <h3>${o.title}</h3>
        <p><strong>Core Focus:</strong> ${o.focus}</p>
        <p style="margin:0.5rem 0;">${o.desc}</p>
        <small style="color:var(--text-secondary);">Example: ${o.ex}</small>
    `;
    markTopicCompleted(`Orientation: ${o.title}`);
}

function initValueCalculators() {
    const bIn = document.getElementById("benefitInput");
    const cIn = document.getElementById("costInput");
    const updateCalc = () => {
        document.getElementById("benefitVal").innerText = bIn.value;
        document.getElementById("costVal").innerText = cIn.value;
        const net = bIn.value - cIn.value;
        document.getElementById("netValueDisplay").innerText = net + (net > 0 ? " (Positive Value)" : " (Negative Value)");
    };
    bIn.addEventListener("input", updateCalc);
    cIn.addEventListener("input", updateCalc);

    const expIn = document.getElementById("expInput");
    const perfIn = document.getElementById("perfInput");
    const updateSat = () => {
        document.getElementById("expVal").innerText = expIn.value;
        document.getElementById("perfVal").innerText = perfIn.value;
        const status = document.getElementById("satisfactionStatus");
        const diff = perfIn.value - expIn.value;
        if(diff < -10) {
            status.innerText = "Below Expectations (Dissatisfied)";
            status.className = "status-badge status-danger";
        } else if(diff > 10) {
            status.innerText = "Exceeds Expectations (Delighted!)";
            status.className = "status-badge status-success";
        } else {
            status.innerText = "Meets Expectations (Satisfied)";
            status.className = "status-badge status-neutral";
        }
    };
    expIn.addEventListener("input", updateSat);
    perfIn.addEventListener("input", updateSat);
}

// VIDEO SIMULATION CONTROLLER
let videoTimerInterval;
let videoTime = 0;
function loadVideo(idx) {
    document.querySelectorAll(".vbtn").forEach((b, i) => b.classList.toggle("active", i === idx));
    const screen = document.getElementById("videoScreen");
    const titles = ["Creating Customer Value", "5 Steps Marketing Process", "Needs → Wants → Demands", "Customer Lifetime Value Flow"];
    screen.innerHTML = `
        <div style="text-align:center;">
            <i class="fa-solid fa-play-circle" style="font-size:3rem; color:var(--accent-blue);"></i>
            <h4 style="margin-top:0.5rem;">${titles[idx]}</h4>
            <p style="font-size:0.8rem; color:var(--text-secondary);">Animated Simulation Running...</p>
        </div>
    `;
    resetVideo();
}
function resetVideo() { clearInterval(videoTimerInterval); videoTime = 0; updateVideoTimer(); }
function updateVideoTimer() { document.getElementById("vidTimer").innerText = `00:${videoTime < 10 ? '0'+videoTime : videoTime} / 00:20`; }

document.getElementById("vidPlayBtn").addEventListener("click", () => {
    clearInterval(videoTimerInterval);
    videoTimerInterval = setInterval(() => {
        if(videoTime < 20) { videoTime++; updateVideoTimer(); }
        else clearInterval(videoTimerInterval);
    }, 1000);
});
document.getElementById("vidPauseBtn").addEventListener("click", () => clearInterval(videoTimerInterval));
document.getElementById("vidResetBtn").addEventListener("click", resetVideo);

// CASES
function initCases() {
    const container = document.getElementById("casesContainer");
    container.innerHTML = casesData.map((c, i) => `
        <div class="card card-glass">
            <h4>${c.company}</h4>
            <p style="font-size:0.85rem; margin:0.5rem 0;">${c.scenario}</p>
            <p><strong>${c.question}</strong></p>
            <div style="margin-top:0.5rem;">
                ${c.options.map((opt, optIdx) => `
                    <button class="quiz-option" onclick="checkCaseAnswer(${i}, ${optIdx}, this)">${opt}</button>
                `).join("")}
            </div>
            <div id="caseExplain${i}" style="display:none; margin-top:0.5rem; font-size:0.8rem;" class="card"></div>
        </div>
    `).join("");
}

function checkCaseAnswer(caseIdx, optIdx, btn) {
    const c = casesData[caseIdx];
    const explainBox = document.getElementById(`caseExplain${caseIdx}`);
    if(optIdx === c.answer) {
        btn.classList.add("correct");
        explainBox.innerHTML = `<span style="color:var(--success)">Correct!</span> ${c.explanation}`;
    } else {
        btn.classList.add("incorrect");
        explainBox.innerHTML = `<span style="color:var(--danger)">Incorrect.</span> ${c.explanation}`;
    }
    explainBox.style.display = "block";
}

// FLASHCARDS
function initFlashcards() { updateCard(); }
function updateCard() {
    const card = flashcardsData[currentCardIndex];
    document.getElementById("cardFront").innerHTML = `<h3>${card.term}</h3>`;
    document.getElementById("cardBack").innerHTML = `<p>${card.def}</p><br><small style="color:var(--text-secondary);">Ex: ${card.ex}</small>`;
    document.getElementById("cardIndexDisplay").innerText = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    document.getElementById("flashcard").classList.remove("flipped");
}
function flipCard() { document.getElementById("flashcard").classList.toggle("flipped"); }
function nextCard() { if(currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateCard(); } }
function prevCard() { if(currentCardIndex > 0) { currentCardIndex--; updateCard(); } }

// QUIZ LOGIC
function initQuiz() { loadQuizQuestion(); }
function loadQuizQuestion() {
    const q = quizData[currentQuizIndex];
    document.getElementById("quizQuestionCount").innerText = `Question ${currentQuizIndex + 1} of ${quizData.length}`;
    document.getElementById("quizBar").style.width = `${((currentQuizIndex + 1)/quizData.length)*100}%`;
    document.getElementById("quizBody").innerHTML = `
        <h3 style="margin-bottom:1rem;">${q.q}</h3>
        ${q.opts.map((opt, i) => `
            <button class="quiz-option" onclick="selectQuizOption(${i}, this)">${opt}</button>
        `).join("")}
    `;
    document.getElementById("nextQuestionBtn").style.display = "none";
}

function selectQuizOption(selectedIdx, btn) {
    const q = quizData[currentQuizIndex];
    const options = document.querySelectorAll("#quizBody .quiz-option");
    options.forEach(opt => opt.style.pointerEvents = "none");
    
    if(selectedIdx === q.correct) {
        btn.classList.add("correct");
        quizScore++;
    } else {
        btn.classList.add("incorrect");
        options[q.correct].classList.add("correct");
    }
    document.getElementById("nextQuestionBtn").style.display = "inline-flex";
}

function nextQuestion() {
    if(currentQuizIndex < quizData.length - 1) {
        currentQuizIndex++;
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const pct = Math.round((quizScore / quizData.length) * 100);
    progressState.quizScore = pct;
    saveProgress();
    document.getElementById("quizContainer").innerHTML = `
        <div style="text-align:center; padding:2rem;">
            <i class="fa-solid fa-trophy" style="font-size:3rem; color:var(--warning);"></i>
            <h2>Quiz Completed!</h2>
            <p style="font-size:1.5rem; margin:1rem 0;">Your Score: <strong>${pct}%</strong> (${quizScore}/${quizData.length})</p>
            <button class="btn btn-primary" onclick="location.reload()"><i class="fa-solid fa-rotate-right"></i> Restart Quiz</button>
        </div>
    `;
    updateProgressUI();
}

// GLOSSARY
function initGlossary() {
    renderGlossary(flashcardsData);
}

function renderGlossary(data) {
    const grid = document.getElementById("glossaryGrid");
    grid.innerHTML = data.map(item => `
        <div class="card card-glass">
            <h4>${item.term}</h4>
            <p style="font-size:0.85rem; margin-top:0.3rem;">${item.def}</p>
        </div>
    `).join("");
}

function filterGlossary() {
    const q = document.getElementById("glossarySearch").value.toLowerCase();
    const filtered = flashcardsData.filter(i => i.term.toLowerCase().includes(q) || i.def.toLowerCase().includes(q));
    renderGlossary(filtered);
}

// THEME & PROGRESS TRACKING
function initTheme() {
    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const target = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", target);
        toggle.innerHTML = target === "dark" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });
}

function markTopicCompleted(topicName) {
    if(!progressState.completedTopics.includes(topicName)) {
        progressState.completedTopics.push(topicName);
        saveProgress();
        updateProgressUI();
    }
}

function saveProgress() {
    localStorage.setItem('mktg_progress', JSON.stringify(progressState));
}

function updateProgressUI() {
    const count = progressState.completedTopics.length;
    document.getElementById("completedTopics").innerText = `${count} / 33`;
    document.getElementById("quizScoreDisplay").innerText = `${progressState.quizScore}%`;
    const overallPct = Math.min(100, Math.round((count / 33) * 100));
    document.getElementById("overallProgressText").innerText = `${overallPct}%`;
    document.getElementById("globalProgressBar").style.width = `${overallPct}%`;
}

function scrollToSection(topicName) {
    const section = document.getElementById("value-marketing");
    if(section) section.scrollIntoView({ behavior: 'smooth' });
}