function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (tempInput === "" || isNaN(tempInput)) {
        resultDiv.innerHTML = "❌ Please enter a valid number!";
        return;
    }

    let temp = parseFloat(tempInput);
    let convertedTemp;

    // Convert input to Celsius first
    if (inputUnit === "F") {
        temp = (temp - 32) * (5/9);
    } else if (inputUnit === "K") {
        temp = temp - 273.15;
    }

    // Convert Celsius to desired output unit
    if (outputUnit === "C") {
        convertedTemp = temp;
    } else if (outputUnit === "F") {
        convertedTemp = (temp * 9/5) + 32;
    } else if (outputUnit === "K") {
        convertedTemp = temp + 273.15;
    }

    resultDiv.innerHTML = `✅ Converted Temperature: ${convertedTemp.toFixed(2)}°${outputUnit}`;
}
