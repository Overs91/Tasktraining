function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
    return new Promise((resolve, reject) => {
        // Simulate fetching machine name (replace with actual fetching logic if necessary)
        setTimeout(() => {
            resolve(window.location.hostname);
        }, 1000);
    });
}

function validateInput(input) {
    const number = parseInt(input, 10);
    return !isNaN(number) && number >= 21 && number <= 99;
}

function createList() {
    let number;
    do {
        number = prompt("Please enter a number between 21 and 99:");
    } while (!validateInput(number));
    
    number = parseInt(number, 10);

    const ul = document.createElement('ul');
    for (let i = 1; i <= number; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        li.style.color = getRandomColor();
        ul.appendChild(li);
    }

    // Remove any previous list before adding the new one
    const existingList = document.querySelector('ul');
    if (existingList) {
        existingList.remove();
    }

    document.body.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

    getMachineName().then(machineName => {
        document.getElementById('machine-name').textContent = machineName;
    });

    // Add the click event to the button
    const button = document.querySelector('button');
    button.addEventListener('click', createList);
});
