$(document).ready(function(){
    $("#addTask").click(function(){
        var task = $("#task").val();
        if($("#task").val() !== '') {
            $("ul").append('<li>' + task + '<div><i class="fas fa-check"></i> <i class="fas fa-trash"></i></div></li>');
            $("#task").val('');
        }
    });
    $("ul").on('click', '.fa-trash', function(){
        $(this).parents('li').fadeOut(200);
    });
    $("ul").on('click', '.fa-check', function(){
        $(this).parents('li').toggleClass('checked');
    });
});