export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  outcome: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  architecturePoints: string[];
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export const PORTFOLIO_CONTENT = {
  personal: {
    name: "Monish J B",
    role: "Computer Science Engineer | AI Developer",
    location: "India"
  },

  hero: {
    greeting: "Monish J B",
    tagline: "Computer Science Engineer | AI Developer & Problem Solver",
    headline: "Building intelligent AI systems, real-time vision pipelines & autonomous workflows.",
    description: "Computer Science student specializing in LLM multi-agent architectures, OpenCV/YOLOv8 surveillance pipelines, and optimized Data Structures & Algorithms.",
    primaryCta: { text: "View Selected Work", href: "/work" },
    secondaryCta: { text: "Contact Me", href: "/contact" },
    coreCapabilities: [
      {
        title: "Agentic AI & LLMs",
        desc: "Autonomous multi-agent triage workflows, symptom analysis & doctor recommendation systems using Mistral LLM.",
        tech: ["Agentic AI", "Mistral LLM", "FastAPI", "React"]
      },
      {
        title: "Computer Vision Pipelines",
        desc: "End-to-end video analytics pipelines integrating YOLOv8 localization, CNN posture features & LSTM motion sequences.",
        tech: ["YOLOv8", "OpenCV", "PyTorch", "LSTM"]
      },
      {
        title: "Data Structures & Algorithms",
        desc: "Active problem solver focusing on graph algorithms, dynamic programming, sliding window, and time complexity optimization.",
        tech: ["C++", "Java", "Python", "LeetCode"]
      }
    ]
  },

  selectedWork: [
    {
      id: "ai-hospital-guidance",
      title: "AI Agent-Based Hospital Appointment & Patient Guidance System",
      category: "Agentic AI & Healthcare",
      outcome: "Automated medical pre-consultation triage and specialty routing using an LLM conversational workflow.",
      description: "Designed a multi-agent AI architecture featuring a Triage Agent for symptom questioning and condition prediction, paired with specialized agents for doctor recommendation and follow-up care instructions.",
      techStack: ["Agentic AI", "Mistral LLM", "Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Capacitor"],
      githubUrl: "https://github.com/monish-jb",
      architecturePoints: [
        "Triage Agent: Asks adaptive follow-up questions & predicts likely health conditions",
        "Department & Doctor Agent: Routes urgency & maps schedule to appropriate specialists",
        "Conversational Layer: Integrated voice-to-text audio input for natural interaction"
      ]
    },
    {
      id: "cctv-criminal-detection",
      title: "AI-Based Criminal Activity Detection in CCTV Footage",
      category: "Computer Vision & Surveillance",
      outcome: "Engineered real-time video analytics to flag violent outbreaks, fights, and aggressive behavior automatically.",
      description: "Built an end-to-end multi-stage deep learning pipeline combining human localization (YOLOv8), spatial body posture vector extraction (CNN), and temporal motion sequence modeling (LSTM).",
      techStack: ["Python", "OpenCV", "YOLOv8", "CNN", "LSTM", "PyTorch"],
      githubUrl: "https://github.com/monish-jb",
      architecturePoints: [
        "Human Detection: YOLOv8 isolates individual targets across video frames",
        "Spatial Feature Extraction: CNN models posture & physical position vectors",
        "Temporal Sequential Modeling: LSTM flags abnormal aggression patterns over time"
      ]
    }
  ] as CaseStudy[],

  dsaSection: {
    title: "Data Structures & Competitive Programming",
    description: "Active problem solver focusing on algorithms, time complexity, and clean code principles.",
    leetcodeUsername: "Monish_jb",
    leetcodeUrl: "https://leetcode.com/u/Monish_jb",
    githubUrl: "https://github.com/monish-jb",
    topics: ["Graphs & Trees", "Dynamic Programming", "Sliding Window", "Binary Search", "Heaps & Hash Tables"]
  },

  playground: [
    {
      id: "agentic-triage-sim",
      title: "Multi-Agent Triage Workflow Visualizer",
      description: "Interactive visualizer tracking state transitions between Triage, Department, and Doctor Agents.",
      tech: ["Mistral LLM", "FastAPI", "TypeScript"],
      githubUrl: "https://github.com/monish-jb"
    },
    {
      id: "yolo-posture-stream",
      title: "YOLOv8 & LSTM Posture Feature Extraction",
      description: "Experimental frame-by-frame temporal vector visualizer for surveillance video feeds.",
      tech: ["YOLOv8", "OpenCV", "PyTorch"],
      githubUrl: "https://github.com/monish-jb"
    },
    {
      id: "dsa-algo-visualizer",
      title: "Graph & DP Algorithm Explorer",
      description: "Interactive visual trace of shortest path algorithms and dynamic programming state transitions.",
      tech: ["C++", "Python", "Algorithms"],
      githubUrl: "https://github.com/monish-jb"
    }
  ] as Experiment[],

  about: {
    bioParagraphs: [
      "I got into software engineering through a deep curiosity for system-level programming and understanding how code interacts directly with underlying computing hardware.",
      "That foundation quickly evolved into engineering intelligent, real-world applications—ranging from multi-agent LLM healthcare assistants to multi-stage computer vision surveillance pipelines.",
      "What I care about is building software that is clean, robust, and capable of operating autonomously to solve complex human challenges."
    ],
    education: [
      {
        degree: "B.E. Computer Science and Engineering",
        institution: "Bannari Amman Institute of Technology",
        period: "2024 – 2028 (Currently Pursuing)",
        details: [
          "Focused on Core Computer Science, Data Structures & Algorithms, and Artificial Intelligence",
          "Engineered multi-agent AI frameworks and deep learning computer vision surveillance pipelines",
          "Active participant in technical club activities and competitive coding platforms"
        ]
      },
      {
        degree: "Higher Secondary Certificate (HSC - State Board)",
        institution: "Global Matric Hr. Sec. School",
        period: "Passed 2024",
        details: [
          "Strong background in Mathematics, Physics, and Computer Science",
          "Solid foundation in problem solving and logical reasoning"
        ]
      }
    ] as EducationItem[]
  },

  contact: {
    headline: "Let's Connect",
    description: "Open to software engineering internships, AI/ML roles, and technical collaborations.",
    email: "monish12122006jb@gmail.com",
    phone: "+91 9629606364",
    githubUrl: "https://github.com/monish-jb",
    linkedinUrl: "https://linkedin.com/in/monish-j-b-b77010352/",
    leetcodeUrl: "https://leetcode.com/u/Monish_jb"
  }
};
