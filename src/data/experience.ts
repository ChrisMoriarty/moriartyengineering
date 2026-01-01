import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "April 2025 — Current",
    title: "Independant Software Engineer",
    company: "Moriarty Engineering LLC",
    companyUrl: "https://www.moriartyengineering.com",
    description:
      "I designed and shipped a series of end-to-end software and hardware projects spanning embedded systems, \
      full-stack web development, infrastructure, and game development. Highlights include building an \
      ESP32/CircuitPython system that delivers real-time subway arrival data to an LED matrix display; \
      creating and self-hosting a web comic platform using Svelte and PM2; architecting and operating a personal \
      virtualization lab with 20+ VMs and 40+ containers to securely provide open-source alternatives to common \
      cloud services for friends and family; developing a real-time location-aware web application for \
      Somerville Porchfest 2025; and releasing a small cross-platform game built with the Godot engine. \
      Collectively, these projects demonstrate strong ownership, systems thinking, and the ability to take ideas \
      from concept through deployment and real-world use.",
    technologies: [
      "XCP-ng",
      "Xen Orchestra",
      "SAN",
      "Networking",
      "ESP32",
      "Python",
      "Docker Compose",
      "Svelte",
    ],
    logo: "/logos/avatar.webp",
  },
  {
    dates: "October 2024 — April 2025",
    title: "Virtualization Infrastructure Contractor",
    company: "Minor Planet Center (Contract)",
    companyUrl:
      "https://www.cfa.harvard.edu/facilities-technology/cfa-facilities/minor-planet-center",
    description:
      "Part time contract to build out a second physical site for backup and disaster recovery. I designed, built and \
      deployed the primary virtualization system to migrate off of old poorly maintained IT infrastructure. I chose to \
      use XCP-ng and Xen Orchestra, and a high speed SAN for shared storage across the hypervisors. All of which is integrated \
      with full system monitoring solution based on prometheus and grafana.",
    technologies: [
      "XCP-ng",
      "Xen Orchestra",
      "SAN",
      "Networking",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    logo: "/logos/mpc.png",
  },
  {
    dates: "Septemer 2021 — August 2024",
    title: "Technical Manager",
    company: "Minor Planet Center",
    companyUrl:
      "https://www.cfa.harvard.edu/facilities-technology/cfa-facilities/minor-planet-center",
    description:
      "Developed a Docker-based framework for hosting public facing React based web content and Python APIs using Flask, \
      with fast access to a replicated operational database. Reorganized management of the team by dividing operations and \
      software development into separate workflows, leveraging Jira Service Desk and Jira Software Cloud. Wrangled many \
      disparate code projects into a structured mono-repository, building a software development process around feature \
      branching and pull requests using Github. Hired and directly manage two junior software engineers. Mentored an intern \
      to develop a Near Earth Object classifier using TensorFlow.",
    technologies: [
      "Linux Administration",
      "Project Management",
      "Python",
      "PostgreSQL",
      "Git",
      "Jira",
      "Docker",
      "XCP-ng",
      "Xen Orchestra",
      "Prometheus",
      "Grafana",
    ],
    logo: "/logos/mpc.png",
  },
  {
    dates: "September 2018 — September 2021",
    title: "Senior Software Engineer",
    company: "Submillimeter Array",
    companyUrl: "https://lweb.cfa.harvard.edu/sma/",
    description:
      "Brought project management and software engineering best practices to the entire team. \
      Persuaded team to adopt Google Calendar, Slack, Google Team Drive, Feature Branching, Issue Tracking and Release Planning. \
      Architected networking and software improvements for the SWARM FPGA data correlator. \
      Fixed and automated Very Long Baseline Interferometry (VLBI) software, greatly improving Event Horizon Telescope campaigns. \
      Developed Python API for a Redis based messaging system. \
      Co-organized observatory wide multi-day operations review. \
      Started the Center For Astrophysics (CfA) Software Engineering Steering Committee, and served as the chair.",
    technologies: ["Python", "C", "Real-time OS", "Open Project", "Redis"],
    logo: "/logos/sma.png",
  },
];
