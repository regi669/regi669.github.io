const inputs = document.querySelectorAll(".dateInput");
const currentDateShow = document.querySelector("#currentDateShow");
const endDate = document.querySelector("#select-end-date");
const dateDiffCheck = document.querySelector("#btn");

// Set current date
const DateVariable = new Date().toLocaleString("pl-PL");
const dateVarToString = DateVariable.toString();
const indexG = dateVarToString.indexOf("G");
const currentDate = dateVarToString.slice(0, indexG);
currentDateShow.innerText = currentDate;

const DateVariable2 = new Date("2024-01-25T17:00:00").toLocaleString("pl-PL");
const dateVarToString2 = DateVariable2.toString();
const indexG2 = dateVarToString2.indexOf("G");
const currentDate2 = dateVarToString2.slice(0, indexG2);
endDate.innerText = currentDate2;

function clock() {
	const newCurrentDate = new Date();
	const selectedDate = new Date("2024-01-25T17:00:00");

	const timeDiff = selectedDate - newCurrentDate;

	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

	// Assign values to inputs
	inputs[0].value = days;
	inputs[1].value = hours;
	inputs[2].value = minutes;
	inputs[3].value = seconds;
}

dateDiffCheck.addEventListener("click", clock);

setInterval(() => {
	clock();
}, 1000);
