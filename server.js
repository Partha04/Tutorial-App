const { static } = require('express');
const express=require('express');
const bodyparser=require('body-parser')
const cors =require('cors')

const userRoute=require('./routes/user_route')
const courseRoute=require('./routes/course_route')
const lessionRoute=require('./routes/lession_route');
const topicRoute=require('./routes/topic_route')
const learnRoute=require('./routes/learn_route')
const practiceRoute=require('./routes/practice_route')
const userCourseroute=require('./routes/user_courses')
const auth=require('./auth/auth');
const tokenvalidation = require('./auth/tokenvalidation');

const app=express();
app.use(bodyparser.json());
app.use(cors());

//app.use(express.static('./public'));
app.use(auth);
app.use(userRoute);

app.use(tokenvalidation)//authentication
app.use(courseRoute);
app.use(lessionRoute);
app.use(topicRoute);
app.use(learnRoute);
app.use(practiceRoute);
app.use(userCourseroute);

app.listen(5000,()=>{
    console.log("listening to 5000");
})


