document.addEventListener("DOMContentLoaded", function () {
    // button element

    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    
    //   button style

    // button.style.margin = "10px 10px 10px 10px";
    button.style.position = "absolute";
    // putting button in document

    button.appendChild(btnText);
    document.body.appendChild(button);
    // making button a listener

    button.addEventListener("click", btnFunction);

    function btnFunction() {
        
        let friends = ["Cameron", "Scott", "Gordon", "Jon", "Todd"];

        for (i = 0; i < friends.length; i++) {
            let div = document.createElement("div");
            div.className = "friend";
            div.style.marginTop = "5em";
            document.body.appendChild(div);
            let h3 = document.createElement("h3");
            let h3Text = document.createTextNode(friends[i]);
            h3.appendChild(h3Text);
            document.body.appendChild(h3);
            
            for (k = 99; k > 0; k--) {
                let paragraph = document.createElement("p");
                let para = document.createElement("p");
                let par = document.createElement("p");
                let text = (" " + k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (k - 1) + " lines of code in the file.");
                let pText = document.createTextNode(text)
                let textOne = (" " + k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (k - 1) + " lines of code in the file.");
                let paraText = document.createTextNode(textOne);
                let textTwo = (" " + k + " lines of code in the file, " + k + " lines of code; " + friends[1] + " strikes one out, clears it all out, no more lines of code in the file.");
                let parText = document.createTextNode(textTwo);
                if (k > 2) {
                    paragraph.appendChild(pText);
                    document.body.appendChild(paragraph);
                }
                else if (k === 2) {
                    para.appendChild(paraText);
                    document.body.appendChild(para);
                }
                else {
                    par.appendChild(parText);
                    document.body.appendChild(par);
                }
            }
        }
    }
});








