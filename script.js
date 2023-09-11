
function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const shortenedUrlLink = 'rel.ink/' + Math.random().toString(28).substring(2, 8);
    const inputBorder = document.getElementById("longUrl");
    
    // specifying when where the shortened url is to display.
    if (longUrl == ""){
        document.getElementById("shortenedUrl").style.display = "none";
    }
    else{
        document.getElementById("shortenedUrl").style.display = "flex";
    }

    if (longUrl) {
        // specifying validation below for text and border.
        document.getElementById("shortenedUrlLink").textContent = shortenedUrlLink;
        
        inputBorder.style.borderColor = "";
        inputBorder.style.borderWidth = ""; 
        inputBorder.style.borderStyle = "";
        document.getElementById("linkLb").style.visibility = "hidden";

        // Pointing out where the long url should also display after shortening.
        const longUrlLink = document.getElementById("longUrlLink");
        longUrlLink.textContent = longUrl;
      
        // Get the div element by its ID
        const shortUrlDiv = document.getElementById("shortUrlDiv");
        // Display the shortened URL inside the div
        shortUrlDiv.textContent = "Shortened URL: " + shortenedUrlLink;
    } 
    else if(longUrl == ""){
        inputBorder.style.borderColor = "rgba(237, 45, 45, 0.724)";
        inputBorder.style.borderWidth = '3px'; 
        inputBorder.style.borderStyle = 'solid';
        document.getElementById("linkLb").style.visibility = "visible";
      
    }
    else {    
        return false;
    }
     
     // Using the document.execCommand('copy') method to copy text temporarily.
    function copyToClipboard(link) {
        const tempInput = document.createElement("input");
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    //Calling the copyToClipboard function.
    document.getElementById("copyBtn").addEventListener("click", copyToClipboard(shortenedUrlLink));
}
// Add an event listener to the "Shorten" button
document.getElementById("shortenBtn").addEventListener("click", shortenUrl);

