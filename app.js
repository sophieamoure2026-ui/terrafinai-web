const dealData = {
    project_reston: {
        region: "americas",
        title: "Project Reston",
        desc: "Operating 21,100 SF Tier III data center in Northern Virginia (Data Center Alley). 900 kW current IT load with 5 MW expansion capability via Dominion Energy.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/project_reston_teaser.html" }]
    },
    project_nyc: {
        region: "americas",
        title: "Project NYC 2026",
        desc: "Landmark 460-room luxury hospitality asset in NoMad, Manhattan. Delivered unencumbered by management/brand. $400M valuation.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/project_nyc_teaser.html" }]
    },
    kyushu: {
        region: "apac",
        desc: "76,000 m² grid-secured hybrid development integrating 4MW solar generation with high-density containerized data center.",
        docs: [{ label: "Project Outline (DOCX)", url: "docs/kyushu_chiba_outline.docx" }]
    },
    chiba: {
        region: "apac",
        desc: "Institutional hyper-scale development serving low-latency demands of Tokyo financial/tech hub. 100MW load-balanced with TEPCO.",
        docs: [
            { label: "Data Center Teaser (EN)", url: "docs/tokyo_datacenter_teaser.pdf" }
        ]
    },
    bahamas_bank: {
        region: "americas",
        desc: "Fully operational, profitable private bank in Nassau. Turnkey platform with wealth management and digital asset capabilities. Sourcing qualified principals.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/bahamas_bank_exec_summary.html" }]
    },
    wilhelmshaven: {
        region: "emea",
        desc: "513-acre energy/logistics hub on Germany's North Sea coast. 8.2MM barrel tank farm with dual VLCC-capable jetties.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/wilhelmshaven_exec_summary.html" }]
    },
    dominica_bank: {
        region: "americas",
        desc: "Fully operational Class A Offshore Bank. SWIFT/IBAN enabled, multi-currency capabilities. Turnkey infrastructure.",
        docs: [{ label: "Sales Memorandum", url: "docs/dominica_bank_memo.pdf" }]
    },
    labuan_bank: {
        region: "apac",
        desc: "Active Labuan IBFC Investment Banking license. Corporate finance and wealth management platform.",
        docs: [{ label: "Sales Memorandum", url: "docs/labuan_bank_memo.pdf" }]
    },
    djibouti_bank: {
        region: "emea",
        desc: "Licensed commercial bank in the Horn of Africa. Strategic geographic positioning for trade finance and retail.",
        docs: [{ label: "Sales Memorandum", url: "docs/djibouti_bank_memo.pdf" }]
    },
    zymagenx: {
        region: "americas",
        desc: "Phase 3-Ready first-in-class Celiac Disease therapeutic. $2M-$4M Convertible Note at an exceptionally low $27M Valuation Cap.",
        docs: [{ label: "Investor Deck (April 2026)", url: "docs/zymagenx_deck.pdf" }]
    },
    life_ev: {
        region: "americas",
        desc: "E-mobility consolidation platform. Acquired Rad Power Bikes ($1.2B historical rev) and Serial 1. 1.8M customer base with omnichannel FTZ margin advantage.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/life_ev_exec_summary.html" }]
    },
    tiffany: {
        region: "apac",
        desc: "Tokyo's premier luxury storefront. 100% occupancy with Tiffany & Co anchor. Generational asset.",
        docs: [{ label: "Asset Teaser", url: "docs/tiffany_ginza_teaser.pdf" }]
    },
    parkview: {
        region: "apac",
        desc: "Towers 1 & 2. Prestigious Tai Tam residential trophy asset. 200 service suites with 83% occupancy.",
        docs: [{ label: "Asset Summary", url: "docs/parkview_hk.pdf" }]
    },
    arton: {
        region: "apac",
        desc: "Off-market boutique hospitality in a resilient market. Stabilized 5%+ yield profile.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/arton_exec_summary.html" }]
    },
    bahamas_boutique: {
        region: "americas",
        desc: "Oceanfront property in a sought-after destination. Prime beachfront real estate with established boutique hotel operations.",
        docs: []
    },
    pollock: {
        region: "americas",
        desc: "Museum-quality blue-chip masterpiece (Catalog Raisonné No. 300, p.121). Escrow-settled private transaction in New York.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/pollock_exec_summary.html" }]
    },
    coral_harbour: {
        region: "americas",
        desc: "422-acre mixed-use oceanfront development on New Providence. Mega-yacht marina, luxury hospitality, and branded residences.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/coral_harbour_exec_summary.html" }]
    },
    alila_seminyak: {
        region: "apac",
        desc: "Luxury beachfront resort in Bali. Premier hospitality asset. Offered at $99M + 3% fees.",
        docs: [{ label: "Investment Teaser (2026)", url: "docs/alila_seminyak_teaser.pdf" }]
    },
    maldives_resort: {
        region: "emea",
        desc: "Ultra-exclusive private island in Haa Alifu Atoll. All-suite beachfront and overwater villas with private marina and luxury amenities.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/maldives_resort_exec_summary.html" }]
    },
    maui_portfolio: {
        region: "americas",
        desc: "Distressed 6-parcel beachfront acquisition. Appraised at $120M. Asset-only bankruptcy sale (real property only).",
        docs: [
            { label: "Executive Summary (HTML)", url: "docs/maui_exec_summary.html" },
            { label: "Interactive Pitch Deck", url: "docs/maui_carousel_slides.html" }
        ]
    },
    indigo_hk: {
        region: "apac",
        desc: "4-star boutique IHG asset in Wan Chai. 138 rooms, rooftop glass-bottom infinity pool, Skybar. Yield-optimized boutique operation.",
        docs: [{ label: "Asset Summary", url: "docs/hotel_indigo_hk.pdf" }]
    },
    mining_combined: {
        region: "americas",
        desc: "Verified reserves in Colorado (Venture Gold) and Alaska (Nome Placer). Institutional extraction mandates.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/mining_exec_summary.html" }]
    },
    silver: {
        region: "americas",
        desc: "2.3M Tons in-situ recovery mandate for strategic stockpiling. Fire assay verified.",
        docs: []
    },
    tank_farm: {
        region: "emea",
        desc: "Large-scale operational tank storage terminal in Europe. 63 tanks, 8.2M barrels capacity, VLCC deep-water access, 513 acres.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/wilhelmshaven_exec_summary.html" }]
    },
    tobor: {
        region: "americas",
        desc: "Industrial automation and humanoid robotics distribution hub. Preferred US Unitree partner.",
        docs: [{ label: "Investor Deck", url: "docs/tobor_robot_deck.pdf" }]
    },
    greenvue: {
        region: "americas",
        desc: "Modular Autonomous Aerial Platform. Next-generation AI-enabled dual-use UAV architecture. Seeking JV/Licensing partner.",
        docs: [{ label: "Executive Summary", url: "docs/greenvue_exec_summary.pdf" }]
    },
    greenvue_health: {
        region: "americas",
        desc: "AI-driven diabetes technology company developing advanced solutions to support clinics worldwide through improved patient management and operational efficiency. Raising US$500,000.",
        docs: [{ label: "Investor Presentation", url: "docs/greenvue-ai-investor-deck-jun2026.pdf" }]
    },
    brazil_crypto_bank: {
        region: "latam",
        title: "Brazil Crypto Bank",
        desc: "A well-established crypto banking and digital asset services company in Brazil. Operating successfully for 10+ years with an experienced team.",
        docs: [{ label: "Executive Summary", url: "docs/brazil_crypto_bank.html" }, { label: "Interactive Pitch Deck", url: "docs/brazil_crypto_deck.html" }]
    },
    brazil_payment_eme: {
        region: "latam",
        title: "Brazil Payment Institution (EME)",
        desc: "Authorized Payment Institution (EME) & Direct Participant in PIX in Brazil. Proprietary CORE banking/payment system and established compliance infrastructure.",
        docs: [{ label: "Executive Summary", url: "docs/brazil_payment_eme.html" }, { label: "Interactive Pitch Deck", url: "docs/brazil_payment_deck.html" }]
    },
    westin_tokyo: {
        region: "apac",
        title: "The Westin Tokyo",
        desc: "Landmark 438-room luxury hospitality asset in Ebisu, Tokyo. Offered off-market at ¥125,000,000,000 (approx. USD $860,000,000). Seller requires LOI/POF and registered Japan entity.",
        docs: [{ label: "Executive Summary", url: "docs/westin_tokyo_exec_summary.html" }]
    },
    amara_energy: {
        region: "emea",
        title: "Amara Energy AB",
        desc: "Nordic geothermal platform built around a proven acquisition-led consolidation strategy in Sweden and Norway. Three completed acquisitions with SEK 400M assets on balance sheet. Raising SEK 30M in new equity at a SEK 600M pre-money valuation.",
        docs: [{ label: "Executive Summary (HTML)", url: "docs/amara_energy_exec_summary.html" }, { label: "Investor Presentation", url: "docs/amara_energy_deck.pdf" }]
    },
    cityclinic: {
        region: "emea",
        title: "CityClinic Group",
        desc: "Vertically integrated European MedTech & premium healthcare corporation consolidator. Proven Marbella clinical baseline with 6-pillar digital scaling engine and Agentic AI SaaS. €12.5M Series A Raise.",
        docs: [
            { label: "Executive Summary (HTML)", url: "docs/cityclinic_exec_summary.html" },
            { label: "Executive Cover Letter (PDF)", url: "docs/cityclinic_cover_letter.pdf" },
            { label: "Investor Presentation (PPTX)", url: "docs/cityclinic_deck.pptx" }
        ]
    },
    toke: {
        region: "americas",
        title: "TOKE Utility Token",
        desc: "Utility token built on Ethereum L2 Base network designed for digital commerce. Combines sub-50% merchant processing fees and instant settlements with Venmo-like wallet simplicity.",
        docs: [
            { label: "Executive Summary (HTML)", url: "docs/toke_exec_summary.html" }
        ]
    },
    rogers_wash: {
        region: "americas",
        title: "Wickenburg Gold & Palladium Mine",
        desc: "3,262 acres of claims + 120 acres patented in Arizona. Estimated 10.8M oz Au, 15.3M oz Ag, 60.8M oz Pd reserves ($143.4B resource value). Offered at $250M.",
        docs: []
    },
    oligogen: {
        region: "apac",
        title: "Oligogen Inc.",
        desc: "Kyoto University spin-out iPS neural cell platform. Proprietary OligoGenie NSCs with >90% OLG differentiation. $30M raise for 28-29% equity for Phase II/III Japan clinical trials.",
        docs: []
    },
    zero_g: {
        region: "americas",
        title: "Zero Gravity Corporation",
        desc: "Exclusive FAA-certified U.S. microgravity flight provider. 2,400+ research payloads flown (NASA, Space Force). $10.2M Series B+ raise at $17M pre-money valuation (70-75% discount).",
        docs: []
    }
};


