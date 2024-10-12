const mongoose = require("mongoose");
const Olclass = require("../Models/olclass"); // Adjust path to your Olclass model
const Olcon = require("../Models/olcon"); // Adjust path to your Olcon model

mongoose
  .connect("K")
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
      waktuStart: new Date("2024-10-28T03:00:00Z"),
      waktuEnd: new Date("2024-11-02T03:00:00Z"),
      deskripsiKelas:
        "Membahas materi seputar dasar-dasar cyber security dalam konteks Internet Security, Cyber Attack, Cyber Security in fintech, dan berita terbaru mengenai Cyber Security di Indonesia.",
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
          waktu: new Date("2024-10-28T03:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Understanding the basics of cyber security, including key terminologies.",
          kurikulum: "Overview of Internet Security, Cyber Attack, Hands-on Activity",
          deskripsiLengkap:
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Application Security",
          waktu: new Date("2024-09-19T03:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Explore the fundamentals of securing computer networks.",
          kurikulum: "Cyber Security in Fintech, Recent Events of Cybersecurity in Indonesia, Hands-on Activity",
          deskripsiLengkap:
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-10-31T17:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat: "Create reusable components with design systems.",
          kurikulum: "-",
          deskripsiLengkap:
            "Sesi konsultasi menyesuaikan jadwal Teaching Assistant",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Presentasi Final Project",
          waktu: new Date("2024-11-02T03:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Gather and analyze user feedback to refine designs.",
          kurikulum: "-",
          deskripsiLengkap:
            "Presentasi Final Project melalui Zoom Meeting",
          prerequisites: "",
          url: "https://youtube.com"
        },
      ],
    },
    {
      slug: "data-science",
      divisi: "Data Science and AI",
      title: "Data Science and AI",
      waktuStart: new Date("2024-10-28T03:00:00Z"),
      waktuEnd: new Date("2024-11-02T03:00:00Z"),
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
          waktu: new Date("2024-10-28T03:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "An overview of the data science landscape and its key concepts.",
          kurikulum: "Intro to Data Science, Data Cleaning, Exploratory Data Analysis, Preprocessing, Story Telling",
          deskripsiLengkap:
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Machine Learning",
          waktu: new Date("2024-10-29T03:00:00Z"),
          platform: "Google Meet",
          deskripsiSingkat:
            "Learn the art of data wrangling using popular Python libraries.",
          kurikulum: "Overview of Machine Learning, Kaggle Competition",
          deskripsiLengkap:
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-10-31T17:00:00Z"),
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
          waktu: new Date("2024-11-02T03:00:00Z"),
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
      waktuStart: new Date("2024-10-28T03:00:00Z"),
      waktuEnd: new Date("2024-11-02T03:00:00Z"),
      deskripsiKelas:
        "Membahas materi seputar Esensi software engineering, Pengenalan SDLC, ReactJS fundamental; hingga library seperti React Query; React Router, Testing (unit testing; integration test) dalam ReactJS, Deployment sederhana, Pengenalan ke Github dan collaborative workflow",
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
          judulSesi: "Introduction to SE and React",
          waktu: new Date("2024-10-28T03:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "An overview of modern web development technologies and best practices.",
          kurikulum: "Intro to SE; SDLC, Intro to Github, Intro to React, React fundamentals and React router, Mini Project",
          deskripsiLengkap:
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Advanced React",
          waktu: new Date("2024-10-29T03:00:00Z"),
          platform: "Zoom",
          deskripsiSingkat:
            "Learn how to build dynamic UIs using React components.",
          kurikulum: "Mini project sharing, Tailwind CSS, React Query, Final Project",
          deskripsiLengkap:
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-10-31T17:00:00Z"),
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
          waktu: new Date("2024-11-02T03:00:00Z"),
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
      waktuStart: new Date("2024-10-28T03:00:00Z"),
      waktuEnd: new Date("2024-11-02T03:00:00Z"),
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
            "",
          prerequisites: "",
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
            "",
          prerequisites: "",
          url: "https://youtube.com"
        },
        {
          judulSesi: "Konsultasi Final Project",
          waktu: new Date("2024-10-31T17:00:00Z"),
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
          waktu: new Date("2024-11-02T03:00:00Z"),
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
    judulSesi: "Surviving the AI Wave: How IT Enthusiasts Can Thrive in the New Age",
    waktu: new Date("2024-10-27T03:30:00Z"),
    Lokasi: "Auditorium FMIPA Lantai 7 Universitas Gadjah Mada",
    platform: "",
    deskripsi:
      "Surviving the AI Wave: How IT Enthusiasts Can Thrive in the New Age. Di dalam dunia IT, ada banyak jenis profesi yang dapat dipilih. Dari Software Engineering hingga Cyber Security, dari data analysis hingga web development, tetapi dengan adanya gelombang pengembangan AI yang semakin nampak, dibutuhkannya skillset baru yang dapat beradaptasi dengan perkembangan signifikan ini, hal tersebut menjadi sebuah tantangan baru, terutama untuk para mahasiswa yang baru  memulai perjalanan mereka di bidang IT.",
    mentor: {
      nama: "Jane Smith",
      fotoMentor: {
        url: "https://example.com/photoMentor.jpg", // Example URL
        filename: "photoMentor.jpg",
      },
      deskripsi: "Expert in JavaScript and modern web frameworks.",
    },
    materi: [{
      materiJudul: "Open Gate",
      jamBerapa: new Date("2024-10-27T03:30:00Z"),
    },
    {
      materiJudul: "Seminar",
      jamBerapa: new Date("2024-10-27T04:20:00Z"),
    },
    {
      materiJudul: "Sesi QnA",
      jamBerapa: new Date("2024-10-27T05:55:00Z"),
    }
  ]
  },
  {
    judulSesi: "IT Networking Power Connecting Minds, Building Futures",
    waktu: new Date("2024-11-03T03:00:00Z"),
    Lokasi: "Auditorium FMIPA Lantai 1 Universitas Gadjah Mada",
    platform: "",
    deskripsi:
      `“IT Networking Power Connecting Minds, Building Futures”. Di industri IT yang semakin kompetitif, membangun sebuah reputasi yang positif serta kemampuan berkolaborasi sangat diperlukan.`,
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
      materiJudul: "Open Gate",
      jamBerapa: new Date("2024-11-03T03:00:00Z"),
    },
    {
      materiJudul: "Seminar",
      jamBerapa: new Date("2024-11-03T03:40:00Z"),
    },
    {
      materiJudul: "Sesi QnA",
      jamBerapa: new Date("2024-11-03T05:10:00Z"),
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
