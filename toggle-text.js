const dropdowns = document.querySelectorAll(".dropdown");
const btnsDrop = document.querySelectorAll(".bloc-top");


btnsDrop.forEach((btn, index) => {
    let toggleIndex = 0;

    btn.addEventListener('click', () => {
        const dropdown = dropdowns[index];

        // console.log(dropdown.scrollHeight);

        if (toggleIndex === 0) {
            dropdown.style.height = `${dropdown.scrollHeight}px`;
            plusIcon.style = "-";
            toggleIndex++;
        } else {
            dropdown.style.height = `${btn.scrollHeight}px`;
            plusIcon.style = "+";
            toggleIndex--;
        }
    });
});


function changeLanguage() {
    const select = document.getElementById('select-language');
    const selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}