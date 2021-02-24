import mongoose from 'mongoose';

const db_name = "tyscript-nodejs-mongodb";
const URI = `mongodb://localhost/${db_name}`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => console.log("DB is connected"));

