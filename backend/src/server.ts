import  app  from './app';
import 'dotenv'


const Port = process.env.Port || 3002;

app.listen(Port, () => console.log(` Server running in port ${Port}`));