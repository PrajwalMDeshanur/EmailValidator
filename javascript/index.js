
let result=
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "prajwalmdeshanur",
    "email": "prajwalmdeshanur@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }

 

  document.getElementById("SubmitBtn").addEventListener("click", async (e) => {
    e.preventDefault();
    resultContainer.innerHTML=` <img src="./assests/__Iphone-spinner-1.gif" alt="">`
    let api_key = "ema_live_rccwM3wIKH5exKQpKjulALvwLAlLUDz4OJrPCH2M";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${api_key}&email=${email}`;
    

        let res = await fetch(url);
        let result = await res.json();
        let str = ``;
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }
        document.getElementById("resultContainer").innerHTML = str;
})
    