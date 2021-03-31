const hotels = [
    {name: "Marriot", price: 400, location: "San Diego"},
    {name: "Day's Inn", price: 325, location: "Tacoma"},
    {name: "Holiday Inn", price: 200, location: "Tacoma"},
    {name: "Motel 6", price: 1000, location: "San Diego"},
    {name: "Fanciest Hotel", price: 85, location: "San Diego"},
    {name: "Red Roof Inn", price: 235, location: "Tacoma"},
    {name: "Monte Carlo", price: 152, location: "Las Vegas"},
    {name: "Circus Circus", price: 925, location: "Las Vegas"},
    {name: "MGM Grand", price: 1200, location: "Las Vegas"},
    {name: "Boomtown", price: 125, location: "Reno"},
    {name: "Silver Cloud Inn", price: 100, location: "Tacoma"},
    {name: "Leisure Inn", price: 50, location: "Tacoma"},
    {name: "Travelodge", price: 800, location: "San Diego"},
    {name: "Redstone Suites", price: 75, location: "San Diego"},
    {name: "Hyatt", price: 175, location: "San Diego"},
    {name: "Ritz-Carlton", price: 425, location: "Las Vegas"},
    {name: "Residence Inn", price: 250, location: "San Diego"},
    {name: "Four Seasons", price: 225, location: "Tacoma"}
]

const createHotelEntry = hotel => {
    const hotelEntry = document.createElement("tr")
    hotelEntry.className = "hotel-entry"
    hotelEntry.innerHTML = 
    `<td class="hotel-entry-name">${hotel.name}</td>
    <td class="hotel-entry-price">${hotel.price}</td>
    <td class="hotel-entry-location">${hotel.location}</td>`
    return hotelEntry
}

// Comment the following for statement to start 

const hotelContainer = document.getElementById("hotel-container")
for (i = 0; i < hotels.length; i++) {
    hotelContainer.append(createHotelEntry(hotels[i]));
}

// OBJECTIVE 1: append a hotel entry for each hotel in an array (forEach)

const showHotels = (hotels) => {
    // define function here
}

// OBJECTIVE 2: apply 20% discount to each hotel price (map)
const applyDiscounts = (hotels) => {
    // define function here
}

// OBJECTIVE 3: calculate the average hotel price (reduce)

const calculateAverageHotelPrice = (hotels) => {
    // define function here
}

// OBJECTIVE 4: filter hotels by given location (filter)

const filterHotelsByLocation = (hotels, location) => {
    // define function here
}

// OBJECTIVE 5: Use functions with search button

const hotelSearchBox = document.getElementById("hotel-search-box")
const discountInputBox = document.getElementById("discount-input-box")
const hotelSearchBoxButton = document.getElementById("hotel-search-box-button")

hotelSearchBoxButton.addEventListener('click', () => {
    console.log("location: " + hotelSearchBox.value)
    console.log("discount: " + discountInputBox.value)

    // plan steps and code here
})



