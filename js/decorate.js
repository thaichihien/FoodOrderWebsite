
var labelRadioBtns = document.querySelectorAll(".slider-btn")
var imageHeadings = document.querySelectorAll(".slide")
const timeSlider = 5000
var imageIndex = 0
const limitNavbar = 50
var navbar = document.querySelector('.navbar')
if(navbar == null){
    navbar = document.querySelector('.navbar-mobile')
}
var playAnimation = true


const inforSection = 400
const reviewSection = 2840



function checkedLabels(btn){
    labelRadioBtns.forEach((el,index) =>{
        if(el.id == `lb-${btn.id}`){
            el.classList.add('slider-active')
            imageHeadings[index].classList.add('slide-show')
        }
        else{
            el.classList.remove('slider-active')
            imageHeadings[index].classList.remove('slide-show')
        }
        
    })
}


document.getElementById('radio-btn1').checked = true
function autoSlider(){
    setInterval(() => {
        imageIndex++
        if(imageIndex > labelRadioBtns.length){
            imageIndex = 1
        }
        
        var radiobtn = document.getElementById('radio-btn' + imageIndex)
        radiobtn.checked = true
        checkedLabels(radiobtn)
    },timeSlider)
}

autoSlider()

function mobile(){
    navbar.classList.add('navbar-mobile')
    navbar.classList.remove('navbar')
    playAnimation = false
}



if(document.body.clientWidth < 767){
    mobile();
    removeClasses('.infor-detail','hidden')
    removeClasses('.review-card','hidden')
    playAnimation = false
}

window.onresize = () =>{
    if(document.body.clientWidth < 767){
        mobile();
    }else{
        navbar.classList.add('navbar')
        navbar.classList.remove('navbar-mobile')
        playAnimation = true
    }
}







if(playAnimation){
    window.onscroll = () =>{
        //console.log(document.documentElement.scrollTop)
        if(document.body.scrollTop >limitNavbar || document.documentElement.scrollTop > limitNavbar){
            navbar.classList.add('navbar-active')
        }
        else{
            navbar.classList.remove('navbar-active')
        }

        
            animationClasses('.infor-detail','fromBottom',inforSection,'hidden')
            animationClasses('.review-card','fromLeft',reviewSection,'hidden')

    }
}

function animationClasses(className,inAnimation,ypoint,hidden){
    if(document.body.scrollTop >ypoint || document.documentElement.scrollTop > ypoint){
        document.querySelectorAll(className).forEach(el => {
            el.classList.add(inAnimation)
            el.classList.remove(hidden)
        })
    }
}

function removeClasses(className,classRemove){
    document.querySelectorAll(className).forEach(el => {
        el.classList.remove(classRemove)
    })
}

