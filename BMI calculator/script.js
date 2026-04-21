const weightInput = document.querySelector("#weiInput");
const heightInput = document.querySelector("#heiInput");
const displayBMI = document.querySelector('#displayBMI');
const BMIInfo = document.querySelector('#BMIInfo');

const calculateBtn = document.querySelector("#calculateBtn").addEventListener("click", (e) => {
    // let BMI = (weightInput.value) / ((heightInput.value/100)*(heightInput.value/100));

    // finding BMI value
    let userWeight = weightInput.value;
    let userHeightInM = heightInput.value / 100;
    const BMI = userWeight / (userHeightInM * userHeightInM);

    // checking is BMI valid or not
    if(BMI >= 0){
      displayBMI.innerText = BMI;
      displayBMI.style.color = "black";
    }else{
      displayBMI.innerText = "Enter the information first";
      // displayBMI.style.color = "red";
      weightInput.style.borderColor = "red"; 
      heightInput.style.borderColor = "red"; 
    }

    //checking your BMI lies is in which range
    if(BMI < 18.5){
      BMIInfo.innerText = "your BMI lies in 'Under Weight'."
      BMIInfo.style.color = "rgb(202, 36, 36)";
    }else if(BMI >= 18.5 && BMI <= 24.5){
      BMIInfo.innerText = "your BMI lies in 'Normal range'.";
      BMIInfo.style.color = "green";
    }else if(BMI > 24.5){
      BMIInfo.innerText = "your BMI lies in 'Over Weight'.";
      BMIInfo.style.color = "rgb(202, 36, 36)";
    }else{
      BMIInfo.innerText = "";
    }
  });
