const worklist = [
  {
    id: 1,
    title: "FERME DE LA ROUGERAIE",
    description: "Site E-commerce ",
    period: "Mai 2023",
    image: require("../assets/images/ferme_rougeraie.png"),
    tags: ["Vue", "Sass", "NodeJs", "Figma"],
    link: "ferme-rougeraie",
    intro:
      " Site e-commerce pour une productrice de produits bio qui permet aux clients de réserver facilement des produits.",
    pitch:
      "Le site a été développé à l'aide de Vue 3 pour la partie frontend, NodeJS pour la partie Backend et MongoDb pour la bade de données de produits. J'ai implémenté un panier pour que les utilisateurs puissent ajouter des produits et passer leur commande en toute simplicité. En tant qu'administrateur, Léa, la productrice, peut se connecter au site et accéder à un résumé complet de toutes les commandes. La page d'administration lui permet également de créer les cartes produits et de gérer leur affichage sur le site.",
    url: "http://test.com/",
  },
  {
    id: 2,
    title: "PWA",
    description: "Stage Hermes/Gca",
    period: "Mars 2023",
    image: require("../assets/images/pwa.png"),
    tags: ["Vue", "Sass", "Figma"],
    link: "pwa",
    intro:
      "Lors de mon stage dans l'entreprise GCA, j'ai développé une application mobile first conçue spécifiquement pour répondre aux besoins des équipes commerciales.",
    pitch:
      "Ce projet, développé en utilisant Vue 3 et configurée avec Vite, a été créé dans le but de tenir les commerciaux informés de leurs chiffres de vente et de leurs objectifs en temps réel. En adoptant une approche PWA (Progressive Web App), l'application peut  être installée directement sur l'écran d'accueil des utilisateurs, offrant ainsi une expérience similaire à celle d'une application native.",
    url: "http://test.com/",
  },
  {
    id: 3,
    title: "KASA",
    description: "Formation OpenClassrooms",
    period: "Décembre 2022",
    image: require("../assets/images/kasa.png"),
    tags: ["React", "Sass"],
    link: "kasa",
    intro:
      "Dans le cadre d'un des projet Openclassrooms, il était demandé d'intégrer la maquette figma d'une plateforme de location de logements entre particuliers avec la technologie React.js et l'utilisation de react-router.",
    pitch:
      "Le site originale a été codé il y a plus de 10 ans avec un code legacy important. L'entreprise a lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Le site est responsive et les composants sont modulaires et réutilisables.",
    url: "http://test.com/",
  },
  {
    id: 4,
    title: "GROUPOMANIA",
    description: "Formation OpenClassrooms",
    period: "Novembre 2022",
    image: require("../assets/images/groupomania.png"),
    tags: ["React", "Sass", "NodeJs"],
    link: "groupomania",
    intro:
      " Réseau social interne pour les employés d'une entreprise réalisé durant ma formation Openclassrooms.",
    pitch:
      "Le projet fullstack  comprend une page de connexion permettant à l'utilisateur de se connecter, ou bien de créer un compte, une fonctionnalité de création de messages ainsi qu' une page listant les posts et commentaires.",
    url: "http://test.com/",
  },
];

export default worklist;
