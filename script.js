// script.js
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginMessage = document.getElementById("loginMessage");
    const vpnInterface = document.getElementById("vpnInterface");

    // Check for credentials
    if (username === "admin" && password === "admin") {
        loginMessage.innerText = "Login successful!";
        vpnInterface.style.display = "block"; // Show VPN interface
    } else {
        loginMessage.innerText = "Invalid credentials! Please try again.";
    }
});

function connectVPN(country) {
    const connectionStatus = document.getElementById("connectionStatus");
    const randomIps = {
        "UK": ["78.129.0.141", "82.132.221.15", "91.103.118.27", "87.125.178.89"],
        "Germany": ["78.46.107.234", "85.214.118.14", "87.106.228.50", "89.204.152.17"],
        "France": ["213.186.33.99", "193.70.124.125", "89.234.156.83", "78.40.41.15"],
        "Switzerland": ["213.144.139.20", "84.16.118.5", "77.109.205.3", "185.93.4.98"],
    };
    const cities = {
        "UK": ["London", "Manchester", "Birmingham"],
        "Germany": ["Berlin", "Hamburg", "Munich"],
        "France": ["Paris", "Lyon", "Marseille"],
        "Switzerland": ["Zurich", "Geneva", "Bern"],
    };

    const ip = randomIps[country][Math.floor(Math.random() * randomIps[country].length)];
    const city = cities[country][Math.floor(Math.random() * cities[country].length)];

    connectionStatus.innerText = `Connected to ${city}, ${country} with IP: ${ip}`;
}

function setProtectionLevel(level) {
    const connectionStatus = document.getElementById("connectionStatus");
    connectionStatus.innerText = `Protection level set to ${level}.`;
}

function featureAction(feature) {
    const connectionStatus = document.getElementById("connectionStatus");
    connectionStatus.innerText = `${feature} activated!`;
}
