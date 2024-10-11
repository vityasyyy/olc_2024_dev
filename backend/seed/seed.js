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
      slug: "software-engineering",
      divisi: "Software Engineering",
      title: "Full-Stack Web Development",
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
          judulSesi: "Backend with Node.js",
          waktu: new Date("2024-09-20T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Build scalable backend applications using Node.js and Express.",
          kurikulum: "Node.js, Express, and building REST APIs.",
          deskripsiLengkap:
            "Learn how to develop backend applications using Node.js and Express, and understand how to structure RESTful APIs.",
          prerequisites: "Basic JavaScript knowledge required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Database Integration with MongoDB",
          waktu: new Date("2024-09-21T10:00:00Z"),
          platform: "Microsoft Teams",
          deskripsiSingkat: "Integrate MongoDB into web applications.",
          kurikulum: "MongoDB, Mongoose, CRUD operations.",
          deskripsiLengkap:
            "Understand how to integrate MongoDB with Node.js applications, using Mongoose for database operations.",
          prerequisites: "Basic backend development knowledge required.",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "cyber-security",
      divisi: "Cyber Security",
      title: "Introduction to Cyber Security",
      waktuStart: new Date("2024-09-18T10:00:00Z"),
      waktuEnd: new Date("2024-09-22T10:00:00Z"),
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
          judulSesi: "Introduction to Cyber Security",
          waktu: new Date("2024-09-18T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Understanding the basics of cyber security, including key terminologies.",
          kurikulum: "Threats, vulnerabilities, and attack vectors.",
          deskripsiLengkap:
            "Get acquainted with the key concepts of cyber security such as threats, vulnerabilities, and attack methods.",
          prerequisites: "No prior knowledge required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Network Security",
          waktu: new Date("2024-09-19T10:00:00Z"),
          platform: "Google Meet",
          deskripsiSingkat:
            "Explore the fundamentals of securing computer networks.",
          kurikulum: "Firewalls, VPNs, and network monitoring tools.",
          deskripsiLengkap:
            "Learn about firewalls, VPNs, and how to monitor networks for suspicious activities.",
          prerequisites: "Basic networking knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Ethical Hacking 101",
          waktu: new Date("2024-09-20T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Introduction to ethical hacking techniques.",
          kurikulum: "Penetration testing, vulnerability assessment.",
          deskripsiLengkap:
            "Learn the basics of ethical hacking, including penetration testing techniques and vulnerability assessments.",
          prerequisites: "Basic understanding of cyber security concepts.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Security in Cloud Environments",
          waktu: new Date("2024-09-21T10:00:00Z"),
          platform: "Microsoft Teams",
          deskripsiSingkat:
            "Learn how to secure cloud infrastructures in modern environments.",
          kurikulum: "Cloud security, best practices, and compliance.",
          deskripsiLengkap:
            "Understand the essentials of securing cloud infrastructures, focusing on best practices and compliance requirements.",
          prerequisites: "Familiarity with cloud computing concepts.",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "data-science",
      divisi: "Data Science and Artificial Intelligence",
      title: "Data Science Foundations",
      waktuStart: new Date("2024-09-18T10:00:00Z"),
      waktuEnd: new Date("2024-09-22T10:00:00Z"),
      deskripsiKelas:
        "A comprehensive introduction to data science, covering data manipulation, visualization, and basic machine learning.",
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
          waktu: new Date("2024-09-18T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "An overview of the data science landscape and its key concepts.",
          kurikulum: "Data analysis, data cleaning, and visualization basics.",
          deskripsiLengkap:
            "Understand the foundations of data science, including techniques for cleaning and analyzing data, and visualizing results.",
          prerequisites: "Basic statistics and Python knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Data Wrangling with Python",
          waktu: new Date("2024-09-19T10:00:00Z"),
          platform: "Google Meet",
          deskripsiSingkat:
            "Learn the art of data wrangling using popular Python libraries.",
          kurikulum: "Pandas, NumPy, and data manipulation techniques.",
          deskripsiLengkap:
            "Explore how to clean, manipulate, and prepare datasets for analysis using Python libraries like Pandas and NumPy.",
          prerequisites: "Python programming skills required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Data Visualization",
          waktu: new Date("2024-09-20T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create compelling visual stories with data.",
          kurikulum: "Matplotlib, Seaborn, and best practices in visualization.",
          deskripsiLengkap:
            "Learn how to create effective visualizations to present data insights using Matplotlib and Seaborn.",
          prerequisites: "Basic knowledge of Python and data manipulation.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Introduction to Machine Learning",
          waktu: new Date("2024-09-21T10:00:00Z"),
          platform: "Microsoft Teams",
          deskripsiSingkat: "An introduction to machine learning concepts.",
          kurikulum: "Supervised learning, algorithms, and model evaluation.",
          deskripsiLengkap:
            "Discover the basics of machine learning, including algorithms, supervised learning, and evaluating model performance.",
          prerequisites: "Basic knowledge of statistics and programming.",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "ui-ux-design",
      divisi: "UI/UX Design",
      title: "UI/UX Design Fundamentals",
      waktuStart: new Date("2024-09-18T10:00:00Z"),
      waktuEnd: new Date("2024-09-22T10:00:00Z"),
      deskripsiKelas:
        "Learn the core principles of UI/UX design to create user-friendly interfaces and exceptional user experiences.",
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
          judulSesi: "Introduction to UI/UX Design",
          waktu: new Date("2024-09-18T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Explore the basics of UI/UX design and its importance in product development.",
          kurikulum: "Design thinking, user research, and wireframing.",
          deskripsiLengkap:
            "Learn the fundamentals of user-centered design, how to conduct user research, and create basic wireframes.",
          prerequisites: "No prior experience required.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Prototyping and Wireframing",
          waktu: new Date("2024-09-19T10:00:00Z"),
          platform: "Google Meet",
          deskripsiSingkat:
            "Learn how to create wireframes and prototypes using industry-standard tools.",
          kurikulum: "Sketch, Figma, and interactive prototyping.",
          deskripsiLengkap:
            "Hands-on session to design wireframes and interactive prototypes using Sketch or Figma.",
          prerequisites: "Familiarity with basic design concepts.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Design Systems and Components",
          waktu: new Date("2024-09-20T10:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create reusable components with design systems.",
          kurikulum: "Design systems, style guides, and consistency.",
          deskripsiLengkap:
            "Understand the role of design systems and how to create consistent, reusable components across platforms.",
          prerequisites: "Basic prototyping knowledge recommended.",
          url: "https://youtube.com"
        },
        {
          judulSesi: "User Testing and Feedback",
          waktu: new Date("2024-09-21T10:00:00Z"),
          platform: "Microsoft Teams",
          deskripsiSingkat:
            "Gather and analyze user feedback to refine designs.",
          kurikulum: "User testing methods, feedback analysis.",
          deskripsiLengkap:
            "Learn techniques for conducting user tests and gathering actionable feedback to improve user experiences.",
          prerequisites: "Basic knowledge of UI/UX design principles.",
          url: "https://youtube.com"
        },
      ],
    },
  ];
  
  
const seedOlclass = async () => {
  await Olclass.deleteMany({}); // Clear any existing Olclass data
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
    waktuDanLokasi: "26 Oktober 2024 10:00 - 12:00 WIB, Auditorium Lantai 7 FMIPA UGM",
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
    waktuDanLokasi: "3 November 2024 10:00 - 12:00 WIB, Auditorium Lantai 1 FMIPA UGM",
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
  await Olcon.deleteMany({}); // Clear any existing Olcon data
  await newConference.save();
  console.log("Olcon seed data created successfully!");
}

const seedDatabase = async () => {
  await seedOlclass();
  await seedOlcon();
  mongoose.connection.close(); // Close the connection once seeding is complete
};

seedDatabase();
