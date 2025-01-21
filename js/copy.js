function copyToClipboard() {
    const textToCopy = "3vgopg7xm3EWkXfxmWPUpcf7g939hecfqg18sLuXDzVt"; 

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Address copied to clipboard: " + textToCopy);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy the address. Please try again!");
    });
}





