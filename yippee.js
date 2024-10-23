function extendAsciiArtL() {
    const asciiArtElement = document.getElementById('ascii-artL');
    const windowHeight = window.innerHeight;
    const artHeight = asciiArtElement.offsetHeight;
    const expandable = document.getElementById('expandableL');

    // Clear any previous dynamic lines
    expandable.innerHTML = '<pre class="expL">|   |</pre>';

    // If the art height is less than the window height, pad the middle
    if (artHeight < windowHeight) {
        const middleLine = "|   |";  // Line to repeat in the middle
        const lineHeight = 26; // Approximate line height in pixels
        const numberOfLines = Math.ceil((windowHeight - artHeight) / lineHeight);

        for (let i = 0; i < numberOfLines; i++) {
            const lineElement = document.createElement('pre');
            lineElement.classList.add('expL')
            lineElement.textContent = middleLine;
            expandable.appendChild(lineElement);
        }
    }
}

// Call the function on load and on resize
window.addEventListener('load', extendAsciiArtL);
window.addEventListener('resize', extendAsciiArtL);

function extendAsciiArtR() {
    const asciiArtElement = document.getElementById('ascii-artR');
    const windowHeight = window.innerHeight;
    const artHeight = asciiArtElement.offsetHeight;
    const expandable = document.getElementById('expandableR');

    // Clear any previous dynamic lines
    expandable.innerHTML = '<pre class="expR">|   |</pre>';

    // If the art height is less than the window height, pad the middle
    if (artHeight < windowHeight) {
        const middleLine = "|   |";  // Line to repeat in the middle
        const lineHeight = 26; // Approximate line height in pixels
        const numberOfLines = Math.ceil((windowHeight - artHeight) / lineHeight);

        for (let i = 0; i < numberOfLines; i++) {
            const lineElement = document.createElement('pre');
            lineElement.classList.add('expR')
            lineElement.textContent = middleLine;
            expandable.appendChild(lineElement);
        }
    }
}

// Call the function on load and on resize
window.addEventListener('load', extendAsciiArtR);
window.addEventListener('resize', extendAsciiArtR);
