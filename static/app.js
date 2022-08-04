const $leftSide1 = $(".left-side1")
const $leftSide2 = $(".left-side2")
const $rightSide1 = $(".right-side1")
const $rightSide2 = $(".right-side2")
const $home = $(".home")
const $selectOpt1 = $(".logoName")
const $selectOpt2 = $("#sign1")
const $selectOpt3 = $("#sign2")

/* ----------------lef-box 1-------------------------*/
$(".left-side2").empty()
$(".right-side").hide()
// $('.left-side2').hide()
fetch("/api/cars", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    carGenerator(data)
  })
function carGenerator(carsOnSell) {
  $(".left-side2").css('display', 'none'); 
  for (let i = 0; i < carsOnSell.length; i++) {
    const $divLeft = $("<div></div>")
    $divLeft.attr("id", "left1")
    // name
    const $userName = $("<b></b>")
    $userName.attr("class", "userName result1")
    const name = carsOnSell[i].name
    $userName.text(`@${name}`)
    $divLeft.append($userName)
    // make and model
    const $carYearMakeModel = $("<p></p>")
    $carYearMakeModel.attr("id", "carInfo1 result1")
    const year = carsOnSell[i].year
    const make = carsOnSell[i].make
    const model = carsOnSell[i].model
    $carYearMakeModel.text(` ${year} ${make} ${model}`)
    $divLeft.append($carYearMakeModel)
    //price and miles div container
    const $priceMiles = $("<div></div>")
    $priceMiles.attr("class", "priceMiles result1")
    // price
    const $carPrice = $("<p></p>")
    $carPrice.attr("class", "carPrice result1")
    const price = carsOnSell[i].price
    $carPrice.text(`Price: ${price}`)
    $priceMiles.append($carPrice)
    //miles
    const $carMiles = $("<p></p>")
    $carMiles.attr("id", "carMiles result1")
    const miles = carsOnSell[i].miles
    $carMiles.text(`Miles: ${miles}`)
    $priceMiles.append($carMiles)

    $divLeft.append($priceMiles)

    //contact div container
    const $emailCell = $("<div></div>")
    $emailCell.attr("class", "emailCell result1")

    const $contact = $("<small></small>")
    $contact.text("CONTACT INFO")
    $emailCell.append($contact)
    //email
    const $userEmail = $("<p></p>")
    $userEmail.attr("id", "email result1")
    const email = carsOnSell[i].email
    $userEmail.text(`Email: ${email}`)
    $emailCell.append($userEmail)
    //phone_number
    const $userPhone = $("<p></p>")
    $userPhone.attr("id", "phoneNum result1")
    const phone = carsOnSell[i].phone_number
    $userPhone.text(`Cell# : ${phone}`)
    $emailCell.append($userPhone)
    // decription
    const $userdescrip = $("<p></p>")
    $userdescrip.attr("id", "phoneNum result1")
    const descr = carsOnSell[i].description
    $userdescrip.text(`Description: ${descr}`)
    $divLeft.append($userdescrip)

    $divLeft.append($emailCell)
    $leftSide1.append($divLeft)
  }
}

// function resetHomepage (info) {
  $selectOpt1.click((event) => {
    window.location.reload()
    event.preventDefault(); 
    $(".left-side2").empty()
    console.log("clicked")
  window.location.reload()
  })
// } 

