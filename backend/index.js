const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const connectDB = require('./Models/connectDB');

const olclassRoutes = require('./Routes/olclassRoutes');
const olconRoutes = require('./Routes/olconRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();
app.set('trust proxy', 1);

connectDB();

app.use(helmet());
const allowedOrigins = [
  process.env.FRONTEND_COMPLETE_URL,
  "http://localhost:3000"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);

    // Check if the origin is in the list of allowed origins
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mongoSanitize());

app.use('/auth', userRoutes);
app.use('/olcon', olconRoutes);
app.use('/olclass', olclassRoutes);

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if(!err.message) err.message = "Something went wrong";
  res.status(statusCode).json({ error: err.message });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));