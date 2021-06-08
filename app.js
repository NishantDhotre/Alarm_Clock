console.log("working");
setLog();


let time = document.getElementById("currentTime");
let currenTime = new Date();
console.log(currenTime);
console.log((currenTime.getHours()) % 12 + ":" + currenTime.getMinutes());
let str = `${currenTime.getHours() % 12}:${currenTime.getMinutes()}`;
console.log(str);
time.innerHTML = `<h3> ${str}</h3>`;

let btn = document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
    if (alarmTime.value.length != 0) {
        let alarmTime = document.getElementById("alarmTime");
        console.log(alarmTime.value);
        let myObj = {
            time: alarmTime.value,
            // status:null;
        }
        alarmsObj.push(myObj);
        localStorage.setItem("alarms", JSON.stringify(alarmsObj));
    }
    setLog();

});

function setLog() {
    let alarmLog = document.getElementById("alarmLog");
    let alarms = localStorage.getItem("alarms");
    if (alarms == null) {
        alarmsObj = [];
    }
    else {
        alarmsObj = JSON.parse(alarms);
    }
    let hml = "";
    alarmsObj.forEach(function (element, index) {

        hml += `    
            <div class="noteCard my-1 mx-1 card" style="width: 18rem;  display: inline-block; ">
                <div class="card-body">
                    <h5 class="card-title" id="${index}">Alarm ${index+1}</h5>
                    <p class="card-text">${element.time}</p>
                    <div class="form-check form-switch">
                        <!--<input class="form-check-input toggle" id="state${index+1}"  type="checkbox" id="flexSwitchCheckChecked" checked>--!>
                        <button class="btn btn-primary" onclick="deleteAlam(this.id)" id="${index}" type="submit">delete</button>
                        </div>
                </div>
            </div>
        `;

        // hml += `<div class="noteCard my-3 mx-3 card" style="width: 18rem;">
        //             <div class="card-body">
        //                 <h5 class="card-title" id="$1">  alarm</h5>
        //                 <p class="card-text">${va}</p>
        //                 <button class="btn btn-primary" onclick="deleteNote(this.id)" id="$4">Delete</a>
        //             </div>
        //         </div>`;
    });


    alarmLog.innerHTML = hml;
}
function deleteAlam(index){

    console.log("click",index);

    let alarms = localStorage.getItem("alarms");
    if (alarms == null) {
        alarmsObj = [];
    }
    else {
        alarmsObj = JSON.parse(alarms);
    }
    alarmsObj.splice(index, 1); //removing note rom the obj
    localStorage.setItem("alarms", JSON.stringify(alarmsObj)); // updating local sorage
    setLog();
}
