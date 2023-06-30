let billInput=document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')

let noOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
  const bill = Number(billInput.value)
  const tipPercentage = Number(tipInput.value)/100
  const tipAmount=bill*tipPercentage
  
  const total = bill+tipAmount

  const perPersonTotal = total/noOfPeople


   perPersonTotalDiv.innerText=`$${perPersonTotal.toFixed(2)}`
  //alternate
  //perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
}
const increasePeople = () => {
  noOfPeople++
  numberOfPeopleDiv.innerText=noOfPeople
  calculateBill()
}
const decreasePeople = () => {
  if(noOfPeople<=1){
    alert('Cant go below 1 person')
    throw 'Cant go below 1 person!'  //throws error in console log
    return
  }
  
 noOfPeople--
numberOfPeopleDiv.innerText=noOfPeople
calculateBill()
}