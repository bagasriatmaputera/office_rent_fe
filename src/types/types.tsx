export interface Office {
    id: number,
    name: string,
    slug: string,
    price: number,
    duration: number,
    about: string,
    city: City,
    photo: Photo[],
    benefits: Benefits[]
}

export interface City {
    id: number,
    name: string,
    slug: string,
    photo: string,
    office_count: number,
    office_spaces: Office
}

interface Photo {
    id: number,
    photo: string
}
interface Benefits {
    id: number,
    name: string
}

interface BookingTransaction {
    id: number,
    name: string,
    phone_number: number,
    booking_trx: string,
    is_paid: boolean,
    duration: number,
    started_at: string,
    ended_at: string,
    total_amount: number,
    office: Office
}