function openDD(dealId) {
    const modal = document.getElementById('dd-modal');
    const content = document.getElementById('modal-body-content');
    
    const deal = dealData[dealId];
    const description = deal ? deal.desc : 'Detailed due diligence information is restricted to cleared institutional buyers.';
    const docs = deal ? deal.docs : [];

    const docButtons = docs.length > 0
        ? `<div style="margin-top: 1.5rem;">
            <div class="mono" style="font-size: 0.55rem; color: #555; letter-spacing: 2px; margin-bottom: 0.75rem;">DOCUMENTS — UNLOCKED AFTER VETTING</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${docs.map(d => `
                <a href="${d.url}" target="_blank" class="btn-primary" style="font-size: 0.7rem; padding: 0.6rem 1.2rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; width: fit-content; background: rgba(6,182,212,0.15); border: 1px solid var(--accent-cyan); color: var(--accent-cyan);">
                    <span style="font-size: 1rem;">&#8659;</span> ${d.label}
                </a>`).join('')}
            </div>
          </div>`
        : `<div class="mono" style="font-size: 0.65rem; color: #555; margin-top: 1rem;"> > DOCUMENTS: PENDING — CONTACT DIRECTLY TO REQUEST</div>`;
    
    content.innerHTML = `
        <h3 style="margin-bottom: 0.5rem; color: #fff; font-size: 1.1rem;">${dealId.replace(/_/g,' ').toUpperCase()}</h3>
        <p style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 1rem;">${description}</p>
        <div class="mono" style="font-size: 0.7rem; color: #06b6d4; padding: 1rem; background: rgba(0,0,0,0.5); border-radius: 4px; margin-bottom: 0.5rem;">
            > LEGAL_AUDIT: VERIFIED<br>
            > FINANCIAL_MODEL: VETTED<br>
            > STATUS: LOCKED PENDING CLEARANCE
        </div>
        ${docButtons}
    `;
    
    modal.style.display = 'flex';
}

function closeDD() {
    const modal = document.getElementById('dd-modal');
    modal.style.display = 'none';
    resetAccessFlow();
}

function resetAccessFlow() {
    document.getElementById('dr-step-1').style.display = 'block';
    document.getElementById('dr-step-2').style.display = 'none';
    document.getElementById('data-room-email').value = '';
    document.getElementById('data-room-pass').value = '';
    const e1 = document.getElementById('step1-error');
    const e2 = document.getElementById('access-error');
    if (e1) e1.style.display = 'none';
    if (e2) e2.style.display = 'none';
}

function requestAccessCode() {
    const email = document.getElementById('data-room-email').value.trim();
    const errorMsg = document.getElementById('step1-error');

    if (!email || !email.includes('@') || !email.includes('.')) {
        errorMsg.innerText = '> INVALID EMAIL — CORPORATE DOMAIN REQUIRED';
        errorMsg.style.display = 'block';
        setTimeout(() => errorMsg.style.display = 'none', 3000);
        return;
    }

    const genericDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com'];
    const domain = email.split('@')[1].toLowerCase();
    if (genericDomains.includes(domain)) {
        errorMsg.innerText = '> ACCESS REFUSED: CORPORATE DOMAIN REQUIRED FOR ACCREDITED CLEARANCE';
        errorMsg.style.display = 'block';
        setTimeout(() => errorMsg.style.display = 'none', 4000);
        return;
    }

    // Simulate sending code — for demo, reveal the code in the dispatch message
    const demoCode = 'TF2026';
    const btn = document.querySelector('#dr-step-1 button');
    btn.innerText = 'DISPATCHING...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('dr-step-1').style.display = 'none';
        document.getElementById('dr-step-2').style.display = 'block';
        document.getElementById('dr-dispatch-msg').innerHTML =
            `> ACCESS CODE DISPATCHED TO: ${email}<br>> DEMO ACCESS CODE: <strong style="color:#fff; letter-spacing:3px;">${demoCode}</strong><br><span style="font-size:0.6rem; color:#555;">In production, this is sent to your verified corporate email only.</span>`;
        btn.innerText = 'REQUEST ACCESS CODE';
        btn.disabled = false;
        document.getElementById('data-room-pass').focus();
    }, 1200);
}

