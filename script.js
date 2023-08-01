function palindrome(text) {
    // if (text.length <= 1) {
    //     return false;
    // }

    for (let p = 0; p < text.length / 2; p++) {
        if (text[p].toLowerCase() !== text[text.length - 1 - p].toLowerCase()) {
            return false;
        }
    }

    return true;
}

function process_palindrome(e) {
    e.preventDefault();

    if (text.value === "") {
        result.innerText = "Of course it's not a palindrome! You goof! You didn't put any words!!!";

    } else {

        if (palindrome(text.value)) {
            result.innerText = `${text.value} is a palindrome!`;

        } else {
            result.innerText = `${text.value} is not a palindrome!`;
        }
    }
    
    text.value = "";
}
