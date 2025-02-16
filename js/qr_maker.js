var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 350,
    height : 350
});
function base64ToBlob(base64, contentType = "",
    sliceSize = 512) {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length;
        offset += sliceSize) {
        const slice = byteCharacters.slice(
            offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
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
    let img = document.querySelector("img");
    let src = document.querySelector("img").src;
    let link = document.createElement("a");
    let blob = base64ToBlob(src,"image/png")
    let url = URL.createObjectURL(blob);
    link.href=url;
    link.download="qr.png";
    btn=document.querySelector("#download");
    link.appendChild(btn);
    document.querySelector(".container").appendChild(link);
});
function download () {		
    
    
URL.revokeObjectURL(url);
}

$("#download").
    on("click", function () {
        download();
});
