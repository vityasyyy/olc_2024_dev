const mongoose = require("mongoose");
const Olclass = require("../Models/olclass"); // Adjust path to your Olclass model
const Olcon = require("../Models/olcon"); // Adjust path to your Olcon model

mongoose
  .connect("mongodb://localhost:27017/omahTILearningCenter2024")
  .then(() => {
    console.log("MongoDB connection established!");
  })
  .catch((err) => {
    console.log("MongoDB connection error!", err);
  });
const newClass = [
  { 
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    enrolledBy: [], // Empty for now, since it's just for testing
    slots: 40,
    mentor: {
      nama: "John Doe",
      fotoMentor: {
        url: "https://example.com/photo.jpg", // Example URL
        filename: "photo.jpg",
      },
      deskripsi:
        "Experienced full-stack developer with expertise in MERN stack.",
    },
    sesi: [
      {
        judulSesi: "Introduction to Web Development",
        waktu: new Date("2024-09-18T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "An overview of web development concepts and best practices.",
        kurikulum: "Introduction to HTML, CSS, and JavaScript.",
        deskripsiLengkap:
          "In this session, you will learn the fundamentals of web development, focusing on basic tools and concepts like HTML, CSS, and JavaScript.",
        prerequisites: "No prior experience required.",
      },
      {
        judulSesi: "Frontend with React",
        waktu: new Date("2024-09-19T10:00:00Z"),
        platform: "Google Meet",
        deskripsiSingkat:
          "Learn the basics of frontend development using React.",
        kurikulum: "React components, state, and props.",
        deskripsiLengkap:
          "Dive into React to build modern, dynamic user interfaces. This session covers the fundamentals of React components, state management, and how to structure React applications.",
        prerequisites: "Basic understanding of HTML, CSS, and JavaScript.",
      },
      {
        judulSesi: "Backend with Node.js",
        waktu: new Date("2024-09-20T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "Understand how to build a backend using Node.js and Express.",
        kurikulum: "Node.js, Express, and building REST APIs.",
        deskripsiLengkap:
          "This session focuses on backend development using Node.js and Express. Learn how to build REST APIs and manage server-side logic.",
        prerequisites: "Basic understanding of JavaScript.",
      },
      {
        judulSesi: "Database Integration with MongoDB",
        waktu: new Date("2024-09-21T10:00:00Z"),
        platform: "Microsoft Teams",
        deskripsiSingkat:
          "Learn how to integrate MongoDB into your web applications.",
        kurikulum:
          "MongoDB basics, CRUD operations, and integrating with Node.js.",
        deskripsiLengkap:
          "Understand how to integrate MongoDB with your web applications. This session covers MongoDB architecture, CRUD operations, and Mongoose.",
        prerequisites:
          "Basic understanding of backend development with Node.js.",
      },
      {
        judulSesi: "Deployment and DevOps",
        waktu: new Date("2024-09-22T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "Learn about deploying web applications and DevOps practices.",
        kurikulum: "Introduction to CI/CD, Docker, and deployment strategies.",
        deskripsiLengkap:
          "In this session, you will learn about the deployment process, Continuous Integration/Continuous Deployment (CI/CD) pipelines, and using Docker to containerize your applications.",
        prerequisites: "Understanding of full-stack web development.",
      },
    ],
  },
  {
    slug: "data-science-and-artificial-intelligence",
    title: "Data Science And Artificial Intelligence",
    enrolledBy: [], // Empty for now, since it's just for testing
    slots: 40,
    mentor: {
      nama: "John Doe",
      fotoMentor: {
        url: "https://example.com/photo.jpg", // Example URL
        filename: "photo.jpg",
      },
      deskripsi:
        "Experienced full-stack developer with expertise in MERN stack.",
    },
    sesi: [
      {
        judulSesi: "Introduction to Web Development",
        waktu: new Date("2024-09-18T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "An overview of web development concepts and best practices.",
        kurikulum: "Introduction to HTML, CSS, and JavaScript.",
        deskripsiLengkap:
          "In this session, you will learn the fundamentals of web development, focusing on basic tools and concepts like HTML, CSS, and JavaScript.",
        prerequisites: "No prior experience required.",
      },
      {
        judulSesi: "Frontend with React",
        waktu: new Date("2024-09-19T10:00:00Z"),
        platform: "Google Meet",
        deskripsiSingkat:
          "Learn the basics of frontend development using React.",
        kurikulum: "React components, state, and props.",
        deskripsiLengkap:
          "Dive into React to build modern, dynamic user interfaces. This session covers the fundamentals of React components, state management, and how to structure React applications.",
        prerequisites: "Basic understanding of HTML, CSS, and JavaScript.",
      },
      {
        judulSesi: "Backend with Node.js",
        waktu: new Date("2024-09-20T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "Understand how to build a backend using Node.js and Express.",
        kurikulum: "Node.js, Express, and building REST APIs.",
        deskripsiLengkap:
          "This session focuses on backend development using Node.js and Express. Learn how to build REST APIs and manage server-side logic.",
        prerequisites: "Basic understanding of JavaScript.",
      },
      {
        judulSesi: "Database Integration with MongoDB",
        waktu: new Date("2024-09-21T10:00:00Z"),
        platform: "Microsoft Teams",
        deskripsiSingkat:
          "Learn how to integrate MongoDB into your web applications.",
        kurikulum:
          "MongoDB basics, CRUD operations, and integrating with Node.js.",
        deskripsiLengkap:
          "Understand how to integrate MongoDB with your web applications. This session covers MongoDB architecture, CRUD operations, and Mongoose.",
        prerequisites:
          "Basic understanding of backend development with Node.js.",
      },
      {
        judulSesi: "Deployment and DevOps",
        waktu: new Date("2024-09-22T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "Learn about deploying web applications and DevOps practices.",
        kurikulum: "Introduction to CI/CD, Docker, and deployment strategies.",
        deskripsiLengkap:
          "In this session, you will learn about the deployment process, Continuous Integration/Continuous Deployment (CI/CD) pipelines, and using Docker to containerize your applications.",
        prerequisites: "Understanding of full-stack web development.",
      },
    ],
  },
  { 
    slug: "cyber-security",
    title: "Cyber Security",
    enrolledBy: [], // Empty for now, since it's just for testing
    slots: 40,
    mentor: {
      nama: "John Doe",
      fotoMentor: {
        url: "https://example.com/photo.jpg", // Example URL
        filename: "photo.jpg",
      },
      deskripsi:
        "Experienced full-stack developer with expertise in MERN stack.",
    },
    sesi: [
      {
        judulSesi: "Introduction to Web Development",
        waktu: new Date("2024-09-18T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "An overview of web development concepts and best practices.",
        kurikulum: "Introduction to HTML, CSS, and JavaScript.",
        deskripsiLengkap:
          "In this session, you will learn the fundamentals of web development, focusing on basic tools and concepts like HTML, CSS, and JavaScript.",
        prerequisites: "No prior experience required.",
      },
      {
        judulSesi: "Frontend with React",
        waktu: new Date("2024-09-19T10:00:00Z"),
        platform: "Google Meet",
        deskripsiSingkat:
          "Learn the basics of frontend development using React.",
        kurikulum: "React components, state, and props.",
        deskripsiLengkap:
          "Dive into React to build modern, dynamic user interfaces. This session covers the fundamentals of React components, state management, and how to structure React applications.",
        prerequisites: "Basic understanding of HTML, CSS, and JavaScript.",
      },
      {
        judulSesi: "Backend with Node.js",
        waktu: new Date("2024-09-20T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "Understand how to build a backend using Node.js and Express.",
        kurikulum: "Node.js, Express, and building REST APIs.",
        deskripsiLengkap:
          "This session focuses on backend development using Node.js and Express. Learn how to build REST APIs and manage server-side logic.",
        prerequisites: "Basic understanding of JavaScript.",
      },
      {
        judulSesi: "Database Integration with MongoDB",
        waktu: new Date("2024-09-21T10:00:00Z"),
        platform: "Microsoft Teams",
        deskripsiSingkat:
          "Learn how to integrate MongoDB into your web applications.",
        kurikulum:
          "MongoDB basics, CRUD operations, and integrating with Node.js.",
        deskripsiLengkap:
          "Understand how to integrate MongoDB with your web applications. This session covers MongoDB architecture, CRUD operations, and Mongoose.",
        prerequisites:
          "Basic understanding of backend development with Node.js.",
      },
      {
        judulSesi: "Deployment and DevOps",
        waktu: new Date("2024-09-22T10:00:00Z"),
        platform: "Zoom",
        deskripsiSingkat:
          "Learn about deploying web applications and DevOps practices.",
        kurikulum: "Introduction to CI/CD, Docker, and deployment strategies.",
        deskripsiLengkap:
          "In this session, you will learn about the deployment process, Continuous Integration/Continuous Deployment (CI/CD) pipelines, and using Docker to containerize your applications.",
        prerequisites: "Understanding of full-stack web development.",
      },
    ],
  },
];

const seedOlclass = async () => {
  await Olclass.deleteMany({}); // Clear any existing Olclass data
  await Olclass.insertMany(newClass);
};

const seedOlcon = async () => {
  await Olcon.deleteMany({}); // Clear any existing Olcon data

  const newConference = new Olcon({
    title: "JavaScript Conference 2024",
    email: ["example1@example.com", "example2@example.com"], // Example emails
    slots: 100,
    mentor: {
      nama: "Jane Smith",
      fotoMentor: {
        url: "https://example.com/photoMentor.jpg", // Example URL
        filename: "photoMentor.jpg",
      },
      deskripsi: "Expert in JavaScript and modern web frameworks.",
    },
    sesi: {
      judulSesi: "Advanced JavaScript Patterns",
      waktu: new Date("2024-10-01T09:00:00Z"),
      platform: "Zoom",
      deskripsi:
        "Dive deep into advanced patterns and best practices in JavaScript development.",
    },
  });

  await newConference.save();
  console.log("Olcon seed data created successfully!");
};

const seedDatabase = async () => {
  await seedOlclass();
  await seedOlcon();
  mongoose.connection.close(); // Close the connection once seeding is complete
};

seedDatabase();
