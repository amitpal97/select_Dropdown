var select = document.querySelector(".select");
var selectOp = document.querySelector("#selectOp");
var paraDat=document.querySelector(".para")
var MainObj = {
  debitOp: ["Debit-one", "Debit-two", "Debit-three"],
  creditOp: ["Credit-one", "Credit-two", "Credit-three"],
  raiseOp: ["RaiseOp-one", "RaiseOp-two", "RaiseOp-three"],
};

select.addEventListener("change", function (e) {
  var temp = "";
 MainObj[e.target.value].forEach(function (e) {
    temp += `<option>${e}</option>`;
  });
  // console.log(demo);
  selectOp.innerHTML = temp;
});

// selectOp.addEventListener("change",function(e){
//   var tarVal= e.target.value;
//   // console.log(tarVal);

//   // paraDat.innerHTML ="the para value is " + tarVal
// })
   
