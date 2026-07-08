const projects = [
  {
    title: "Mechanical Petanque Player",
    year: "Semester 1 / 2023-2024",
    category: "Design",
    summary: "Semester 1 design project to analyse, design, manufacture, test, and present a fully mechanical petanque-playing machine with a circular base, rod frame, ball holder, and release mechanism.",
    tools: ["Problem Analysis", "Concept Selection", "Mechanical Analysis", "Technical Drawings", "Laser Cutting", "Milling", "Arc Welding", "Workshop Prototype"],
    challenge: "Analyse the design problem, generate and justify concepts, develop the chosen concept into a detailed manufacturable design, and turn self-made drawings into a safe, transportable machine using available workshop processes.",
    outcome: "Produced the project report, presentation, exam preparation, drawings, workshop planning, load and deformation reasoning, production-process choices, and final prototype. Manufactured the base plates, legs, supports, holder parts, stopping holes, and protective finish, tested the final machine, and reached the top 3 out of 12 teams in the competition.",
    art: "petanque"
  },
  {
    title: "Energy Transition and Sustainability",
    year: "Semester 2 Blocks 4-6 / 2024",
    category: "Energy",
    summary: "Two-stage regional energy project: first analysing the current energy system of Twente, then redesigning it with renewable technologies, waste-to-energy concepts, system integration, and LCA.",
    tools: ["Thermodynamics", "MATLAB XSteam", "Renewable Energy", "LCA", "System Analysis"],
    challenge: "Use thermodynamics, sustainability analysis, academic reporting, and system modelling to understand the current regional energy system and propose a more sustainable redesign.",
    outcome: "Connected stakeholder and demand analysis with power-plant thermodynamics, then used those results to develop redesign concepts, compare options, and support recommendations with life-cycle thinking.",
    parts: [
      {
        label: "Stage 1 / Block 4",
        title: "Analysis of the Energy System of Twente",
        summary: "Mapped stakeholders, power plants, heat demand, load curves, boiler installations, heat deficits, and system efficiencies.",
        outcome: "Analysed energy flows and thermal power generation using T-s and h-s diagrams, MATLAB XSteam, and efficiency calculations."
      },
      {
        label: "Stage 2 / Blocks 5-6",
        title: "Redesign of the Energy System of Twente",
        summary: "Improved the regional energy-system concept with renewable energy technologies, waste classification, waste-to-energy reasoning, and system integration.",
        outcome: "Compared design options, selected an improved concept, and applied LCA thinking to evaluate sustainability indicators."
      }
    ],
    art: "renewables"
  },
  {
    title: "Smart Manufacturing Systems",
    year: "Semester 3 / 2024-2025",
    category: "Manufacturing",
    summary: "Semester 3 manufacturing sequence combining drone-frame product design, polymer manufacturing, mold/process simulation, experimental skills, and a FAB2 learning-factory assembly line.",
    tools: ["SolidWorks CAM", "Moldex3D", "Injection Moulding", "Visual Components", "Production Line Design"],
    role: "Project leader",
    challenge: "Develop a manufacturable drone-frame product and then translate drone assembly into a smart manufacturing line with station flow, time-study data, cost awareness, and future-state improvements.",
    outcome: "Generated and refined a lightweight drone-frame concept, simulated manufacturing processes, and led the project work around planning, task division, assembly workflow, and smart manufacturing decisions.",
    parts: [
      {
        label: "Product and Process Design",
        title: "Smart Manufacturing Drone Frame",
        summary: "Designed a high-performance polymer quadcopter frame under mass, size, thickness, deformation, and manufacturability constraints.",
        outcome: "Moved from concepts to a selected design, using 3D-printed prototyping, injection moulding reasoning, Moldex3D, and CNC/mould process simulation."
      },
      {
        label: "Experimental Skills",
        title: "Measurement Planning and Lab Work",
        summary: "Embedded experimental-skills work covering research questions, measurement planning, lab execution, analysis, and conclusions.",
        outcome: "Built experience with scientific experiment planning, data quality, result analysis, and communicating conclusions."
      },
      {
        label: "Learning Factory",
        title: "Drone Assembly Manufacturing Line",
        summary: "Analysed current-state drone assembly in FAB2, including workstations, time study, value-stream mapping, costs, bottlenecks, and customization constraints.",
        outcome: "Developed future-state production-line decisions and assembly workflow improvements for a smart manufacturing context."
      }
    ],
    art: "assemblyLine"
  },
  {
    title: "Technology for Healthcare",
    year: "Semester 4 / 2025",
    category: "Healthcare",
    summary: "Healthcare-technology project focused on designing a tendon-driven surgical manipulator for minimally invasive surgery.",
    tools: ["FEM", "Precision Engineering", "3D Printing", "Patent Research", "Stiffness Testing"],
    challenge: "Apply mechanical design, precision engineering, modelling, and experimental validation to a healthcare-oriented surgical device.",
    outcome: "Connected patent research, compliant mechanism design, FEM, prototyping, and stiffness-testing preparation for a compact tendon-driven manipulator.",
    /*// Hidden parts entries:
    // parts: [
    //   {
    //     label: "Part A",
    //     title: "Tendon-Driven Surgical Manipulator",
    //     summary: "Designed a compact cable-driven robotic manipulator concept for minimally invasive surgery within strict length, diameter, stiffness, and safety constraints.",
    //     outcome: "Combined patent research, compliant mechanism design, finite-element analysis, prototyping, and stiffness-testing preparation."
    //   },
    //   {
    //     label: "Part B",
    //     title: "Flexure-Based Motion Stage Control",
    //     summary: "Modelled a precision flexure-based motion stage, estimated dynamic behaviour, and designed a controller for implementation and validation.",
    //     outcome: "Worked through step and sine tests, frequency-response estimation, uncertainty modelling, controller design, discretization, simulation, and validation."
    //   }
    // ],*/
    art: "surgical"
  },
  {
    title: "Small-Scale Wind Tunnel Design and Analysis",
    year: "Semester 6 / 2026",
    category: "Fluids",
    summary: "A fluid flow and heat-transfer project to design, build, and characterise a miniature wind tunnel for cooling heated metal cylinders.",
    tools: ["Fluid Mechanics", "Heat Transfer", "Prototype Testing"],
    challenge: "Create a small-scale wind tunnel, predict the empty-tunnel flow profile, measure velocity distributions, and study how an object changes the airflow.",
    outcome: "Built and tested a wind tunnel setup, compared measured flow profiles with theoretical expectations, and analysed convective cooling behaviour for aluminium and copper cylinders.",
    art: "windTunnel"
  }
];

