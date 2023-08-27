const rightArrow = document.getElementById('arr-right')
const leftArrow = document.getElementById('arr-left')
const crousel = document.getElementById('carousel')

let currentPos = 0
let currentCheck = 3
let marginPercent = -50

// 84% 50%
// 16 -17 -50 -83

rightArrow.addEventListener('click', () => {
    if(currentCheck < 4){
        marginPercent += -33
        // if(currentCheck === 1){
        //     marginPercent = -25
        // } else if(currentCheck === 2){
        //     marginPercent = -50
        // } else if(currentCheck === 3){
        //     marginPercent = -75
        // }
        // marginPercent = -30
        // else if(currentCheck === 4){
        //     marginPercent = -85
        // } else if(currentCheck === 5){
        //     marginPercent = -110
        // }

        currentPos = marginPercent
        const lastChecker = document.getElementById('item-' + currentCheck )
        currentCheck += 1
        lastChecker.classList.remove('checked')
        const newChecker = document.getElementById('item-' + currentCheck )
        newChecker.classList.add('checked')
        crousel.style.transform = 'translateX(' + currentPos + '%)'
    }
})

leftArrow.addEventListener('click', () => {
    if(currentCheck > 1){
        marginPercent += 33
        // if(currentCheck === 2){
        //     marginPercent = 15
        // } else if(currentCheck === 3){
        //     marginPercent = -30
        // } else if(currentCheck === 4){
        //     marginPercent = -72
        // }
        // else if(currentCheck === 5){
        //     marginPercent = -55
        // } else if(currentCheck === 6){
        //     marginPercent = -85
        // }

        currentPos = marginPercent

        const lastChecker = document.getElementById('item-' + currentCheck )
        lastChecker.classList.remove('checked')
        currentCheck -= 1
        const newChecker = document.getElementById('item-' + currentCheck )
        newChecker.classList.add('checked')
        crousel.style.transform = 'translateX(' + currentPos + '%)'
    }
})