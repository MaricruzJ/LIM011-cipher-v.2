const btnCollaborator = document.getElementById('btn-collaborator');
const btnPolice = document.getElementById('btn-police');

const divIntro = document.getElementById('div-intro');
const divList = document.getElementById('div-list');
const divInformant = document.getElementById('div-informant');
const divEncode = document.getElementById('div-encode');
const divAct = document.getElementById('div-act');
const divDecode = document.getElementById('div-decode');
const divFugitive = document.getElementById('div-fugitive');

const nameInformant = document.getElementById('name-informant');
const nameBeneficiary = document.getElementById('name-beneficiary');
const accountNumber = document.getElementById('account-number');
const offsetInformant = document.getElementById('offset-informant');
const offsetDenounced = document.getElementById('offset-denounced');
const pNameFugitive = document.getElementById('p-name-fujitive');
const pCrime = document.getElementById('p-crime');
const pNameFugitiveEncode = document.getElementById('p-name-fujitive-encode');
const pCrimeEncode = document.getElementById('p-crime-encode');
const textReportEncode = document.getElementById('text-report-encode');
const textReport = document.getElementById('text-report');
const textNameDecode = document.getElementById('text-name-decode');
const textAccountDecode = document.getElementById('text-account-decode');
const accountBeneficiary = document.getElementById('account-beneficiary');

const pFullnameEncode = document.getElementById('p-fullname-encode');
const pAccountEncode = document.getElementById('p-account-encode');

const btnEncode = document.getElementById('btn-encode');
const btnSendEncode = document.getElementById('btn-send-encode');
const btnGetData = document.getElementById('btn-get-data');
const btnSendPayment = document.getElementById('btn-send-payment');
const btnDecode = document.getElementById('btn-decode');

let encodeNameInformant;
let encodeAccountInformant;
let encodeReportInformant;
let nameDecode;
let accountDecode;

var fugitives = [
    {
        id: '01',
        photo: '../images/01.png',
        name: 'Juanito Perez',
        reward: 'S/ 10 000',
        crime: 'Apropiación Ilícita'
    },
    {
        id: '02',
        photo: '../images/02.png',
        name: 'Luisa Delgado',
        reward: 'S/ 15 000',
        crime: 'Secuestro'
    },
    {
        id: '03',
        photo: '../images/03.png',
        name: 'Juan Martinez',
        reward: 'S/ 15 000',
        crime: 'Lesiones Graves'
    },
    {
        id: '04',
        photo: '../images/04.png',
        name: 'Marta Flores',
        reward: 'S/ 25 000',
        crime: 'Abuso de Autoridad'
    },
    {
        id: '05',
        photo: '../images/05.png',
        name: 'Dante Garcia',
        reward: 'S/ 15 000',
        crime: 'Usurpación'
    },
    {
        id: '06',
        photo: '../images/06.png',
        name: 'Emilia Suarez',
        reward: 'S/ 10 000',
        crime: 'Corrupción de Funcionarios'
    }
];

btnCollaborator.addEventListener('click', () => {
    divIntro.classList.add('hidden');
    divList.classList.remove('hidden');

    fugitives.forEach(fugitive => {
        let div = document.createElement('div');
        div.setAttribute('class', 'div-fugitive');
        let img = document.createElement('img');
        img.setAttribute('src', fugitive.photo);
        let fugitiveName = document.createElement('p');
        fugitiveName.innerHTML = fugitive.name;
        let fugitiveCrime = document.createElement('p');
        fugitiveCrime.innerHTML = fugitive.crime;
        let fugitiveReward = document.createElement('p');
        fugitiveReward.innerHTML = fugitive.reward;
        let btnDenounce = document.createElement('input');
        btnDenounce.setAttribute('type', 'button');
        btnDenounce.setAttribute('value', 'DENUNCIAR');
        btnDenounce.setAttribute('id', 'btnDenounced' + fugitive.id);

        div.appendChild(img);
        div.appendChild(fugitiveName);
        div.appendChild(fugitiveCrime);
        div.appendChild(fugitiveReward);
        div.appendChild(btnDenounce);

        divFugitive.appendChild(div);

        btnDenounce.addEventListener('click', () => {
            divList.classList.add('hidden');
            divInformant.classList.remove('hidden');
            pNameFugitive.innerHTML = 'Nombres y apellidos: ' + fugitive.name;
            pCrime.innerHTML = 'Delito: ' + fugitive.crime;
            pNameFugitiveEncode.innerHTML = 'Nombres y apellidos: ' + fugitive.name;
            pCrimeEncode.innerHTML = 'Delito: ' + fugitive.crime;
        })
    });
})

btnPolice.addEventListener('click', () => {
    divIntro.classList.add('hidden');
    divAct.classList.remove('hidden');
})

btnSendPayment.addEventListener('click', () => {
    divAct.classList.add('hidden');
    divDecode.classList.add('hidden');
    divIntro.classList.remove('hidden');
    alert('Orden de pago Enviada');
})

btnSendEncode.addEventListener('click', () => {
    divInformant.classList.add('hidden');
    divEncode.classList.add('hidden');
    alert('Información enviada');
    divIntro.classList.remove('hidden');
})

btnEncode.addEventListener('click', () => {
    textReportEncode.innerHTML = textReport.value;
    btnEncode.disabled = true;
    divEncode.classList.remove('hidden');

    encodeNameInformant = cipher.encode(nameInformant.value, offsetInformant.value);
    encodeAccountInformant = cipher.encode(accountNumber.value, offsetInformant.value);
    encodeReportInformant = cipher.encode(textReport.value, offsetInformant.value);

    pFullnameEncode.value = encodeNameInformant;
    pAccountEncode.value = encodeAccountInformant;
    textReportEncode.innerHTML = encodeReportInformant;
})

btnGetData.addEventListener('click', () => {
    btnGetData.disabled = true;
    nameBeneficiary.value = encodeNameInformant;
    accountBeneficiary.value = encodeAccountInformant;
    divDecode.classList.remove('hidden');
})

btnDecode.addEventListener('click', () => {
    btnDecode.disabled = true;
    nameDecode = cipher.decode(encodeNameInformant, offsetDenounced.value);
    accountDecode = cipher.decode(encodeAccountInformant, offsetDenounced.value);
    textNameDecode.value = nameDecode;
    textAccountDecode.value = accountDecode;
})

