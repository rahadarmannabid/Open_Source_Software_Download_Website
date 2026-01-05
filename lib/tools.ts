export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: string;
  category: string;
  type: 'extension' | 'webapp';  // Type of tool
  authors: string[];              // List of author names
  maintainer?: string;            // Tool maintainer (optional)
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  downloadFile?: string;  // Optional for extensions/downloadable tools
  webappUrl?: string;     // Optional for web apps (direct link)
  demoVideo?: string;
  installationSteps: {
    title: string;
    description: string;
  }[];
  githubUrl?: string;
  documentationUrl?: string;
}

export const tools: Tool[] = [
  {
    id: "expert-goggles",
    name: "Expert Goggles",
    tagline: "Master data visualization through interactive learning",
    description: "An open-source Chrome extension that helps you learn data visualization concepts through real-world examples",
    fullDescription: "Data visualizations are an increasingly common way to communicate information online. However, not everyone has the data literacy skills necessary to interpret complex visualizations effectively. We present Expert Goggles, a Chrome browser extension that provides just-in-time guidance to help non-experts interpret the visualizations they encounter on the web. Expert Goggles uses a machine learning classifier to automatically determine the visualization type and uses this context to deliver relevant learning materials. We discuss how this approach to automatically detect the context and provide just-in-time support might transform everyday experiences into informal learning opportunities.",
    icon: "🥽",
    category: "Education",
    type: "extension",
    authors: ["Stephen MacNeil", "Parth Patel", "Benjamin E. Smolin"],
    maintainer: "Rahad Arman Nabid",
    features: [
      {
        icon: "🎓",
        title: "In-Situ Learning",
        description: "Learn data visualization concepts directly where you encounter them on the web"
      },
      {
        icon: "🤖",
        title: "Visualization Classifier",
        description: "Automatically detects and classifies visualization types using machine learning"
      },
      {
        icon: "🧩",
        title: "Chrome Extension",
        description: "Seamlessly integrates into your browser for just-in-time guidance"
      },
      {
        icon: "📊",
        title: "Visualization Literacy",
        description: "Helps develop essential data literacy skills for interpreting complex visualizations"
      }
    ],
    downloadFile: "/downloads/expert-goggles/expert-goggles.zip",
    demoVideo: "https://www.youtube.com/embed/e0zKAgUssOI",
    installationSteps: [
      {
        title: "Download the Extension",
        description: "Click the download button above to get the Extension.zip file"
      },
      {
        title: "Extract the ZIP",
        description: "Unzip the downloaded file to a folder on your computer"
      },
      {
        title: "Open Chrome Extensions",
        description: "Go to chrome://extensions/ in your Chrome browser"
      },
      {
        title: "Enable Developer Mode",
        description: "Toggle 'Developer mode' in the top right corner"
      },
      {
        title: "Load Unpacked Extension",
        description: "Click 'Load unpacked' and select the extracted folder"
      },
      {
        title: "Start Learning!",
        description: "The Expert Goggles icon will appear in your toolbar. Click it to start!"
      }
    ],
    githubUrl: "https://github.com/yourusername/expert-goggles",
    documentationUrl: ""
  },
  {
    id: "datavis-decomposer",
    name: "DataVis Decomposer",
    tagline: "Break down complex visualizations into understandable components",
    description: "A Chrome extension that decomposes and analyzes complex data visualizations to understand their structure and design principles",
    fullDescription: "Interpreting data visualizations from web sources is important for making informed decisions. Yet not everyone possesses the same level of Data Visualization Literacy (DVL) needed to fully comprehend visualizations. As a result, many users seek external resources to understand data visualization concepts. However, searching for DVL concepts without guidance is time-consuming. Moreover, most external resources are decontextualized from the original visualization, making it difficult to connect theoretical knowledge with the specific context. To address these challenges, we designed and developed DataVis Decomposer—a Chrome extension that provides real-time procedural guidance to help audiences learn DVL concepts based on the specific visualization context. Using generative AI, it scaffolds learning by breaking down concepts into semantic categories and explaining them with relevant annotations. Finally, we discuss how just-in-time tools like this can transform the DVL learning experience in authentic settings.",
    icon: "🔬",
    category: "Analysis",
    type: "extension",
    authors: ["Rahad Arman Nabid", "Victor Jimenez Lorenzo", "Nur Siddiq", "Stephen MacNeil"],
    features: [
      {
        icon: "🏗️",
        title: "Scaffolding",
        description: "Provides structured support to help users learn data visualization concepts step-by-step"
      },
      {
        icon: "🧭",
        title: "Guidance",
        description: "Offers real-time procedural guidance based on specific visualization context"
      },
      {
        icon: "✨",
        title: "Automated Annotation",
        description: "Uses generative AI to automatically annotate and explain visualization elements"
      },
      {
        icon: "📚",
        title: "Visualization Learning Materials",
        description: "Delivers contextualized learning materials directly related to the visualization"
      }
    ],
    downloadFile: "/downloads/datavis-decomposer/datavis-decomposer.zip",
    demoVideo: "https://drive.google.com/file/d/1I-TNJYkrpk0S5f2iE8nV89JEX7HR89Cl/preview",
    installationSteps: [
      {
        title: "Download the Extension",
        description: "Click the download button above to get the extension ZIP file"
      },
      {
        title: "Extract the ZIP",
        description: "Unzip the downloaded file to a permanent folder on your computer"
      },
      {
        title: "Open Chrome Extensions",
        description: "Go to chrome://extensions/ in your Chrome browser"
      },
      {
        title: "Enable Developer Mode",
        description: "Toggle 'Developer mode' in the top right corner"
      },
      {
        title: "Load Unpacked Extension",
        description: "Click 'Load unpacked' and select the extracted folder"
      },
      {
        title: "Start Analyzing",
        description: "Navigate to any page with visualizations and click the extension icon to analyze!"
      }
    ]
  },
  {
    id: "autosuggestion-quiz",
    name: "Autosuggestion Quiz",
    tagline: "Learn through intelligent adaptive quizzes",
    description: "A web-based adaptive quiz system that automatically generates questions based on your learning progress",
    fullDescription: "Generative AI tools, like GitHub Copilot, are becoming an industry standard by offering real-time code suggestions that streamline the coding process. Although these systems improve productivity, they also introduce pedagogical challenges. Students may become overly reliant on AI-generated code suggestions, accepting them without critical thought, potentially reducing their ability to engage with the underlying logic of the code. We developed an interactive quiz system within a simulated IDE environment designed to help students think critically about autogenerated code suggestions. Instructors use the tool to create contextualized coding quizzes that present multiple code suggestions at each line. Students must choose the correct option to move on to the next step. Survey responses suggest that this approach could promote critical thinking and scaffold metacognitive skills like planning and reflection. Students reported that the system helped them distinguish between good and bad suggestions. Most students preferred this experience to traditional quizzes or GitHub Copilot. These findings show the potential to scaffold more critical use of generative AI coding tools.",
    icon: "🎓",
    category: "Education",
    type: "webapp",
    authors: [
      "Stephen MacNeil",
      "James Prather",
      "Rahad Arman Nabid",
      "Sebastian Gutierrez",
      "Silas Carvalho",
      "Saimon Shrestha",
      "Paul Denny",
      "Brent N. Reeves",
      "Juho Leinonen",
      "Rachel Louise Rossetti"
    ],
    features: [
      {
        icon: "🧠",
        title: "Critical Thinking",
        description: "Promotes critical evaluation of AI-generated code suggestions"
      },
      {
        icon: "⚡",
        title: "Auto-Completion",
        description: "Simulates real-world IDE auto-completion experience with multiple suggestions"
      },
      {
        icon: "🌐",
        title: "Web App",
        description: "Browser-based interactive quiz system, no installation required"
      },
      {
        icon: "🎯",
        title: "Negative Expertise",
        description: "Helps students distinguish between good and bad code suggestions"
      }
    ],
    webappUrl: "https://www.autosuggestion-quiz.com/",
    demoVideo: "https://drive.google.com/file/d/1GX2FxH5My_tNQjyGSFCiyQe90NGzLfph/preview",
    installationSteps: [
      {
        title: "Click Launch App",
        description: "Click the 'Launch App' button above to open the web application in a new tab"
      },
      {
        title: "Create Your Account",
        description: "Sign up or log in to access the quiz system"
      },
      {
        title: "Browse Available Quizzes",
        description: "Explore quizzes created by instructors or create your own"
      },
      {
        title: "Start Taking Quizzes",
        description: "Choose a quiz and start practicing critical evaluation of code suggestions"
      },
      {
        title: "Track Your Progress",
        description: "Monitor your performance and learning analytics in the dashboard"
      }
    ]
  }
];

export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter(tool => tool.category === category);
}

export const categories = Array.from(new Set(tools.map(tool => tool.category)));

