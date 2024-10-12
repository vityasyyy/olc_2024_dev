const mongoose = require("mongoose");
const Olclass = require("../Models/olclass"); // Adjust path to your Olclass model
const Olcon = require("../Models/olcon"); // Adjust path to your Olcon model

mongoose
  .connect("mongodb+srv://olc2024readwrite:MULYONOKONTOLNYEPONGINTITITPRABOWO@olc2024.n39jg.mongodb.net/?retryWrites=true&w=majority&appName=OLC2024")
  .then(() => {
    console.log("MongoDB connection established!");
  })
  .catch((err) => {
    console.log("MongoDB connection error!", err);
  });



  const newClass = [
    {
      slug: "cyber-security",
      divisi: "Cyber Security",
      title: "Cyber Security",
      waktuStart: new Date("2024-10-28T10:00:00Z"),
      waktuEnd: new Date("2024-11-02T10:00:00Z"),
      deskripsiKelas:
        "An intensive course on the fundamentals of cyber security, designed to equip you with the skills to protect online systems.",
      enrolledBy: [],
      slots: 40,
      penugasan: {
        deadline: new Date("2024-09-25T10:00:00Z"),
        linkTugas: "https://example.com/assignment",
      },
      mentor: {
        nama: "Bob Smith",
        fotoMentor: {
          url: "https://example.com/photo-bob.jpg",
          filename: "photo-bob.jpg",
        },
        deskripsi:
          "Cyber security expert with over a decade of experience in ethical hacking and network security.",
      },
      sesi: [
        {
          judulSesi: "Introduction to Internet Security",
          waktu: new Date("2024-10-28T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Understanding the basics of cyber security, including key terminologies.",
          kurikulum: "Overview of Internet Security, Cyber Attack, Hands-on Activity",
          deskripsiLengkap:
            "Get acquainted with the key concepts of cyber security such as threats, vulnerabilities, and attack methods.",
          prerequisites: "No prior knowledge required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Application Security",
          waktu: new Date("2024-09-19T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Explore the fundamentals of securing computer networks.",
          kurikulum: "Cyber Security in Fintech, Recent Events of Cybersecurity in Indonesia, Hands-on Activity",
          deskripsiLengkap:
            "Learn about firewalls, VPNs, and how to monitor networks for suspicious activities.",
          prerequisites: "Basic networking knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-11-01T00:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create reusable components with design systems.",
          kurikulum: "-",
          deskripsiLengkap:
            "Sesi konsultasi menyesuaikan jadwal Teaching Assistant",
          prerequisites: "Basic prototyping knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Presentasi Final Project",
          waktu: new Date("2024-11-02T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Gather and analyze user feedback to refine designs.",
          kurikulum: "-",
          deskripsiLengkap:
            "Presentasi Final Project melalui Zoom Meeting",
          prerequisites: "Basic knowledge of UI/UX design principles.",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "data-science",
      divisi: "Data Science and AI",
      title: "Data Science and Artificial Intelligence",
      waktuStart: new Date("2024-10-28T10:00:00Z"),
      waktuEnd: new Date("2024-11-02T10:00:00Z"),
      deskripsiKelas:
        "Membahas materi seputar workflow yang sesuai dengan standar industri, seperti CRISP-DM (Cross-Industry Standard Process for Data Mining) yang meliputi topik data preparation, prediction model development dan project evaluation.",
      enrolledBy: [],
      slots: 40,
      penugasan: {
        deadline: new Date("2024-09-25T10:00:00Z"),
        linkTugas: "https://example.com/assignment",
      },
      mentor: {
        nama: "Charlie Lee",
        fotoMentor: {
          url: "https://example.com/photo-charlie.jpg",
          filename: "photo-charlie.jpg",
        },
        deskripsi:
          "Data scientist with a background in machine learning and big data analytics.",
      },
      sesi: [
        {
          judulSesi: "Introduction to Data Science",
          waktu: new Date("2024-10-28T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "An overview of the data science landscape and its key concepts.",
          kurikulum: "Intro to Data Science, Data Cleaning, Exploratory Data Analysis, Preprocessing, Story Telling",
          deskripsiLengkap:
            "Understand the foundations of data science, including techniques for cleaning and analyzing data, and visualizing results.",
          prerequisites: "Basic statistics and Python knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Machine Learning",
          waktu: new Date("2024-10-29T10:00:00Z"),
          platform: "Google Meet",
          deskripsiSingkat:
            "Learn the art of data wrangling using popular Python libraries.",
          kurikulum: "Overview of Machine Learning, Kaggle Competition",
          deskripsiLengkap:
            "Explore how to clean, manipulate, and prepare datasets for analysis using Python libraries like Pandas and NumPy.",
          prerequisites: "Python programming skills required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-11-01T00:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create reusable components with design systems.",
          kurikulum: "-",
          deskripsiLengkap:
            "Sesi konsultasi menyesuaikan jadwal Teaching Assistant",
          prerequisites: "Basic prototyping knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Presentasi Final Project",
          waktu: new Date("2024-11-02T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Gather and analyze user feedback to refine designs.",
          kurikulum: "-",
          deskripsiLengkap:
            "Presentasi Final Project melalui Zoom Meeting",
          prerequisites: "Basic knowledge of UI/UX design principles.",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "software-engineering",
      divisi: "Software Engineering",
      title: "Software Engineering",
      waktuStart: new Date("2024-09-18T10:00:00Z"),
      waktuEnd: new Date("2024-09-22T10:00:00Z"),
      deskripsiKelas:
        "Master the essentials of Full-Stack Web Development and become proficient in modern web technologies.",
      enrolledBy: [],
      slots: 40,
      penugasan: {
        deadline: new Date("2024-09-25T10:00:00Z"),
        linkTugas: "https://example.com/assignment",
      },
      mentor: {
        nama: "Alice Johnson",
        fotoMentor: {
          url: "https://example.com/photo-alice.jpg",
          filename: "photo-alice.jpg",
        },
        deskripsi:
          "Experienced full-stack developer with expertise in MERN stack and cloud infrastructure.",
      },
      sesi: [
        {
          judulSesi: "Introduction to Web Development",
          waktu: new Date("2024-09-18T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "An overview of modern web development technologies and best practices.",
          kurikulum: "HTML, CSS, and JavaScript basics.",
          deskripsiLengkap:
            "Learn the foundational elements of web development including core technologies like HTML, CSS, and JavaScript.",
          prerequisites: "No prior experience required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "React Basics",
          waktu: new Date("2024-09-19T10:00:00Z"),
          platform: "Google Meet",
          deskripsiSingkat:
            "Learn how to build dynamic UIs using React components.",
          kurikulum: "React components, JSX, and state management.",
          deskripsiLengkap:
            "Build interactive and dynamic user interfaces using React components, JSX, and the basics of state management.",
          prerequisites: "Basic knowledge of JavaScript.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-11-01T00:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create reusable components with design systems.",
          kurikulum: "-",
          deskripsiLengkap:
            "Sesi konsultasi menyesuaikan jadwal Teaching Assistant",
          prerequisites: "Basic prototyping knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Presentasi Final Project",
          waktu: new Date("2024-11-02T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Gather and analyze user feedback to refine designs.",
          kurikulum: "-",
          deskripsiLengkap:
            "Presentasi Final Project melalui Zoom Meeting",
          prerequisites: "Basic knowledge of UI/UX design principles.",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "ui-ux-design",
      divisi: "UI/UX Design",
      title: "UI/UX Design",
      waktuStart: new Date("2024-10-28T10:00:00Z"),
      waktuEnd: new Date("2024-11-02T10:00:00Z"),
      deskripsiKelas:
        "Kelas ini membahas materi seputar dasar-dasar UI/UX Design dan standar praktek di industri. Materi yang diusung seputar UX principles, Design Thinking Process, User Interface Process and Collaboration, hingga Design Hand-off.",
      enrolledBy: [],
      slots: 40,
      penugasan: {
        deadline: new Date("2024-09-25T10:00:00Z"),
        linkTugas: "https://example.com/assignment",
      },
      mentor: {
        nama: "Diana Lopez",
        fotoMentor: {
          url: "https://example.com/photo-diana.jpg",
          filename: "photo-diana.jpg",
        },
        deskripsi:
          "UI/UX expert with a decade of experience in designing intuitive and accessible user interfaces.",
      },
      sesi: [
        {
          judulSesi: "UX Principles and Design Thinking",
          waktu: new Date("2024-10-28T16:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Explore the basics of UI/UX design and its importance in product development.",
          kurikulum: "User-Centered Design, User Research & Data Synthesis, Design Thinking, Exploring Design Patterns and Systems.",
          deskripsiLengkap:
            "Learn the fundamentals of user-centered design, how to conduct user research, and create basic wireframes.",
          prerequisites: "No prior experience required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Visual Design and Interaction Design",
          waktu: new Date("2024-10-29T16:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Learn how to create wireframes and prototypes using industry-standard tools.",
          kurikulum: "Design Interaction, Wireframing, Design System, Design Hand-off, Mobile Apps, Final Project",
          deskripsiLengkap:
            "Hands-on session to design wireframes and interactive prototypes using Sketch or Figma.",
          prerequisites: "Familiarity with basic design concepts.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-11-01T00:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create reusable components with design systems.",
          kurikulum: "-",
          deskripsiLengkap:
            "Sesi konsultasi menyesuaikan jadwal Teaching Assistant",
          prerequisites: "Basic prototyping knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Presentasi Final Project",
          waktu: new Date("2024-11-02T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Gather and analyze user feedback to refine designs.",
          kurikulum: "-",
          deskripsiLengkap:
            "Presentasi Final Project melalui Zoom Meeting",
          prerequisites: "Basic knowledge of UI/UX design principles.",
          url: "https://youtube.com"
        },
      ],
    },
  ];
  
  
const seedOlclass = async () => { 
  await Olclass.insertMany(newClass);
  console.log("Olclass seeded");
};

const newConference = new Olcon({
  slug: "javascript-conference-2024",
  title: "JavaScript Conference 2024",
  email: ["example1@example.com", "example2@example.com"], // Example emails
  slots: 40,
  sesi: [{
    judulSesi: "Advanced JavaScript Patterns",
    waktu: new Date("2024-10-26T10:00:00Z"),
    lokasi: "Auditorium FMIPA Lantai 7 Universitas Gadjah Mada",
    platform: "Zoom",
    deskripsi:
      "Dive deep into advanced patterns and best practices in JavaScript development.",
    mentor: {
      nama: "Jane Smith",
      fotoMentor: {
        url: "https://example.com/photoMentor.jpg", // Example URL
        filename: "photoMentor.jpg",
      },
      deskripsi: "Expert in JavaScript and modern web frameworks.",
    },
    materi: [{
      materiJudul: "ModuleTETEK",
      jamBerapa: new Date("2024-10-26T10:00:00Z"),
    },
    {
      materiJudul: "ModuleTITIT",
      jamBerapa: new Date("2024-10-26T10:00:00Z"),
    },
    {
      materiJudul: "ModuleOLCSS",
      jamBerapa: new Date("2024-10-26T10:00:00Z"),
    }
  ]
  },
  {
    judulSesi: "Building Scalable Applications with Node.js",
    waktu: new Date("2024-10-26T10:00:00Z"),
    lokasi: "Auditorium FMIPA Lantai 1 Universitas Gadjah Mada",
    platform: "Microsoft Teams",
    deskripsi:
      "Learn to build scalable, high-performance applications using Node.js and Express.",
    mentor: {
      nama: "John Doe",
      fotoMentor: {
        url: "https://example.com/photoJohnDoe.jpg", // Example URL
        filename: "photoJohnDoe.jpg",
      },
      deskripsi:
        "Backend expert with extensive experience in Node.js and cloud infrastructure.",
    },
    materi: [{
      materiJudul: "ModuleENTOT",
      jamBerapa: new Date("2024-10-26T10:00:00Z"),
    },
    {
      materiJudul: "ModulePEPEK",
      jamBerapa: new Date("2024-10-26T10:00:00Z"),
    },
    {
      materiJudul: "ModuleKONTOL",
      jamBerapa: new Date("2024-10-26T10:00:00Z"),
    }
  ]
  },
],
});

const seedOlcon = async() => {
  await newConference.save();
  console.log("Olcon seed data created successfully!");
}

const seedDatabase = async () => {
  await seedOlclass();
  await seedOlcon();
  mongoose.connection.close(); // Close the connection once seeding is complete
};

seedDatabase();
