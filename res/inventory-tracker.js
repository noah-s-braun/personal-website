const inventory = [{
    itemName: 'flour',
    itemCount: 3,
    min: 1,
    max: 3
},
{
    itemName: 'eggs',
    itemCount: 2,
    min: 1,
    max: 4
},
{
    itemName: 'milk',
    itemCount: 9,
    min: 2,
    max: 10
}]

const groceryList = [];

let inventoryHTML = '';
let groceryListHTML = '';

function renderInventory() {
    inventoryHTML = '';
    for(let i = 0; i < inventory.length; i ++) {
        const {itemName, itemCount, min, max} = inventory[i];
        const HTML = `
        <div class="inventory-item inventory-item-${i}">
            <div class="inventory-item-title-container">
                <p>${itemName}</p>
                <p class="min-quantity">MAX: ${max}</p>
                <p class="min-quantity">MIN: ${min}</p>
            </div>
            <p class="item-count js-${itemName}-count">${itemCount}</p>
            <button class="remove-button" onclick="
                removeItem(${i});
            "
            onmouseover="
                glowItemCount(${i});
            "
            onmouseout="
                glowItemCount(${i});
            "
            >Remove</button>
        </div>
        `
        inventoryHTML += HTML;
    }

    document.querySelector('.js-inventory')
        .innerHTML = inventoryHTML;

    for(let i = 0; i < inventory.length; i ++) {
        if(inventory[i].itemCount <= inventory[i].min) {
            document.querySelector(`.js-${inventory[i].itemName}-count`).classList.add('low-inventory');
        }
    }
}

renderInventory();

// Renders updated inventory item count to DOM
function updateCount(itemID) {
    document.querySelector(`.js-${inventory[itemID].itemName}-count`)
        .innerHTML = inventory[itemID].itemCount;
}

// If inventory is not 0, subtracts one from inventory item count
// then runs removeFromInventory()
function removeItem(itemID) {
    if(inventory[itemID].itemCount >= 0) {
        inventory[itemID].itemCount = inventory[itemID].itemCount - 1;

        updateCount(itemID);
        animateItemCount(itemID);
    }
    removeFromInventory(itemID);
}

// Uses inventoryID to add inventory item to grocery list
function addToGroceryList(itemID) {
    groceryList.push(inventory[itemID]);
}

// Uses accumulator method to generate HTML for grocery list
// then inserts HTML into ".js-grocery-list"
function renderGroceryList(animate = true) {
    groceryListHTML = '';
    for(let i = 0; i < groceryList.length; i ++) {
        let HTML = '';
        const itemName = groceryList[i].itemName;
        HTML = `
            <div class="grocery-list-item grocery-list-item-${itemName}">
                <input onclick="
                    displayDeleteCheckedItemsButton();
                "
                class="grocery-list-item-input grocery-list-item-input-${itemName}" type="checkbox" id="${itemName}" name="${itemName}"></input>
                <label for=${itemName}>${itemName}</label>
            </div>
        `
        groceryListHTML += HTML;
    }

    document.querySelector('.js-grocery-list')
        .innerHTML = groceryListHTML;

    if(animate){
        animateGroceryListItem(groceryList.length - 1);
    }
}

// Checks if inventory item count is 0
// if true, adds inventory item to grocery list, renders grocery list, and removes from inventory
// then renders inventory
function removeFromInventory(itemID) {
    if(inventory[itemID].itemCount == 0) {
        inventory.splice(itemID, 1);
        renderInventory();
    }
    if(inventory[itemID].itemCount == inventory[itemID].min) {
        const itemCount = document.querySelector(`.js-${inventory[itemID].itemName}-count`);
        itemCount.classList.add('low-inventory');
        addToGroceryList(itemID);
        renderGroceryList();
    }
}

// Checks all grocery list items
// if checked, removes that object from grocery list array
// then renders grocery list
function removeFromGroceryList() {
    for(let i = 0; i < groceryList.length; i++) {
        const itemName = groceryList[i].itemName;
        const groceryListItem = document.querySelector(`.grocery-list-item-input-${itemName}`);
        if(groceryListItem.checked) {
            groceryList[i].itemCount = groceryList[i].max;
            if(inventoryHasDuplicate(itemName) == false){
                addToInventory(i);
            }
        }
    }
    for(let i = groceryList.length - 1; i >= 0; i--) {
        const itemName = groceryList[i].itemName;
        const groceryListItem = document.querySelector(`.grocery-list-item-input-${itemName}`);
        if(groceryListItem.checked) {
            groceryList.splice(i, 1);
            
        }
    }
}

function deleteCheckedItems() {
    removeFromGroceryList();
    renderGroceryList(false);
    renderInventory();
    const deleteCheckedItemsButton = document.querySelector('.delete-checked-items');
    deleteCheckedItemsButton.style.display = 'none';
}

function addToInventory(itemID) {
    inventory.push(groceryList[itemID]);
}

// Animations
function animateItemCount(itemID) {
    const itemCount = document.querySelector(`.js-${inventory[itemID].itemName}-count`);
    itemCount.classList.remove('remove-item-animation');
    if(inventory[itemID].itemCount > inventory[itemID].min) {
        setTimeout(function(){
            itemCount.classList.add('remove-item-animation')
        }, 1);
    }
}

function glowItemCount(itemID) {
    const itemCount = document.querySelector(`.js-${inventory[itemID].itemName}-count`);
    //itemCount.classList.toggle('glowing');
}

function animateGroceryListItem(itemID) {
    if(groceryList.length > 0) {
        const itemName = groceryList[itemID].itemName;
        console.log(itemName);
        const test = document.querySelector(`.grocery-list-item-${itemName}`);
        test.classList.add('add-to-grocery-list-animation');
    }
}

function displayDeleteCheckedItemsButton() {
    const deleteCheckedItemsButton = document.querySelector('.delete-checked-items');
    let count = 0;
    for(let i = 0; i < groceryList.length; i++) {
        const itemName = groceryList[i].itemName;
        const checkbox = document.querySelector(`.grocery-list-item-input-${itemName}`);
        if(checkbox.checked) {
            deleteCheckedItemsButton.style.display = "block";
            count++;
        }
        if(count == 0){
            deleteCheckedItemsButton.style.display = "none";
        }
    }
}

function inventoryHasDuplicate(itemName) {
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].itemName == itemName) {
            return true;
        }
    }
    return false;
}