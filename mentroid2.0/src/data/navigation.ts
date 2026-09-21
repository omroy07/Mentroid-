import {
  Bot,
  BrainCircuit,
  Building2,
  Code2,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessageSquare,
  MonitorSmartphone,
  Network,
  Rocket,
  ShoppingCart,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

export const navigation = {
  services: {
    title: "Services",
    description: "AI and software systems built around your business.",
    groups: [
      {
        title: "AI & Intelligence",
        items: [
          {
            title: "AI Development",
            description: "Build intelligent applications powered by modern AI.",
            icon: Bot,
            href: "/services/ai-development",
          },
          {
            title: "AI Automation",
            description: "Automate repetitive workflows and operations.",
            icon: Workflow,
            href: "/services/ai-automation",
          },
          {
            title: "Custom Chatbots",
            description: "AI assistants designed around your business.",
            icon: MessageSquare,
            href: "/services/custom-chatbots",
          },
          {
            title: "ML Model Development",
            description: "Custom predictive models built for your data.",
            icon: BrainCircuit,
            href: "/services/ml-development",
          },
        ],
      },
      {
        title: "Product Engineering",
        items: [
          {
            title: "AI SaaS Development",
            description: "Turn AI ideas into scalable SaaS products.",
            icon: Sparkles,
            href: "/services/ai-saas-development",
          },
          {
            title: "Web & Software Development",
            description: "Modern full-stack products and platforms.",
            icon: Code2,
            href: "/services/software-development",
          },
        ],
      },
    ],
  },

  solutions: {
    title: "Solutions",
    description: "AI solutions designed around measurable business problems.",
    groups: [
      {
        title: "Customer & Sales",
        items: [
          {
            title: "24/7 AI Customer Support",
            icon: MessageSquare,
            href: "/solutions/customer-support",
          },
          {
            title: "AI Lead Qualification",
            icon: Zap,
            href: "/solutions/lead-qualification",
          },
          {
            title: "WhatsApp AI Assistant",
            icon: MessageSquare,
            href: "/solutions/whatsapp-ai",
          },
          {
            title: "Sales Automation",
            icon: Workflow,
            href: "/solutions/sales-automation",
          },
        ],
      },
      {
        title: "Operations & Intelligence",
        items: [
          {
            title: "Business Process Automation",
            icon: Workflow,
            href: "/solutions/business-automation",
          },
          {
            title: "AI Knowledge Assistant",
            icon: BrainCircuit,
            href: "/solutions/knowledge-assistant",
          },
          {
            title: "AI Recommendation Systems",
            icon: Sparkles,
            href: "/solutions/recommendation-systems",
          },
          {
            title: "Custom AI Platforms",
            icon: MonitorSmartphone,
            href: "/solutions/custom-platforms",
          },
        ],
      },
    ],
  },

  expertise: {
    title: "Expertise",
    description: "The technologies behind intelligent systems.",
    groups: [
      {
        title: "AI Engineering",
        items: [
          {
            title: "Generative AI",
            icon: Sparkles,
            href: "/expertise/generative-ai",
          },
          {
            title: "AI Agents",
            icon: Bot,
            href: "/expertise/ai-agents",
          },
          {
            title: "RAG Systems",
            icon: Network,
            href: "/expertise/rag",
          },
          {
            title: "Machine Learning",
            icon: BrainCircuit,
            href: "/expertise/machine-learning",
          },
        ],
      },
      {
        title: "Advanced Systems",
        items: [
          {
            title: "Deep Learning",
            icon: BrainCircuit,
            href: "/expertise/deep-learning",
          },
          {
            title: "Computer Vision",
            icon: MonitorSmartphone,
            href: "/expertise/computer-vision",
          },
          {
            title: "Predictive Analytics",
            icon: Landmark,
            href: "/expertise/predictive-analytics",
          },
          {
            title: "Workflow Automation",
            icon: Workflow,
            href: "/expertise/workflow-automation",
          },
        ],
      },
    ],
  },

  industries: {
    title: "Industries",
    description: "AI applications tailored to your industry.",
    groups: [
      {
        title: "Industries We Serve",
        items: [
          {
            title: "Startups & SaaS",
            icon: Rocket,
            href: "/industries/startups",
          },
          {
            title: "Education",
            icon: GraduationCap,
            href: "/industries/education",
          },
          {
            title: "Agriculture",
            icon: Building2,
            href: "/industries/agriculture",
          },
          {
            title: "Healthcare",
            icon: HeartPulse,
            href: "/industries/healthcare",
          },
        ],
      },
      {
        title: "Business",
        items: [
          {
            title: "Finance",
            icon: Landmark,
            href: "/industries/finance",
          },
          {
            title: "Retail & E-commerce",
            icon: ShoppingCart,
            href: "/industries/retail",
          },
          {
            title: "Professional Services",
            icon: Building2,
            href: "/industries/professional-services",
          },
          {
            title: "SMEs",
            icon: Building2,
            href: "/industries/smes",
          },
        ],
      },
    ],
  },

  company: {
    title: "Company",
    description: "Get to know the people and work behind Mentroid.",
    groups: [
      {
        title: "Mentroid",
        items: [
          {
            title: "About Mentroid",
            href: "/about",
          },
          {
            title: "Our Work",
            href: "/work",
          },
          {
            title: "Our Team",
            href: "/team",
          },
          {
            title: "Our Process",
            href: "/process",
          },
        ],
      },
      {
        title: "Connect",
        items: [
          {
            title: "Careers",
            href: "/careers",
          },
          {
            title: "Contact",
            href: "/contact",
          },
        ],
      },
    ],
  },
};