const grid = document.querySelector("#project-grid");
const detail = document.querySelector("#project-detail");
const filters = document.querySelectorAll(".filter");
const count = document.querySelector("#project-count");

let activeFilter = "All";
let selectedProject = projects[0];

function getProjectCategories(project) {
  return Array.isArray(project.category) ? project.category : [project.category];
}

function getProjectCategoryLabel(project) {
  return getProjectCategories(project).join(" / ");
}

function projectMatchesFilter(project, filter) {
  return filter === "All" || getProjectCategories(project).includes(filter);
}

const artTemplates = {
  petanque: `<svg viewBox="0 0 420 190" aria-hidden="true"><path d="M34 166h352" stroke="#d7dde1" stroke-width="4"/><ellipse cx="210" cy="152" rx="124" ry="30" fill="#f3b5c8" stroke="#c94f8b" stroke-width="7"/><ellipse cx="210" cy="152" rx="70" ry="15" fill="#fbfaf7" stroke="#c94f8b" stroke-width="4"/><path d="M210 30 104 152M210 30l106 122M210 30v120" fill="none" stroke="#172027" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M138 100h144" stroke="#49646f" stroke-width="8" stroke-linecap="round"/><rect x="186" y="76" width="48" height="26" rx="5" fill="#f3b5c8" stroke="#c94f8b" stroke-width="5"/><circle cx="210" cy="118" r="13" fill="#fff" stroke="#2e6f5f" stroke-width="5"/><circle cx="312" cy="146" r="12" fill="#c94f2d"/></svg>`,
  powerplant: `<svg viewBox="0 0 420 150" aria-hidden="true"><path d="M58 118h304" stroke="#172027" stroke-width="5" stroke-linecap="round"/><path d="M86 118V58h62v60M246 118V42h58v76" fill="#dce5e7" stroke="#49646f" stroke-width="5"/><path d="M174 118V72h42v46" fill="#fff" stroke="#2e6f5f" stroke-width="5"/><path d="M104 48c22-30 52 18 74-10s48 12 70-10" fill="none" stroke="#c94f2d" stroke-width="5" stroke-linecap="round"/><path d="M304 42c18-18 38 12 54-4" fill="none" stroke="#c94f2d" stroke-width="4" stroke-linecap="round"/></svg>`,
  renewables: `<svg viewBox="0 0 420 150" aria-hidden="true"><circle cx="92" cy="48" r="21" fill="#c94f2d"/><path d="M214 118V54M214 54l-44-20M214 54l40-24M214 54l6 48" stroke="#49646f" stroke-width="6" stroke-linecap="round"/><path d="M72 118h100l18-44 18 44h108" fill="none" stroke="#2e6f5f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M282 82h66v36h-66zM292 92h46M292 106h46" fill="#e8f0f1" stroke="#172027" stroke-width="4"/></svg>`,
  drone: `<svg viewBox="0 0 420 150" aria-hidden="true"><path d="M210 75 116 42M210 75l94-33M210 75l-94 40M210 75l94 40" stroke="#49646f" stroke-width="10" stroke-linecap="round"/><circle cx="210" cy="75" r="24" fill="#fff" stroke="#172027" stroke-width="5"/><circle cx="116" cy="42" r="26" fill="#dce5e7" stroke="#2e6f5f" stroke-width="5"/><circle cx="304" cy="42" r="26" fill="#dce5e7" stroke="#2e6f5f" stroke-width="5"/><circle cx="116" cy="115" r="26" fill="#dce5e7" stroke="#c94f2d" stroke-width="5"/><circle cx="304" cy="115" r="26" fill="#dce5e7" stroke="#c94f2d" stroke-width="5"/></svg>`,
  assemblyLine: `<svg viewBox="0 0 420 150" aria-hidden="true"><path d="M48 112h324" stroke="#172027" stroke-width="6" stroke-linecap="round"/><path d="M72 112V78h58v34M182 112V58h58v54M292 112V76h58v36" fill="#e8f0f1" stroke="#49646f" stroke-width="5"/><path d="M132 94h44M242 86h44" stroke="#c94f2d" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="122" r="9" fill="#2e6f5f"/><circle cx="210" cy="122" r="9" fill="#2e6f5f"/><circle cx="320" cy="122" r="9" fill="#2e6f5f"/><path d="M86 45h248M334 45l-18-14M334 45l-18 14" stroke="#c94f2d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  surgical: `<svg viewBox="0 0 420 150" aria-hidden="true"><path d="M62 78h112" stroke="#172027" stroke-width="10" stroke-linecap="round"/><path d="M174 78c40-56 86-56 126 0s50 30 66 10" fill="none" stroke="#49646f" stroke-width="12" stroke-linecap="round"/><path d="M174 56c64 10 108 28 170 20M174 100c64-10 108-28 170-20" fill="none" stroke="#c94f2d" stroke-width="4" stroke-linecap="round"/><circle cx="174" cy="78" r="18" fill="#fff" stroke="#2e6f5f" stroke-width="5"/><path d="M356 70l22-12M358 88l22 10" stroke="#172027" stroke-width="5" stroke-linecap="round"/></svg>`,
  motionStage: `<svg viewBox="0 0 420 150" aria-hidden="true"><rect x="92" y="84" width="236" height="34" rx="4" fill="#dce5e7" stroke="#49646f" stroke-width="5"/><rect x="174" y="38" width="72" height="46" rx="5" fill="#fff" stroke="#172027" stroke-width="5"/><path d="M132 84c20-42 42-42 62 0M226 84c20-42 42-42 62 0" fill="none" stroke="#2e6f5f" stroke-width="6" stroke-linecap="round"/><path d="M66 118h288M276 52h64M340 52l-14-12M340 52l-14 12" stroke="#c94f2d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M76 42c28 0 28 24 56 24s28-24 56-24" fill="none" stroke="#49646f" stroke-width="4" stroke-linecap="round"/></svg>`,
  windTunnel: `<svg viewBox="0 0 420 150" aria-hidden="true"><path d="M34 118h352" stroke="#d7dde1" stroke-width="4"/><path d="M82 88h70l32-28h124l32 28h34v34H82z" fill="#e8f0f1" stroke="#49646f" stroke-width="5" stroke-linejoin="round"/><path d="M184 60v62M308 60v62" stroke="#172027" stroke-width="4" stroke-linecap="round"/><circle cx="116" cy="105" r="20" fill="#fff" stroke="#2e6f5f" stroke-width="5"/><path d="M104 105h24M116 93v24" stroke="#2e6f5f" stroke-width="4" stroke-linecap="round"/><rect x="226" y="86" width="34" height="34" rx="5" fill="#fff" stroke="#c94f2d" stroke-width="5"/><path d="M58 74c40-16 75-16 112 0M58 94c40-12 78-12 116 0M264 92c34-10 64-10 96 0M264 108c34-6 64-6 96 0" fill="none" stroke="#c94f2d" stroke-width="4" stroke-linecap="round"/><path d="M230 50h48M278 50l-13-10M278 50l-13 10" stroke="#172027" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

function renderProjects() {
  const visibleProjects = projects.filter((project) => projectMatchesFilter(project, activeFilter));
  grid.innerHTML = visibleProjects
    .map((project) => {
      const isSelected = project.title === selectedProject.title;
      return `
        <button class="project-card" type="button" aria-pressed="${isSelected}" data-title="${project.title}">
          <div class="project-art">${artTemplates[project.art]}</div>
          <div class="project-body">
            <div class="project-meta"><span>${getProjectCategoryLabel(project)}</span><span>${project.year}</span></div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="tags">${project.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}</div>
          </div>
        </button>
      `;
    })
    .join("");

  if (!visibleProjects.includes(selectedProject)) {
    selectedProject = visibleProjects[0] || projects[0];
  }

  renderDetail();
}

function renderDetail() {
  detail.innerHTML = `
    <p class="eyebrow">${getProjectCategoryLabel(selectedProject)} / ${selectedProject.year}</p>
    <h3>${selectedProject.title}</h3>
    <p>${selectedProject.summary}</p>
    <ul class="detail-list">
      <li><strong>Challenge</strong>${selectedProject.challenge}</li>
      <li><strong>Outcome</strong>${selectedProject.outcome}</li>
      ${selectedProject.role ? `<li><strong>Role</strong>${selectedProject.role}</li>` : ""}
      ${selectedProject.parts ? `<li><strong>Parts</strong><div class="part-list">${selectedProject.parts.map((part) => `
        <article>
          <span>${part.label}</span>
          <h4>${part.title}</h4>
          <p>${part.summary}</p>
          <p>${part.outcome}</p>
        </article>
      `).join("")}</div></li>` : ""}
      <li><strong>Tools</strong>${selectedProject.tools.join(", ")}</li>
    </ul>
  `;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.setAttribute("aria-pressed", String(card.dataset.title === selectedProject.title));
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((filter) => filter.classList.toggle("active", filter === button));
    renderProjects();
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;
  selectedProject = projects.find((project) => project.title === card.dataset.title) || selectedProject;
  renderDetail();
});

count.textContent = projects.length;
renderProjects();
