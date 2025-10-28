function myfunction(){
let rate; 
const x = Number(document.getElementById("loan").value);
const y = Number(document.getElementById("duration").value);
const z = Number(document.getElementById("salary").value);
const selected = document.querySelector('input[type="radio"]:checked');
const output = document.getElementById("number");
const output_2 = document.getElementById("ammount");
const output_3 = document.getElementById("type");
const output_4 = document.getElementById("total");
const output_5 = document.getElementById("payment");
const output_6 = document.getElementById("intrest");
if(selected){
const loanType = selected.value;
switch(loanType){
    case "house" :
        rate = 0.045;
        t = rate / 12;
        p = Math.pow(1 + t , y);
        l = p - 1;
        mensualite = x * (t * p) / (p - 1);

        totalInterest = (mensualite * y) - x;


        totalRepayment = mensualite * y;


        if(mensualite > z * 0.4){
            output.textContent = "Your too Broke Change Something"
            output_3.textContent = "" ;
            output_2.textContent = "" ;
            output_5.textContent = "" ;
            output_6.textContent = "" ;
            output_4.textContent = "";
            output.textContent = "Your too Broke Change Something"
        }
        else{
        output_3.textContent = "Loan Type Is :" + loanType;
        output_2.textContent = "Loan ammount Is :" + x;
        output_5.textContent = "Monthly payment: " + mensualite.toFixed(2)
        output_6.textContent = "Total interest: " + totalInterest.toFixed(2)
        output_4.textContent = "Total repayment: " + totalRepayment.toFixed(2)
        output.textContent = "";
        }
    break;
    case "appartment" :
        rate = 0.05;

        t = rate / 12;
        p = Math.pow(1 + t , y);
        l = p - 1;
        mensualite = x * (t * p) / (p - 1);


        totalInterest = (mensualite * y) - x;


        totalRepayment = mensualite * y;



       if(mensualite > z * 0.4){
            output.textContent = "Your too Broke Change Something"
            output_3.textContent = "" ;
            output_2.textContent = "" ;
            output_5.textContent = "" ;
            output_6.textContent = "" ;
            output_4.textContent = "";
        }
        else{
        output_3.textContent = "Loan Type Is :" + loanType;
        output_2.textContent = "Loan ammount Is :" + x;
        output_5.textContent = "Monthly payment: " + mensualite.toFixed(2)
        output_6.textContent = "Total interest: " + totalInterest.toFixed(2)
        output_4.textContent = "Total repayment: " + totalRepayment.toFixed(2)
        output.textContent = "";
        }
    break;
    case "project" :
        rate = 0.07;

        t = rate / 12;
        p = Math.pow(1 + t , y);
        l = p - 1;
        mensualite = x * (t * p) / (p - 1);


        totalInterest = (mensualite * y) - x;


        totalRepayment = mensualite * y;



        if(mensualite > z * 0.4){
            output.textContent = "Your too Broke Change Something"
            output_3.textContent = "" ;
            output_2.textContent = "" ;
            output_5.textContent = "" ;
            output_6.textContent = "" ;
            output_4.textContent = "";
            output.textContent = "Your too Broke Change Something"
        }
        else{
        output_3.textContent = "Loan Type Is :" + loanType;
        output_2.textContent = "Loan ammount Is :" + x;
        output_5.textContent = "Monthly payment: " + mensualite.toFixed(2)
        output_6.textContent = "Total interest: " + totalInterest.toFixed(2)
        output_4.textContent = "Total repayment: " + totalRepayment.toFixed(2)
        output.textContent = "";
        }
    break;
    case "land" :
        rate = 0.06;

        t = rate / 12;
        p = Math.pow(1 + t , y);
        l = p - 1;
        mensualite = x * (t * p) / (p - 1);


        totalInterest = (mensualite * y) - x;


        totalRepayment = mensualite * y;



        if(mensualite > z * 0.4){
            output.textContent = "Your too Broke Change Something"
            output_3.textContent = "" ;
            output_2.textContent = "" ;
            output_5.textContent = "" ;
            output_6.textContent = "" ;
            output_4.textContent = "";
            output.textContent = "Your too Broke Change Something"
        }
        else{
        output_3.textContent = "Loan Type Is :" + loanType;
        output_2.textContent = "Loan ammount Is :" + x;
        output_5.textContent = "Monthly payment: " + mensualite.toFixed(2)
        output_6.textContent = "Total interest: " + totalInterest.toFixed(2)
        output_4.textContent = "Total repayment: " + totalRepayment.toFixed(2)
        output.textContent = "";
        }
    break;
    case "personal" :
        rate = 0.08;

        t = rate / 12;
        p = Math.pow(1 + t , y);
        l = p - 1;
        mensualite = x * (t * p) / (p - 1);


        totalInterest = (mensualite * y) - x;

 
        totalRepayment = mensualite * y;



       if(mensualite > z * 0.4){
            
            output.textContent = "Your too Broke Change Something"
        }
        else{
        output_3.textContent = "Loan Type Is :" + loanType;
        output_2.textContent = "Loan ammount Is :" + x;
        output_5.textContent = "Monthly payment: " + mensualite.toFixed(2)
        output_6.textContent = "Total interest: " + totalInterest.toFixed(2)
        output_4.textContent = "Total repayment: " + totalRepayment.toFixed(2)
        output.textContent = "";
        }
    break;
}
}


else{
    output.textContent = "Please Select an option";
}
}
