function countWords() {
    var textarea = document.getElementById('text');
    var text = textarea.value;
    var wordCount = 1;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            wordCount++;
        }
    }
    document.getElementById('wordCount').textContent = wordCount; 
}
