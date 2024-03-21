"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany/MobileCompany';

let companyName = 'A1';
let clientsArr = [
  { id: 101, FIO: { fam: "Иванов", im: "Иван", otch: "Иванович" }, balance: 200 },
  { id: 105, FIO: { fam: "Сидоров", im: "Сидор", otch: "Сидорович" }, balance: 250 },
  { id: 110, FIO: { fam: "Петров", im: "Пётр", otch: "Петрович" }, balance: 180 },
  { id: 120, FIO: { fam: "Григорьев", im: "Григорий", otch: "Григорьевич" }, balance: -220 },
];

ReactDOM.render(
  <MobileCompany
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container')
);

