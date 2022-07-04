const casual = require('casual');

const thisPoint = casual.point;
var array_of = function(times) {
	var result = [];
     
	for (var i = 0; i < times; ++i) {
		result.push({
            name:  casual.name,
            address: casual.address1,
            city: casual.city,
            email:  casual.email,
            phoneNumber:  casual.phone,
    
        });
	}

	return result;
};


// Will generate array of five random list
var array_of_timestamps = array_of(500);
console.log('ARRAY LIST: ', array_of_timestamps);

 const resolvers = {
    Query: {
        users(){
            return array_of_timestamps;
        },
    },
};

module.exports = {resolvers};