const cards = document.querySelectorAll(".card");
const timeBtn = document.querySelectorAll(".timeBtn");

fetch("https://raw.githubusercontent.com/esteban-eyeride/time-tracking-dashboard/refs/heads/main/data.json")
    
    .then((response) => {
        if (!response.ok) {console.log("could not find data!")}
        return response.json();
    })

    .then((data) => {
        populateCards(data,"weekly");

        timeBtn.forEach((btn) => {
            btn.addEventListener("click",(e) => {

                timeBtn.forEach((btn) => btn.classList.remove("active"));
                e.target.classList.add("active");

                const time = e.target.textContent.toLowerCase();
                populateCards(data, time)

            })
        })
    });

function populateCards (data, timeframe) {
    cards.forEach((card,index) => {

        const currTime = card.querySelector(".StatCurrent");
        const prevTime = card.querySelector(".StatPrevious");

        const timeframeData = data[index].timeframes[timeframe];

        const prevText =
            timeframe === "daily"
            ? "yesterday"
            : timeframe === "weekly"
            ? "Last week"
            : "Last month";

        function HrsCheck (hour) {return hour === 1 ? "hr" : "hrs"}; 

        currHrs = timeframeData.current;
        prevHrs = timeframeData.previous;
        
        currTime.textContent = `${currHrs} ${HrsCheck(currHrs)}`;
        prevTime.textContent = `${prevText} - ${prevHrs} ${HrsCheck(prevHrs)}`;
    });
}