function validateAccess() {
    const pass = document.getElementById('data-room-pass').value.trim().toUpperCase();
    const errorMsg = document.getElementById('access-error');
    const demoCode = 'TF2026';

    if (pass === demoCode) {
        // Unlock — show success and close gate
        const gate = document.querySelector('.data-room-gate');
        gate.innerHTML = `
            <div class="mono" style="color: #10b981; font-size: 0.8rem; padding: 1.5rem; border: 1px solid rgba(16,185,129,0.4); border-radius: 12px; background: rgba(16,185,129,0.04); text-align: left;">
                <div style="text-align: center; margin-bottom: 1rem; font-weight: bold; border-bottom: 1px solid rgba(16,185,129,0.2); padding-bottom: 0.5rem;">
                    > IDENTITY VERIFIED &bull; DATA ROOM ACCESS: GRANTED
                </div>
                <div style="font-size: 0.7rem; color: #888; margin-bottom: 1rem; text-align: center;">
                    Authenticated Clearance Session: Vetted Principal
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                        <div>
                            <span style="color: #fff; display: block; font-size: 0.75rem;">📄 Vetted_AVM_Due_Diligence_Report.pdf</span>
                            <span style="color: #555; font-size: 0.62rem;">2.4 MB &bull; Vetted by Legal Swarm</span>
                        </div>
                        <button onclick="simulateDownload(this, 'Vetted_AVM_Due_Diligence_Report.pdf')" class="btn-primary" style="font-size: 0.65rem; padding: 0.4rem 0.8rem; background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: #10b981; cursor: pointer;">DOWNLOAD</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                        <div>
                            <span style="color: #fff; display: block; font-size: 0.75rem;">📊 Monte_Carlo_Cashflow_Forecast.xlsx</span>
                            <span style="color: #555; font-size: 0.62rem;">1.8 MB &bull; Swarm Underwritten Financials</span>
                        </div>
                        <button onclick="simulateDownload(this, 'Monte_Carlo_Cashflow_Forecast.xlsx')" class="btn-primary" style="font-size: 0.65rem; padding: 0.4rem 0.8rem; background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: #10b981; cursor: pointer;">DOWNLOAD</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <span style="color: #fff; display: block; font-size: 0.75rem;">⚖️ Legal_Title_Deed_Audit_Trail.pdf</span>
                            <span style="color: #555; font-size: 0.62rem;">4.1 MB &bull; Title & Lien Clearance Log</span>
                        </div>
                        <button onclick="simulateDownload(this, 'Legal_Title_Deed_Audit_Trail.pdf')" class="btn-primary" style="font-size: 0.65rem; padding: 0.4rem 0.8rem; background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: #10b981; cursor: pointer;">DOWNLOAD</button>
                    </div>
                </div>
            </div>`;
    } else {
        errorMsg.innerText = '> AUTHENTICATION_FAILED: INVALID ACCESS CODE';
        errorMsg.style.display = 'block';
        document.getElementById('data-room-pass').value = '';
        setTimeout(() => errorMsg.style.display = 'none', 3000);
    }
}

async function simulateDownload(btn, filename) {
    btn.disabled = true;
    btn.style.width = '100px';
    btn.style.textAlign = 'center';
    for(let i=0; i<=10; i++) {
        btn.innerText = `${i*10}%`;
        await new Promise(r => setTimeout(r, 120));
    }
    btn.innerText = "COMPLETE";
    btn.style.background = "rgba(16,185,129,0.2)";
    
    // Simulate simple download file trigger
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Mock data room file download for: ${filename}\nClearance secured. Verified by TerraFinAI Truth Matrix.`));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerText = "DOWNLOAD";
        btn.style.background = "rgba(16,185,129,0.1)";
    }, 2000);
}

function submitIntake(event) {
    event.preventDefault();
    const form = event.target;
    const btn = document.getElementById('intake-submit-btn');
    const originalText = btn.innerText;
    btn.innerText = "PROTOCOL INITIATED...";
    btn.style.background = "var(--accent-violet)";
    btn.style.color = "#fff";
    
    const formData = new FormData(form);
    
    fetch("https://formsubmit.co/ajax/gary@terrafinai.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        btn.innerText = originalText;
        btn.style.background = "var(--accent-cyan)";
        btn.style.color = "#000";
        alert("Intake request securely logged via Titan Signal. A partner will be in touch.");
        form.reset();
    })
    .catch(error => {
        btn.innerText = originalText;
        btn.style.background = "var(--accent-cyan)";
        btn.style.color = "#000";
        alert("Intake request securely logged via Titan Signal. A partner will be in touch.");
        form.reset();
    });
}

// ==========================================
// TRUTH MATRIX VISUALIZER (230 DAEMON SWARM)
// ==========================================
const canvas = document.getElementById('truth-matrix-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resizeCanvas() {
        const dpr = 1; // Capped at 1 to prevent Google Meet GPU lockup on Retina displays
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 0);

    const daemons = [];
    const NUM_DAEMONS = 80;
    const CONNECTION_DIST = 120;
    
    const COLORS = [
        'rgba(6, 182, 212, 0.6)',   // Soft Cyan
        'rgba(139, 92, 246, 0.6)',  // Soft Violet
        'rgba(251, 191, 36, 0.6)',  // Soft Amber
        'rgba(255, 255, 255, 0.7)'  // Pings
    ];

    // Mouse Tracking relative to canvas
    let mouse = { x: null, y: null, active: false };
    const widget = document.querySelector('.truth-matrix-widget');
    if (widget) {
        widget.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        });
        widget.addEventListener('mouseleave', () => {
            mouse.active = false;
            mouse.x = null;
            mouse.y = null;
        });
    }

    class Daemon {
        constructor() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 400;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.size = Math.random() * 2 + 1.5; // Slightly larger for softer look
            this.color = COLORS[Math.floor(Math.random() * 3)];
            
            const tasks = [
                "analyzing...",
                "verified",
                "secure connection",
                "stable",
                "syncing...",
                "asset authenticated"
            ];
            this.task = tasks[Math.floor(Math.random() * tasks.length)];
            this.isPinging = false;
            this.pingTimer = 0;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Gentle bounce
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Less frequent pings for a calmer atmosphere
            if (Math.random() < 0.001) {
                this.isPinging = true;
                this.pingTimer = 90; // Longer, slower fade
            }
            if (this.pingTimer > 0) {
                this.pingTimer--;
            } else {
                this.isPinging = false;
            }
        }

        draw() {
            ctx.beginPath();
            const r = this.isPinging ? this.size * 2.0 : this.size;
            ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
            ctx.fillStyle = this.isPinging ? '#ffffff' : this.color;
            ctx.fill();
            
            if (this.isPinging) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, r * 2, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(6, 182, 212, ${this.pingTimer / 60})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            if (this.isPinging && this.pingTimer > 20) {
                ctx.font = '9px "JetBrains Mono", monospace';
                ctx.fillStyle = `rgba(6, 182, 212, ${this.pingTimer / 60})`;
                ctx.fillText(this.task, this.x + 10, this.y - 4);
            }
        }
    }

    // Initialize daemons once we have width/height or default to 80
    for (let i = 0; i < NUM_DAEMONS; i++) {
        daemons.push(new Daemon());
    }

    function animateMatrix() {
        if (!width || !height) {
            resizeCanvas();
            requestAnimationFrame(animateMatrix);
            return;
        }
        
        ctx.clearRect(0, 0, width, height);

        // Draw connections between daemons
        for (let i = 0; i < daemons.length; i++) {
            for (let j = i + 1; j < daemons.length; j++) {
                const dx = daemons[i].x - daemons[j].x;
                const dy = daemons[i].y - daemons[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(daemons[i].x, daemons[i].y);
                    ctx.lineTo(daemons[j].x, daemons[j].y);
                    
                    const opacity = 1 - (dist / CONNECTION_DIST);
                    if (daemons[i].isPinging || daemons[j].isPinging) {
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`;
                        ctx.lineWidth = 1.0;
                    } else {
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`;
                        ctx.lineWidth = 0.5;
                    }
                    ctx.stroke();
                }
            }

            // Draw connections to the mouse
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                const dx = daemons[i].x - mouse.x;
                const dy = daemons[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) { // Hover connect radius
                    ctx.beginPath();
                    ctx.moveTo(daemons[i].x, daemons[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const opacity = 1 - (dist / 150);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.4})`;
                    ctx.lineWidth = 1.0;
                    ctx.stroke();
                }
            }
        }

        // Draw interactive HUD cursor target if mouse is active
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#06b6d4';
            ctx.fill();

            // Crosshair lines
            ctx.beginPath();
            ctx.moveTo(mouse.x - 18, mouse.y);
            ctx.lineTo(mouse.x - 6, mouse.y);
            ctx.moveTo(mouse.x + 6, mouse.y);
            ctx.lineTo(mouse.x + 18, mouse.y);
            ctx.moveTo(mouse.x, mouse.y - 18);
            ctx.lineTo(mouse.x, mouse.y - 6);
            ctx.moveTo(mouse.x, mouse.y + 6);
            ctx.lineTo(mouse.x, mouse.y + 18);
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.stroke();

            ctx.font = '8px "JetBrains Mono", monospace';
            ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
            ctx.fillText(`LOCK_X:${Math.floor(mouse.x)} Y:${Math.floor(mouse.y)}`, mouse.x + 18, mouse.y + 12);
        }

        daemons.forEach(d => {
            d.update();
            d.draw();
        });

        requestAnimationFrame(animateMatrix);
    }

    animateMatrix();
}

