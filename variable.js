const accountid=1443
let accountemail="sugandhasharma32"
var accountpassword="1234"
// accountid=2// not allowed
console.log(accountid);
accountemail="sugandhasharma6265"
accountpassword="1211"
console.log(accountemail);
console.log(accountpassword);
accountcity="jaipur";
console.log(accountcity);
accountcity="bhopal";
console.log(accountcity);
console.table([accountemail,accountpassword,accountcity]);

/*
var prefered not to use because of issue in block 
scope and functional scope*/
let accountstate;//undefined
