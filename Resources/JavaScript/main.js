import questionsArray from
'https://erdnaxeler.github.io/thePartyDestroyer/Resources/JavaScript/questionsArray.js';

console.log(questionsArray.length);

//Wait until DOM content is loaded to register events
window.addEventListener('DOMContentLoaded', registerEvents, false);
function registerEvents (e) {
		document.getElementById("activator").addEventListener('click', getItGoing, true);
};


function relPage (e) {
};

function getItGoing (e) {
	let decidingNumber = Math.floor(Math.random()*questionsArray.length);
	console.log(decidingNumber);
	let finalQuestion = questionsArray[decidingNumber];
		if (questionsArray.length !== 0) {
					document.getElementById("questionHolder").innerHTML = finalQuestion
					questionsArray.splice(decidingNumber,1);
				} else {
					document.getElementById("questionHolder").innerHTML =
						"Sorry, there are no more new questions. Please refresh the page for a new game."
			}
		};