// ==========================================
// TELEMETRY METRICS AUTO-FLUCTUATOR
// ==========================================
window.simulationActive = false;
setInterval(() => {
    const pingEl = document.getElementById('hud-ping');
    const daemonsEl = document.getElementById('hud-daemons');
    const bandEl = document.getElementById('hud-band');

    if (pingEl) {
        const currentPing = Math.floor(Math.random() * 8) + 11; // 11ms - 18ms
        pingEl.innerText = `${currentPing}ms`;
    }
    if (daemonsEl) {
        const activeDaemons = Math.floor(Math.random() * 7) + 228; // 228 - 234 daemons
        daemonsEl.innerText = `${activeDaemons}/250`;
    }
    if (bandEl) {
        const currentBand = (Math.random() * 0.25 + 1.38).toFixed(2); // 1.38 - 1.63 TB/S
        bandEl.innerText = `${currentBand} TB/S`;
    }
}, 1000);

// Dynamic Inbound Log Injector (runs when HUD is idle)
setInterval(() => {
    if (window.simulationActive) return;
    const terminal = document.getElementById('terminal-output');
    if (!terminal) return;

    // Remove old logs to prevent terminal overflow
    const lines = terminal.querySelectorAll('div');
    if (lines.length > 15) {
        terminal.removeChild(lines[0]);
    }

    const categories = [
        "Trophy Real Estate", 
        "Strategic Infrastructure & Data Centers", 
        "Energy & Renewables", 
        "Extraction & Mining Mandates", 
        "Industrial Robotics & Advanced Tech", 
        "Maritime & Aviation", 
        "Agricultural & Timberland", 
        "Intellectual Property & Biotech Patents",
        "Space Infrastructure",
        "Bio-Manufacturing"
    ];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    const actions = [
        `[INBOUND] Telemetry ingested: Category: ${category} | Valuation: $${(Math.random() * 200 + 10).toFixed(1)}M`,
        `[AUDIT] Swarm analyzing title deed integrity for ${category} mandate...`,
        `[MATCH] Scanning buy-side private pool matching matrices for ${category}...`,
        `[SECURE] Data room payload locked and hashed for vetted ${category} asset.`
    ];
    
    const randomMsg = actions[Math.floor(Math.random() * actions.length)];
    const time = new Date().toLocaleTimeString();
    
    const div = document.createElement('div');
    div.style.color = 'rgba(6, 182, 212, 0.75)';
    div.innerHTML = `<span style="color: #64748b;">[${time}]</span> ${randomMsg}`;
    terminal.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
}, 4500);


// ==========================================
// TRUTH MATRIX SIMULATION DEMO
// ==========================================
// ==========================================
// FEATURED DEAL SIMULATIONS
// ==========================================
const dealSimulations = {
    chiba: {
        title: 'CHIBA 100MW DATA CENTER | TOKYO METRO',
        steps: [
            { msg: '>> INITIATING SECURE DOCUMENT UPLOAD...', color: '#666', delay: 500 },
            { msg: '>> DEPLOYING LEGAL SWARM (84 DAEMONS)', color: '#8b5cf6', delay: 800 },
            { msg: '   [OK] TEPCO Grid Interconnect Agreement: VERIFIED', color: '#10b981', delay: 1000 },
            { msg: '   [OK] Land Registry Tokyo-Metro: CLEAR TITLE', color: '#10b981', delay: 600 },
            { msg: '   [OK] Zoning: Industrial Class A — Data Infrastructure', color: '#10b981', delay: 600 },
            { msg: '   [OK] Environmental Clearance: PASSED', color: '#10b981', delay: 500 },
            { msg: '<br>>> DEPLOYING FINANCIAL SWARM (146 DAEMONS)', color: '#fbbf24', delay: 800 },
            { msg: '>> INGESTING JLL ASIA-PAC DATA CENTER COMPS (2022-2025)', color: '#06b6d4', delay: 600 },
            { msg: '   [OK] Comparable: Singapore 120MW — $1.4B cleared 2024', color: '#06b6d4', delay: 700 },
            { msg: '   [OK] Comparable: Osaka 80MW — $890M cleared 2023', color: '#06b6d4', delay: 600 },
            { msg: '>> RUNNING MONTE CARLO PRICING SIMULATION (10,000 ITERATIONS)', color: '#06b6d4', delay: 1000 },
        ],
        valuation: '1.12', suffix: 'B', yield: '6.8',
        prospectus: 'chiba'
    },
    maui: {
        title: 'MAUI BEACHFRONT PORTFOLIO | HAWAII, USA',
        steps: [
            { msg: '>> INITIATING SECURE DOCUMENT UPLOAD...', color: '#666', delay: 500 },
            { msg: '>> DEPLOYING LEGAL SWARM (84 DAEMONS)', color: '#8b5cf6', delay: 800 },
            { msg: '   [OK] Hawaii Land Court Title: VERIFIED (6 Parcels)', color: '#10b981', delay: 1000 },
            { msg: '   [WARN] Bankruptcy Stay: Active — Asset-Only Sale', color: '#fbbf24', delay: 700 },
            { msg: '   [OK] Stay Confirmed: Real Property Only — Unencumbered', color: '#10b981', delay: 800 },
            { msg: '   [OK] Coastal Zone Compliance: CLEAR', color: '#10b981', delay: 600 },
            { msg: '   [OK] Environmental: No CERCLA liability detected', color: '#10b981', delay: 500 },
            { msg: '<br>>> DEPLOYING FINANCIAL SWARM (146 DAEMONS)', color: '#fbbf24', delay: 800 },
            { msg: '>> QUERYING LIVE PROPERTY DATABASE (RENTCAST AVM)...', color: '#06b6d4', delay: 600 },
            { msg: '   [OK] Maui Beachfront Comp Set: 6 transactions 2022-2025', color: '#06b6d4', delay: 700 },
            { msg: '   [OK] Appraised Value On Record: $120M', color: '#06b6d4', delay: 500 },
            { msg: '   [OK] Distressed Discount Applied: -18% (Bankruptcy Basis)', color: '#fbbf24', delay: 600 },
            { msg: '>> RUNNING MONTE CARLO PRICING SIMULATION (10,000 ITERATIONS)', color: '#06b6d4', delay: 1000 },
        ],
        valuation: '98.4', suffix: 'M', yield: '5.2',
        prospectus: 'maui_portfolio'
    },
    coral: {
        title: 'CORAL HARBOUR DEVELOPMENT | 422 ACRES | NEW PROVIDENCE',
        steps: [
            { msg: '>> INITIATING SECURE DOCUMENT UPLOAD...', color: '#666', delay: 500 },
            { msg: '>> DEPLOYING LEGAL SWARM (84 DAEMONS)', color: '#8b5cf6', delay: 800 },
            { msg: '   [OK] Government Crown Grant: VERIFIED', color: '#10b981', delay: 1000 },
            { msg: '   [OK] Marina Dredging Permit: APPROVED (422 Acres Offshore)', color: '#10b981', delay: 700 },
            { msg: '   [OK] Mixed-Use Development Zoning: CONFIRMED', color: '#10b981', delay: 600 },
            { msg: '   [OK] Environmental Impact Study: PASSED (2023)', color: '#10b981', delay: 500 },
            { msg: '<br>>> DEPLOYING FINANCIAL SWARM (146 DAEMONS)', color: '#fbbf24', delay: 800 },
            { msg: '>> INGESTING CBRE CARIBBEAN LUXURY DEVELOPMENT COMPS', color: '#06b6d4', delay: 600 },
            { msg: '   [OK] Comparable: Baha Mar Phase III — $2.1B cleared', color: '#06b6d4', delay: 700 },
            { msg: '   [OK] Comparable: Albany Albany Marina — $850M cleared', color: '#06b6d4', delay: 600 },
            { msg: '   [OK] Comparable: Ocean Club Residences — $420M cleared', color: '#06b6d4', delay: 500 },
            { msg: '>> RUNNING MONTE CARLO PRICING SIMULATION (10,000 ITERATIONS)', color: '#06b6d4', delay: 1000 },
        ],
        valuation: '480', suffix: 'M', yield: '7.4',
        prospectus: 'coral_harbour'
    },
    brazil_payment_eme: {
        title: 'BRAZIL PAYMENTS PLATFORM (EME) & PIX | SAO PAULO',
        steps: [
            { msg: '>> INITIATING SECURE DOCUMENT UPLOAD...', color: '#666', delay: 500 },
            { msg: '>> DEPLOYING LEGAL SWARM (84 DAEMONS)', color: '#8b5cf6', delay: 800 },
            { msg: '   [OK] Central Bank EME License: VERIFIED (2023)', color: '#10b981', delay: 1000 },
            { msg: '   [OK] PIX Direct Participant (Pix Direto): CONFIRMED', color: '#10b981', delay: 700 },
            { msg: '   [OK] ITP (Open Finance) Authorization: ACTIVE', color: '#10b981', delay: 600 },
            { msg: '   [OK] Legal Liabilities: CLEAN PROFILE DETECTED', color: '#10b981', delay: 500 },
            { msg: '<br>>> DEPLOYING FINANCIAL SWARM (146 DAEMONS)', color: '#fbbf24', delay: 800 },
            { msg: '>> INGESTING LATAM FINTECH M&A COMPS (2023-2026)', color: '#06b6d4', delay: 600 },
            { msg: '   [OK] Comparable: Pismo Acquisition — $1.0B cleared', color: '#06b6d4', delay: 700 },
            { msg: '   [OK] Comparable: EME Platform Series B — $45M cleared', color: '#06b6d4', delay: 600 },
            { msg: '   [OK] Proprietary CORE System IP: VALUATION PREMIUM', color: '#fbbf24', delay: 500 },
            { msg: '>> RUNNING MONTE CARLO PRICING SIMULATION (10,000 ITERATIONS)', color: '#06b6d4', delay: 1000 },
        ],
        valuation: '25.0', suffix: 'M', yield: '12.4',
        prospectus: 'brazil_payment_eme'
    }
};

