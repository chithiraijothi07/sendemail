 
var firebaseConfig = {
apiKey: "AIzaSyDnden0MkSf7yMTHP0KII0Pb1VfVcrWTMg",
authDomain: "form-test-6fd4b.firebaseapp.com",
projectId: "form-test-6fd4b",
storageBucket: "form-test-6fd4b.appspot.com",
messagingSenderId: "426936586458",
appId: "1:426936586458:web:d46390e19d8c07f49f15e3"
};

firebase.initializeApp(firebaseConfig);


let contactInfo = firebase.database().ref("infos");


document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();
  

  
let name = document.querySelector(".name").value;
let email = document.querySelector(".email").value;
let message = document.querySelector(".message").value;
console.log(name, email, message);

saveContactInfo(name, email, message);

document.querySelector(".contact-form").reset();
sendEmail(name,email,message);
}


function saveContactInfo(name, email, message) {
let newContactInfo = contactInfo.push();

newContactInfo.set({
name: name,
email: email,
message: message,
});
retrieveInfos();
}


function retrieveInfos(){
let ref = firebase.database().ref("infos");
ref.on("value",gotData);
}
function gotData(data){
let info=data.val();
let keys=Object.keys(info);
	
for(let i=0;i<key.length;i++){
let infoData=keys[i];
let name=info[infoData].name;
let email=info[infoData].email;
let message=info[infoData].message;
console.log(name,email,message);
		
let infoResults = document.querySelector(".infoResults");
infoResults.innerHTML += `<div>
<p><strong>Name:<strong/>${name}<br/>
<a><strong>Email:<strong/>${email}</a><br/>
<a><strong>Message:<strong/>${message}</a>
</p>
</div>`;
		
}
}
retrieveInfos();


function sendEmail(name,email,message){
Email.send({
Host:"smtp.gmail.com",
Username:'chithiraijothi07@gmail.com',
Password:"zhydmixzdnvboqnf",
To:`${email}`,
From:'chithiraijothi07@gmail.com',
Subject:`${name} sent you a message`,
Body:` ${message}`,
}).then((message) => alert("mail sent successfully"));
}











