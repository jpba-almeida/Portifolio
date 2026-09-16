/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "João Paulo Brito de Almeida",
  title: "Olá, eu sou João Paulo",
  subTitle: emoji(
    "Analista de Dados com experiência prática em ambiente de hypergrowth internacional. Atuo transformando dados em insights claros e acionáveis, apoiando decisões estratégicas com análise técnica sólida. Busco contribuir com projetos reais em escala e aprender com times experientes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NKgPhquSwciv-V2d8C629rgugKV6VNFD/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/jpba-almeida",
  linkedin: "https://linkedin.com/in/joão-paulo-almeida",
  gmail: "jpbdalmeida@gmail.com",
  display: true
};

const skillsSection = {
  title: "Minhas Habilidades",
  subTitle: "ANALISTA DE DADOS COM FOCO EM PYTHON, SQL E VISUALIZAÇÃO",
  skills: [
    emoji(
      "⚡ Análise de dados e transformação em insights acionáveis para negócios"
    ),
    emoji(
      "⚡ Desenvolvimento de dashboards e visualizações interativas com Power BI/Tableau"
    ),
    emoji("⚡ Manipulação de dados com Python (pandas, NumPy) e SQL avançado"),
    emoji("⚡ Implementação de soluções end-to-end de ciência de dados")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    }
  ],
  display: true
};
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidade Federal de Pelotas (UFPel)",
      logo: require("./assets/images/ufpel.png"),
      subHeader: "Bacharelado em Ciência da Computação ",
      duration: "2019 – 2025",
      desc: "Bolsista de Pesquisa CNPq/MCTI/SEMP em Inteligência Artificial e Processamento de Linguagem Natural. Desenvolvimento de pesquisa pioneira em Análise de Sentimento Baseada em Aspectos (ABSA) aplicando arquiteturas Transformer.",
      descBullets: [
        "Pesquisa Avançada em NLP: Implementação pioneira do mecanismo LCF (Local Context Focus) para análise de sentimentos em português brasileiro, sendo o primeiro trabalho a adaptar esta técnica para datasets brasileiros.",
        "Modelos Transformer: Fine-tuning de modelos BERT (BERTimbau) para classificação de aspectos e polaridade em reviews de produtos, alcançando accuracy superior a 85% em validação cruzada.",
        "Análise de Dados em Escala: Processamento e análise de grandes volumes de dados textuais (+50k amostras) com técnicas de limpeza, pré-processamento e feature engineering específicas para NLP.",
        "Metodologia Científica: Aplicação completa do método científico: revisão bibliográfica, formulação de hipóteses, coleta de dados, experimentação e análise de resultados com métricas robustas.",
        "Stack Técnico Especializado: Python, PyTorch, Transformers (Hugging Face), spaCy, pandas, scikit-learn, SQL, Docker, Jupyter Notebooks.",
        "Disciplinas Relevantes: Estatística Computacional, Banco de Dados, Mineração de Dados, Machine Learning, Processamento de Linguagem Natural, Inteligência Artificial, Aprendizado de Máquina."
      ]
    }
  ]
};
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Análise de Dados & Python",
      progressPercentage: "90%"
    },
    {
      Stack: "SQL & Bancos de Dados",
      progressPercentage: "85%"
    },
    {
      Stack: "Visualização de Dados",
      progressPercentage: "80%"
    },
    {
      Stack: "Estatística & Machine Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "Desenvolvimento Web",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Desenvolvedor Júnior – Data & Analytics",
      company: "BYJU'S Learning",
      companylogo: require("./assets/images/by.jpg"), // Certifique-se de ter esta logo
      date: "2022 –  2024 ",
      desc: "Atuação na maior empresa global de tecnologia educacional (EdTech), em ambiente de rápido crescimento (hypergrowth) e operação internacional.",
      descBullets: [
        "Extração, limpeza e integração de dados de múltiplas fontes para consolidar a visão analítica do negócio.",
        "Desenvolvimento de scripts em Python e automações para otimizar processos manuais de dados, aumentando a eficiência da equipe.",
        "Criação de dashboards e relatórios no Power BI/Tableau para monitoramento de KPIs e suporte à tomada de decisão estratégica.",
        "Análise contínua de métricas de produto e marketing para identificar tendências, oportunidades de melhoria e insights acionáveis.",
        "Colaboração direta com equipes de produto, marketing e negócio em um ambiente internacional, traduzindo necessidades em soluções de dados."
      ]
    },
    {
      role: "Estagiário de Análise de Dados",
      company: "BYJU'S Learning",
      companylogo: require("./assets/images/by.jpg"), // Certifique-se de ter esta logo
      date: "2022",
      desc: "Primeira experiência em análise de dados, apoiando a equipe de Subject Matter Experts na interpretação de dados educacionais.",
      descBullets: [
        "Coleta, tratamento e análise de dados de desempenho de alunos e cursos para apoiar decisões pedagógicas e estratégicas.",
        "Contribuição para a criação de dashboards e relatórios que monitoravam o engajamento e a eficácia dos programas educacionais.",
        "Identificação de padrões e tendências nos dados que apontavam oportunidades de otimização na experiência de aprendizado."
      ]
    }
  ]
};

