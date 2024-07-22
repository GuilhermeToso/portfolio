import {DataInterface} from "@/interface/global";

export const data: DataInterface = {
    "header": {
        "sections": [
            {
                "en": "home",
                "pt": "início"
            },
            {
                "en": "about",
                "pt": "sobre"
            },
            {
                "en": "services",
                "pt": "serviços"
            },
            {
                "en": "projects",
                "pt": "projetos"
            },
            {
                "en": "timeline",
                "pt": "cronograma"
            },
            {
                "en": "contact",
                "pt": "contato"
            }
        ]
    },
    "home": {
        "jobTitle": {
            "en": "Software | AI Engineer",
            "pt": "Engenheiro de Software | IA"
        },
        "description": {
            "en":
                "I am a Software Engineer and AI expert with experience in the social media industry. Driven by innovation and solutions.",
            "pt": "Eu sou um Engenheiro de Software e especialista em IA com experiência na indústria de mídia social. Impulsionado por inovação e soluções."},
        "cvButton": {
            "en": "Download CV",
            "pt": "Baixar CV"
        },
        "callButton": {
            "en": "Schedule a call",
            "pt": "Agendar reunião"
        }
    },
    "about": {
        "title": {
            "en": "About Me",
            "pt": "Sobre Mim"
        },
        "description": {
            "en": "<p>Hello, my name is Guilherme Toso, and I am a passionate Software and AI Engineer with experience in the social media and IoT industries, entrepreneurship, and AI research; highlighting my skills in technology, innovation, and problem-solving.</p>" +
                "<p class='mt-4'>My journey in technology began with a fascination for intelligent systems and their behaviors. This is why I'm always aiming for improvement to innovate and provide solutions through intelligent software that makes life easier.</p>" +
                "<p class='mt-4'>Driven by a desire to make a positive impact through technology, I am always looking for new opportunities. Feel free to reach out if you're interested in collaborating or learning more about my work.</p>",
            "pt": "<p>Olá, meu nome é Guilherme Toso, e sou um apaixonado Engenheiro de Software e IA com experiência nas indústrias de mídia social e IoT, empreendedorismo e pesquisa em IA; destacando minhas habilidades em tecnologia, inovação e resolução de problemas.</p>" +
                "<p class='mt-4'>Minha jornada na tecnologia começou com uma fascinação por sistemas inteligentes e seus comportamentos. É por isso que estou sempre buscando melhorar para inovar e fornecer soluções através de softwares inteligentes que tornam a vida mais fácil.</p>" +
                "<p class='mt-4'>Impulsionado pelo desejo de causar um impacto positivo por meio da tecnologia, estou sempre em busca de novas oportunidades. Sinta-se à vontade para entrar em contato se estiver interessado em colaborar ou aprender mais sobre meu trabalho.</p>"
        },
        "hobbies": [
            {
                "en": "Reading",
                "pt": "Leitura"
            },
            {
                "en":"Gym",
                "pt": "Academia"
            },
            {
                "en": "Running",
                "pt": "Corrida"
            }
        ]

    },
    "services": {
        "title": {
            "en": "What I do",
            "pt": "Serviços"
        },
        "list": [
            {
                "title": {
                    "en": "AI Engineering",
                    "pt": "Engenharia de IA"
                },
                "content": {
                    "en": "ML/DL Model Development, Chatbots, Recommendation Systems, NLP, Computer Vision, LLM Applications, Data Analysis, Data Interpretation, Data Visualization",
                    "pt": "Desenvolvimento de Modelos ML/DL, Chatbots, Sistemas de Recomendação, PNL, Visão Computacional, Aplicações LLM, Análise de Dados, Interpretação de Dados, Visualização de Dados"
                }
            },
            {
                "title": {
                    "en": "Software Engineering",
                    "pt": "Engenharia de Software"
                },
                "content": {
                    "en": "Full-Stack Development, Web Development, API Development, Database Design & Management, AWS Cloud Computing, CI/CD, DevOps, Requirement Engineering, Software Architecture",
                    "pt": "Desenvolvimento Full-Stack, Desenvolvimento Web, Desenvolvimento de API, Design e Gerenciamento de Banco de Dados, Computação em Nuvem na AWS, CI/CD, DevOps, Engenharia de Requisitos, Arquitetura de Software"

                }
            }
        ]
    },
    "projects": {
        "title": {
            "en": "Projects",
            "pt": "Projetos"
        },
        "list": [
            {
                "domain": {
                    "en": "Professional",
                    "pt": "Profissional"
                },
                "content":  [
                    {
                        id: 1,
                        title: {
                            "en": "Got U Challenge",
                            "pt": "Got U Challenge"

                        },
                        shortDescription: {
                            "en": "Gamified Video Platform",
                            "pt": "Plataforma de Vídeo Gamificada"
                        },
                        image: '/images/got-u-challenge.png',
                        description: {
                            "en": '<p class="my-1">Got U Challenge is an innovative social media platform designed to engage users through a gamified dynamic of video-pair challenges, enabling creators to produce video challenges, while voters can support their favorite content thought votes, offering a fun environment and talent discovery.</p> <p class="mt-1">As the lead Software Developer, I oversee the full lifecycle of platform development—from initial system design and requirements gathering to development, testing, deployment, and ongoing maintenance. My full-stack responsibilities extend to building and maintaining the frontend, backend and database. The infrastructure is robust, utilizing AWS services to ensure scalability and security. Currently, the platform is incorporating search functionality and a cutting-edge AI recommendation system to enhance user engagement and content discoverability.</p>',
                            "pt": '<p class="my-1">Got U Challenge é uma plataforma de mídia social inovadora projetada para envolver os usuários por meio de uma dinâmica gamificada de desafios de pares de vídeo, permitindo que os criadores produzam desafios de vídeo, enquanto os votantes podem apoiar seu conteúdo favorito por meio de votos, oferecendo um ambiente divertido e descoberta de talentos.</p> <p class="mt-1">Como desenvolvedor de software líder, supervisiono o ciclo de vida completo do desenvolvimento da plataforma - desde o design inicial do sistema e coleta de requisitos até o desenvolvimento, teste, implantação e manutenção contínua. Minhas responsabilidades full-stack se estendem à construção e manutenção do frontend, backend e banco de dados. A infraestrutura é robusta, utilizando serviços da AWS para garantir escalabilidade e segurança. Atualmente, a plataforma está incorporando funcionalidade de busca e recomendação por IA para aprimorar o engajamento do usuário e descoberta de conteúdo.</p>'
                        },
                        jobTitle: {
                            "en": "Software Developer",
                            "pt": "Desenvolvedor de Software"
                        },
                        contractType: {
                            "en": "Employment: Full-time",
                            "pt": "Emprego: Tempo integral"
                        },
                        company: {
                            "en": "Company: GrumpyLabz",
                            "pt": "Empresa: GrumpyLabz"
                        },
                        link: 'https://gotuchallenge.com',
                        duration: {
                            "en": "2023-May To Present",
                            "pt": "2023-Maio Até Presente"
                        },
                        techStack: {
                            frontend: ['Nextjs', 'TailwindCSS', 'TypeScript'],
                            backend: ['NestJs', 'TypeScript'],
                            tools: ['Docker', "FFmpeg", "Git", "GitHub", "Jira", "Figma"],
                            database: ['PostgreSQL'],
                            infrastructure: ['AWS ECS', 'AWS EC2', 'AWS ECR', 'AWS Fargate', 'AWS S3', 'AWS RDS', 'AWS CodePipeline', 'AWS VPC', 'AWS CloudFront', 'AWS Route 53', "AWS Secrets Manager", 'AWS IAM', 'AWS KMS', "AWS Cost Explorer", 'AWS Cost and Usage Report'],
                            search: ['Typesense'],
                            services: ['BunnyCDN', 'FusionAuth'],
                            recommendation: ['Typesense', 'Tensorflow'],
                        }
                    },
                    {
                        id: 2,
                        title: {
                            "en": "ByteNana",
                            "pt": "ByteNana"
                        },
                        shortDescription: {
                            "en": "IoT projects",
                            "pt": "Projetos IoT"
                        },
                        image: '/images/byte_nana.jpeg',
                        description: {
                            "en": '<p class="my-1">I contributed to three projects at ByteNana: WiseTec, RedGoal Light, and HomeShine.</p>' +
                                '<ul class="list-disc pl-5"><li class="reset-list-item">At WiseTec, an IoT project, I was responsible for bug fixes and refactoring the business logic related to telemetry preprocessing on the backend.</li>' +
                                '<li  class="reset-list-item">At RedGoal Light, an interactive sports score light, I was responsible for developing the frontend of the product installer.</li>' +
                                '<li  class="reset-list-item">At HomeShine, a C2C app focused on cleaning services, I was responsible for reviewing the app\'s design, usability, and code.</li></ul>',
                            "pt": '<p class="my-1">Eu contribuí para três projetos na ByteNana: WiseTec, RedGoal Light e HomeShine.</p>' +
                                '<ul class="list-disc pl-5"><li class="reset-list-item">No WiseTec, um projeto IoT, fui responsável por correções de bugs e refatoração da lógica de negócios relacionada ao pré-processamento de telemetria no backend.</li>' +
                                '<li  class="reset-list-item">No RedGoal Light, um placar esportivo interativo, fui responsável pelo desenvolvimento do frontend do instalador do produto.</li>' +
                                '<li  class="reset-list-item">>No HomeShine, um aplicativo C2C focado em serviços de limpeza, fui responsável por revisar o design do aplicativo, a usabilidade e o código.</li></ul>'
                        },
                        jobTitle: {
                            "en": "Software Developer",
                            "pt": "Desenvolvedor de Software"
                        },
                        contractType: {
                            "en": "Employment: Contract",
                            "pt": "Emprego: Contrato"
                        },
                        company: {
                            "en": "Company: ByteNana",
                            "pt": "Empresa: ByteNana"
                        },
                        duration: {
                            "en": "2024-Jan To 2024-Mar",
                            "pt": "2024-Jan Até 2024-Mar"
                        },
                        techStack: {
                            frontend: ['ReactJS', 'TailwindCSS', 'TypeScript'],
                            backend: ['NodeJS', 'AdonisJs', 'TypeScript', 'Python'],
                            tools: ['Docker', 'Git', 'GitHub', 'Confluence', 'Jira', 'Figma'],
                            iot: ['ThingsBoard'],
                            infrastructure: ['Digital Ocean'],
                        }

                    }
                ],
            }, {
                "domain": {
                    "en": "Personal",
                    "pt": "Pessoal"
                },
                "content":  [
                    {
                        id: 3,
                        title: {
                            "en": "AISE",
                            "pt": "AISE"
                        },
                        shortDescription: {
                            "en": "Adaptive Intelligence System through Entropy",
                            "pt": "Sistema de Inteligência Adaptativa por Entropia"
                        },
                        image: '/images/aise.png',
                        description: {
                            "en": '<p class="my-1">AISE, which stands for <strong>Adaptive Intelligence System through Entropy</strong>, is an innovative Artificial Intelligence framework' +
                                ' based on EREL (Entropic-Reduction Evolving Learning). AISE is designed to learn, plan, and act autonomously through principles of energy equilibrium and' +
                                ' entropy reduction. Therefore, AISE focuses on a <i>learn-to-act-to-survive</i> approach, as opposed to the <i>learn-to-act</i> approach predominant' +
                                ' in most of today’s AI models.</p>' +
                                '<p class="mt-1">AISE also learns to model world states and inherently develops the ability to define efficient energy-gain states as goals to be achieved.' +
                                ' Consequently, AISE begins to act autonomously by setting objectives independently with the aim of survival.</p>' +
                                '<p class="mt-1">EREL, a blend of Reinforcement Learning, Genetic Algorithm, energy management, and entropy reduction concepts, enables AISE to make' +
                                ' energy-efficient decisions and evolve the agent’s capabilities over time. This results in a system that is both effective and efficient.</p>',
                            "pt": '<p class="my-1">AISE, que significa <strong>Sistema de Inteligência Adaptativa por Entropia</strong>, é um framework inovador de Inteligência Artificial' +
                                ' baseado em EREL (Aprendizado Evolutivo por Redução Entrópica). AISE é projetado para aprender, planejar e agir autonomamente por meio de princípios de equilíbrio de energia e' +
                                ' redução de entropia. Portanto, AISE se concentra em uma abordagem <i>aprender-para-agir-para-sobreviver</i>, em oposição à abordagem <i>aprender-para-agir</i> predominante' +
                                ' na maioria dos modelos de IA atuais.</p>' +
                                '<p class="mt-1">AISE também aprende a modelar estados do mundo e desenvolve inerentemente a capacidade de definir estados do mundo com retorno energético eficientes como objetivos a serem alcançados.' +
                                ' Consequentemente, AISE começa a agir autonomamente ao definir objetivos de forma independente com o intuito de sobreviver.</p>' +
                                '<p class="mt-1">EREL, uma mistura de Aprendizado por Reforço, Algoritmo Genético, gerenciamento de energia e conceitos de redução de entropia, permite que AISE tome decisões' +
                                ' energeticamente eficientes e evolua as capacidades do agente ao longo do tempo. Isso resulta em um sistema eficaz e eficiente.</p>'
                        },
                        jobTitle: {
                            "en": "Inventor",
                            "pt": "Inventor"
                        },
                        duration: {
                            "en": '2020 to Present',
                            'pt': '2020 Até Presente'
                        },
                        status: {
                            "en": "In Progress - Mathematical Documentation",
                            "pt": "Em Progresso - Documentação Matemática"
                        },
                        techStack: {
                            language: ["Python"],
                            environment: [
                                "Pygame"
                            ],
                            model: [
                                "Tensorflow",
                            ],
                            frontend: [
                                "NextJs", "TailwindCSS", "TypeScript",
                            ],
                            database: [
                                "PostgreSQL"
                            ],
                            tools: [
                                "Docker", "Git", "GitHub"
                            ]
                        }
                    },
                    {
                        id: 4,
                        title: {
                            "en": "CKata",
                            "pt": "CKata"
                        },
                        shortDescription: {
                            "en": "C++ Algorithms Repository",
                            "pt": "Repositório de Algoritmos C++"
                        },
                        image: '/images/ckata.png',
                        description: {
                            "en": '<p class="my-1">CKata is a C++ repository containing a collection of algorithms for various purposes, including search, graph theory, keyword matching, and more.</p>' +
                                '<p class="mt-1">The objective of CKata is to practice and learn the logical aspects of algorithms, implement programming best practices, ' +
                                'expand knowledge of algorithm portfolios, and learn the C++ language.</p>',
                            "pt": '<p class="my-1">CKata é um repositório C++ que contém uma coleção de algoritmos para diversos fins, incluindo busca, teoria dos grafos, correspondência de palavras-chave e muito mais.</p>' +
                                '<p class="mt-1">O objetivo do CKata é praticar e aprender os aspectos lógicos dos algoritmos, implementar as melhores práticas de programação, ' +
                                'expandir o conhecimento de portfólios de algoritmos e aprender a linguagem C++.</p>'
                        },
                        jobTitle: {
                            "en": "Developer",
                            "pt": "Desenvolvedor"
                        },
                        duration: {
                            "en": '2024 to Present',
                            "pt": '2024 Até Present'
                        },
                        status: {
                            "en": "In Progress",
                            "pt": "Em Progresso"

                        },
                        techStack: {
                            language: ["C++"],
                        }
                    }
                ]

            }, {
                "domain": {
                    "en": "Business",
                    "pt": "Negócios"
                },
                "content":  [
                    {
                        id: 5,
                        title: {
                            "en": "ShopChat",
                            "pt": "ShopChat"
                        },
                        shortDescription: {
                            "en": "AI Assistant for Marketplace",
                            "pt": "Assistente de IA para Marketplace"
                        },
                        image: '/images/shopchat.png',
                        description: {
                            "en": '<p class="my-1">ShopChat is a innovative marketplace platform that combines the best of Artificial Intelligence and E-commerce. ' +
                                'ShopChat enables users to chat with a virtual assistant to find products, get recommendations, and make purchases.</p>' +
                                '<p class="mt-1">ShopChat is designed to provide an incredible and natural shopping experience, offering a personalized and interactive environment for users to discover products and services.</p>',
                            "pt": '<p class="my-1">ShopChat é uma plataforma de mercado inovadora que combina o melhor da Inteligência Artificial e do E-commerce. ' +
                                'ShopChat permite que os usuários conversem com um assistente virtual para encontrar produtos, obter recomendações e fazer compras.</p>' +
                                '<p class="mt-1">ShopChat é projetado para fornecer uma experiência de compra incrivel e natural, oferecendo um ambiente personalizado e interativo para os usuários descobrirem produtos e serviços.</p>'
                        },
                        jobTitle: {
                            "en": "Founder",
                            "pt": "Fundador"
                        },
                        duration: {
                            "en": '2024 to Present',
                            "pt": '2024 Até Presente'
                        },
                        status: {
                            "en": "In Progress",
                            "pt": "Em Progresso"
                        },
                        techStack: {
                            frontend: ['NextJs', 'TailwindCSS', 'TypeScript', 'Flutter'],
                            backend: ['NestJs', 'LangChain', 'TypeScript'],
                            search: ['Typesense'],
                            tools: ['Docker', 'Git', 'GitHub', 'Figma', 'Jira'],
                            database: ['PostgreSQL', 'MongoDB'],
                            services: ['OpenAI'],
                            infrastructure: ['undefined'],
                        }
                    },
                    {
                        id: 6,
                        title: {
                            "en": "Wiz",
                            "pt": "Wiz"
                        },
                        shortDescription: {
                            "en": "AI Media Editor",
                            "pt": "Editor de Mídia por IA"
                        },
                        image: '/images/wiz.png',
                        description: {
                            "en": '<p class="my-1">Wiz is an intelligent media editor platform that enables users to create and edit videos, images, and audio files through an AI chatbot.</p>' +
                                '<p class="mt-1">Wiz is designed to provide an interactive and user-friendly environment for users to create and edit media content without the need for specialized software or technical skills.</p>',
                            "pt": '<p class="my-1">Wiz é uma plataforma de editor de mídia inteligente que permite aos usuários criar e editar vídeos, imagens e arquivos de áudio por meio de um chatbot de IA.</p>' +
                                '<p class="mt-1">Wiz é projetado para fornecer um ambiente interativo e amigável para os usuários criarem e editarem conteúdo de mídia sem a necessidade de software especializado ou habilidades técnicas.</p>'
                        },
                        jobTitle: {
                            "en": "Founder",
                            "pt": "Fundador"
                        },
                        duration: {
                            "en": '2024 to Present',
                            "pt": '2024 Até Presente'
                        },
                        status: {
                            "en": "In Progress",
                            "pt": "Em Progresso"
                        },
                        techStack: {
                            frontend: ['NextJs', 'TailwindCSS', 'TypeScript', 'Flutter'],
                            backend: ['NestJs', 'LangChain', 'TypeScript'],
                            tools: ['Docker', 'Git', 'GitHub', 'Figma', 'Jira', "FFmpeg"],
                            database: ['PostgreSQL', 'MongoDB'],
                            services: ['OpenAI'],
                            infrastructure: ['undefined'],
                        }
                    }
                ]
            }
           ]
    },
    "skills": {
        "title": {
            "en": "Skills",
            "pt": "Habilidades"
        },
        "subTitle": {
            "en": "My technical level",
            "pt": "Meu nível técnico"
        },
        "domains": [
            {
                "title": {
                    "en": "AI Engineering",
                    "pt": "Engenharia de IA"
                },
                "content": [{
                    "title": {
                        "en": "Libraries",
                        "pt": "Bibliotecas"
                    },
                    "list": ["Tensorflow", "Keras", "PyTorch", "Scikit-learn", "Numpy", "Pandas", "OpenCV, PySpark", "Matplotlib", "SeaBorn"]
                },{
                    "title": {
                        "en": "Tools",
                        "pt": "Ferramentas"
                    },
                    "list": ["OpenAI API", "Huggingface", "LangChain", "FastAPI", "Lucidchart"]
                    }, {
                    "title": {
                        "en": "Environment",
                        "pt": "Ambiente"
                    },
                    "list": ["Jupyter Notebook", "PyCharm", "DataSpell"]
                }
            ]
            },
            {
                "title": {
                    "en": "Web Development",
                    "pt": "Desenvolvimento Web"
                },
                "content": [{
                    "title": {
                        "en": "Frontend",
                        "pt": "Frontend"
                    },
                    "list": ["HTML", "CSS", "Javascript", "ReactJS", "NextJS", "TailwindCSS", "TypeScript"]
                },
                {
                    "title": {
                        "en": "Backend",
                        "pt": "Backend"
                    },
                    "list": ["NodeJS", "ExpressJS", "NestJS", "TypeScript", "JavaScript", "Python", "FastAPI", "Typesense", "DrizzleORM"]
                },{
                    "title": {
                        "en": "Database",
                        "pt": "Banco de Dados"
                    },
                    "list": ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"]
                }, {
                    "title": {
                        "en": "Environment",
                        "pt": "Ambiente"
                    },
                    "list": ["WebStorm", "PyCharm"]
                }
                ]
            },
            {
                "title": {
                    "en": "DevOps",
                    "pt": "DevOps"
                },
                "content": [{
                    "title": {
                        "en": "Tools",
                        "pt": "Ferramentas"
                    },
                    "list": ["Docker", "GitHub Actions", "AWS CodePipeline"]
                },
                {
                    "title": {
                        "en": "Infrastructure",
                        "pt": "Infraestrutura"
                    },
                    "list": ["AWS", "Digital Ocean", "Vercel", "BunnyCDN"]
                },{
                    "title": {
                        "en": "Monitoring",
                        "pt": "Monitoramento"
                    },
                    "list": ["AWS CloudWatch"]
                }
                ]

            },
            {
                "title": {
                    "en": "Software Engineering",
                    "pt": "Engenharia de Software"
                },
                "content": [
                    {
                        "title": {
                            "en": "Tools",
                            "pt": "Ferramentas"
                        },
                        "list": ["Jira", "Confluence", "Figma", "Lucidchart"]
                    },
                    {
                        "title": {
                            "en": "Languages",
                            "pt": "Linguagens"
                        },
                        "list": ["Python", "JavaScript", "TypeScript", "C++"]
                    },
                    {
                        "title": {
                            "en": "Version Control",
                            "pt": "Controle de Versão"
                        },
                        "list": ["Git", "GitHub"]
                    },
                    {
                        "title": {
                            "en": "Methodologies",
                            "pt": "Metodologias"
                        },
                        "list": ["Agile", "Scrum"]
                    }
                ]

            }

        ]
    },
    "timeline": {
        "title": {
            "en": "Timeline",
            "pt": "Linha do Tempo"
        },
        "list": [
            {
                "time": {
                    "en": "May - 2024",
                    "pt": "Maio - 2024"
                },
                "title": {
                    "en": "Wiz",
                    "pt": "Wiz"
                },
                "description": {
                    "en": "Idealing and developing an AI media editor platform that enables users to create and edit videos, images, and audio files through an AI chatbot.",
                    "pt": "Idealizando e desenvolvendo uma plataforma de editor de mídia por IA que permite aos usuários criar e editar vídeos, imagens e arquivos de áudio por meio de um chatbot de IA."
                }
        },
            {
                "time": {
                    "en": "April - 2024",
                    "pt": "Abril - 2024"
                },
                "title": {
                    "en": "ShopChat",
                    "pt": "ShopChat"
                },
                "description": {
                    "en": "Founding an innovative marketplace platform that combines the best of Artificial Intelligence and E-commerce.",
                    "pt": "Fundando uma plataforma de mercado inovadora que combina o melhor da Inteligência Artificial e do E-commerce."
                }
            },
            {
                "time": {
                    "en": "Jan-2024 to Mar-2024",
                    "pt": "Jan-2024 Até Mar-2024"
                },
                "title": {
                    "en": "ByteNana",
                    "pt": "ByteNana"
                },
                "description": {
                    "en": "Contributed to three projects at ByteNana: WiseTec, RedGoal Light, and HomeShine.",
                    "pt": "Contribui para três projetos na ByteNana: WiseTec, RedGoal Light e HomeShine."
                }
            },
            {
                "time": {
                    "en": "2023-May to Present",
                    "pt": "2023-Maio Até Presente"
                },
                "title": {
                    "en": "Got U Challenge",
                    "pt": "Got U Challenge"
                },
                "description": {
                    "en": "Lead Software Developer for the innovative social media platform designed to engage users through a gamified dynamic of video-pair challenges.",
                    "pt": "Desenvolvedor de Software Líder para a plataforma de mídia social inovadora projetada para envolver os usuários por meio de uma dinâmica gamificada de desafios de pares de vídeo."
                }
            },
            {
                "time": {
                    "en": "July-2020",
                    "pt": "Julho-2020"
                },
                "title": {
                    "en": "Synchronization Analysis in Models of Coupled Oscillators",
                    "pt": "Análise de Sincronização em Modelos de Osciladores Acoplados"
                },
                "link": "https://link.springer.com/chapter/10.1007/978-3-030-58799-4_64",
                "description": {
                    "en": "ICCSA 2020 - International Conference on Computational Science and Its Applications",
                    "pt": "ICCSA 2020 - Conferência Internacional sobre Ciência Computacional e Suas Aplicações"
                }
            },
            {
                "time": {
                    "en": "2020 to Present",
                    "pt": "2020 Até Presente"
                },
                "title": {
                    "en": "AISE",
                    "pt": "AISE"
                },
                "description": {
                    "en": "Inventor of the Adaptive Intelligence System through Entropy.",
                    "pt": "Inventor do Sistema de Inteligência Adaptativa por Entropia."
                }
            },
            {
                "time": {
                    "en": "2019 to 2021",
                    "pt": "2019 Até 2021"
                },
                "title": {
                    "en": "MSc in Computer Science",
                    "pt": "Mestrado em Ciência da Computação"
                },
                "link": "https://repositorio.unesp.br/items/66b1db1b-f03c-4984-b16f-a3967cbde520",
                "description": {
                    "en": "Master's degree in Computer Science from the University of São Paulo.",
                    "pt": "Mestrado em Ciência da Computação pela Universidade de São Paulo."
                }
            },
            {
                "time": {
                    "en": "2018 to 2019",
                    "pt": "2018 Até 2019"
                },
                "title": {
                    "en": "Computer Science Researcher",
                    "pt": "Pesquisador em Ciência da Computação"
                },
                "description": {
                    "en": "Researcher in the field of Computer Science, focusing on AI and Machine Learning at the University of São Paulo.",
                    "pt": "Pesquisador na área de Ciência da Computação, com foco em IA e Aprendizado de Máquina na Universidade de São Paulo."
                }
            },
            {
                "time": {
                    "en": "2011 to 2017",
                    "pt": "2011 Até 2017"
                },
                "title": {
                    "en": "BSc in Physics",
                    "pt": "Bacharelado em Física"
                },
                "description": {
                    "en": "Bachelor's degree in Physics from the University of São Paulo.",
                    "pt": "Bacharelado em Física pela Universidade de São Paulo."
                }
            }
            ]
    },
    "contact": {
        "leftSide":[
            {
                "en": "Tell me",
                "pt": "Conte"
            },
            {
                "en": "your",
                "pt": "a sua"
            },
            {
                "en": "story",
                "pt": "história"
            },
            {
                "en": "and let's build it.",
                "pt": "e vamos construí-la."
            }
        ],
        "rightSide": {
            "title": {
                "en": "Get in touch",
                "pt": "Entre em contato"
            },
            "text": {
                "en": "or",
                "pt": "ou"
            },
            "button": {
                "en": "Schedule a call",
                "pt": "Agende uma reunião"
            }
        }
    },
    "blog": {
        "title": {
            "en": "Toso's Blog",
            "pt": "Blog do Toso"
        },
        "button":{
            "en": "Return Home",
            "pt": "Retornar ao Início"
        }

    }
}
