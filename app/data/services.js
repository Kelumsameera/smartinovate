import {
  Cpu,
  Code,
  Factory,
  Home,
  Cloud,
} from "lucide-react";

export const services = [
  {
    id: "software",
    title: "Customized Software Development",
    icon: Code,
    description:
      "Tailor-made software solutions aligned with your business goals and workflows.",
    useCases: [
      "Business process automation",
      "ERP & CRM systems",
      "Internal management systems",
    ],
    pricing: {
      starter: "LKR 150,000+",
      pro: "LKR 300,000+",
      enterprise: "Custom Quote",
    },
  },
  {
    id: "apps",
    title: "Web, Mobile & Desktop Applications",
    icon: Cloud,
    description:
      "Fast, secure, and scalable applications built for modern platforms.",
    useCases: [
      "Startup MVPs",
      "E-commerce platforms",
      "SaaS applications",
    ],
    pricing: {
      starter: "LKR 200,000+",
      pro: "LKR 450,000+",
      enterprise: "Custom Quote",
    },
  },
  {
    id: "industrial",
    title: "Industrial Automation Systems",
    icon: Factory,
    description:
      "Automation systems designed to improve efficiency and accuracy.",
    useCases: [
      "Manufacturing plants",
      "Production line monitoring",
      "PLC & SCADA integration",
    ],
    pricing: {
      starter: "LKR 250,000+",
      pro: "LKR 600,000+",
      enterprise: "Custom Quote",
    },
  },
  {
    id: "iot",
    title: "IoT & Smart Home Automation",
    icon: Home,
    description:
      "Connected IoT systems for real-time control and monitoring.",
    useCases: [
      "Smart homes",
      "Remote device monitoring",
      "Energy optimization",
    ],
    pricing: {
      starter: "LKR 120,000+",
      pro: "LKR 350,000+",
      enterprise: "Custom Quote",
    },
  },
  {
    id: "environment",
    title: "Environment Monitoring Solutions",
    icon: Cpu,
    description:
      "Advanced systems for tracking environmental conditions.",
    useCases: [
      "Agriculture monitoring",
      "Cold room tracking",
      "Air quality measurement",
    ],
    pricing: {
      starter: "LKR 100,000+",
      pro: "LKR 280,000+",
      enterprise: "Custom Quote",
    },
  },
];
