
var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "C:\\Users\\MEGHANA\\Desktop\\mrnd-nodejs\\src\\contacts\\data\\" + id + "-Contact.json";
}

describe("FilePersistence Test Suite", function(){
var idCreated;
	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/filecontacts";
	var fs = require('fs');

	describe("create persist contact", function(){
		

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							idCreated = body;
						//	console.log(idCreated);
							expect(idCreated).toBe(0);
							done();
					    });
		});

		it("should persist contact",function(done){

			var fileName = getContactFileName(idCreated);

			var obj = JSON.parse(fs.readFileSync(fileName));

			expect(obj.firstName).toBe("jagan");
			done();

		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);

							var fileName = getContactFileName(idCreated);

							var obj = JSON.parse(fs.readFileSync(fileName));
							expect(obj.firstName).toBe("jagan-updated");
							done();
					    });
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){

		it("should post message to contact", function(done){
//TODO: Write your test case here.
			
			var obj=new Object();
			obj.mesg="this is the first message";
			request.post({
								url:contacts_url+"/messages/"+idCreated,
								body:obj,
								json:true
						 },
						 function(error,response,body){
								expect(response.statusCode).toBe(200);
//								console.log(body);
								var fileName = getContactFileName(idCreated);

							var obj = JSON.parse(fs.readFileSync(fileName));
							expect(obj.message).toBe("this is the first message");
							done();

						})
			

		});

		it("should get message for contact", function(done){
			//TODO: Write your test case here.
			
							var fileName = getContactFileName(idCreated);
							console.log("file name is "+fileName);
							var obj = JSON.parse(fs.readFileSync(fileName));
							console.log(idCreated+"id created");
							console.log(JSON.stringify(obj)+" is read from file");
							expect(obj.message).toBe("this is the first message");
			
			done();

		});
		

	});

});