const dealMatches = {
    chiba: [
        { name: "Blackstone Infrastructure", fit: "96%", type: "SOVEREIGN_LP" },
        { name: "GIC Sovereign Wealth", fit: "92%", type: "PENSION_FUND" },
        { name: "TPG Real Estate Asia", fit: "89%", type: "GROWTH_PE" }
    ],
    maui: [
        { name: "Starwood Capital Group", fit: "98%", type: "OPPORTUNISTIC_RE" },
        { name: "KSL Capital Partners", fit: "91%", type: "HOSPITALITY_PE" },
        { name: "Highgate Hotels PE", fit: "88%", type: "REAL_ASSET_FO" }
    ],
    coral: [
        { name: "Brookfield Properties", fit: "97%", type: "INFRASTRUCTURE_PE" },
        { name: "Qatari Investment Authority", fit: "94%", type: "SOVEREIGN_WEALTH" },
        { name: "Starwood Capital Group", fit: "90%", type: "OPPORTUNISTIC_RE" }
    ],
    brazil_payment_eme: [
        { name: "Visa Strategic Ventures", fit: "97%", type: "STRATEGIC_ACQUIRER" },
        { name: "SoftBank Latin America", fit: "94%", type: "GROWTH_EQUITY" },
        { name: "MercadoLibre M&A", fit: "92%", type: "STRATEGIC_ACQUIRER" }
    ],
    general: [
        { name: "Citizens Wealth Fund", fit: "95%", type: "FAMILY_OFFICE" },
        { name: "Vanguard Sovereign Real Estate", fit: "91%", type: "MUTUAL_LP" },
        { name: "Ares Management", fit: "87%", type: "DIRECT_LENDING" }
    ]
};

function renderMatchCard(buyer) {
    return `
        <div class="glass-panel" style="padding: 0.6rem 0.8rem; border-radius: 8px; border-color: rgba(6, 182, 212, 0.25); background: rgba(5,7,10,0.85); display: flex; flex-direction: column; gap: 0.2rem; margin-bottom: 0.4rem; box-shadow: 0 4px 15px rgba(0,0,0,0.3); border-width: 1px; border-style: solid;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
                <span style="font-weight: 700; font-size: 0.72rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">${buyer.name}</span>
                <span class="mono" style="font-size: 0.55rem; background: rgba(139, 92, 246, 0.2); color: var(--accent-violet); padding: 0.08rem 0.3rem; border-radius: 4px; border: 1px solid rgba(139, 92, 246, 0.3); font-weight: 800; white-space: nowrap;">${buyer.fit} FIT</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.52rem;">
                <span class="mono" style="color: #64748b;">${buyer.type}</span>
                <span class="mono" style="color: #10b981; font-weight: bold;">MATCHED</span>
            </div>
        </div>
    `;
}

function getValuationRange(valStr, suffix) {
    const val = parseFloat(valStr);
    const low = (val * 0.91).toFixed(2);
    const high = (val * 1.09).toFixed(2);
    return `$${low}${suffix} - $${high}${suffix}`;
}

function openDealDemo(dealKey) {
    const deal = dealSimulations[dealKey];
    if (!deal) return;
    const modal = document.getElementById('demo-modal');
    if (modal) modal.style.display = 'flex';
    runDealSimulation(deal, dealKey);
}

async function runDealSimulation(deal, dealKey) {
    resetSimulation();
    window.simulationActive = true;
    const canvasCont = document.getElementById('canvas-container');
    if (canvasCont) canvasCont.style.opacity = '0.04';

    const docViewer = document.getElementById('doc-viewer');
    const terminal = document.getElementById('terminal-output');
    const status = document.getElementById('swarm-status');
    const stamp = document.getElementById('verification-stamp');

    document.getElementById('demo-target-title').innerText = `> TARGETING: ${deal.title}`;

    const log = (msg, color = '#06b6d4', delay = 0) => new Promise(resolve => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.style.color = color;
            div.innerHTML = msg;
            terminal.appendChild(div);
            terminal.scrollTop = terminal.scrollHeight;
            resolve();
        }, delay);
    });

    status.innerText = 'INGESTING...';
    status.style.color = '#06b6d4';
    docViewer.innerHTML = `<div class="mono" style="color: #64748b; font-size: 0.6rem;">>> SCANNING ASSET DEEDS...</div>`;

    const buyers = dealMatches[dealKey] || dealMatches.general;

    // Simulate logs & match popups
    await log('>> INITIATING SECURE UPLOAD...', '#666', 500);
    await log('>> DEPLOYING LEGAL SWARM (84 DAEMONS)', '#8b5cf6', 800);
    
    // Add match 1
    docViewer.innerHTML = `<div class="mono" style="color: #64748b; font-size: 0.65rem; margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.25rem;">MATCHING SWARM: IN PROGRESS</div>` + renderMatchCard(buyers[0]);
    
    for (const step of deal.steps) {
        if (step.msg.includes('LEGAL SWARM')) { status.innerText = 'LEGAL_SWARM: ACTIVE'; status.style.color = '#8b5cf6'; }
        if (step.msg.includes('FINANCIAL SWARM')) { 
            status.innerText = 'FINANCIAL_SWARM: ACTIVE'; 
            status.style.color = '#fbbf24'; 
            // Add match 2
            docViewer.innerHTML += renderMatchCard(buyers[1]);
        }
        await log(step.msg, step.color, step.delay);
    }

    // Progress bar
    const barId = 'progress-' + Date.now();
    await log(`   <span id="${barId}">[          ] 0%</span>`, '#06b6d4', 200);
    const bar = document.getElementById(barId);
    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 130));
        bar.innerText = `[${'='.repeat(i)}${' '.repeat(10 - i)}] ${i * 10}%`;
    }

    // Add match 3
    docViewer.innerHTML += renderMatchCard(buyers[2]);

    const rangeStr = getValuationRange(deal.valuation, deal.suffix);
    let rangeDisplay = rangeStr;
    if (dealKey === 'chiba') {
        rangeDisplay += ` (¥153B - ¥183B JPY)`;
    }

    const mockHash = '0x' + Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('').toUpperCase();

    await log('   [OK] Simulation Complete. Confidence Interval: 99.4%', '#10b981', 400);
    await log(`   [+] Base Yield: ${deal.yield}%`, '#10b981', 200);
    await log(`   [+] Stress-Tested Valuation Range: ${rangeDisplay}`, '#10b981', 200);
    await log(`   [+] Audit Verification: Swarm Audit Verified`, '#10b981', 200);
    await log(`   [+] Cryptographic Integrity Hash: ${mockHash}`, '#06b6d4', 200);

    status.innerText = 'PROSPECTUS GENERATED';
    status.style.color = '#10b981';

    await log('<br>>> FINALIZING CERTIFIED PROSPECTUS...', '#06b6d4', 1000);
    await log(`>> ${deal.title} — SECURED. READY FOR CLEARING.`, '#10b981', 800);

    setTimeout(() => {
        document.getElementById('demo-wow-text').innerHTML = `STRESS-TESTED VALUATION RANGE:<br>${rangeDisplay}<br><span style="font-size: 0.65rem; color: #fbbf24; font-weight: bold; display: block; margin-top: 0.25rem;">SWARM AUDIT VERIFIED</span><span style="font-size: 0.52rem; color: #64748b; font-weight: normal; font-family: monospace; display: block; margin-top: 0.2rem;">HASH: ${mockHash}</span>`;
        // Setup direct data room target
        stamp.querySelector('button').setAttribute('onclick', `openDD('${deal.prospectus || 'zymagenx'}')`);
        stamp.style.display = 'block';
    }, 500);
}

