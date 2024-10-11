document.addEventListener("DOMContentLoaded", () => {
    const speakButton = document.getElementById("speak-button");
    const textToSpeak = document.getElementById("text-to-speak").innerText;

    speakButton.addEventListener("click", () => {
        speak(textToSpeak);
    });

    function speak(text) {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
});