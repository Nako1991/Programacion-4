function palindromChecker() {
    const palindromString = document.getElementById("palindrom").value;
    if ( palindromString == "" ) {
        document.getElementById("results").innerText = "Please insert something to check.";
        return;
    }

    let isPalindrom = true;
    let results = "";
    for ( let i = 0 ; i < palindromString.length ; i++ ) {
        if ( palindromString.charAt(i) != palindromString.charAt(palindromString.length - i - 1) )
            isPalindrom = false;
    }
    console.log(isPalindrom);
    if ( isPalindrom == true )
        results = "It is a palindrom.";
    else
        results = "It is not a palindrom.";
    document.getElementById("results").innerText = results;
    document.getElementById("palindrom").value = "";
}

