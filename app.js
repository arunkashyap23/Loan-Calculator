//UI Variables
const calculateBtn = document.getElementById('calculate');
const form = document.getElementById('loan-form');


//Add Event listener to Form
form.addEventListener('submit',function(e){

    //Show Loader 
    document.getElementById('loading').style.display = 'block';

    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Set time out for calculate function
    setTimeout(calculateInterest, 2000);

    //Prevent Submit Default Event
    e.preventDefault();
});


const calculateInterest = function(){

    //UI Variables
    const principle = parseFloat(document.getElementById('principle').value);

    const interest = parseFloat(document.getElementById('interest').value);

    const years = parseFloat(document.getElementById('years').value);

    let totalInterest = document.getElementById('total-interest');

    let totalAmount = document.getElementById('total-amount');

    //Calculating Simple Interest
    const si = (principle*interest*years)/100;

    if(isFinite(si)){
        totalInterest.value = si;
        totalAmount.value = principle+si;

        //Hide Loader 
        document.getElementById('loading').style.display = 'none';

        //Show Results
        document.getElementById('results').style.display = 'block';
    }else{
        showError('Please Check Your Number');

        //Clear Input Fields
        document.getElementById('principle').value = '';
        document.getElementById('interest').value = '';
        document.getElementById('years').value = '';
}

}


//Show Error
function showError(errorMsg){
    //Hide Loader 
    document.getElementById('loading').style.display = 'none';

    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Get heading & card elements
    const heading = document.querySelector('.heading');
    const card = document.querySelector('.card');

    //craete div
    const div = document.createElement('div');

    //Add class name
    div.className = 'alert alert-danger';

    //Add text node
    div.appendChild(document.createTextNode(errorMsg));

    //Append div to card
    card.appendChild(div);

    //Adding div to card and before heading
    card.insertBefore(div,heading);

    //Removing alert class after 3 sec
    setTimeout(removeAlertClass,3000);
}

//Remove ALert Class
function removeAlertClass(){
    document.querySelector('.alert').remove();
}
