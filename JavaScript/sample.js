const firebaseConfig = {
    apiKey: "AIzaSyCQqxxsf3iLC0-poNTAk7A-iNpXap1Fa74",
    authDomain: "yogawebsite-6365b.firebaseapp.com",
    databaseURL: "https://yogawebsite-6365b-default-rtdb.firebaseio.com",
    projectId: "yogawebsite-6365b",
    storageBucket: "yogawebsite-6365b.appspot.com",
    messagingSenderId: "98448622028",
    appId: "1:98448622028:web:0059ba35a79c3b52bddd69"
  };


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitform);

  function submitform(e) {
    e.preventDefault();

    var email= getElementVal("email");
    var password= getElementVal("password");
    var name= getElementVal("name");

    // console.log(email, password);

    saveMessages(name,email, password);

    // /alert message/ 
    document.querySelector(".alert").style.display="block";

    // remove the message
   setTimeout(() => {
      document.querySelector(".alert").style.display="none";
    }, 3000);
   
    // reset the form
    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, email, password) =>{
        var newContactForm= contactFormDB.push();

        newContactForm.set({
          name: name,
          email : email,
          password : password,
        })
  };

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }