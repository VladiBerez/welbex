const adv_desc = document.querySelectorAll('.advantage_description-details-title');
const mediaQuery = window.matchMedia('(max-width: 768px)');
const sectionList = document.querySelectorAll('.section-list');
const listItems1 = sectionList[1].querySelectorAll('li');
const listItems2 = sectionList[2].querySelectorAll('li');

function updateTextContent() {
    if(mediaQuery.matches) {

        adv_desc[0].innerHTML  = "SKYPE АУДИТ";
        adv_desc[1].innerHTML  = "30 ВИДЖЕТОВ";
        adv_desc[2].innerHTML  = "DASHBOARD";
        adv_desc[3].innerHTML  = "МЕСЯЦ AMOCRM";
        listItems2[0].innerHTML = "Благодарность клиентов";
        listItems2[1].innerHTML = "Кейсы";
        listItems1[0].innerHTML = "Расчет<br>стоимости"
    } else {
        listItems2[0].innerHTML = "Кейсы";
        listItems2[1].innerHTML = "Благодарственные письма";
        adv_desc[0].innerHTML  = "Виджеты";
        adv_desc[1].innerHTML  = "Dashboard";
        adv_desc[2].innerHTML  = "Skype Аудит";
        adv_desc[3].innerHTML  = "35 дней";
    }
}
mediaQuery.addEventListener(updateTextContent());

console.log(sectionList)

function swapAndChange() {
    firstItem.parentNode.insertBefore(listItems[1], listItems[0]);
  
    secondItem.textContent = "Благодарность клиентов";
  }
  
if (window.matchMedia("(max-width: 768px)").matches) {
swapAndChange();
}