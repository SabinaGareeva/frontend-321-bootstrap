let suggest = document.getElementsByClassName('suggest');
for (let i = 0; i < suggest.length; i++) {
    let suggestion = suggest[i];
    let originalContent = suggestion.innerHTML;
    suggestion.onclick = function () {
        if (this.innerHTML == originalContent) {
            this.innerHTML = '<img src="img/already.svg" alt="#">' +
                '<p class="already-text">Already watched</p>';
        } else { this.innerHTML = originalContent }
    };
}

