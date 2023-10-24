import { initialStateType } from "../Types/carsTypes"

const initialState: initialStateType = {
    carList: [{
        id: "123123",
        regnumber: "HP03C5615",
        category: "Small Car",
        make: "2017",
        model: "LSD",
        fueltype: "Petrol",
        priceperday: 30,
        status: false
    }, {
        id: "234234",
        regnumber: "HP03C5650",
        category: "Van",
        make: "2017",
        model: "LSD",
        fueltype: "Diesel",
        priceperday: 50,
        status: false
    },{
        id: "123123",
        regnumber: "HP03C5615",
        category: "Small Car",
        make: "2017",
        model: "LSD",
        fueltype: "Petrol",
        priceperday: 30,
        status: false
    }, {
        id: "234234",
        regnumber: "HP03C5650",
        category: "Van",
        make: "2017",
        model: "LSD",
        fueltype: "Diesel",
        priceperday: 50,
        status: false
    },{
        id: "123123",
        regnumber: "HP03C5615",
        category: "Small Car",
        make: "2017",
        model: "LSD",
        fueltype: "Petrol",
        priceperday: 30,
        status: false
    }, {
        id: "234234",
        regnumber: "HP03C5650",
        category: "Van",
        make: "2017",
        model: "LSD",
        fueltype: "Diesel",
        priceperday: 50,
        status: false
    }],

}

const carsReducer = (state = initialState): initialStateType => state;

export default carsReducer