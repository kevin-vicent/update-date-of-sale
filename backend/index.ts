import express from 'express';

const app = express();

// app.use(express.json());
app.use(require('body-parser').json());

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.post('/api/form', (request, response) => {
    const { email, vin, dateOfSale, token } = request.body;
    console.log('email ', email );
    console.log('vin ', vin );
    console.log('dateOfSale ', dateOfSale );
    console.log('token ', token );
    response.send('Hello API');
});
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`🚀 Hello, service is running @ port ${port}`) });
