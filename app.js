let friends = ["Cameron", "Scott", "Gordon", "Jon", "Todd"];

for(i = 0; i < friends.length; i++){
    console.log("\n" + friends[i] + ": ");
    for(k = 99; k > 0; k--){
        if(k > 2){
            console.log(" " + k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (k-1) + " lines of code in the file.");
        }
        else if (k === 2){
            console.log(" " + k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (k-1) + " lines of code in the file.");
        }
        else{
            console.log(" " + k + " lines of code in the file, " + k + " lines of code; " + friends[1] + " strikes one out, clears it all out, no more lines of code in the file.");
        }
    }
}






