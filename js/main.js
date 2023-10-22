const $ = document;
const input = $.querySelector('#input');
const btnSubmit = $.querySelector('#btn');
const filter = $.querySelector('#filter');
const btnClear = $.querySelector('#btnClear');
const list = $.querySelector('.list_items');
let dataObj = JSON.parse(localStorage.getItem('mode'))??[];