/*-----------------left box 2 -------------------------------*/
$selectOpt2.click((event) => {
  $(".left-side2").css('display', ''); 
  $(".left-side1").css('display', 'none'); 
  console.log("clicked")
  event.preventDefault()
  $(".left-side1").empty()
  $(".left-side2").empty()

  // SIGN UP LAY OuT
  const $divSignUp = $("<div></div>").attr("class", "sign-up")
  $leftSide2.append($divSignUp)
  const $divchar = $("<div>SING UP</div>").attr("class", "charSignUp")
  $divSignUp.append($divchar)
  const $form = $("<form></form>").attr("id", "user-input1")
  $divSignUp.append($form)
  const $inName = $("<input>").attr({
    type: "text",
    name: "search-name1",
    placeholder: "Enter Name",
    class: "inputSingUp",
  })
  $form.append($inName)
  const $inEmail = $("<input>").attr({
    type: "text",
    name: "search-email1",
    placeholder: "Email eg. @gmail.com",
    class: "inputSingUp",
  })
  $form.append($inEmail)
  const $inPhone = $("<input>").attr({
    type: "text",
    name: "search-phone",
    placeholder: "Enter Phone Num",
    class: "inputSingUp",
  })
  $form.append($inPhone)
  const $singUpBtn = $("<button></button>")
  $singUpBtn.attr("class", "inputSingUp singUpbtn") 
  $singUpBtn.text("SUBMIT")
  $form.append($singUpBtn)

  // SIGN-IN LAYOUT
  const $divSignIn = $("<div></div>").attr("class", "sign-in")
  $leftSide2.append($divSignIn)
  const $divcharIn = $("<div>SING IN</div>").attr("class", "charSignIn")
  $divSignIn.append($divcharIn)
  const $form2 = $("<form></form>").attr("id", "user-input2")
  $divSignIn.append($form2)
  const $inName2 = $("<input>").attr({
    type: "text",
    name: "search-name2",
    placeholder: "Enter Name",
    class: "singInInput",
  })
  $form2.append($inName2)
  const $inEmail2 = $("<input>").attr({
    type: "text",
    name: "search-email2",
    placeholder: "Email eg. @gmail.com",
    class: "singInInput",
  })
  $form2.append($inEmail2)
  const $singUpBtn2 = $("<button></button>")
  $singUpBtn2.attr("class", "singInInput Inbtn")
  $singUpBtn2.text("SUBMIT")
  $form2.append($singUpBtn2)

  const $userForm1 = $("#user-input1")
  const $userForm2 = $("#user-input2")
  let $name1 = $('input[name="search-name1"]')
  let $email1 = $('input[name="search-email1"]')
  let $phoneNum = $('input[name="search-phone"]')
  let $name2 = $('input[name="search-name2"]')
  let $email2 = $('input[name="search-email2"]')
  // SIGN UP SUBMIt
  $userForm1.submit((event) => {
    event.preventDefault()

    let name1 = $name1.val()
    console.log(name1)
    let email1 = $email1.val()
    console.log(email1)
    let phoneNum = $phoneNum.val()
    console.log(phoneNum)
    let newUser = { name: name1, email: email1, phone_number: phoneNum }

    fetch("/api/owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        const $response1 = $("<p></p>")
        $response1.attr("class", "response1")
        $response1.text(`${data.name} you have created an Account`)
        $(".sign-up").append($response1)
        console.log("Success:", data)
      })
    $userForm1[0].reset()
  })
  //SIGN IN SUBMIT
  $userForm2.submit((event) => {
    event.preventDefault()
    $(".sign-in").empty()
    $(".sign-up").empty()
    console.log("cliked by you")
    let name2 = $name2.val()
    let email2 = $email2.val()
    fetch(`/api/owner/${email2}`)
      .then((response) => response.json())
      .then((data) => {
        if (name2 !== data[0].name) {
          console.log(" Incorrect name"); 
          alert('Incorrect Name or email'); 
        } else {
          $(".right-side").show()
          console.log('here',data[0].name)
          const $top = $("<div></div>").attr("class", "top")
          $(".sign-in").append($top)
          const $signInBody = $("<div></div>").attr("class", "signInBody")
          $(".sign-in").append($signInBody)
          const $nameLogo = $("<div></div>").attr("class", "nameLogo")
          $top.append($nameLogo)
  
          const $img = $('<img id="dynamic">').attr("src", "carlogo3.jpeg")
          $nameLogo.append($img)
          const $nameSingIn = $("<p></p>").attr("class", "nameSignIn")
          $nameSingIn.text(`${data[0].name}`)
          
          $nameLogo.append($nameSingIn)
          const $userSerialNum = $("<p></p>").attr("class", "userSerialNum")
          $userSerialNum.text(`User_ID:  ${data[0].users_serialnum}`)
          $top.append($userSerialNum)
  
          for (let i = 0; i < data.length; i++) {
            const $carsBox = $("<div></div>").attr("class", "signInBody")
            $signInBody.append($carsBox)
  
            const $box1 = $("<div></div>").attr("class", "box1")
            $carsBox.append($box1)
            const $box2 = $("<div></div>").attr("class", "box2")
            $carsBox.append($box2)
            const $box3 = $("<div></div>").attr("class", "box3")
            $carsBox.append($box3)
  
            const $carSerialNum = $("<p></p>").attr("class", "carSerialNum")
            $carSerialNum.text(`CAR_SERIAL_NUM: ${data[i].cars_serialnum}`)
            $box1.append($carSerialNum)
  
            const $yearMakeModel = $("<p></p>").attr("class", "yearMakeModel")
            $yearMakeModel.text(
              `${data[i].year} ${data[i].make} ${data[i].model}`
            )
            $box1.append($yearMakeModel)
  
            console.log(data[i].price)
  
            const $carsPrice = $("<p></p>").attr("class", "carsPrice")
            $carsPrice.text(`Price: ${data[i].price}`)
            $box2.append($carsPrice)
  
            const $carsMiles = $("<p></p>").attr("class", "carsMiles")
            $carsMiles.text(`Miles: ${data[i].miles}`)
            $box2.append($carsMiles)
  
            const $carsDescrp = $("<p></p>").attr("class", "carsDescrp")
            const $wordDescp = $("<p></p>").attr("class", "wordDecrp")
            $wordDescp.text("Description:")
            $carsDescrp.text(`${data[i].description}`)
            $box3.append($wordDescp)
            $box3.append($carsDescrp)
          }
        }
      

        console.log("it worked", data)
      })
    $userForm2[0].reset()
  })
})

