export function copyToClipboard(toCopy) {
    const textArea = document.createElement('textarea');
    textArea.value = toCopy;
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.opacity = 0;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        alert(`Copy to clipboard failed: ${err}`);
    }
    document.body.removeChild(textArea);
}