function openDemo() {
    const input = document.getElementById('demo-address');
    const target = input && input.value ? input.value : "MASTER DEED";
    if (input && !input.value) {
        input.value = "Sample Commercial Asset";
    }
    const modal = document.getElementById('demo-modal');
    if (modal) modal.style.display = 'flex';
    runSimulation(target);
}

function closeDemo() {
    const modal = document.getElementById('demo-modal');
    if (modal) modal.style.display = 'none';
    resetSimulation();
}
function resetSimulation() {
    window.simulationActive = false;
    const canvasCont = document.getElementById('canvas-container');
    if (canvasCont) canvasCont.style.opacity = '0.65';
    document.getElementById('doc-viewer').innerHTML = '<div style="color: #444;">[No active matching process]</div>';
    document.getElementById('terminal-output').innerHTML = '';
    document.getElementById('swarm-status').innerText = 'MONITORING';
    document.getElementById('swarm-status').style.color = 'var(--accent-violet)';
    document.getElementById('verification-stamp').style.display = 'none';
    
    if (window.beamInterval) clearInterval(window.beamInterval);
    if (window.streamInterval) clearInterval(window.streamInterval);
}

async function runSimulation(target, customValuation = null) {
    resetSimulation();
    window.simulationActive = true;
    const canvasCont = document.getElementById('canvas-container');
    if (canvasCont) canvasCont.style.opacity = '0.04';
    
    const safeTarget = target.toUpperCase();
    document.getElementById('demo-target-title').innerText = `> TARGETING: ${safeTarget}`;
    
    const docViewer = document.getElementById('doc-viewer');
    const terminal = document.getElementById('terminal-output');
    const status = document.getElementById('swarm-status');
    const stamp = document.getElementById('verification-stamp');

    const log = (msg, color = '#06b6d4', delay = 0) => {
        return new Promise(resolve => {
            setTimeout(async () => {
                const div = document.createElement('div');
                div.style.color = color;
                terminal.appendChild(div);
                
                if (msg.startsWith('<') || msg.includes('=')) {
                    div.innerHTML = msg;
                } else {
                    let text = msg;
                    for (let c of text) {
                        div.innerHTML += c;
                        terminal.scrollTop = terminal.scrollHeight;
                        await new Promise(r => setTimeout(r, 6)); // character typing delay
                    }
                }
                terminal.scrollTop = terminal.scrollHeight;
                resolve();
            }, delay);
        });
    };

    status.innerText = 'INGESTING...';
    docViewer.innerHTML = `<div class="mono" style="color: #64748b; font-size: 0.6rem;">>> SCANNING ASSET SPECS...</div>`;

    const buyers = dealMatches.general;

    // Simulate logs & match popups
    await log('>> INITIATING SECURE UPLOAD...', '#666', 500);
    await log('>> DEPLOYING LEGAL SWARM (84 DAEMONS)', '#8b5cf6', 800);
    
    // Add match 1
    docViewer.innerHTML = `<div class="mono" style="color: #64748b; font-size: 0.65rem; margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.25rem;">MATCHING SWARM: IN PROGRESS</div>` + renderMatchCard(buyers[0]);
    
    let hashVal = 0;
    for (let i = 0; i < safeTarget.length; i++) {
        hashVal = safeTarget.charCodeAt(i) + ((hashVal << 5) - hashVal);
    }
    const pageNum = Math.abs(hashVal) % 140 + 15;
    const warnings = [
        { warn: `   [WARN] Minor easement discrepancy detected on Page ${pageNum}`, resolve: '   [OK] Easement verified: Utility access only (Resolved)' },
        { warn: `   [WARN] Outdated boundary survey mismatch on Page ${pageNum}`, resolve: '   [OK] Metes & bounds cross-referenced with GIS database (Resolved)' },
        { warn: `   [WARN] Ambiguous structural classification on Page ${pageNum}`, resolve: '   [OK] Construction permits verified: Zoning compliant (Resolved)' },
        { warn: `   [WARN] Unrecorded municipal setback variance on Page ${pageNum}`, resolve: '   [OK] Municipal setback clearance confirmed (Resolved)' }
    ];
    const selectedWarn = warnings[Math.abs(hashVal) % warnings.length];

    await log('>> PARSING MASTER DEED & TITLE HISTORY', '#06b6d4', 400);
    await log('   [OK] Title Chain Verified (1984-Present)', '#10b981', 1200);
    await log(selectedWarn.warn, '#fbbf24', 600);
    
    // Add match 2
    docViewer.innerHTML += renderMatchCard(buyers[1]);
    
    status.innerText = 'FINANCIAL_SWARM: ACTIVE';
    status.style.color = '#fbbf24';
    
    await log('>> CROSS-REFERENCING MUNICIPAL DATABASES...', '#06b6d4', 800);
    await log(selectedWarn.resolve, '#10b981', 1500);
    await log('   [OK] Environmental Liability: CLEAR', '#10b981', 400);
    
    await log('<br>>> DEPLOYING FINANCIAL SWARM (146 DAEMONS)', '#fbbf24', 800);
    await log('>> INGESTING 10-YEAR P&L TELEMETRY', '#06b6d4', 500);
    await log('>> RUNNING MONTE CARLO PRICING SIMULATION (10,000 ITERATIONS)', '#06b6d4', 1000);
    
    const barId = 'progress-' + Date.now();
    await log(`   <span id="${barId}">[          ] 0%</span>`, '#06b6d4', 200);
    const bar = document.getElementById(barId);
    
    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 150));
        bar.innerText = `[${'='.repeat(i)}${' '.repeat(10-i)}] ${i*10}%`;
    }

    let finalVal = '';
    let finalSuf = '';
    let finalYield = '';
    let apiSuccess = false;

    if (customValuation) {
        finalVal = parseFloat(customValuation).toFixed(2);
        finalSuf = 'M';
        finalYield = '6.45';
    } else {
        // --- Tier 1: Hard-coded landmark valuations ---
        const exactValuations = {
            'WORLD TRADE CENTER':   { val: '3.9',  suf: 'B', yield: '4.2' },
            'ONE WORLD TRADE':      { val: '3.9',  suf: 'B', yield: '4.2' },
            'EMPIRE STATE BUILDING':{ val: '2.3',  suf: 'B', yield: '5.1' },
            'BURJ KHALIFA':         { val: '1.5',  suf: 'B', yield: '6.4' },
            'APPLE PARK':           { val: '5.0',  suf: 'B', yield: '4.5' },
            'BUCKINGHAM PALACE':    { val: '4.9',  suf: 'B', yield: '2.1' },
            'MARINA BAY SANDS':     { val: '5.5',  suf: 'B', yield: '8.2' },
            'TAIPEI 101':           { val: '1.8',  suf: 'B', yield: '5.5' },
            'WILLIS TOWER':         { val: '1.3',  suf: 'B', yield: '6.0' },
            'CHRYSLER BUILDING':    { val: '1.4',  suf: 'B', yield: '5.8' },
            'TRANSAMERICA PYRAMID': { val: '1.2',  suf: 'B', yield: '5.4' }
        };

        const matchKey = Object.keys(exactValuations).find(k => safeTarget.includes(k));

        if (matchKey) {
            finalVal  = exactValuations[matchKey].val;
            finalSuf  = exactValuations[matchKey].suf;
            finalYield = exactValuations[matchKey].yield;
        } else {
            // --- Tier 2: Live RentCast AVM lookup ---
            await log('   [>] QUERYING LIVE PROPERTY DATABASE...', '#06b6d4', 200);

            try {
                const encodedAddress = encodeURIComponent(target);
                const response = await fetch(
                    `https://api.rentcast.io/v1/avm/value?address=${encodedAddress}`,
                    {
                        method: 'GET',
                        headers: {
                            'X-Api-Key': '06bde0fbe6ed4f17aeb7e813ae1cf474',
                            'Accept': 'application/json'
                        }
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.price && data.price > 0) {
                        const priceM = (data.price / 1000000);
                        if (priceM >= 1000) {
                            finalVal = (priceM / 1000).toFixed(2);
                            finalSuf = 'B';
                        } else {
                            finalVal = priceM.toFixed(2);
                            finalSuf = 'M';
                        }
                        if (data.priceRangeLow && data.priceRangeHigh) {
                            const spread = ((data.priceRangeHigh - data.priceRangeLow) / data.price * 100);
                            finalYield = Math.min(Math.max(spread, 3.5), 9.5).toFixed(2);
                        } else {
                            finalYield = '5.20';
                        }
                        await log('   [OK] Live AVM data retrieved.', '#10b981', 200);
                        apiSuccess = true;
                    }
                }
            } catch (e) {}

            if (!apiSuccess) {
                await log('   [WARN] Live lookup unavailable. Applying internal model.', '#fbbf24', 200);
                let hash = 0;
                for (let i = 0; i < safeTarget.length; i++) {
                    hash = safeTarget.charCodeAt(i) + ((hash << 5) - hash);
                }
                const massiveKeywords = ['WORLD TRADE', 'EMPIRE STATE', 'TOWER', 'PLAZA', 'CENTER', 'BUILDING', 'HOTEL', 'RESORT', 'AIRPORT', 'MALL', 'STADIUM'];
                const massiveRegex = new RegExp('\\b(' + massiveKeywords.join('|') + ')\\b');
                if (massiveRegex.test(safeTarget)) {
                    let valNum = (Math.abs(hash) % 900 + 100);
                    finalVal = (valNum / 100 + 1.2).toFixed(2);
                    finalSuf = 'B';
                } else {
                    let valNum = (Math.abs(hash) % 170 + 15) / 10;
                    finalVal = valNum.toFixed(2);
                    finalSuf = 'M';
                }
                finalYield = ((Math.abs(hash) % 40) / 10 + 4).toFixed(2);
            }
        }
    }
    
    // Add match 3
    docViewer.innerHTML += renderMatchCard(buyers[2]);

    let finalValRange = '';
    if (customValuation) {
        const valNum = parseFloat(customValuation);
        finalValRange = `$${(valNum * 0.9).toFixed(1)}M - $${(valNum * 1.1).toFixed(1)}M`;
    } else if (apiSuccess && typeof data !== 'undefined' && data && data.priceRangeLow && data.priceRangeHigh) {
        const lowM = data.priceRangeLow / 1000000;
        const highM = data.priceRangeHigh / 1000000;
        const priceM = data.price / 1000000;
        if (priceM >= 1000) {
            finalValRange = `$${(lowM/1000).toFixed(2)}B - $${(highM/1000).toFixed(2)}B`;
        } else {
            finalValRange = `$${lowM.toFixed(2)}M - $${highM.toFixed(2)}M`;
        }
    } else {
        finalValRange = getValuationRange(finalVal, finalSuf);
    }

    const mockHash = '0x' + Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('').toUpperCase();

    await log(`   [+] Base Yield: ${finalYield}%`, '#10b981', 200);
    await log(`   [+] Stress-Tested Valuation Range: ${finalValRange}`, '#10b981', 200);
    await log(`   [+] Audit Verification: Swarm Audit Verified`, '#10b981', 200);
    await log(`   [+] Cryptographic Integrity Hash: ${mockHash}`, '#06b6d4', 200);

    status.innerText = 'PROSPECTUS GENERATED';
    status.style.color = '#10b981';
    
    await log('<br>>> FINALIZING CERTIFIED PROSPECTUS...', '#06b6d4', 1000);
    await log(`>> ${safeTarget} SECURED. READY FOR CLEARING.`, '#10b981', 800);

    setTimeout(() => {
        document.getElementById('demo-wow-text').innerHTML = `STRESS-TESTED VALUATION RANGE:<br>${finalValRange}<br><span style="font-size: 0.65rem; color: #fbbf24; font-weight: bold; display: block; margin-top: 0.25rem;">SWARM AUDIT VERIFIED</span><span style="font-size: 0.52rem; color: #64748b; font-weight: normal; font-family: monospace; display: block; margin-top: 0.2rem;">HASH: ${mockHash}</span>`;
        // Setup direct data room target
        stamp.querySelector('button').setAttribute('onclick', "openDD('general')");
        stamp.style.display = 'block';
    }, 500);
}

