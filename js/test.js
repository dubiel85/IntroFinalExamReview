$(document).ready(function() {
    $("#thehidingform").addClass("hidden");
    
    $("#finalexam").on("click", function() {
        $("#thehidingform").toggleClass("hidden");
        $("#finalexam").addClass("hidden");
    })
    
    $("#btnSubmit2").on("click", function() {
        $("#contactform2").submit();
    })
    
    $("#contactform2").on("submit", function(event) {
        event.preventDefault();
        var data = $("#contactform2").serialize();
        $.ajax({
            url: "http://www.fakedomain.com/formpost",
            data: data,
            method: "POST",
            success: function() { alert(data + "Everything was good") },
            error: function() {alert("Bad!!!")}
        });
    })
})