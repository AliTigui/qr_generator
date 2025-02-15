var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 150,
    height : 150
});

function makeCode () {		
    let family_name = document.getElementById("family_name").value;
    let name = document.getElementById("name").value;  
    let id = document.getElementById("id").value;
    let cl = document.getElementById("class").value;
    let group = document.getElementById("group").value;
    qrcode.makeCode(family_name + "," + name + "," + id + "," + cl + "," + group);
    
}
$("#generate").
on("click", function () {
    makeCode();
});
function download () {		
    let img = document.querySelector("img");
    let src = document.querySelector("img").src;
    let link = document.createElement("a");
            const base64Data = src.replace(/^data:.+;base64,/, '');
            const byteCharacters = atob(base64Data); 
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/png" });
            const url = URL.createObjectURL(blob);

    link.href=url;
    link.download="qr.png";
    link.appendChild(img);
    document.querySelector("#qrcode").appendChild(link);
    link.click();
URL.revokeObjectURL(url);
}

$("#download").
    on("click", function () {
        download();
});
