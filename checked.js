// checked = property that determines the checked state of an 
//           HTML checkbox or radio button element

const ckbox = document.getElementById('ckbox');
const rdbtn = document.getElementById('rdbtn');
const rdbtn1 = document.getElementById('rdbtn1');
const rdbtn2 = document.getElementById('rdbtn2');
const submitbtn = document.getElementById('submitbtn');
const subresult = document.getElementById('subresult');
const rdresult = document.getElementById('rdresult');

submitbtn.onclick = function() {
    if(ckbox.checked){
        subresult.textContent = `You have successfully subscribed`;
    }
    else {
        subresult.textContent = `You have NOT subscribed`;
    }

    if(rdbtn.checked){
        rdresult.textContent = `You are paying with Visa card`;
    }
    else if (rdbtn1.checked){
        rdresult.textContent = `You are paying with MasterCard`;
    }
    else if(rdbtn2.checked){
        rdresult.textContent = `You are paying with PayPal`;
    }
    else {
        rdresult.textContent = `You must select a payment method`;
    }
}