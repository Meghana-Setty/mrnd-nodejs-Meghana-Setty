var express = require('express');
var router = express.Router();
var fs=require('fs');
var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "data\\" + id + "-Contact.json";
}
/* GET contacts */
router.get('/:id', function(req, res, next) {
	console.log(req.params.id);
	var id=parseInt(req.params.id);
	console.log(id);
	res.send(contact[id]);
});

router.post('/', function(req, res, next) {
	fs.exists('data\\Id.txt',function(exists) {
		if(!exists)
		{
			iden='0';
			fs.writeFileSync('data\\Id.txt',iden);
		}
		console.log('hello');
		var obj =parseInt((fs.readFileSync('data/Id.txt')));
		console.log("boj::::"+obj);
			fs.writeFileSync(getContactFileName(""+obj),JSON.stringify(req.body));
			obj++;
			fs.writeFileSync('data\\Id.txt',obj);
			res.status(200).send(''+(obj-1));

});
			
});

router.put('/:id', function(req, res, next) {
var obj=JSON.parse(fs.readFileSync(getContactFileName(req.params.id)));
console.log(obj);
for(x in req.body)
	obj[x]=req.body[x];
console.log(obj);
fs.writeFileSync(getContactFileName(req.params.id),JSON.stringify(obj));
res.status(200).send('all ok');
});

router.post('/messages/:id',function(req,res,next){
	var obj=JSON.parse(fs.readFileSync(getContactFileName(req.params.id)));
console.log(obj);
console.log(JSON.stringify(req.body)+"received from client");
obj.message=req.body.mesg;
console.log(JSON.stringify(obj)+"written in file");
fs.writeFileSync(getContactFileName(req.params.id),JSON.stringify(obj));
res.status(200).send('all ok');

});

module.exports = router;
