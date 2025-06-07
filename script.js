function checkSingleWord() {
    const singleWordInput = document.getElementById('singleWordInput').value.trim().toLowerCase();
    const result = document.getElementById('result');

    if (singleWordInput === '') {
        result.innerHTML = 'Please enter a word to check.';
        result.className = 'error';
        return;
    }

    if (dictionary.search(singleWordInput)) {
        result.innerHTML = `"${singleWordInput}" is spelled correctly!`;
        result.className = 'success';
    } else {
        result.innerHTML = `"${singleWordInput}" is misspelled.`;
        result.className = 'error';
    }
}
