const bodyParser = require('body-parser');
const cookierParser = require('cookie-parser');
const express = require('express');

const app = express();
let apiRouter= express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookierParser('這三件事'));
app.use('/api', apiRouter);
apiRouter.post('/login',function(req,res){
	console.log(res.body,req.body);
});
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);