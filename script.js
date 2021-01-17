$(document).ready(function(){
    $("#menu2").hide();
    $("#btnlebih").click(function() {
        $("#menu2").toggle("slow", function(){

        });
    });
});

function kirim() {
    alert("Terima Kasih atas Saran Dan Masukan nya :)");
    // console.log("Terima Kasih atas Saran Dan Masukan nya :)");
}

$(".table>tbody>tr").click((e) => {
    $("#detailJadwal").modal('show')
})

$("#btnDaftarPeserta").click((e) => {
    $("#daftarPeserta").modal('show')
})