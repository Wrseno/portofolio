// nav active
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');

li.forEach(el=>{
    el.addEventListener('click', function(){
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    });
});

// auto typing
var typed = new Typed(".auto-type",{
    strings: ["Siswa SMK", "Konten Kreator"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed_title = new Typed(".auto-type-footer",{
    strings: ["Seno"],
    typeSpeed:350,
    backSpeed:350,
    loop:true
})