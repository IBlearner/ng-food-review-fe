export class Item {
    id!: number
    item!: string
    location!: string
    imgURL!: string
    rating!: number
    constructor(id: number, item: string, location: string, imgURL: string, rating: number) {
        this.id = id
        this.item = item
        this.location = location
        this.imgURL = imgURL
        this.rating = rating
    }
}