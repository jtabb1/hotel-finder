
// const testButton = document.getElementById('test-button');
// testButton.addEventListener("click", (e) => {
//     console.log(e.target);
// });

// bubbling and default action demonstrations

// const testButton = document.getElementById('test-button')
// testButton.addEventListener("click", (e) => {
//     // e.stopPropagation()
//     console.log("You clicked the button")
// })

// const testDiv = document.getElementById('test-div')
// testDiv.addEventListener("click", (e) => {
//     console.log("You clicked the test div")
// })

// const testCheckbox = document.getElementById('test-checkbox')
// testCheckbox.addEventListener('click', (e) => {
//     e.stopPropagation()
//     e.preventDefault()
//     console.log(e)
// })

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
    const hotelEntry = document.createElement("tr");
    hotelEntry.className = "hotel-entry";
    hotelEntry.innerHTML = 
    `<td class="hotel-entry-name">${hotel.name}</td>
    <td class="hotel-entry-price">${hotel.price}</td>
    <td class="hotel-entry-location">${hotel.location}</td>`;
    return hotelEntry;
}

// OBJECTIVE 0: Append all of the hotel entries on page load

const hotelContainer = document.getElementById("hotel-container")

// for example
/*
for (let i = 0; i < hotels.length; i++) {
    hotelContainer.append(hotelEntry(hotels[i]))
}

// forEach example

// hotels.forEach(hotel => hotelContainer.append(hotelEntry(hotel)))

// hotels.forEach((hotel) => {
//     const entry = hotelEntry(hotel)
//     hotelContainer.append(entry)
// })


// what does map do?

// create an array
// add each element to that array with modifications
// return that array

// forEach

// execute an action with access to each element
// return undefined

// map example (doesn't work)

// const mappedHotels = hotels.map(hotel => hotelEntry(hotel))
// hotelContainer.innerHTML = Object.toString(hotels)
// console.log(mappedHotels.join(""))

// map statements create an array. Node.append() only works on other 
// HTML nodes.


*/


// displayHotels(hotels);

// const showHotels = (hotels) => {
//     hotels.forEach( (hotel) => {
//         const entry = hotelEntry(hotel);
//         hotelContainer.append(entry);
//     });
// };

// showHotels(hotels);





// const discountedHotels = (hotels, discount) => {
//     // Curious thing: can't do (hotel, discount) => ... below
//     //  as it appears that JS takes that as an index parameter
//     //  for the map function instead of another parameter for the
//     //  callback function;
//     const newObjArr = hotels.map( (hotel) => {
//         const newPrice = (100 - discount) * hotel.price / 100;
//         const newObj = {...hotel, price: newPrice};
//         return newObj;
//     });
//     return newObjArr;
// }

// displayHotels(discountedHotels(hotels, discount));
















const applyDiscounts = (hotels) => {
    // define function here
    const newHotels = hotels.map((hotel) => {
        // let newPrice = hotel.price * 0.8
        // const newHotel = Object.assign({}, hotel, {price: newPrice})

        // const newHotel = {...hotel}
        // newHotel.price = newPrice

        // const newHotel = {...hotel, price: newPrice}

        const newHotel = {...hotel, price: hotel.price * 0.8}

        return newHotel;
    })

    // const newHotels = hotels.map(hotel => ({...hotel, price: hotel.price * 0.8}))

    return newHotels
}

// showHotels(applyDiscounts(hotels))

// console.log(applyDiscounts(hotels))
// console.log(hotels)


// OBJECTIVE 1: append a hotel entry for each hotel in an array (forEach)
const displayHotels = (hotels) => {
    hotels.forEach( (hotel) => {
        hotelContainer.append(hotelEntry(hotel));
    });}

// OBJECTIVE 2: apply 20% discount to each hotel price (map)
const discountedHotels = (hotels, discount) => {
    const newObjArr = hotels.map( (hotel) => {
        const newPrice = (100 - discount) * hotel.price / 100;
        const newObj = {...hotel, price: newPrice};
        return newObj;
    });
    return newObjArr;}
// const discount = 20;
// displayHotels(discountedHotels(hotels));

// OBJECTIVE 4: filter hotels by given location (filter)
const filterHotelsByLocation = (hotels) => {
    const newObjArr = hotels.filter( hotel => hotel.location === xlocation);
    return newObjArr;}
// let xlocation = "San Diego";
// displayHotels(filterHotelsByLocation(hotels));

// OBJECTIVE 5: Add an event listener to the search button that filters
// with the functions you created above
displayHotels(hotels);
const btn = document.getElementById("hotel-search-box-button");
const xlocationNode = document.getElementById("hotel-search-box");
const discountNode = document.getElementById("discount-input-box");
btn.addEventListener("click", (e) => {
    console.log("hello");
    const xlocation = xlocationNode.value;
    const discount = discountNode.value;
    console.log(xlocation);
    console.log(discount);
    if (xlocation === "") {
        if (discount === "") {
            console.log("hello-1")
            return;
        } else {
            console.log("hello-2")
            console.log(discount);
            displayHotels(discountedHotels(hotels, discount));
        }
    } else {
        if (discount === "") {
            console.log("hello-3")
            displayHotels(filterHotelsByLocation(hotels));
        } else {
            console.log("hello-4")
            displayHotels(discountedHotels(
                filterHotelsByLocation(hotels)));
        }
    }
})





// OBJECTIVE 3: calculate the average hotel price (reduce)

const calculateAverageHotelPrice = (hotels) => {
    // define function here
}

/**/
