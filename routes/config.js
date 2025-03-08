module.exports=function (app){
app.use('/registration',require('./registrationRouter'))
app.use('/metrics',require('./metricsRouter'))
}