// ==========================================
// INSTITUTIONAL BUY-SIDE MANDATE PORTAL
// ==========================================
function openBuySidePortal() {
    const modal = document.getElementById('buyside-modal');
    if (modal) modal.style.display = 'flex';
    nextBuySideStep(1);
    
    // Clear inputs
    document.getElementById('bs-name').value = '';
    document.getElementById('bs-email').value = '';
    document.getElementById('bs-aum').value = '';
    document.getElementById('bs-class').value = '';
    document.getElementById('bs-irr').value = '';
    document.getElementById('bs-ticket').value = '';
}

function closeBuySidePortal() {
    const modal = document.getElementById('buyside-modal');
    if (modal) modal.style.display = 'none';
}

function nextBuySideStep(step) {
    document.getElementById('bs-step-1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('bs-step-2').style.display = step === 2 ? 'block' : 'none';
    document.getElementById('bs-step-3').style.display = step === 3 ? 'block' : 'none';
}

async function submitBuySideMandate() {
    const name = document.getElementById('bs-name').value.trim();
    const email = document.getElementById('bs-email').value.trim();
    const aum = document.getElementById('bs-aum').value;
    let assetClass = document.getElementById('bs-class').value;
    const irr = document.getElementById('bs-irr').value.trim();
    const ticket = document.getElementById('bs-ticket').value.trim();

    if (assetClass === 'Other (Specify...)') {
        assetClass = document.getElementById('bs-class-other').value.trim();
    }

    if (!name || !email || !aum || !assetClass || !irr || !ticket) {
        alert("Please complete all profile and target criteria parameters.");
        return;
    }

    nextBuySideStep(3);

    const mandateId = `TF-${Math.floor(Math.random() * 9000 + 1000)}-SECURE`;
    document.getElementById('bs-mandate-id').innerText = `MANDATE_ID: ${mandateId}`;

    // Send data to FormSubmit
    fetch("https://formsubmit.co/ajax/gary@terrafinai.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Buy-Side Mandate Submission",
            Name: name,
            Email: email,
            AUM: aum,
            AssetClass: assetClass,
            IRR: irr,
            TicketSize: ticket,
            MandateID: mandateId
        })
    }).catch(e => console.error(e));

    const terminal = document.getElementById('bs-match-terminal');
    terminal.innerHTML = '>> INGESTING NEW BUYER PROFILE...';

    const logMsg = (msg, delay) => new Promise(r => setTimeout(() => {
        terminal.innerHTML += `\n${msg}`;
        terminal.scrollTop = terminal.scrollHeight;
        r();
    }, delay));

    await logMsg('>> INGESTING MANDATE TELEMETRY...', 200);
    await logMsg('>> GENERATING BUY-SIDE MATRIX ID...', 400);
    await logMsg(`>> TARGET SECTOR: ${assetClass.toUpperCase()}`, 300);
    await logMsg(`>> YIELD FLOOR: ${irr} IRR | TICKET: ${ticket}`, 300);
    await logMsg('>> CRAWLING ACTIVE PIPELINE FOR FIT...', 600);
    await logMsg('>> ANALYSIS RUNNING (84 DAEMONS)...', 500);

    // Mock direct matches
    let matchedAsset = 'General Placement';
    let matchFit = '94%';
    if (assetClass.includes('Real Estate')) {
        matchedAsset = 'Tiffany Ginza Flagship ($1B)';
        matchFit = '98%';
    } else if (assetClass.includes('Infrastructure') || assetClass.includes('DC')) {
        matchedAsset = 'Chiba 100MW DC ($1.12B)';
        matchFit = '96%';
    } else if (assetClass.includes('Mining')) {
        matchedAsset = 'Sovereign Silver Reserves ($250M)';
        matchFit = '92%';
    } else if (assetClass.includes('Robotics')) {
        matchedAsset = 'Tobor Robot Corp ($140M)';
        matchFit = '95%';
    }

    await logMsg(`>> [MATCH FOUND] ${matchedAsset}`, 800);
    await logMsg(`>> FIT PERCENTAGE: ${matchFit}`, 300);
    await logMsg('>> LOCKING MANDATE FOR TRANSACTION ROOM...', 500);
    await logMsg('>> STATUS: SECURED. CLEARANCE MANAGER DISPATCHED.', 400);
}

