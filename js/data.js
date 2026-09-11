const PORTFOLIO_DATA = {
  personal: {
    name: "Monish J B",
    role: "Computer Science Engineer | AI/ML & Agentic AI Developer | DSA Programmer",
    tagline: "Building intelligent systems with code, data & AI.",
    summary: "Computer Science undergraduate with hands-on experience building AI-based computer vision systems and multi-agent conversational workflows. Strong foundation in Data Structures & Algorithms, Python-based development, and system architectures.",
    email: "monish12122006jb@gmail.com",
    phone: "+91 9629606364",
    location: "Tamil Nadu, India",
    github: "https://github.com/monish-jb",
    linkedin: "https://linkedin.com/in/monish-j-b-b77010352/",
    leetcode: "https://leetcode.com/u/Monish_jb",
    resumeUrl: "#contact"
  },
  
  stats: [
    { label: "CGPA", value: "7.88", sub: "Bannari Amman BIT (CSE)" },
    { label: "HSC Board", value: "94%", sub: "Global Matric Hr. Sec." },
    { label: "Core Focus", value: "DSA & AI", sub: "Problem Solving & ML" },
    { label: "Architecture", value: "Multi-Agent", sub: "LLMs & Vision Pipelines" }
  ],

  about: {
    bioLeft: "I am a passionate Computer Science student and software developer focused on engineering intelligent, real-world applications. My core expertise lies in designing end-to-end Machine Learning pipelines—from computer vision frame analysis with YOLOv8 and LSTMs to LLM-driven multi-agent healthcare architectures.",
    bioRight: "Alongside AI development, I maintain a strong commitment to algorithmic excellence and Data Structures & Algorithms. I enjoy analyzing system complexity, writing optimized code in C, Python, and Java, and translating complex theoretical concepts into robust software solutions.",
    currentlyExploring: ["Agentic AI Orchestration", "RAG Architectures", "High-Performance C++ Systems", "Real-time AI Inference"]
  },

  skillCategories: [
    {
      id: "programming",
      name: "Programming Languages",
      icon: "code",
      skills: [
        { name: "C Language", level: "Advanced", desc: "System-level concepts, memory management, pointers" },
        { name: "Python", level: "Advanced", desc: "AI/ML pipelines, FastAPI, OpenCV, PyTorch" },
        { name: "Java", level: "Intermediate", desc: "Object-oriented programming, collection framework" },
        { name: "TypeScript", level: "Intermediate", desc: "Type-safe full-stack web applications" },
        { name: "C++", level: "Intermediate", desc: "Data Structures & Algorithms, STL" }
      ]
    },
    {
      id: "ai_ml",
      name: "AI, ML & Computer Vision",
      icon: "cpu",
      skills: [
        { name: "Agentic AI", level: "Specialist", desc: "Multi-agent workflows, task delegation, tool orchestration" },
        { name: "LLMs (Mistral)", level: "Specialist", desc: "Prompt engineering, conversational AI, domain fine-tuning" },
        { name: "YOLOv8 & OpenCV", level: "Specialist", desc: "Real-time object localization & spatial frame processing" },
        { name: "CNN & LSTM", level: "Specialist", desc: "Spatial posture extraction & temporal sequential analysis" },
        { name: "Machine Learning", level: "Advanced", desc: "Feature engineering, classification, regression models" },
        { name: "NLP & Voice-to-Text", level: "Advanced", desc: "Conversational audio processing & intent parsing" }
      ]
    },
    {
      id: "cs_dsa",
      name: "CS & Core DSA",
      icon: "git-branch",
      skills: [
        { name: "Data Structures", level: "Advanced", desc: "Trees, Graphs, Heaps, Hash Tables, Linked Lists" },
        { name: "Algorithms", level: "Advanced", desc: "Dynamic Programming, Binary Search, Sliding Window, Greedy" },
        { name: "DBMS & SQL", level: "Intermediate", desc: "Relational database schema design, PostgreSQL queries" },
        { name: "OOP Principles", level: "Advanced", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
        { name: "Operating Systems", level: "Intermediate", desc: "Process scheduling, thread sync, memory management" },
        { name: "Computer Networks", level: "Intermediate", desc: "TCP/IP protocol stack, HTTP/REST API design" }
      ]
    },
    {
      id: "web_tools",
      name: "Web, Backend & Tools",
      icon: "layers",
      skills: [
        { name: "FastAPI", level: "Advanced", desc: "Async Python REST API services & backend routes" },
        { name: "React & TypeScript", level: "Intermediate", desc: "Modern component-driven web user interfaces" },
        { name: "PostgreSQL", level: "Intermediate", desc: "Structured data storage & relational queries" },
        { name: "Capacitor", level: "Intermediate", desc: "Cross-platform mobile app packaging" },
        { name: "Git & GitHub", level: "Advanced", desc: "Version control, feature branching, pull requests" }
      ]
    }
  ],

  projects: [
    {
      id: "hospital-guidance-ai",
      title: "AI Agent-Based Hospital Appointment & Patient Guidance System",
      category: "agentic_ai",
      featured: true,
      badge: "Featured Multi-Agent AI System",
      shortDesc: "LLM-driven healthcare assistant utilizing a multi-agent architecture for symptom analysis, department triage, and doctor recommendations.",
      problem: "Traditional hospital appointment systems lack pre-consultation medical guidance, causing patient confusion and misdirected department visits.",
      approach: "Engineered a multi-agent AI framework powered by Mistral LLM that interactively queries patients, predicts potential health conditions, and triages them to appropriate medical specialists.",
      architecture: [
        { agent: "Triage Agent", role: "Analyzes initial symptoms, asks adaptive follow-up questions, and predicts likely conditions." },
        { agent: "Department Agent", role: "Maps predicted conditions to specialized medical departments." },
        { agent: "Doctor Selection Agent", role: "Matches patient urgency and schedule with available specialists." },
        { agent: "Follow-up Guidance Agent", role: "Generates preliminary care advice and pre-appointment instructions." }
      ],
      techStack: ["Agentic AI", "Mistral LLM", "Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Capacitor", "Voice-to-Text"],
      keyFeatures: [
        "Interactive conversational workflow with intelligent follow-up questioning",
        "Multi-agent task delegation for triage, department mapping, and booking",
        "Full-stack integration using FastAPI backend & React frontend",
        "Integrated voice-to-text audio input for seamless patient interaction",
        "Cross-platform support via Capacitor framework"
      ],
      github: "https://github.com/monish-jb",
      demo: "#"
    },
    {
      id: "cctv-criminal-activity-detection",
      title: "AI-Based Criminal Activity Detection Using CCTV Footage",
      category: "computer_vision",
      featured: false,
      badge: "Real-Time Computer Vision Pipeline",
      shortDesc: "End-to-end video surveillance framework integrating YOLOv8, CNN, and LSTM for real-time violent & suspicious behavior recognition.",
      problem: "Manual CCTV monitoring is prone to human oversight and fails to detect rapid violent outbreaks or mob aggression in real time.",
      approach: "Designed a multi-stage deep learning pipeline combining spatial human detection (YOLOv8), feature extraction (CNN), and temporal sequence modeling (LSTM) over continuous video frames.",
      architecture: [
        { stage: "Stage 1: Detection", detail: "YOLOv8 isolates human targets across video streams." },
        { stage: "Stage 2: Spatial Feature Extraction", detail: "CNN extracts spatial posture vectors and physical positioning." },
        { stage: "Stage 3: Temporal Modeling", detail: "LSTM analyzes sequential frame embeddings to flag violent patterns." },
        { stage: "Stage 4: Incident Logging", detail: "Automated alert trigger flags suspicious events for security review." }
      ],
      techStack: ["Python", "OpenCV", "YOLOv8", "CNN", "LSTM", "PyTorch", "Computer Vision"],
      keyFeatures: [
        "Real-time processing of multi-frame surveillance video feeds",
        "Localization of multiple individuals in dense crowd environments",
        "Detection of fights, mob formation, and aggressive physical posture",
        "Automated incident alert triggering and timestamped event logging"
      ],
      github: "https://github.com/monish-jb",
      demo: "#"
    }
  ],

  dsaProfile: {
    headline: "Problem Solving & Algorithmic Focus",
    summary: "Active problem solver focusing on optimal time & space complexity, clean code implementation, and core computer science fundamentals.",
    leetcodeUsername: "Monish_jb",
    leetcodeUrl: "https://leetcode.com/u/Monish_jb",
    githubUrl: "https://github.com/monish-jb",
    topics: [
      { name: "Data Structures", items: ["Arrays & Matrices", "Linked Lists", "Trees & Binary Search Trees", "Heaps & Priority Queues", "Graphs & Adjacency Lists"] },
      { name: "Algorithms", items: ["Dynamic Programming", "Binary Search", "Sliding Window & Two Pointers", "DFS & BFS Traversal", "Greedy Algorithms"] }
    ]
  },

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Bannari Amman Institute of Technology",
      period: "2024 – 2028 (Currently Pursuing)",
      grade: "CGPA: 7.88 (Current)",
      highlights: [
        "Focused on Core Computer Science, Data Structures & Algorithms, and AI/ML",
        "Developed end-to-end multi-agent AI and computer vision surveillance projects",
        "Active member of tech clubs and coding community"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC - State Board)",
      institution: "Global Matric Hr. Sec. School",
      period: "Passed 2024",
      grade: "Score: 94%",
      highlights: [
        "Strong foundation in Mathematics, Physics, and Computer Science",
        "Secured 94% overall in state board examinations"
      ]
    }
  ]
};
