$(document).ready(function(){
 $("#myName").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).find("td:eq(0)").text().toLowerCase().indexOf(value) > -1)
    });
});
});
$(document).ready(function(){
 $("#myLName").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).find("td:eq(1)").text().toLowerCase().indexOf(value) > -1)
    });
});
});
$(document).ready(function(){
 $("#myEmail").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).find("td:eq(2)").text().toLowerCase().indexOf(value) > -1)
    });
});
});