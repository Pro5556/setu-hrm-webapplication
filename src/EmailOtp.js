const { Auth, LoginCredentials } = require("two-step-auth");

async function login(emailId) {
try {
	const res = await Auth(emailId, "Company Name");
	console.log(res);
	console.log(res.mail);
	console.log(res.OTP);
	console.log(res.success);
} catch (error) {
	console.log(error);
}
}

// This should have less secure apps enabled
LoginCredentials.mailID = "2004016.stu@dmscollege.ac.in";

// You can store them in your env variables and
// access them, it will work fine
LoginCredentials.password = "";
LoginCredentials.use = true;

// Pass in the mail ID you need to verify
login("abhishek.s.mandal.com");
