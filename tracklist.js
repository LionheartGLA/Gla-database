const list = document.querySelector('#list');

var storedAccounts = localStorage.getItem('accounts');
var accounts = storedAccounts ? JSON.parse(storedAccounts) : [];

if(Array.isArray(accounts)){
    accounts.forEach(account => {
        account.coliseum = [false, false];
    });

    localStorage.setItem('accounts', JSON.stringify(accounts));
}

function populateList() {
    list.innerHTML = '';

    accounts.forEach(account => {
        const listItemDiv = document.createElement('div');
        listItemDiv.className = 'list-item-div';

        const accountDiv = document.createElement('div');
        accountDiv.className = 'list-item account';
        const accountName = document.createElement('p');
        accountName.id = 'account-name';
        accountName.textContent = account.name;
        accountDiv.appendChild(accountName);

        const raidDiv = document.createElement('div');
        raidDiv.className = 'list-item';
        const raidCheckbox = document.createElement('input');
        raidCheckbox.classList.add('checkbox');
        raidCheckbox.type = 'checkbox';
        raidCheckbox.id = 'raid';
        raidCheckbox.checked = account.raid;
        raidDiv.appendChild(raidCheckbox);
        raidCheckbox.addEventListener('change', () => {
            account.raid = raidCheckbox.checked;
            saveAccounts();
        })

        const wantedDiv = document.createElement('div');
        wantedDiv.className = 'list-item';
        const wantedDown = document.createElement('div');
        wantedDown.className = 'number-bt';
        wantedDown.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
        wantedDown.addEventListener('click', () => {
            if(account.wanted > 0){
                account.wanted -= 2;
                setWidth(account.wanted, wantedSliderFilled);
                setNumber(account.wanted, wantedNumber, 30);
            }
        });
        wantedDiv.appendChild(wantedDown);
        
        const wantedSlider = document.createElement('div');
        wantedSlider.id = 'wanted-slider';
        const wantedSliderFilled = document.createElement('div');
        wantedSliderFilled.id = 'wanted-slider-filled';
        setWidth(account.wanted, wantedSliderFilled);

        const wantedNumber = document.createElement('p');
        wantedNumber.id = 'wanted-number';
        wantedNumber.textContent = `${account.wanted}/30`;
        wantedSlider.appendChild(wantedNumber);
        wantedSlider.appendChild(wantedSliderFilled);
        wantedDiv.appendChild(wantedSlider);
        
        const wantedUp = document.createElement('div');
        wantedUp.className = 'number-bt';
        wantedUp.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
        wantedUp.addEventListener('click', () => {
            if(account.wanted < 30){
                account.wanted += 2;
                setWidth(account.wanted, wantedSliderFilled);
                setNumber(account.wanted, wantedNumber, 30);
                saveAccounts();
            }
        });
        wantedDiv.appendChild(wantedUp);

        const bossDiv = document.createElement('div');
        bossDiv.className = 'list-item';
        const bossDown = document.createElement('div');
        bossDown.className = 'number-bt';
        bossDown.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
        bossDown.addEventListener('click', () => {
            if(account.boss > 0){
                account.boss -= 1;
                setWidth(account.boss, bossSliderFilled);
                setNumber(account.boss, bossNumber, 11);
                saveAccounts();
            }
        });
        bossDiv.appendChild(bossDown);
        
        const bossSlider = document.createElement('div');
        bossSlider.id = 'boss-slider';
        const bossSliderFilled = document.createElement('div');
        bossSliderFilled.id = 'boss-slider-filled';
        setWidth(account.boss, bossSliderFilled);

        const bossNumber = document.createElement('p');
        bossNumber.id = 'boss-number';
        bossNumber.textContent = `${account.boss}/11`;
        bossSlider.appendChild(bossNumber);
        bossSlider.appendChild(bossSliderFilled);
        bossDiv.appendChild(bossSlider);
        
        const bossUp = document.createElement('div');
        bossUp.className = 'number-bt';
        bossUp.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
        bossUp.addEventListener('click', () => {
            if(account.boss < 11){
                account.boss += 1;
                setWidth(account.boss, bossSliderFilled);
                setNumber(account.boss, bossNumber, 11);
                saveAccounts();
            }
        });
        bossDiv.appendChild(bossUp);

        const proveDiv = document.createElement('div');
        proveDiv.className = 'list-item';
        const proveDown = document.createElement('div');
        proveDown.className = 'number-bt';
        proveDown.innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>';
        proveDown.addEventListener('click', () => {
            if(account.prove > 0){
                account.prove -= 1;
                setWidth(account.prove, proveSliderFilled);
                setNumber(account.prove, proveNumber, 8);
                saveAccounts();
            }
        });
        proveDiv.appendChild(proveDown);
        
        const proveSlider = document.createElement('div');
        proveSlider.id = 'prove-slider';
        const proveSliderFilled = document.createElement('div');
        proveSliderFilled.id = 'prove-slider-filled';
        setWidth(account.prove, proveSliderFilled);

        const proveNumber = document.createElement('p');
        proveNumber.id = 'prove-number';
        proveNumber.textContent = `${account.prove}/8`;
        proveSlider.appendChild(proveNumber);
        proveSlider.appendChild(proveSliderFilled);
        proveDiv.appendChild(proveSlider);
        
        const proveUp = document.createElement('div');
        proveUp.className = 'number-bt';
        proveUp.innerHTML = '<span class="material-symbols-outlined">arrow_drop_up</span>';
        proveUp.addEventListener('click', () => {
            if(account.prove < 8){
                account.prove += 1;
                setWidth(account.prove, proveSliderFilled);
                setNumber(account.prove, proveNumber, 8);
                saveAccounts();
            }
        });
        proveDiv.appendChild(proveUp);

        const globalDiv = document.createElement('div');
        globalDiv.className = 'list-item';
        
        const globalItems = ['Quiz', 'Count', 'Race', 'Memory', 'Deathmatch'];
        globalItems.forEach((item, index) => {
            const globalItemDiv = document.createElement('div');
            globalItemDiv.className = 'global-item';
            const img = document.createElement('img');
            img.src = `Img/Items/${item}.png`;
            globalItemDiv.appendChild(img);
            const checkbox = document.createElement('input');
            checkbox.classList.add('checkbox');
            checkbox.type = 'checkbox';
            checkbox.id = item.toLowerCase();
            checkbox.checked = account.global[index];
            checkbox.addEventListener('change', () => {
                account.global[index] = checkbox.checked;
                saveAccounts();
            })
            globalItemDiv.appendChild(checkbox);
            globalDiv.appendChild(globalItemDiv);
        });

        const coliseumDiv = document.createElement('div');
        coliseumDiv.className = 'list-item coliseum';
        
        const coliseumItems = ['Coliseum', 'One Man Army'];
        coliseumItems.forEach((item, index) => {
            const coliseumItemDiv = document.createElement('div');
            coliseumItemDiv.className = 'coliseum-item';
            const img = document.createElement('div');
            if(index === 0){
                img.innerHTML = `<span class="material-symbols-outlined">groups</span>`
            }else{
                img.innerHTML = `<span class="material-symbols-outlined">person</span>`
            }
            coliseumItemDiv.appendChild(img);
            const checkbox = document.createElement('input');
            checkbox.classList.add('checkbox');
            checkbox.type = 'checkbox';
            checkbox.id = item.toLowerCase();
            checkbox.checked = account.coliseum[index];
            checkbox.addEventListener('change', () => {
                account.coliseum[index] = checkbox.checked;
                saveAccounts();
            })
            coliseumItemDiv.appendChild(checkbox);
            coliseumDiv.appendChild(coliseumItemDiv);
        });

        const options = document.createElement('div');
        options.className = 'options';

        const deleteBt = document.createElement('div');
        deleteBt.className = 'delete-bt';
        deleteBt.innerHTML = '<p>-</p>';

        const upBt = document.createElement('div');
        upBt.className = 'updown-bt';
        upBt.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>';

        const downBt = document.createElement('div');
        downBt.className = 'updown-bt';
        downBt.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_down</span>';

        options.appendChild(deleteBt);
        options.appendChild(upBt);
        options.appendChild(downBt);

        deleteBt.addEventListener('click', () => {
            const index = accounts.findIndex(e => e.name === account.name);
            if (index !== -1) {
                accounts.splice(index, 1);
                saveAccounts();
                populateList();
            }
        });

        upBt.addEventListener('click', () => {
            const index = accounts.findIndex(e => e.name === account.name);
            if (index > 0) {
                [accounts[index], accounts[index - 1]] = [accounts[index - 1], accounts[index]];
                saveAccounts();
                populateList();
            }
        });

        downBt.addEventListener('click', () => {
            const index = accounts.findIndex(e => e.name === account.name);
            if (index < accounts.length - 1) {
                [accounts[index], accounts[index + 1]] = [accounts[index + 1], accounts[index]];
                saveAccounts();
                populateList();
            }
        });

        listItemDiv.appendChild(options);
        listItemDiv.appendChild(accountDiv);
        listItemDiv.appendChild(raidDiv);
        listItemDiv.appendChild(wantedDiv);
        listItemDiv.appendChild(bossDiv);
        listItemDiv.appendChild(proveDiv);
        listItemDiv.appendChild(globalDiv);
        listItemDiv.appendChild(coliseumDiv);

        list.appendChild(listItemDiv);
    });
}

function setWidth(number, div){
    div.style.width = `${number * 8}px`
}

function setNumber(number, p, max){
    p.innerHTML = `${number}/${max}`;
}

function saveAccounts() {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

populateList();

document.querySelector('#add-bt').addEventListener('click', ()=> {
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
})

document.querySelector('#save-bt').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const input = document.querySelector('#modal-input');
    accounts.push({name: input.value, raid: false, wanted: 0, boss: 0, prove: 0, global: [false,false,false,false,false], coliseum:[false,false]});
    input.value = '';
    populateList();
    saveAccounts();
    modal.style.display = 'none';
})

document.querySelector('#reset-bt').addEventListener('click', () => {
    accounts.forEach(account => {
        account.raid = false;
        account.wanted = 0;
        account.boss = 0;
        account.prove = 0;
        account.global = [false, false, false, false, false];
        account.coliseum = [false, false];
    });
    populateList();
    saveAccounts();
})

document.querySelector('.back-bt').addEventListener('click', () => {
    window.location.replace('index.html');
})