export default class Strings {
  private static readonly KEY = '@key:app-strings';

  static readonly VALUES = {
    br: {
      lang: 'br',
      me: 'Gabriel',
      helloThere: 'Olá visitante!',
      iAm: 'Sou um',
      fullstack: 'FullStack',
      fullstackResume:
        'Quem atua em todas as áreas da web, capaz de projetar e desenvolver um aplicativo completo',
      resume:
        'Minha paixão pelo desenvolvimento web me impulsiona a estar sempre atualizado com as tendências e tecnologias mais recentes',
      about: 'Saiba mais',
      profile: 'Perfil',
      services: 'Trabalho',
      contact: 'Contato',
      aboutMeTitle: 'Olá! Eu sou',
      aboutMeTitle2: ' e trabalho como desenvolvedor FullStack & IT Manager',
      aboutMeBody:
        'Meu objetivo é construir sistemas eficientes e escaláveis, que atendam às necessidades do usuário de forma rápida e confiável. Com habilidades em Node.js e frameworks como Express e Next.js, eu posso criar APIs RESTful, serviços web, e sistemas distribuídos para processamento de dados em grande escala.',
      aboutMeBody2:
        'Como um desenvolvedor FullStack, eu não limito minha atenção apenas ao backend. Eu valorizo uma compreensão completa do ciclo de desenvolvimento de software, incluindo a criação de interfaces de usuário intuitivas e eficazes, usando frameworks front-end como React. Eu posso trabalhar em equipe com outros desenvolvedores para entregar soluções completas e bem pensadas.',
      age: (new Date().getFullYear() - 2001).toString(),
      javascript: 'JavaScript',
      javascriptHelp:
        'JavaScript é uma linguagem de programação de alto nível usada principalmente em desenvolvimento web.',
      typescript: 'TypeScript',
      typescriptHelp:
        'TypeScript é uma linguagem de programação de código aberto que estende o JavaScript com recursos de tipagem estática e outras funcionalidades avançadas.',
      copy: 'Todos os direitos reservados.',
      css: 'CSS',
      cssHelp:
        'CSS é uma linguagem de estilo usada para tornar as páginas da web visualmente atraentes e agradáveis ao olhar.',
      webpack: 'Webpack',
      webpackHelp:
        'Webpack é uma ferramenta que ajuda a gerenciar dependências e empacotar arquivos JavaScript, CSS e imagens para projetos web modernos.',
      react: 'React',
      reactHelp:
        'React é uma biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis em páginas web.',
      backend: 'Backend',
      nodejs: 'Node.js',
      nodejsHelp:
        'Plataforma JavaScript para criar aplicações de servidor escaláveis e de alta performance.',
      express: 'Express',
      expressHelp:
        'Framework de servidor para Node.js que ajuda a criar APIs e aplicações web mais facilmente.',
      nextjs: 'Next.js',
      nextjsHelp:
        'Framework de React que permite criar aplicações web rápidas, escaláveis e com SSR (server-side rendering).',
      prisma: 'Prisma',
      prismaHelp:
        'ORM (Object-Relational Mapping) para Node.js que ajuda a conectar e gerenciar bancos de dados de forma eficiente.',
      websocket: 'WebSocket',
      websocketHelp:
        'Tecnologia de comunicação bidirecional entre cliente e servidor, usada em tempo real para chats, jogos, entre outros.',
      name: 'Nome',
      formContactExtra:
        'Por favor, entre em contato comigo por meio deste formulário, se preferir. Certifique-se de preencher as informações de contato válidas e atualizadas. Fornecer informações precisas me ajudará a responder adequadamente à sua mensagem. Obrigado!',
      email: 'Email',
      otherContact: 'Outro contato',
      message: 'Mensagem',
    },
    en: {
      lang: 'en',
      me: 'Gabriel',
      helloThere: 'Hello visitor!',
      iAm: 'I am a',
      fullstack: 'FullStack',
      fullstackResume:
        'Who works in all areas of the web, able to design and develop a complete application',
      resume:
        'My passion for web development drives me to always stay up-to-date with the latest trends and technologies',
      about: 'Learn more',
      profile: 'Profile',
      services: 'Work',
      backend: 'Backend',
      contact: 'Contact',
      aboutMeTitle: 'Hi there! I am',
      aboutMeTitle2: ' and work as a FullStack Developer & IT Manager',
      aboutMeBody:
        'My goal is to build efficient and scalable systems that meet user needs quickly and reliably. With skills in Node.js and frameworks like Express and Next.js, I can create RESTful APIs, web services, and distributed systems for processing large-scale data.',
      aboutMeBody2:
        "As a FullStack developer, I don't limit my attention to just the backend. I value a complete understanding of the software development life cycle, including creating intuitive and effective user interfaces using front-end frameworks like React. I can work in a team with other developers to deliver complete and well-thought-out solutions.",
      age: (new Date().getFullYear() - 2001).toString(),
      javascript: 'JavaScript',
      javascriptHelp:
        'JavaScript is a high-level programming language primarily used in web development.',
      typescript: 'TypeScript',
      typescriptHelp:
        'TypeScript is an open-source programming language that extends JavaScript with static typing features and other advanced functionalities.',
      copy: 'All rights reserved.',
      css: 'CSS',
      cssHelp:
        'CSS is a style language used to make web pages visually appealing and pleasing to the eye.',
      webpack: 'Webpack',
      webpackHelp:
        'Webpack is a tool that helps manage dependencies and bundle JavaScript, CSS, and image files for modern web projects.',
      react: 'React',
      reactHelp:
        'React is a JavaScript library for building interactive and reusable user interfaces on web pages.',
      nodejs: 'Node.js',
      nodejsHelp:
        'JavaScript platform for scalable and high-performance server applications.',
      express: 'Express',
      expressHelp:
        'Server framework for Node.js that helps to create APIs and web applications more easily.',
      nextjs: 'Next.js',
      nextjsHelp:
        'React framework that allows you to create fast, scalable web applications with server-side rendering.',
      prisma: 'Prisma',
      prismaHelp:
        'Object-Relational Mapping for Node.js that helps to connect and manage databases efficiently.',
      websocket: 'WebSocket',
      websocketHelp:
        'Bidirectional communication technology between client and server, used in real-time for chats, games, among others.',
      name: 'Name',
      formContactExtra:
        'Please, get in touch with me through this form, if you prefer. Make sure to fill in valid and up-to-date contact information. Providing accurate information will help me to properly respond to your message. Thank you!',
      email: 'Email',
      otherContact: 'Other contact',
      message: 'Message',
    },
  };

  public static get(lang?: 'br' | 'en') {
    if (!!lang) return Strings.VALUES[lang] ?? Strings.VALUES.br;
    const currentLang = localStorage.getItem(Strings.KEY);
    if (!currentLang) return Strings.VALUES.br;
    return currentLang === 'br' ? Strings.VALUES.br : Strings.VALUES.en;
  }

  public static updateStrings(lang: string) {
    if (Object.keys(Strings.VALUES).includes(lang))
      localStorage.setItem(Strings.KEY, lang);
    return Strings.get();
  }
}
