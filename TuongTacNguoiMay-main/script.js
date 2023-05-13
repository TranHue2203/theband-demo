
var settingsMenu = document.querySelector(".settings-menu");


function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

// -----------dark mode button------------

var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
    
}

if(localStorage.getItem("theme") == "light"){

    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){

    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

$('#modalAddSchedule').on("click",function(e){
    $('#exampleModal').addClass('show');
    $('#exampleModal').css('display','block');
})
$(document).on('hidden.bs.modal', function () {
    if ($('.modal:visible').length) {
      $('body').addClass('modal-open');
    }
  });
$('#exampleModal').on('shown.bs.modal', function() {
    $(document).off('focusin.modal');
});
$('#exampleModalLong').on('shown.bs.modal', function() {
    $(document).off('focusin.modal');
});


$('.close-add-schedule').on("click",function(e){
    $('#exampleModal').removeClass('show');
    $('#exampleModal').css('display','none');
})