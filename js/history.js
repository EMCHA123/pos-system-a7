function loadSaveHisData() {
    let getStoragehis = JSON.parse(localStorage.getItem('dataHistory'));
    historyData = getStoragehis != null ? getStoragehis : historyData;
    console.log(historyData)
}
loadSaveHisData()

function diplayTable() {
    console.log(historyData)
    let list = 1;
    for (his of historyData) {

        let tr = document.createElement('tr');

        let td_id = document.createElement('td');
        td_id.textContent = list;

        let td_customerName = document.createElement('td');
        td_customerName.textContent = his.customerName;

        let td_product = document.createElement('td');
        td_product.classList.add('td_product')
        td_product.textContent = his.allProName;

        let td_total = document.createElement('td');
        td_total.textContent = his.total

        let td_delet = document.createElement('td');

        let imgdelet = document.createElement('img');
        imgdelet.src = '../img/deleteicon.png';
        // // ............function remove...........

        function removeDataFromLocalStorage() {
            localStorage.removeItem('dataHistory');
        }

        imgdelet.addEventListener('click', (e) => {
            if (window.confirm('Are you sure to remove?')) {
                e.target.closest('tr').remove();
                removeDataFromLocalStorage();
            }
        });


        td_delet.appendChild(imgdelet)
        tr.appendChild(td_id);
        tr.appendChild(td_customerName);
        tr.appendChild(td_product);
        tr.appendChild(td_total);
        tr.appendChild(td_delet);
        tablebody.appendChild(tr);
        list++;
    }
}
let tablebody = document.querySelector('tbody');

diplayTable();
// ...............search.................
let search = document.querySelector('#seach');
let trHis = document.querySelectorAll('tbody tr');
search.addEventListener('keyup', (e) => {
    let searchCha = e.target.value;
    for (trs of trHis) {
        let wordTr = trs.children[1].textContent;
        if (wordTr.indexOf(searchCha) !== -1) {
            trs.style.display = 'table-row';
        } else {
            trs.style.display = 'none'
        }

    }
})
