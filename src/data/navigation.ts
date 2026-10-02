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
  /* =========================================================
     SERVICES
  ========================================================= */

  services: {
    title: "Services",
    description: "AI and software systems built around your business.",

    groups: [
      {
        title: "AI & Intelligence",

        items: [
          {
            title: "AI Development",
            description:
              "Build intelligent applications powered by modern AI.",
            icon: Bot,
            href: "/services/ai-development",
            image: "/assets/navbar/services/ai-development.webp",
          },

          {
            title: "AI Automation",
            description:
              "Automate repetitive workflows and operations.",
            icon: Workflow,
            href: "/services/ai-automation",
            image: "/assets/navbar/services/ai-automation.webp",
          },

          {
            title: "Custom Chatbots",
            description:
              "AI assistants designed around your business.",
            icon: MessageSquare,
            href: "/services/custom-chatbots",
            image: "/assets/navbar/services/custom-chatbots.webp",
          },

          {
            title: "ML Model Development",
            description:
              "Custom predictive models built for your data.",
            icon: BrainCircuit,
            href: "/services/ml-development",
            image: "/assets/navbar/services/ml-model-development.webp",
          },
        ],
      },

      {
        title: "Product Engineering",

        items: [
          {
            title: "AI SaaS Development",
            description:
              "Turn AI ideas into scalable SaaS products.",
            icon: Sparkles,
            href: "/services/ai-saas-development",
            image: "/assets/navbar/services/ai-saas-development.webp",
          },

          {
            title: "Web & Software Development",
            description:
              "Modern full-stack products and platforms.",
            icon: Code2,
            href: "/services/software-development",
            image: "/assets/navbar/services/web-software-development.webp",
          },
        ],
      },
    ],
  },

  /* =========================================================
     SOLUTIONS
  ========================================================= */

  solutions: {
    title: "Solutions",
    description:
      "AI solutions designed around measurable business problems.",

    groups: [
      {
        title: "Customer & Sales",

        items: [
          {
            title: "24/7 AI Customer Support",
            description:
              "Intelligent customer assistance available around the clock.",
            icon: MessageSquare,
            href: "/solutions/customer-support",
            image:
              "/assets/navbar/solutions/ai-customer-support.webp",
          },

          {
            title: "AI Lead Qualification",
            description:
              "Automatically identify and qualify high-intent leads.",
            icon: Zap,
            href: "/solutions/lead-qualification",
            image:
              "/assets/navbar/solutions/ai-lead-qualification.webp",
          },

          {
            title: "WhatsApp AI Assistant",
            description:
              "Turn WhatsApp conversations into intelligent customer experiences.",
            icon: MessageSquare,
            href: "/solutions/whatsapp-ai",
            image:
              "/assets/navbar/solutions/whatsapp-ai-assistant.webp",
          },

          {
            title: "Sales Automation",
            description:
              "Automate repetitive sales processes and follow-ups.",
            icon: Workflow,
            href: "/solutions/sales-automation",
            image:
              "/assets/navbar/solutions/sales-automation.webp",
          },
        ],
      },

      {
        title: "Operations & Intelligence",

        items: [
          {
            title: "Business Process Automation",
            description:
              "Connect workflows, teams and systems with intelligent automation.",
            icon: Workflow,
            href: "/solutions/business-automation",
            image:
              "/assets/navbar/solutions/business-process-automation.webp",
          },

          {
            title: "AI Knowledge Assistant",
            description:
              "Give teams instant access to business knowledge and information.",
            icon: BrainCircuit,
            href: "/solutions/knowledge-assistant",
            image:
              "/assets/navbar/solutions/ai-knowledge-assistant.webp",
          },

          {
            title: "AI Recommendation Systems",
            description:
              "Deliver personalized recommendations powered by machine learning.",
            icon: Sparkles,
            href: "/solutions/recommendation-systems",
            image:
              "/assets/navbar/solutions/ai-recommendation.webp",
          },

          {
            title: "Custom AI Platforms",
            description:
              "Build tailored AI platforms around your unique business requirements.",
            icon: MonitorSmartphone,
            href: "/solutions/custom-platforms",
            image:
              "/assets/navbar/solutions/custom-ai-platforms.webp",
          },
        ],
      },
    ],
  },

  /* =========================================================
     EXPERTISE
  ========================================================= */

  expertise: {
    title: "Expertise",
    description:
      "The technologies behind intelligent systems.",

    groups: [
      {
        title: "AI Engineering",

        items: [
          {
            title: "Generative AI",
            description:
              "Build intelligent experiences powered by modern generative models.",
            icon: Sparkles,
            href: "/expertise/generative-ai",
            image:
              "/assets/navbar/Ai-development.jpg",
          },

          {
            title: "AI Agents",
            description:
              "Autonomous AI systems capable of reasoning and taking action.",
            icon: Bot,
            href: "/expertise/ai-agents",
            image:
              "/assets/navbar/expertise/ai-agents.webp",
          },

          {
            title: "RAG Systems",
            description:
              "Connect AI models with your private and trusted knowledge.",
            icon: Network,
            href: "/expertise/rag",
            image:
              "/assets/navbar/expertise/rag-systems.webp",
          },

          {
            title: "Machine Learning",
            description:
              "Data-driven models designed to solve real business problems.",
            icon: BrainCircuit,
            href: "/expertise/machine-learning",
            image:
              "/assets/navbar/expertise/machine-learning.webp",
          },
        ],
      },

      {
        title: "Advanced Systems",

        items: [
          {
            title: "Deep Learning",
            description:
              "Advanced neural networks for complex data and prediction tasks.",
            icon: BrainCircuit,
            href: "/expertise/deep-learning",
            image:
              "/assets/navbar/expertise/deep-learning.webp",
          },

          {
            title: "Computer Vision",
            description:
              "Enable software to understand and analyze visual information.",
            icon: MonitorSmartphone,
            href: "/expertise/computer-vision",
            image:
              "/assets/navbar/expertise/computer-vision.webp",
          },

          {
            title: "Predictive Analytics",
            description:
              "Turn business data into forecasts and actionable insights.",
            icon: Landmark,
            href: "/expertise/predictive-analytics",
            image:
              "/assets/navbar/expertise/predictive-analytics.webp",
          },

          {
            title: "Workflow Automation",
            description:
              "Design intelligent workflows that reduce manual operations.",
            icon: Workflow,
            href: "/expertise/workflow-automation",
            image:
              "/assets/navbar/expertise/workflow-automation.webp",
          },
        ],
      },
    ],
  },

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  industries: {
    title: "Industries",
    description:
      "AI applications tailored to your industry.",

    groups: [
      {
        title: "Industries We Serve",

        items: [
          {
            title: "Startups & SaaS",
            description:
              "Build and scale intelligent products for fast-moving teams.",
            icon: Rocket,
            href: "/industries/startups",
            image:
              "/assets/navbar/industries/startups-saas.webp",
          },

          {
            title: "Education",
            description:
              "AI-powered platforms for modern learning and education.",
            icon: GraduationCap,
            href: "/industries/education",
            image:
              "/assets/navbar/industries/education.webp",
          },

          {
            title: "Agriculture",
            description:
              "Use AI and data to improve agricultural decision-making.",
            icon: Building2,
            href: "/industries/agriculture",
            image:
              "/assets/navbar/industries/agriculture.webp",
          },

          {
            title: "Healthcare",
            description:
              "Intelligent technology for modern healthcare workflows.",
            icon: HeartPulse,
            href: "/industries/healthcare",
            image:
              "/assets/navbar/industries/healthcare.webp",
          },
        ],
      },

      {
        title: "Business",

        items: [
          {
            title: "Finance",
            description:
              "AI solutions for financial analysis, automation and operations.",
            icon: Landmark,
            href: "/industries/finance",
            image:
              "/assets/navbar/industries/finance.webp",
          },

          {
            title: "Retail & E-commerce",
            description:
              "Intelligent experiences for modern retail and commerce.",
            icon: ShoppingCart,
            href: "/industries/retail",
            image:
              "/assets/navbar/industries/retail-ecommerce.webp",
          },

          {
            title: "Professional Services",
            description:
              "Automate knowledge-intensive workflows and client operations.",
            icon: Building2,
            href: "/industries/professional-services",
            image:
              "/assets/navbar/industries/professional-services.webp",
          },

          {
            title: "SMEs",
            description:
              "Practical AI solutions designed for growing businesses.",
            icon: Building2,
            href: "/industries/smes",
            image:
              "/assets/navbar/industries/smes.webp",
          },
        ],
      },
    ],
  },

  /* =========================================================
     COMPANY
  ========================================================= */

  company: {
    title: "Company",
    description:
      "Get to know the people and work behind Mentroid.",

    groups: [
      {
        title: "Mentroid",

        items: [
          {
            title: "About Mentroid",
            description:
              "Learn about Mentroid, our capabilities and what we build.",
            href: "/about",
            image:
              "/assets/navbar/company/about.webp",
          },

          {
            title: "Our Work",
            description:
              "Explore the products, systems and experiences we have built.",
            href: "/work",
            image:
              "/assets/navbar/company/work.webp",
          },

          {
            title: "Our Team",
            description:
              "Meet the people building intelligent technology at Mentroid.",
            href: "/team",
            image:
              "/assets/navbar/company/team.webp",
          },

          {
            title: "Our Process",
            description:
              "See how we move from ideas and problems to working solutions.",
            href: "/process",
            image:
              "/assets/navbar/company/process.webp",
          },
        ],
      },

      {
        title: "Connect",

        items: [
          {
            title: "Careers",
            description:
              "Join Mentroid and build the next generation of intelligent systems.",
            href: "/careers",
            image:
              "/assets/navbar/company/careers.webp",
          },

          {
            title: "Contact",
            description:
              "Talk with our team about your next AI or software project.",
            href: "/contact",
            image:
              "/assets/navbar/company/contact.webp",
          },
        ],
      },
    ],
  },
};