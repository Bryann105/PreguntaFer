const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('JAJAJAJAJA mentiraaaa si aprobaras <3')
});

const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('mouseover', function () {
    const randomX= parseInt(Math.random()*700);
    const randomY= parseInt(Math.random()*700);
    yesBtn.style.setProperty('top',randomY+'%');
    yesBtn.style.setProperty('left',randomX+'%');
    yesBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})