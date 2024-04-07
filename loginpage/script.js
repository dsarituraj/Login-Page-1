const database_mimic = {
  username: "rituraj",
  password: "12345"
}

const url = "https://dsarituraj.github.io";

window.onload = () => {
  const submit = document.getElementById("bttn");
  const uid = document.getElementById("uid");
  const pid = document.getElementById("pid");
  
  submit.addEventListener("click", _=>{
    if((uid.value == database_mimic.username) && (pid.value == database_mimic.password)){
      window.location = url;
    }
  })

}
