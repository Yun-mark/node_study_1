


const {APP_PORT} =  require('./config/config.defult')
const app = require('./app')

app.listen(APP_PORT,()=>{
    console.log(`server is runnning at http://localhost:${APP_PORT}`);
})
