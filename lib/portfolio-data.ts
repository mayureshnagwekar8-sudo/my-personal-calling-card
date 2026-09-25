export const profile = {
  name: 'Mayuresh Nagwekar',
  role: 'Physics & Engineering Subject-Matter Expert — AI/LLM Research',
  intro:
    'M.Tech graduate from NIT Warangal with hands-on experience in AI/ML, embedded systems, FPGA design, and signal processing. Experienced in AI benchmark evaluation, technical content validation, and research, with an IEEE publication and conference technical-review experience.',
  email: 'mayureshnagvekar9@gmail.com',
  linkedin: {
    label: 'linkedin.com/in/mayuresh-n-029610216',
    href: 'https://www.linkedin.com/in/mayuresh-n-029610216',
  },
}

export const aboutHighlights = [
  {
    title: 'Education',
    text: 'M.Tech in Embedded and Machine Learning Systems from NIT Warangal.',
  },
  {
    title: 'Engineering',
    text: 'Experience in AI/ML, embedded systems, FPGA design, and signal processing.',
  },
  {
    title: 'AI Evaluation',
    text: 'AI benchmark evaluation and technical content validation.',
  },
  {
    title: 'Research',
    text: 'IEEE research publication and conference technical-review experience.',
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'End-to-End ML & Cloud Deployment Pipeline',
    description:
      'A machine learning pipeline built with Python and Scikit-learn, containerized with Docker, and deployed to AWS and Azure.',
    tags: ['Python', 'Scikit-learn', 'Docker', 'AWS', 'Azure'],
  },
  {
    title: 'AI-Powered Document Intelligence Chatbot',
    description:
      'A retrieval-augmented (RAG) chatbot for querying documents, built with LangChain and Streamlit and powered by xAI Grok-4.',
    tags: ['Python', 'LangChain', 'Streamlit', 'RAG', 'xAI Grok-4'],
  },
  {
    title: 'FPGA Accelerator for MobileNetV2 using HLS',
    description:
      'A hardware accelerator for the MobileNetV2 network developed with Vitis HLS and Vivado, targeting the PYNQ-ZU board.',
    tags: ['Vitis HLS', 'Vivado', 'C++', 'Python', 'PYNQ-ZU'],
  },
]

export const skillGroups = [
  {
    title: 'AI/ML',
    skills: [
      'Python',
      'Machine Learning',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'EDA',
      'LangChain',
      'RAG',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Digital Design',
    skills: ['Verilog HDL', 'RTL Design', 'FSM', 'STA', 'Testbench', 'Vivado', 'Vitis HLS', 'ModelSim'],
  },
  {
    title: 'Embedded',
    skills: ['C/C++', 'Embedded C', 'ARM STM32', 'FPGA', 'RTOS', 'GPIO'],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      'Linux',
      'Git/GitHub',
      'Docker',
      'AWS',
      'Azure',
      'STM32CubeIDE',
      'Keil',
      'JTAG/SWD',
      'Oscilloscope',
      'Logic Analyzer',
    ],
  },
]

export const publication = {
  title: 'Seismic Random Noise Attenuation using Variational Quantum Denoising Technique',
  venue: 'IEEE GRSL',
  summary:
    'Proposes a framework combining the Quantum Fourier Transform (QFT) with variational optimization for adaptive attenuation of random noise in seismic data.',
}

export const experience = [
  { role: 'Technical Reviewer', org: 'IEEE DELCON 2025' },
  { role: 'AI/ML Intern', org: 'TRL FutureX' },
  { role: 'Research Intern', org: 'National Institute of Technology Karnataka, Surathkal' },
]
