// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // Schemas and Models

// const educationSchema = new mongoose.Schema({
//   institution: String,
//   degree: String,
//   fieldOfStudy: String,
//   startYear: Number,
//   endYear: Number,
//   grade: String,
//   description: String
// });
// const Education = mongoose.model('Education', educationSchema);

// const skillSchema = new mongoose.Schema({
//   name: String,
//   level: String, // e.g., Beginner, Intermediate, Expert
// });
// const Skill = mongoose.model('Skill', skillSchema);

// const projectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   technologies: [String],
//   githubLink: String,
//   liveLink: String,
// });
// const Project = mongoose.model('Project', projectSchema);

// const experienceSchema = new mongoose.Schema({
//   company: String,
//   position: String,
//   startDate: String,
//   endDate: String,
//   description: String
// });
// const Experience = mongoose.model('Experience', experienceSchema);

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   submittedAt: {
//     type: Date,
//     default: Date.now
//   }
// });
// const Contact = mongoose.model('Contact', contactSchema);

// // Routes

// // Education
// app.post('/api/education', async (req, res) => {
//   try {
//     const edu = new Education(req.body);
//     await edu.save();
//     res.status(201).json({ message: 'Education added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to add education' });
//   }
// });

// app.get('/api/education', async (req, res) => {
//   try {
//     const data = await Education.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch education data' });
//   }
// });

// // Skills
// app.post('/api/skills', async (req, res) => {
//   try {
//     const skill = new Skill(req.body);
//     await skill.save();
//     res.status(201).json({ message: 'Skill added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to add skill' });
//   }
// });

// app.get('/api/skills', async (req, res) => {
//   try {
//     const skills = await Skill.find();
//     res.json(skills);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch skills' });
//   }
// });

// // Projects
// app.post('/api/projects', async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.status(201).json({ message: 'Project added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to add project' });
//   }
// });

// app.get('/api/projects', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch projects' });
//   }
// });

// // Experiences
// app.post('/api/experiences', async (req, res) => {
//   try {
//     const exp = new Experience(req.body);
//     await exp.save();
//     res.status(201).json({ message: 'Experience added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to add experience' });
//   }
// });

// app.get('/api/experiences', async (req, res) => {
//   try {
//     const experiences = await Experience.find();
//     res.json(experiences);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch experiences' });
//   }
// });

// // Contact
// app.post('/api/contact', async (req, res) => {
//   try {
//     const contact = new Contact(req.body);
//     await contact.save();
//     res.status(201).json({ message: 'Message sent successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to send message' });
//   }
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
