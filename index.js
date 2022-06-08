
//Получаем значения из формы
function serializeForm(formNode){
    const { elements } = formNode

    Array.from(elements)
    .filter((item) => !!item.id)
    .forEach((element) => {
        const {id, value} = element
        sessionStorage.setItem(id,value)
    })
}

//Функция скрытия формы 
function hiddenForm(formNode){
    formNode.style.visibility = "hidden"; // hide
}

function sayWelcome(){
    const name = sessionStorage.getItem('name')
    const surname = sessionStorage.getItem('surname')    
    alert('Добро пожаловать ' +surname+ " "+ name + " !")
}

//Слушатель по событию submit
function handleFormSubmit(event){
    event.preventDefault()
    serializeForm(event.target)
    hiddenForm(event.target)
    sayWelcome()
}





const pointerForm = document.getElementById("form__reg")
pointerForm.addEventListener('submit', handleFormSubmit)

  