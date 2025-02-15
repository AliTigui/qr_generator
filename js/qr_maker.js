var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 350,
    height : 350
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
    link.href='data:text/plain;charset=utf-8,'+src;
    link.download="qr.png";
    link.appendChild(img);
    document.querySelector("#qrcode").appendChild(link);
    link.click();

}

$("#download").
    on("click", function () {
        download();
});
