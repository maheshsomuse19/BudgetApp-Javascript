var budgetAdd=document.getElementById('addBudget')
var budgetInput=document.getElementById('inputBudget')
let budgetAmount=document.getElementById('amountBudget')
var expenceName=document.getElementById('expenceInputName')
var expenceAmount=document.getElementById('expenceInputAmount')
var expenceSubmit=document.getElementById('expencesubmit')
var expenceClear=document.getElementById('expenceclear')
var expenceOutput=document.getElementById('expenceOutputAmount')
var balanceOutput=document.getElementById('balanceInput');
// var cell1=document.getElementById('item1Name');


budgetAdd.addEventListener('click',function budget()
{
    budgetAmount=parseInt(budgetInput.value)
    if(budgetAmount <= 0 || budgetAmount==NaN)
    {
        alert("please Enter the budget amount")
    }
    else{

    balanceOutput=parseInt(budgetAmount);
    document.getElementById('amountBudget').innerHTML=budgetAmount;
    document.getElementById('balanceInput').innerHTML=balanceOutput;
}
}
)

let count=0;
expenceSubmit.addEventListener('click',function myCreateFunction()
{

    // alert("Welcome");
    if(expenceOutput <= 0 )
    {
        alert("please Enter the budget amount")
    }
    else{
        expenceOutput.innerHTML=parseInt(expenceOutput.innerHTML)+parseInt(expenceAmount.value);
        console.log(balanceOutput)
        let a=balanceOutput;
        a=a-parseInt(expenceAmount.value);
        balanceOutput=a;
        document.getElementById('balanceInput').innerHTML=a;
    }
    
    const node1 = document.createElement("li");
    // Create a text node:
    const textnode1 = document.createTextNode(expenceName.value);
    node1.classList.add("h5");

    // Append the text node to the "li" node:
    node1.appendChild(textnode1);

    // Append the "li" node to the list:
    document.getElementById("myList1").appendChild(node1);

    const node2 = document.createElement("li");

    // Create a text node:
    const textnode2 = document.createTextNode(expenceAmount.value);
    node2.classList.add("h5");

    // Append the text node to the "li" node:
    node2.appendChild(textnode2);

    // Append the "li" node to the list:
    document.getElementById("myList2").appendChild(node2);


    // const node4 = document.createElement("li");
    
    const node3=document.createElement("button");
    node3.classList.add("deletebtn");
    // node4.appendChild(node3)

    // Create a text node:
    const textnode3 = document.createTextNode("Delete");

    // Append the text node to the "li" node:
    node3.appendChild(textnode3);
    document.getElementById("myList3").appendChild(node3);
    

}
)

var deleteButton=document.getElementByClass('deletebtn');
deleteButton.addEventListener('click',function deleteRow() {

    document.getElementsById("myList3").removeChild(node3);
    
    document.getElementsById("myList2").removeChild(node2);
    document.getElementsById("myList1").removeChild(node1);
    
})

