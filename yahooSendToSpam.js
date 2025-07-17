const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async function runLoop() {
	console.log("running");

	const el = document.querySelector(".H_A:nth-child(2) > .D_F > .D_F svg");
	if (el) {
		el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		await sleep(2000);
	} else {
		console.log("Element not found.");
	}

	const el1 = document.querySelector("#message-list-toolbar-checkbox path");
	if (el1) {
		el1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		await sleep(2000);
	} else {
		console.log("Element 1 not found.");
	}

	const el2 = document.querySelector(".D_F:nth-child(5) > svg");
	if (el2) {
		el2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		await sleep(2000);
	} else {
		console.log("Element 2 not found.");
	}

	// Repeat the loop
	runLoop();
})();
