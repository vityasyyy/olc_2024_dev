const mongoose = require('mongoose');
const Olclass = require('../Models/olclass'); // Make sure to adjust this path to where your model is located

mongoose.connect('mongodb://localhost:27017/omahTILearningCenter2024')
    .then(() => {
        console.log("MongoDB connection established!");
    })
    .catch((err) => {
        console.log("MongoDB connection error!", err);
    });

const seedOlclass = async () => {
    await Olclass.deleteMany({}); // Clear any existing data

    const newClass = new Olclass({
        title: 'Full-Stack Web Development',
        enrolledBy: [], // Empty for now, since it's just for testing
        slots: 40,
        mentor: {
            nama: 'John Doe',
            fotoMentor: {
                url: '', // You can add a URL later
                filename: ''
            },
            deskripsi: 'Experienced full-stack developer with expertise in MERN stack.'
        },
        sesi: [
            {
                judulSesi: 'Introduction to Web Development',
                waktu: new Date('2024-09-18T10:00:00Z'),
                platform: 'Zoom',
                deskripsiSingkat: 'An overview of web development concepts and best practices.'
            },
            {
                judulSesi: 'Frontend with React',
                waktu: new Date('2024-09-19T10:00:00Z'),
                platform: 'Google Meet',
                deskripsiSingkat: 'Learn the basics of frontend development using React.'
            },
            {
                judulSesi: 'Backend with Node.js',
                waktu: new Date('2024-09-20T10:00:00Z'),
                platform: 'Zoom',
                deskripsiSingkat: 'Understand how to build a backend using Node.js and Express.'
            },
            {
                judulSesi: 'Database Integration with MongoDB',
                waktu: new Date('2024-09-21T10:00:00Z'),
                platform: 'Microsoft Teams',
                deskripsiSingkat: 'Learn how to integrate MongoDB into your web applications.'
            },
            {
                judulSesi: 'Deployment and DevOps',
                waktu: new Date('2024-09-22T10:00:00Z'),
                platform: 'Zoom',
                deskripsiSingkat: 'Learn about deploying web applications and DevOps practices.'
            }
        ]
    });

    await newClass.save();
    console.log('Seed data created successfully!');
}

seedOlclass().then(() => {
    mongoose.connection.close(); // Close the connection once seeding is complete
});
