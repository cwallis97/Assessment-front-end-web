function handleButtonClick(event) {
    
    const buttonId = event.target.id;


    switch (buttonId) {
        case 'color':
            alert('My favorite color is red.');
            break;
        case 'place':
            alert('My favorite place is the beach.');
            break;
        case 'ritual':
            alert('My favorite ritual is enjoying a cup of coffee in the morning.');
            break;
        default:
           
            break;
    }
}


document.getElementById('color').addEventListener('click', handleButtonClick);
document.getElementById('place').addEventListener('click', handleButtonClick);
document.getElementById('ritual').addEventListener('click', handleButtonClick);