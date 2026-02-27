fetch("https://paulosensi-server-1.onrender.com/api/ping")
.then(r=>r.json())
.then(d=>{
document.getElementById("status").innerText="Servidor ONLINE ✅";
})

function entrar(){
alert("Bem vindo DONO 🔥")
}
