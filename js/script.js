(function(){
document.getElementById("myHeading").innerHTML = "Dylan";
document.querySelector ("nav ul li").setAttribute('class', 'currentPage');

document.addEventListener("click", function(){
console.info("hi")
})

document.querySelector(".red").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', 'redBack')
})

document.querySelector('.green').addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', 'greenBack')
})

document.querySelector('.blue').addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', 'blueBack')
})

document.querySelector('.yellow').addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', 'yellowBack')
})

document.querySelector('.reset').addEventListener('click', function(ev){
    document.querySelector('body').removeAttribute('class')
})
})();

