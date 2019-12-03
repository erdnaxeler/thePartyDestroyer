//script for creating random questions or actions and displaying them
import questionsArray from
'https://erdnaxeler.github.io/thePartyDestroyer/Resources/JavaScript/questionsArray.js';
import actionsArray from
'https://erdnaxeler.github.io/thePartyDestroyer/Resources/JavaScript/actionsArray.js';

console.log(questionsArray.length);

//Wait until DOM content is loaded to register events
window.addEventListener('DOMContentLoaded', registerEvents, false);
function registerEvents (e) {
		document.getElementById("questionDisplay").addEventListener('click', getAnAction, true);
		document.getElementById("actionDisplay").addEventListener('click', getATruth, true);
		document.getElementById("rulesBtn").addEventListener("click", displayRules, false);
		document.getElementById("hideRulesBtn").addEventListener("click", hideRules, false);
};

function displayRules () {
	document.getElementById("rulesContainer").style.visibility = visible;
};

function hideRules () {
	document.getElementById("rulesContainer").style.visibility = none;
};


function relPage (e) {
};

function getAnAction (e) {
	let decidingNumber = Math.floor(Math.random()*questionsArray.length);
	let finalQuestion = questionsArray[decidingNumber];
		if (questionsArray.length !== 0) {
					document.getElementById("questionHolder").innerHTML = finalQuestion
					questionsArray.splice(decidingNumber,1);
				} else {
					document.getElementById("questionHolder").innerHTML =
						"Sorry, there are no more new questions. Please refresh the page for a new game."
			}
		};

function getATruth (e) {
	let decidingNumber = Math.floor(Math.random()*actionsArray.length);
	let finalQuestion = actionsArray[decidingNumber];
		if (actionsArray.length !== 0) {
					document.getElementById("questionHolder").innerHTML = finalQuestion
					actionsArray.splice(decidingNumber,1);
				} else {
					document.getElementById("questionHolder").innerHTML =
						"Sorry, there are no more new actions. Please refresh the page for a new game."
			};

};