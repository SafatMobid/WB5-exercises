let imageFiles = [
    { name: "images/1959-Cadillac-10_Caddy.png", description: "1959 Cadillac" },
    { name: "images/1968-ford-mustang-shelby-gt500.png", description: "1968 Ford Mustang Shelby GT500" },
    { name: "images/2_Corvette_63.png", description: "1963 Corvette" },
    { name: "images/Chevrolet-Corvette-Stingray-69.jpg", description: "1969 Corvette Stingray" },
    { name: "images/Dodge-Charger_Daytona.png", description: "1969 Daytona Charger" },
];

window.onload = function () {
    carListDropdown();
    const selectBtn = document.getElementById("selectBtn");
    const clearBtn = document.getElementById("clearBtn");
    selectBtn.onclick = selectBtnOnClick;
    clearBtn.onclick = clearBtnOnClick;
}

function carListDropdown() {
    const carList = document.getElementById("carList");
    let blankCar = document.createElement("option");
    blankCar.textContent = "------ Choose a Car ------"
    carList.appendChild(blankCar);

    for (let i = 0; i < imageFiles.length; i++) {
        let optionImage = document.createElement("option");

        optionImage.textContent = imageFiles[i].description;
        carList.appendChild(optionImage);
    }
}

function selectBtnOnClick() 
{
    






/*     //const selectBtn = document.getElementById("selectBtn");
    //const carList = document.getElementById("carList");
    const img = document.getElementsByTagName("option");
    for (let i = 0; i < imageFiles.length; i++) {
        let optionImage = document.createElement("option");
        optionImage.
        optionImage.textContent = imageFiles[i].description;
    }
    img.src = optionImage.value
    img.alt = optionImage.description */
}