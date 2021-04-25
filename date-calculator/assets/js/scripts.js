const currentDateInput = document.getElementById("current_date");
const numberOfWeeksInput = document.getElementById("number_of_weeks");
const resultDateInput = document.getElementById("result_date");

function initCurrentDate() {
    const today = moment().format('YYYY-MM-DD');

    currentDateInput.value = today;
    currentDateInput.min = today;
}

function calculateResult() {
    const currentDate = currentDateInput.value;
    const numberOfWeeks = Number(numberOfWeeksInput.value);

    let calculatedDate = '';

    if (numberOfWeeks !== 0) {
        calculatedDate = moment(currentDate).add(numberOfWeeks, 'w').format('DD.MM.YYYY');
    }

    resultDateInput.value = calculatedDate;
}

currentDateInput.addEventListener('change', () => calculateResult());
numberOfWeeksInput.addEventListener('change', () => calculateResult());
numberOfWeeksInput.addEventListener('keyup', () => calculateResult());

// INIT CURRENT DATE
window.onload = () => initCurrentDate();
