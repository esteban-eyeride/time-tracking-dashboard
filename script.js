const curr1 = document.getElementById("current1");
const prev1 = document.getElementById("prev1");
const curr2 = document.getElementById("current2");
const prev2 = document.getElementById("prev2");
const curr3 = document.getElementById("current3");
const prev3 = document.getElementById("prev3");
const curr4 = document.getElementById("current4");
const prev4 = document.getElementById("prev4");
const curr5 = document.getElementById("current5");
const prev5 = document.getElementById("prev5");
const curr6 = document.getElementById("current6");
const prev6 = document.getElementById("prev6");

const curr = [curr1,curr2,curr3,curr4,curr5,curr6];
const prev = [prev1,prev2,prev3,prev4,prev5,prev6];

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("Weekly");
const monthlyBtn = document.getElementById("Monthly");

let data;

fetch("https://raw.githubusercontent.com/esteban-eyeride/time-tracking-dashboard/refs/heads/main/data.json").then((response) => {
    if(!response.ok) return console.log("Oops! Something went wrong");

    return response.json();
}) .then((json) => {

    data = json;

    dailyPopulate(json)
    
})

function dailyPopulate() {

    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");

    for (const stat of curr){
        if (data[curr.indexOf(stat)].timeframes.daily.current === 1) {
            stat.textContent = `${data[curr.indexOf(stat)].timeframes.daily.current}hr`
            }
        else {
            stat.textContent = `${data[curr.indexOf(stat)].timeframes.daily.current}hrs`
            }
        }

    for (const stat of prev){
        if (data[prev.indexOf(stat)].timeframes.daily.previous === 1) {
            stat.textContent = `Previous - ${data[prev.indexOf(stat)].timeframes.daily.previous}hr`
            }
        else {
            stat.textContent = `Previous - ${data[prev.indexOf(stat)].timeframes.daily.previous}hrs`
            }
        }
};

function weeklyPopulate() {

    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    for (const stat of curr){
        if (data[curr.indexOf(stat)].timeframes.weekly.current === 1) {
            stat.textContent = `${data[curr.indexOf(stat)].timeframes.weekly.current}hr`
            }
        else {
            stat.textContent = `${data[curr.indexOf(stat)].timeframes.weekly.current}hrs`
            }
        }

    for (const stat of prev){
        if (data[prev.indexOf(stat)].timeframes.weekly.previous === 1) {
            stat.textContent = `Previous - ${data[prev.indexOf(stat)].timeframes.weekly.previous}hr`
            }
        else {
            stat.textContent = `Previous - ${data[prev.indexOf(stat)].timeframes.weekly.previous}hrs`
            }
        }
};

function monthlyPopulate() {

    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");

    for (const stat of curr){
        if (data[curr.indexOf(stat)].timeframes.monthly.current === 1) {
            stat.textContent = `${data[curr.indexOf(stat)].timeframes.monthly.current}hr`
            }
        else {
            stat.textContent = `${data[curr.indexOf(stat)].timeframes.monthly.current}hrs`
            }
        }

    for (const stat of prev){
        if (data[prev.indexOf(stat)].timeframes.monthly.previous === 1) {
            stat.textContent = `Previous - ${data[prev.indexOf(stat)].timeframes.monthly.previous}hr`
            }
        else {
            stat.textContent = `Previous - ${data[prev.indexOf(stat)].timeframes.monthly.previous}hrs`
            }
        }
};

dailyBtn.addEventListener("click",dailyPopulate);
weeklyBtn.addEventListener("click",weeklyPopulate);
monthlyBtn.addEventListener("click",monthlyPopulate);