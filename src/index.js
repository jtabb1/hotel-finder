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

const hotelEntry = hotel => {
    const hotelEntry = document.createElement("tr")
    hotelEntry.className = "hotel-entry"
    hotelEntry.innerHTML = 
    `<td class="hotel-entry-name">${hotel.name}</td>
    <td class="hotel-entry-price">${hotel.price}</td>
    <td class="hotel-entry-location">${hotel.location}</td>`
    return hotelEntry
}

// OBJECTIVE 0: Append all of the hotel entries on page load

const hotelContainer = document.getElementById("hotel-container")

// for example

// for (let i = 0; i < hotels.length; i++) {
//     hotelContainer.append(hotelEntry(hotels[i]))
// }

// forEach example

// hotels.forEach(hotel => hotelContainer.append(hotelEntry(hotel)))

// map example (doesn't work)

// const mappedHotels = hotels.map(hotel => hotelEntry(hotel))
// hotelContainer.append(hotelEntry(mappedHotels))

// map statements create an array. Node.append() only works on other 
// HTML nodes.





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





// OBJECTIVE 5: Add an event listener to the search button that filters
// with the functions you created above


