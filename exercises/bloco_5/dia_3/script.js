function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();


// dezDaysList deve ser <li> e com classe 'day'. Ex: <li class="da">3</li>
// dias 24, 25  e 31 são feriados e, além da classe 'day', devem conter também classe 'holiday'. 
// Ex:<li class="day holiday">24</li>
// dias 4, 11, 18 e 25 são sexta-feira e devem conter classe 'day' e classe 'friday'. Ex: <li class="day friday">4</li>

function dezDaysFunction() {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysList = document.getElementById('days');

    for (let index = 0; index < dezDays.length; index += 1) {
        const dias = dezDays[index];
        const daysListItems = document.createElement('li');
        daysListItems.innerHTML = dias;

        dezDaysList.appendChild(daysListItems);
    };
};
dezDaysFunction();