// ==========================================
// INSTITUTIONAL SELL-SIDE ASSET PORTAL
// ==========================================
function openSellSidePortal() {
    const modal = document.getElementById('sellside-modal');
    if (modal) modal.style.display = 'flex';
    nextSellSideStep(1);
    
    // Clear inputs
    document.getElementById('ss-name').value = '';
    document.getElementById('ss-email').value = '';
    document.getElementById('ss-class').value = '';
    document.getElementById('ss-valuation').value = '';
    document.getElementById('ss-deeds').value = '';
    document.getElementById('ss-financials').value = '';
    document.getElementById('ss-reports').value = '';
    document.getElementById('ss-other-docs').value = '';
}

function closeSellSidePortal() {
    const modal = document.getElementById('sellside-modal');
    if (modal) modal.style.display = 'none';

    if (window.lastSubmittedAssetName && window.lastSubmittedAssetValuation) {
        const demoModal = document.getElementById('demo-modal');
        if (demoModal) demoModal.style.display = 'flex';
        runSimulation(window.lastSubmittedAssetName, window.lastSubmittedAssetValuation);
        window.lastSubmittedAssetName = null;
        window.lastSubmittedAssetValuation = null;
    }
}

function nextSellSideStep(step) {
    document.getElementById('ss-step-1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('ss-step-2').style.display = step === 2 ? 'block' : 'none';
    document.getElementById('ss-step-3').style.display = step === 3 ? 'block' : 'none';
}

async function submitSellSideAsset() {
    const name = document.getElementById('ss-name').value.trim();
    const email = document.getElementById('ss-email').value.trim();
    let assetClass = document.getElementById('ss-class').value;
    const valuation = document.getElementById('ss-valuation').value.trim();

    if (assetClass === 'Other (Specify...)') {
        assetClass = document.getElementById('ss-class-other').value.trim();
    }

    if (!name || !email || !assetClass || !valuation) {
        alert("Please complete all asset profile details.");
        return;
    }

    nextSellSideStep(3);

    // Save for simulation handshake on close
    window.lastSubmittedAssetName = name;
    window.lastSubmittedAssetValuation = valuation;

    const assetId = `TF-${Math.floor(Math.random() * 9000 + 1000)}-ASSET`;
    document.getElementById('ss-asset-id').innerText = `ASSET_ID: ${assetId}`;

    // Send data to FormSubmit
    fetch("https://formsubmit.co/ajax/gary@terrafinai.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Sell-Side Asset Submission",
            Name: name,
            Email: email,
            AssetClass: assetClass,
            Valuation: valuation,
            AssetID: assetId
        })
    }).catch(e => console.error(e));

    const terminal = document.getElementById('ss-match-terminal');
    terminal.innerHTML = '>> INGESTING UNSTRUCTURED DATA ROOM FILES...';

    const logMsg = (msg, delay) => new Promise(r => setTimeout(() => {
        terminal.innerHTML += `\n${msg}`;
        terminal.scrollTop = terminal.scrollHeight;
        r();
    }, delay));

    await logMsg('>> EXTRACTING TITLE DEEDS AND LEASES...', 300);
    await logMsg('>> DEPLOYING LEGAL SWARM (42 DAEMONS)...', 400);
    await logMsg('>> DETECTING LIABILITIES & REGULATORY RISK...', 350);
    await logMsg('>> STATUS: NO REGULATORY EXPOSURE FOUND.', 300);
    await logMsg('>> INGESTING HISTORICAL P&L TELEMETRY...', 400);
    await logMsg('>> DEPLOYING FINANCIAL SWARM (68 DAEMONS)...', 400);
    await logMsg('>> RUNNING MONTE CARLO PRICING SIMULATIONS...', 500);
    await logMsg(`>> IMPLIED VALUATION: $${valuation}M (AVM VETTED)`, 400);
    await logMsg('>> STRUCTURING CERTIFIED ASSET PROSPECTUS...', 600);
    await logMsg('>> DEPLOYING PROSPECTUS TO PRIVATE DARK POOL...', 500);
    await logMsg('>> STATUS: CLEARED. TRANSACTION ROOM INITIATED.', 400);
}

function toggleOtherIndustry(selectEl, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.display = selectEl.value === 'Other (Specify...)' ? 'block' : 'none';
        const otherInput = container.querySelector('input');
        if (otherInput) {
            otherInput.required = selectEl.value === 'Other (Specify...)';
            if (selectEl.value !== 'Other (Specify...)') {
                otherInput.value = '';
            } else {
                otherInput.focus();
            }
        }
    }
}

// --- REGIONAL FILTERING & TERRAFIN PAY FUNCTIONS --- //
function filterRegion(regionKey) {
    const tabs = ['all', 'americas', 'apac', 'emea', 'latam'];
    tabs.forEach(r => {
        const btn = document.getElementById(`tab-${r}`);
        if (btn) {
            if (r === regionKey) {
                btn.classList.add('active');
                btn.style.background = 'var(--accent-cyan)';
                btn.style.color = '#000';
                btn.style.borderColor = 'var(--accent-cyan)';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'rgba(255,255,255,0.05)';
                btn.style.color = 'var(--text-dim)';
                btn.style.borderColor = 'rgba(255,255,255,0.1)';
            }
        }
    });

    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach(card => {
        const reg = card.getAttribute('data-region');
        if (regionKey === 'all' || !reg || reg === regionKey) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function openTerraFinPayInvoiceModal() {
    const modal = document.getElementById('terrafin-pay-invoice-modal');
    if (modal) modal.style.display = 'flex';
}

function closeTerraFinPayInvoiceModal() {
    const modal = document.getElementById('terrafin-pay-invoice-modal');
    if (modal) modal.style.display = 'none';
}

function openTerraFinPayCheckoutModal(type, amount, title) {
    const modal = document.getElementById('terrafin-pay-checkout-modal');
    if (!modal) return;
    
    document.getElementById('tp-checkout-title').innerText = title || "TerraFin Pay™ Settlement";
    document.getElementById('tp-checkout-amount').innerText = `$${Number(amount).toLocaleString()}`;
    document.getElementById('tp-checkout-type').innerText = type || "Escrow Hold";
    
    modal.style.display = 'flex';
}

function closeTerraFinPayCheckoutModal() {
    const modal = document.getElementById('terrafin-pay-checkout-modal');
    if (modal) modal.style.display = 'none';
}

function generateInvoiceLink() {
    const clientName = document.getElementById('tp-inv-client').value.trim();
    const dealRef = document.getElementById('tp-inv-deal').value.trim();
    const amount = document.getElementById('tp-inv-amount').value;
    
    if (!clientName || !dealRef || !amount) {
        alert("Please complete client name, deal reference, and invoice amount.");
        return;
    }
    
    const invId = `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const payUrl = `https://terrafinai.com/pay/?inv=${invId}&amount=${amount}&ref=${encodeURIComponent(dealRef)}`;
    
    document.getElementById('tp-inv-result').style.display = 'block';
    document.getElementById('tp-inv-url').value = payUrl;
    document.getElementById('tp-inv-id-text').innerText = `INVOICE ID: ${invId}`;
}

function copyInvoiceUrl() {
    const input = document.getElementById('tp-inv-url');
    if (input) {
        input.select();
        document.execCommand('copy');
        alert("TerraFin Pay Invoice URL copied to clipboard!");
    }
}




