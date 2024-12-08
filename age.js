document.getElementById("btn").addEventListener("click", function () {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");
    const historyList = document.getElementById("history-list");

    if (!dob) {
        result.textContent = "Please enter a valid date of birth.";
        result.classList.add("visible");
        return;
    }

    const today = new Date();
    const birthDate = new Date(dob);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Update result display
    result.innerHTML = `🎉 You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    result.classList.add("visible");

    // Add to history
    const historyItem = document.createElement("li");
    historyItem.textContent = `🎂 DOB: ${dob} → Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`;
    if (historyList.firstChild && historyList.firstChild.textContent === "No history yet. Calculate your age to see the history!") {
        historyList.innerHTML = ""; // Clear the "No history" placeholder
    }
    historyList.appendChild(historyItem);
});