/* --------- right-side Box ---------------*/

// SELL A CAR LAY OUT
const $sellTitleBox = $("<div></div>").attr("class", "sellTitleBox")
$rightSide1.append($sellTitleBox)
const $sellBodyBox = $("<div></div>").attr("class", "sellBodyBox")
$rightSide1.append($sellBodyBox)
const $sellform = $("<form></form>").attr("id", "sell-input1")
$sellBodyBox.append($sellform)

const $sellTitle = $("<p></p>").attr("class", "sellTitle")
$sellTitle.text("SELL A CAR")
$sellTitleBox.append($sellTitle)
const $userId = $("<input>").attr({
  type: "text",
  name: "search-userid",
  placeholder: "Enter USER_ID",
  class: "sell",
})
$sellform.append($userId)
const $sellMake = $("<input>").attr({
  type: "text",
  name: "search-sellMake",
  placeholder: "Enter Make ",
  class: "sell",
})
$sellform.append($sellMake)
const $sellModel = $("<input>").attr({
  type: "text",
  name: "search-sellModel",
  placeholder: "Enter Model ",
  class: "sell",
})
$sellform.append($sellModel)
const $sellYear = $("<input>").attr({
  type: "text",
  name: "search-sellYear",
  placeholder: "Car Year ",
  class: "sell",
})
$sellform.append($sellYear)
const $sellPrice = $("<input>").attr({
  type: "text",
  name: "search-sellPrice",
  placeholder: "Enter Price ",
  class: "sell",
})
$sellform.append($sellPrice)
const $sellMiles = $("<input>").attr({
  type: "text",
  name: "search-sellMiles",
  placeholder: "Enter Miles ",
  class: "sell",
})
$sellform.append($sellMiles)
const $sellDescrip = $("<textarea></textarea").attr({
  class: "descripBox",
  placeholder: "Description",
})
$sellform.append($sellDescrip)
const $sellBtn = $("<button></button>")
$sellBtn.attr("class", "sell sellbtn")
$sellBtn.text("SUBMIT")
$sellform.append($sellBtn)

const $sellForm1 = $("#sell-input1")
let $sellUserId = $('input[name="search-userid"]')
let $make = $('input[name="search-sellMake"]')
let $model = $('input[name="search-sellModel"]')
let $year = $('input[name="search-sellYear"]')
let $price = $('input[name="search-sellPrice"]')
let $miles = $('input[name="search-sellMiles"]')
let $descrip = $(".descripBox")

// SELL SUBMIT
$sellForm1.submit((event) => {
  event.preventDefault()

  const sellUSerId = $sellUserId.val()
  const sellMake = $sellMake.val()
  const sellModel = $sellModel.val()
  const sellYear = $sellYear.val()
  const sellPrz = $sellPrice.val()
  const sellMile = $sellMiles.val()
  const sellDescription = $sellDescrip.val()
  let newCar = {
    owner_id: sellUSerId,
    make: sellMake,
    model: sellModel,
    year: sellYear,
    price: sellPrz,
    miles: sellMile,
    description: sellDescription,
  }

  fetch("/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(newCar),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Sucess: ", data)
    })
    $sellForm1[0].reset()
})

//SOLD CAR OR DELETE A CAR LAYOUT
const $soldTitleBox = $("<div></div>").attr("class", "soldTitleBox")
$rightSide2.append($soldTitleBox)
const $soldBodyBox = $("<div></div>").attr("class", "soldBodyBox")
$rightSide2.append($soldBodyBox)
const $soldform = $("<form></form>").attr("id", "sold-input1")
$soldBodyBox.append($soldform)

const $soldTitle = $("<p></p>").attr("class", "soldTitle")
$soldTitle.text("SOLD OR NO LONGER WANT TO SELL")
$soldTitleBox.append($soldTitle)
const $carSerail = $("<input>").attr({
  type: "text",
  name: "search-carSerial",
  placeholder: "Car Serial Number",
  class: "soldInput",
})
$soldform.append($carSerail)
const $soldBtn = $("<button></button>")
$soldBtn.attr("id", "sold-btn")
$soldBtn.text("SUBMIT")
$soldform.append($soldBtn)

const $soldForm1 = $("#sold-input1")
let $carId = $('input[name="search-carSerial"]')

// SELL/ DELETE 
$soldForm1.submit((event) => {
  event.preventDefault()

  const deleteCar = $carId.val()

  fetch(`/api/cars/${deleteCar}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .then(() => {
      console.log("removed")
    })

    $soldForm1[0].reset()
})