const bigProjects = {
  title: "Projetos de Análise de Dados",
  subtitle: "PROJETOS DESTAQUE EM ANÁLISE DE DADOS E DATA SCIENCE",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Sistema de Dashboards Analíticos",
      projectDesc:
        "Desenvolvimento de sistema completo de dashboards para análise de métricas de negócio com Power BI e Python.",
      footerLink: [
        {
          name: "Ver Código",
          url: "https://github.com/jpba-almeida/dashboards-analytics"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Pipeline de Dados ETL/ELT",
      projectDesc:
        "Pipeline automatizado para coleta, transformação e análise de dados usando Python, SQL e Airflow.",
      footerLink: [
        {
          name: "Ver Código",
          url: "https://github.com/jpba-almeida/data-pipeline"
        }
      ]
    },
    {
      image: require("./assets/images/machine-learning.png"),
      projectName: "Modelo Preditivo para Engajamento",
      projectDesc:
        "Modelo de machine learning para prever engajamento de usuários baseado em dados históricos.",
      footerLink: [
        {
          name: "Ver Projeto",
          url: "https://github.com/jpba-almeida/ml-engagement"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certificações e Declarações 🏆"),
  subtitle: "CERTIFICAÇÕES RECONHECIDAS E Declarações PROFISSIONAIS",

  achievementsCards: [
    {
      title: "IBM Python for Data Science, AI & Development",
      subtitle: "Coursera - Certificado Técnico IBM",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://www.coursera.org/account/accomplishments/verify/6U0XIGDZWS1E"
        }
      ]
    },
    {
      title: "Google Data Analytics: Foundations",
      subtitle: "Coursera - Google Career Certificate",
      image: require("./assets/images/google-logo.png"),
      imageAlt: "Google Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://www.coursera.org/account/accomplishments/verify/7OD60V4QAN3L"
        }
      ]
    },
    {
      title: "Álgebra Linear e Ciência de Dados",
      subtitle: "FGV - Fundação Getulio Vargas",
      image: require("./assets/images/FGV.png"),
      imageAlt: "FGV Certification Logo",
      footerLink: [
        {
          name: "Ver declaração",
          url: "https://drive.google.com/file/d/10_IjopbXn-uj6X1lAExAIfQ6PTdlAcUL/view?usp=sharing"
        }
      ]
    },
    {
      title: "SQL - Structured Query Language",
      subtitle: "FGV - Fundação Getulio Vargas",
      image: require("./assets/images/FGV.png"),
      imageAlt: "FGV Certification Logo",
      footerLink: [
        {
          name: "Ver declaração",
          url: "https://drive.google.com/file/d/15SOnY07U6sWYCTc5c0Z-lEWjvjqS3dnv/view?usp=sharing"
        }
      ]
    },
    {
      title: "Tópicos em Machine Learning",
      subtitle: "FGV - Fundação Getulio Vargas",
      image: require("./assets/images/FGV.png"),
      imageAlt: "FGV Certification Logo",
      footerLink: [
        {
          name: "Ver declaração",
          url: "https://drive.google.com/file/d/1hM5hOUDc18eRMY5clmyg5--XkHcOuOpg/view?usp=sharing"
        }
      ]
    },
    {
      title:
        "Análise de Negócios no Desenvolvimento de Soluções Baseadas em Dados",
      subtitle: "ENAP - Escola Nacional de Administração Pública",
      image: require("./assets/images/enap.png"),
      imageAlt: "ENAP Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://drive.google.com/file/d/1_-KftoqImXYL5xwS-82EZ6xLfCngldtZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Big Data em Apoio à Tomada de Decisão",
      subtitle: "ENAP - Escola Nacional de Administração Pública",
      image: require("./assets/images/enap.png"),
      imageAlt: "ENAP Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://drive.google.com/file/d/1P6aOKw9sOH73yoorkGntav3ZQQheYgxJ/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Excel Avançado",
      subtitle: "ENAP - Escola Nacional de Administração Pública",
      image: require("./assets/images/enap.png"),
      imageAlt: "ENAP Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://drive.google.com/file/d/16qVvef-ikhVQpNWiwDAlCXKN10L6oJF0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Visualização de Dados Aplicada à Transformação Digital",
      subtitle: "ENAP - Escola Nacional de Administração Pública",
      image: require("./assets/images/enap.png"),
      imageAlt: "ENAP Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://drive.google.com/file/d/1Va57loLHuhTm2zTxrJpALHWZivKVZdMK/view?usp=sharing"
        }
      ]
    },
    {
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp - Certificação de Desenvolvimento Front-end",
      image: require("./assets/images/freecodecamp.png"),
      imageAlt: "freeCodeCamp Certification Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://freecodecamp.org/certification/jpbdalmeida/responsive-web-design"
        }
      ]
    },
    {
      title: "Aumento de 40% em Engajamento",
      subtitle: "BYJU'S FutureSchool Brasil",
      image: require("./assets/images/byjus.png"),
      imageAlt: "Engagement Achievement",
      footerLink: [
        {
          name: "Case Study",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Artigos sobre Análise de Dados",
  subtitle: "COMPARTILHANDO CONHECIMENTOS EM DATA SCIENCE E ANÁLISE DE DADOS",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "#",
      title: "Análise de Dados para Decisões de Negócio",
      description:
        "Como transformar dados brutos em insights valiosos para tomada de decisão empresarial."
    }
  ],
  display: false
};

const talkSection = {
  title: "APRESENTAÇÕES",
  subtitle: emoji("COMPARTILHANDO CONHECIMENTO SOBRE ANÁLISE DE DADOS 📊"),
  talks: [
    {
      title: "Transformando Dados em Decisões",
      subtitle: "Workshop sobre análise de dados para negócios",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "CONVERSAS SOBRE DATA SCIENCE E TECNOLOGIA",
  podcast: ["#"],
  display: false
};

const resumeSection = {
  title: "Currículo",
  subtitle: "Baixe meu currículo completo para mais detalhes",
  display: true
};

const contactInfo = {
  title: emoji("Entre em Contato ☎️"),
  subtitle:
    "Interessado em projetos de análise de dados ou oportunidades? Minha caixa de entrada está aberta!",
  number: "+55 (11) 98207-1854",
  email_address: "jpbdalmeida@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const isHireable = true;

export {
  openSource,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
