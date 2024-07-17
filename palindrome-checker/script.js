function PalindromeChecker() {
    const button = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');
    const text_element = document.getElementById('text-input');
    const originalText = document.getElementById('original-text');
    const boolText = document.getElementById('bool');

    button.addEventListener('click', (event) => {
        const regex2 = /[\s\p{P}]/gu;
        event.preventDefault();  // Prevent form submission
        resultDiv.style.display = 'block';
        let text = text_element.value;  // Get the value from the input field
        originalText.textContent = text;  // Display the original text
        let isPalindrome = true;  // Assume true and try to disprove
        let text1 = (text.replace(regex2,""));
        console.log(`original text : ${text}`);
        console.log(`regexed text : ${text1}`);
        text1 = text1.toLowerCase();
        console.log(`smalller text : ${text1} and its lenght is ${text1.l}`)

        if (text1.length === 0) {
            alert("Please input a value");
            return;
        }
        else if (text1.length === 1) {
            isPalindrome = true;
        } 
        // else if (text1 === text1.split('').reverse().join('')) {
        //     isPalindrome = true;
        // }
        else {
            for (let i = 0; i < text1.length; i++) {
                if (text1[i] !== text1[text1.length - i - 1] ) {
                    isPalindrome = false;
                    break;
                }
            }
        }

        if (isPalindrome) {
            boolText.textContent = '';
                resultDiv.classList.remove('alert-danger');
                resultDiv.classList.add('alert-success');
        } else {
                boolText.textContent = 'not ';
                resultDiv.classList.remove('alert-success');
                resultDiv.classList.add('alert-danger');
            }
    });

    text_element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            button.click();
        }
    });
}

document.addEventListener('DOMContentLoaded', PalindromeChecker);
