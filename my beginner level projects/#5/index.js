function reverseWord() {
    // Get the input field value
    let input = document.getElementById("wordInput").value;

    // Reverse the input string
    let reversedWord = input.split("").reverse().join("");

    // Display the reversed word on the screen
    document.getElementById("result").textContent = "Reversed word: " + reversedWord;
}
