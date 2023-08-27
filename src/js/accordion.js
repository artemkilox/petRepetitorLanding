let teacherArrow = []
let teacherDescription = []
let teacherCheck = []
let arrowTeacher = []

for (let i = 1; i < 3; i++) {
    teacherArrow[i] = document.getElementById('teacherArrow' + i)
    arrowTeacher[i] = document.getElementById('arrowTeacher' + i)
    teacherDescription[i] = document.getElementById('teacherDescription' + i)
    let inputName = 'input[name="teacherCheck' + i + '"]'
    teacherCheck[i] = document.querySelector(inputName);
}

for (let i = 1; i < teacherArrow.length; i++) {
    teacherArrow[i].addEventListener('click', () => {
        if(teacherCheck[i].checked === false){
            teacherDescription[i].style.fontSize = "1em"
            arrowTeacher[i].style.transform = "rotate(90deg)"
            teacherCheck[i].checked = true
        } else {
            teacherDescription[i].style.fontSize = "0"
            arrowTeacher[i].style.transform = "rotate(0)"
            teacherCheck[i].checked = false
        }
    })
}