let prodList = {
    Espresso: {
        Milk: 60,
        Cream: 75,
        Latte: 100
    },
    Cappuccino:
    {
        Milk: 80,
        Cream: 90,
        Latte: 125
    },
    Latte:
    {
        Milk: 100,
        Cream: 125,
        Latte: 150
    }
}
let total = 0;
let submit = document.getElementById("submit")

submit.addEventListener("click", function () {
    let divi = document.getElementById("right")
    if(divi.className === "right")
    {   
        divi.className = "right-container";
        console.log(divi.className);
    }
    let prod = document.forms["prodform"];
    let addon1 = []
    if (prod.prodname.value === "Espresso") {
        let addVal = 0;
        let addons = document.getElementsByName("addon"); 
        for (var checkbox of addons) {
            if (checkbox.checked) {
                addon1.push(checkbox.value);
                if (checkbox.value === "Milk") {
                    addVal += prodList.Espresso.Milk
                }
                if (checkbox.value === "Cream") {
                    addVal += prodList.Espresso.Cream
                } 
                if (checkbox.value === "Latte") {
                    addVal += prodList.Espresso.Latte
                }
            }
        } console.log(addVal);

    }
    if (prod.prodname.value === "Cappuccino") {
        let addVal = 0;
        let addons = document.getElementsByName("addon"); 
        for (var checkbox of addons) {
            if (checkbox.checked) {
                addon1.push(checkbox.value);
                if (checkbox.value === "Milk") {
                    addVal += prodList.Cappuccino.Milk
                }
                if (checkbox.value === "Cream") {
                    addVal += prodList.Cappuccino.Cream
                }
                if (checkbox.value === "Latte") {
                    addVal += prodList.Cappuccino.Latte
                }
            }
        } console.log(addVal);

    }

    if (prod.prodname.value === "Latte") {
        console.log("kaje")
        let addVal = 0;
        let addons = document.getElementsByName("addon"); 
        for (var checkbox of addons) {
            if (checkbox.checked) {
                addon1.push(checkbox.value);
                if (checkbox.value === "Milk") {
                    addVal += prodList.Latte.Milk
                }
                if (checkbox.value === "Cream") {
                    addVal += prodList.Latte.Cream
                }
                if (checkbox.value === "Latte") {
                    addVal += prodList.Latte.Latte
                }
            }
        } 
        
    } 
    
    let ulel = document.createElement("ul");
    let h1= document.createElement("h2");
    h1.textContent = prod.prodname.value;
    ulel.appendChild(h1);
    for (let i = 0; i < addon1.length; i++)
    {
        let list = document.createElement('li');
        list.textContent = `${addon1[i]}:RS.${prodList[prod.prodname.value][addon1[i]]}`
        ulel.appendChild(list);
        total += prodList[prod.prodname.value][addon1[i]];
    }
    document.getElementById("h1").innerText = `The Bill For Your Order: RS.${total}`;
    document.getElementById("right").appendChild(ulel)


})

