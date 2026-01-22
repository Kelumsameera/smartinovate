import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaCog,
  FaRobot,
  FaCloud
} from "react-icons/fa";

export const services = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: FaCode,
    description:
      "Transform your business processes with bespoke software solutions tailored to your unique requirements.",
    features: [
      "Enterprise Application Development",
      "Legacy System Modernization",
      "API Integration & Development",
      "Microservices Architecture"
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: FaGlobe,
    description:
      "Create stunning, responsive websites that captivate your audience and convert visitors into customers.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps (PWA)"
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: FaMobileAlt,
    description:
      "Reach your customers wherever they are with powerful mobile applications.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Optimization",
      "Mobile UI/UX Design"
    ],
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    icon: FaCog,
    description:
      "Streamline manufacturing and industrial processes with cutting-edge automation.",
    features: [
      "PLC Programming",
      "SCADA Systems",
      "Process Automation",
      "Robotics Integration"
    ],
  },
  {
    slug: "iot-home-automation",
    title: "IoT & Home Automation",
    icon: FaRobot,
    description:
      "Connect your world with intelligent IoT solutions and smart home automation.",
    features: [
      "Smart Home Systems",
      "IoT Device Integration",
      "Sensor Networks",
      "Remote Monitoring & Control"
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: FaCloud,
    description:
      "Leverage cloud computing to scale your business effortlessly.",
    features: [
      "Cloud Migration",
      "AWS, Azure & Google Cloud",
      "DevOps & CI/CD",
      "Cloud Security & Compliance"
    ],
  },
];
