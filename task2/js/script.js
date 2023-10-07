const buttons = document.querySelectorAll('.calc__btn')
const output = document.getElementById('result')
const history = document.querySelector('.history__block_output')

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let buttonValue = button.textContent

        switch(buttonValue) {
            case 'C':
                output.textContent = ''
                break
            case '=':
                try {
                    let result = eval(output.textContent);
                    const newParagraph = document.createElement('p');
                    newParagraph.textContent = output.textContent + '=' + result;
                    history.appendChild(newParagraph)
                    output.textContent = result;
                } catch (error) {
                    output.textContent = 'Ошибка';
                }
                break
            default:
                output.textContent += buttonValue
        }
    })
})
