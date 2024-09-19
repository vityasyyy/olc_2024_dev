const mongoose = require('mongoose');
const csv = require('csvtojson');
const path = require('path');
const os = require('os');
const fs = require('fs');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/omahTILearningCenter2024';

// Define a Mongoose schema with only the NIM field
const mahasiswaSchema = new mongoose.Schema({
  NIM: String
});

// Add an index to the NIM field
mahasiswaSchema.index({ NIM: 1 }); // Create an index on NIM

const MahasiswaModel = mongoose.model('Mahasiswa', mahasiswaSchema);

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Function to migrate CSV data to MongoDB
async function migrateCsvToMongoDB(csvFilePaths) {
  try {
    for (const csvFilePath of csvFilePaths) {
      if (!fs.existsSync(csvFilePath)) {
        console.error('CSV file not found:', csvFilePath);
        continue;
      }

      console.log(`Reading CSV file: ${csvFilePath}`);
      const jsonArray = await csv({
        noheader: true,
        headers: ['No', 'ProgramStudi', 'NIM', 'NamaMahasiswa', 'Angkatan']
      }).fromFile(csvFilePath);
      console.log(`Total rows in CSV: ${jsonArray.length}`);
      
      console.log('First few rows of CSV:');
      console.log(jsonArray.slice(0, 5));

      // Extract only the NIM column
      const filteredData = jsonArray.filter(row => 
        row.NIM && row.NIM !== 'NIM'
      ).map(row => ({
        NIM: row.NIM
      }));

      console.log(`Filtered rows with NIM only: ${filteredData.length}`);

      if (filteredData.length > 0) {
        await MahasiswaModel.insertMany(filteredData);
        console.log(`${filteredData.length} NIM records migrated from ${csvFilePath} to MongoDB successfully`);
      } else {
        console.log('No valid NIM records to migrate from', csvFilePath);
      }
    }
  } catch (error) {
    console.error('Error migrating CSV data to MongoDB:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

// Run the migration
async function runMigration() {
  await connectToMongoDB();
  // Provide paths to multiple CSV files
  const csvFilePaths = [
    path.resolve(os.homedir(), 'Downloads', 'Ilkom 2023.xlsx - Daftar Mahasiswa.csv'),
    // Add more file paths as needed
  ];
  await migrateCsvToMongoDB(csvFilePaths);
}

runMigration();
