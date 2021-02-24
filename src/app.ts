import express from 'express';
import passport from 'passport'
import passportMiddleware from './middlewares/passport';
import cors from 'cors';

// IMPORTING ROUTES 
import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

// INITIALIZATIONS 
const app = express();
import './db';

// SETTINGS 
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);

// ROUTES
app.get('/', (req, res) => {
    return res.send(`The API is at http://localhost:${app.get('port')}`);
})
app.use(authRoutes);
app.use(specialRoutes);

export default app;

