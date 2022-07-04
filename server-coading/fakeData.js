const casual = require('casual');

// Define custom generator
casual.define('point', function() {
	return {
		name:  casual.name,
        address: casual.address,
        email:  casual.email,
        phoneNumber:  casual.phone,

	};
});

// Generate random point
var point = casual.point;
console.log(point);

