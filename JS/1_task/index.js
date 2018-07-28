
const inquirer = {
    data: {
        name: '',
        age: '',
        position: ''
    },
    run: () => {
        inquirer.ask('name');
        inquirer.ask('age');
        inquirer.ask('position');

        inquirer.confirmData();
    },
    ask: property => {
        if (typeof inquirer.data[property] === 'undefined') {
            return false;
        }

        inquirer.data[property] = prompt(`Please say your ${property}`);
    },
    confirmData: () => {

        const dataString = inquirer.collectData();

        const confirmData = confirm(`
            This is your data?
            ${dataString}
        `);

        confirmData ? inquirer.sayWholeData() : inquirer.run();
    },
    collectData: () => {
        let dataString = '\n';

        for (let item in inquirer.data) {

            if (typeof inquirer.data[item] === 'undefined') {
                continue;
            }

            dataString += `\n ${item}: ${inquirer.data[item]} `;
        }

        return dataString;
    },
    sayWholeData: () => {

        const dataString = 'Congratulations! \n Your data is \n' + inquirer.collectData();

        alert(dataString);
    }
};

window.onload = () => {
    inquirer.run();
}