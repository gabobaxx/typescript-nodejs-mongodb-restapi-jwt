import app from "./app";

// SERVER 
app.listen(app.get('port'), () => {
    console.log(`>>> API => http://localhost:${app.get('port')}`);
});