let colorChangerBtn = document.getElementById('colorChangerBtn');

const colorChange = () =>{
let colorChangerBtn = document.getElementById('colorChangerBtn');
  let num = "0123456789ABCDEF";
  let code = "#";
  for(let i = 0;i<6;i++){
    code += num[Math.floor(Math.random(num)*16)];
  }
 document.body.style.backgroundColor = code;
 colorChangerBtn.innerText = code;
};


colorChangerBtn.addEventListener('click', colorChange);