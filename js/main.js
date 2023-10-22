const $ = document;
const input = $.querySelector('#input');
const btnSubmit = $.querySelector('#btn');
const filter = $.querySelector('#filter');
const btnClear = $.querySelector('#btnClear');
const list = $.querySelector('.list_items');
let dataObj = JSON.parse(localStorage.getItem('mode'))??[];
btnSubmit.addEventListener('click',()=>{
    let inputValue = input.value;
    dataObj.push(inputValue);
    localStorage.setItem('mode',JSON.stringify(dataObj))
    let li = $.createElement('li');
    li.className = 'items';
    li.textContent = inputValue
    let i = $.createElement('i');
    i.className = 'fa-solid fa-xmark';
    list.append(li);
    li.append(i);
    input.value = '';

});
dataObj.forEach(element => {
    let li = $.createElement('li');
    li.className = 'items';
    li.textContent = element
    let i = $.createElement('i');
    i.className = 'fa-solid fa-xmark';
    list.append(li);
    li.append(i);
});
list.addEventListener('click',(e)=>{
    let textContent = e.target.textContent;
    let findData = dataObj.indexOf(textContent);
    dataObj.splice(findData,1);
    if(e.target.className === 'fa-solid fa-xmark'){
        let parent = e.target.parentElement;
        parent.style.display = 'none';
        localStorage.setItem('mode',JSON.stringify(dataObj));
    }
});
btnClear.addEventListener('click',()=>{
    list.innerHTML = '';
    input.value = '';
    filter.value = '';
    localStorage.clear();
});
filter.addEventListener('keyup',(e)=>{
    let filterValue = e.target.value.toLocaleLowerCase();
    $.querySelectorAll('.items').forEach(item=>{
        if(item.textContent.toLocaleLowerCase().indexOf(filterValue) == -1){
            item.style.display = 'none';
        }else{
            item.style.display = 'flex'
        }
    })
});