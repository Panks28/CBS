export type initialStateType = {
    carList: CarListType,
}

export type CarDataType = {
    id: string,
    regnumber: string,
    category: string,
    make: string,
    model: string,
    fueltype: string,
    priceperday: number
    status: boolean
}

export type CarListType = CarDataType[]