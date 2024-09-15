// prisma/seed.ts

import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
// import demandesData from './data';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt();
  const users = [
    {
      name: 'Ahmed',
      lastName: 'Ben Ali',
      age: 30,
      email: 'ahmed.benali@gmail.com',
      role: Role.Admin,
      avatar:
        'https://pbs.twimg.com/profile_images/1253008253786771456/QkRjhGEe_400x400.jpg',
    },
    {
      name: 'Fatima',
      lastName: 'Zahra',
      age: 28,
      email: 'fatima.zahra@gmail.com',
      role: Role.Employe,
      avatar:
        'https://www.leaders.com.tn/uploads/content/thumbnails/168871479345_content.jpg',
    },
    {
      name: 'Khaled',
      lastName: 'Boucetta',
      age: 35,
      email: 'khaled.boucetta@gmail.com',
      role: Role.Recruteur,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWMjbOxfzeH5HbXMLVKNryKtqlllNqvy4AQ&s',
    },
    {
      name: 'Leila',
      lastName: 'Jebali',
      age: 24,
      email: 'leila.jebali@gmail.com',
      role: Role.Stagiaire,
      avatar:
        'https://www.francetvinfo.fr/pictures/-6IgzBNjeCOOMDAGaP8G3MpP5ko/1200x1200/2024/03/13/leila-bekhti-65f19d732657d766182997.jpg',
    },
    {
      name: 'Moez',
      lastName: 'Khemiri',
      age: 32,
      email: 'moez.khemiri@gmail.com',
      role: Role.ResponsableRH,
      avatar:
        'https://realites.com.tn/fr/wp-content/uploads/2024/01/%D9%83%D8%AE%D8%AB%D8%B5-%D9%81%D8%AE%D8%B9%D9%83%D9%87.jpg',
    },
    {
      name: 'Nadia',
      lastName: 'Ben Slimane',
      age: 29,
      email: 'nadia.ben.slimane@gmail.com',
      role: Role.Employe,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ux6VgCCkwYMYnNWLtfk0MPb6D0sDAHmUPQ&s',
    },
    {
      name: 'Omar',
      lastName: 'Sghaier',
      age: 27,
      email: 'omar.sghaier@gmail.com',
      role: Role.Admin,
      avatar:
        'https://ktla.com/wp-content/uploads/sites/4/2024/05/OMAR-LEWIS-2024_HEADSHOTS-1280-X-720-e1714772309689.jpg?strip=1&w=640',
    },
    {
      name: 'Rania',
      lastName: 'Cherif',
      age: 31,
      email: 'rania.cherif@gmail.com',
      role: Role.Recruteur,
      avatar: 'https://example.com/avatar8.jpg',
    },
    {
      name: 'Sami',
      lastName: 'Mahfoudh',
      age: 26,
      email: 'sami.mahfoudh@gmail.com',
      role: Role.Stagiaire,
      avatar: 'https://example.com/avatar9.jpg',
    },
    {
      name: 'Sofia',
      lastName: 'Haddad',
      age: 34,
      email: 'sofia.haddad@gmail.com',
      role: Role.Employe,
      avatar: 'https://example.com/avatar10.jpg',
    },
    {
      name: 'Tarek',
      lastName: 'Mokhtar',
      age: 22,
      email: 'tarek.mokhtar@gmail.com',
      role: Role.Admin,
      avatar: 'https://example.com/avatar11.jpg',
    },
    {
      name: 'Yasmine',
      lastName: 'Mansouri',
      age: 25,
      email: 'yasmine.mansouri@gmail.com',
      role: Role.ResponsableRH,
      avatar: 'https://example.com/avatar12.jpg',
    },
    {
      name: 'Zied',
      lastName: 'Noureddine',
      age: 33,
      email: 'zied.noureddine@gmail.com',
      role: Role.Recruteur,
      avatar: 'https://example.com/avatar13.jpg',
    },
    {
      name: 'Amira',
      lastName: 'Bouazizi',
      age: 30,
      email: 'amira.bouazizi@gmail.com',
      role: Role.Employe,
      avatar: 'https://example.com/avatar14.jpg',
    },
    {
      name: 'Chokri',
      lastName: 'Boudali',
      age: 29,
      email: 'chokri.boudali@gmail.com',
      role: Role.Stagiaire,
      avatar: 'https://example.com/avatar15.jpg',
    },
    {
      name: 'Dorra',
      lastName: 'Ziani',
      age: 26,
      email: 'dorra.ziani@gmail.com',
      role: Role.Admin,
      avatar: 'https://example.com/avatar16.jpg',
    },
    {
      name: 'Faouzi',
      lastName: 'Ben Ahmed',
      age: 35,
      email: 'faouzi.ben.ahmed@gmail.com',
      role: Role.ResponsableRH,
      avatar: 'https://example.com/avatar17.jpg',
    },
    {
      name: 'Ghada',
      lastName: 'Boussetta',
      age: 28,
      email: 'ghada.boussetta@gmail.com',
      role: Role.Recruteur,
      avatar: 'https://example.com/avatar18.jpg',
    },
    {
      name: 'Hatem',
      lastName: 'Guedira',
      age: 31,
      email: 'hatem.guedira@gmail.com',
      role: Role.Employe,
      avatar: 'https://example.com/avatar19.jpg',
    },
    {
      name: 'Ines',
      lastName: 'Khelifi',
      age: 24,
      email: 'ines.khelifi@gmail.com',
      role: Role.Stagiaire,
      avatar: 'https://example.com/avatar20.jpg',
    },
    {
      name: 'Jamel',
      lastName: 'Khairi',
      age: 27,
      email: 'jamel.khairi@gmail.com',
      role: Role.Admin,
      avatar: 'https://example.com/avatar21.jpg',
    },
  ];

  for (const user of users) {
    const hashPassword = await bcrypt.hash('123456', salt);
    await prisma.user.create({
      data: {
        name: user.name,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        password: hashPassword,
        role: user.role,
        avatar: user.avatar,
      },
    });
  }
  const type = ["offre d'emploi", 'offre de stage'];
  const title = [
    'Téléconseiller',
    'Assistante Administrative et Commerciale',
    'Chargé Clientèle Francophone',
    'Femmes de Ménage',
    'Agent Commercial / Livreur',
    'Chauffeur',
    'Secrétaire Retraitée',
    'Assistante de Direction',
    'Téléconseiller Juridique',
  ];
  const allSkills = [
    // Technical Skills
    'Programming (Python, Java, C++)',
    'Web Development (HTML, CSS, JavaScript)',
    'Database Management (SQL, NoSQL)',
    'Machine Learning and Data Science',
    'Network Administration',
    'Cybersecurity',
    'Mobile App Development (iOS, Android)',
    'Cloud Computing (AWS, Azure, Google Cloud)',
    'DevOps (CI/CD, Docker, Kubernetes)',
    'UI/UX Design',
    'AR/VR Development',
    'Blockchain Development',

    // Creative Skills
    'Graphic Design (Adobe Photoshop, Illustrator)',
    'Video Editing (Adobe Premiere Pro, Final Cut Pro)',
    'Music Production (FL Studio, Ableton Live)',
    'Writing (Creative Writing, Copywriting)',
    'Photography',
    'Game Design',

    // Communication Skills
    'Public Speaking',
    'Writing (Business Communication, Technical Writing)',
    'Negotiation',
    'Conflict Resolution',
    'Active Listening',
    'Presentation Skills',

    // Analytical Skills
    'Data Analysis',
    'Statistical Modeling',
    'Critical Thinking',
    'Problem-Solving',
    'Research Skills',
    'Financial Analysis',

    // Soft Skills
    'Leadership',
    'Time Management',
    'Teamwork',
    'Adaptability',
    'Emotional Intelligence',
    'Decision Making',

    // Languages
    'English (or any other language)',
    'Foreign Language Proficiency (Spanish, French, Mandarin, etc.)',

    // Health and Fitness
    'Personal Training',
    'Yoga or Pilates Instruction',
    'Nutrition Counseling',
    'Physical Therapy',
    'Wellness Coaching',

    // Handiwork and Crafts
    'Woodworking',
    'Sewing or Knitting',
    'Pottery',
    'Painting or Drawing',
    'Carpentry',

    // Marketing and Sales
    'Digital Marketing (SEO, SEM, Social Media)',
    'Content Marketing',
    'Sales Strategy and Negotiation',
    'Market Research',
    'Customer Relationship Management (CRM)',
    'Brand Management',

    // Business and Management
    'Project Management',
    'Strategic Planning',
    'Financial Management',
    'Business Development',
    'Human Resources Management',
    'Risk Management',

    // Education and Training
    'Online Teaching and Instruction',
    'Curriculum Development',
    'E-Learning Development',
    'Training and Development',
    'Educational Technology',
    'Instructional Design',

    // Science and Engineering
    'Biotechnology',
    'Environmental Engineering',
    'Chemical Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
  ];
  const departments = [
    'Production Department',
    'Quality Control Department',
    'Research and Development (R&D) Department',
    'Engineering Department',
    'Maintenance Department',
    'Logistics and Supply Chain Department',
  ];
  const departmentsIds = [];

  for (let i = 0; i < departments.length; i++) {
    const deps = await prisma.services.create({
      data: {
        title: departments[i],
      },
    });
    departmentsIds.push(deps.id);
  }

  // execute the main function
  const offerIds = [];
  for (let i = 0; i < 10; i++) {
    const randomTitleIndex = Math.floor(Math.random() * 9);
    const randomTypeIndex = Math.floor(Math.random() * 2);

    console.log('Random Title Index:', randomTitleIndex);
    console.log('Random Type Index:', randomTypeIndex);

    const createdOffer = await prisma.offer.create({
      data: {
        title: title[randomTitleIndex],
        description:
          'Solutions Tech XYZ est un fournisseur de premier plan de solutions logicielles innovantes dans le secteur de la fintech. Notre mission est de révolutionner la manière dont les institutions financières gèrent leurs opérations, en les rendant plus efficaces et centrées sur le client.',
        type: type[randomTypeIndex],
        post: 'Employee',
        offerSkills: {
          create: [
            {
              Skills: {
                create: { name: allSkills[Math.floor(Math.random() * 72)] },
              },
            },
            {
              Skills: {
                create: { name: allSkills[Math.floor(Math.random() * 72)] },
              },
            },
            {
              Skills: {
                create: { name: allSkills[Math.floor(Math.random() * 72)] },
              },
            },
          ],
        },
        servicesId: departmentsIds[Math.floor(Math.random() * 6)],
      },
    });
    offerIds.push(createdOffer.id);
    console.log('Created Offer:', createdOffer);
  }
  // for (let demande of demandesData) {
  //   await prisma.demande.createMany({ data: {
  //      ...demande,
  //       offerId: offerIds[Math.floor(Math.random() * offerIds.length - 1)]} })
  // }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
