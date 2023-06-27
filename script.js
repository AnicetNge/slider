const left=document.querySelector("div.left")
const right=document.querySelector("div.right")
const sliderctn=document.querySelector("div#sliderctn")
const indicators=document.querySelectorAll("div.indicator")
//tracker du slider
let tracker=0
const ITEM_WIDTH=200


//control le bouton gauche du slider
left.addEventListener("click",function(e){
    if(tracker >= 6 ){
        indicators[0].click()
    }else{
        ++tracker
        sliderctn.scroll({
            top:0,
            left:`${sliderctn.scrollLeft+ITEM_WIDTH}`
        })
        indicators.forEach(function(indicator){
            indicator.classList.remove("actif")
        })
        indicators[tracker].classList.add("actif")
    }

})
//control le bouton droit du slider
right.addEventListener("click",function(e){
    if(tracker <= 0){
        indicators[6].click()
    }else{
        --tracker
        sliderctn.scroll({
            top:0,
            left:`${sliderctn.scrollLeft-200}`
        })
        indicators.forEach(function(indicator){
            indicator.classList.remove("actif")
        })
        indicators[tracker].classList.add("actif")
    }

})
//mouvement des indicateurs de slider
indicators.forEach(function(indicator,index){
    indicator.addEventListener("click",function(e){
        indicators.forEach(function(indicator){
            indicator.classList.remove("actif")
        })
        indicators[index].classList.add("actif")
        tracker=index
        sliderctn.scroll({
            top:0,
            left:`${ITEM_WIDTH*tracker}`
        })
        //effacer l ancien interval et definir un nouveau synchronise le delai avant scroll automatique
        clearInterval(interval)
        interval = setInterval(() => {
            next= ((tracker+1) > 6)? 0:tracker+1
            indicators[next].click()
        }, 3000);
    })
})
//mouvement automatique du slider chaque 3secondes 
interval = setInterval(() => {
    next= ((tracker+1) > 6)? 0:tracker+1
    indicators[next].click()
}, 3000);