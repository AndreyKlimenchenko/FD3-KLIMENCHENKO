import MobileCompany from "../MobileCompany/MobileCompany.jsx";

import "./App.css"

const clients = [
    {
        id: 0,
        name: 'Иван',
        surname: 'Иванов',
        patronymic: 'Иванович',
        balance: 200
    },
    {
        id: 1,
        name: 'Сидор',
        surname: 'Сидоров',
        patronymic: 'Сидорович',
        balance: 250
    },
    {
        id: 2,
        name: 'Петр',
        surname: 'Петров',
        patronymic: 'Петрович',
        balance: -200
    }
]

function App() {
    console.log('render App Component');
    return (
        <div>
            <MobileCompany clients={clients} />
        </div>
    );
}

export default App;
