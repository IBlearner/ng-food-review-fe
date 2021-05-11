import { Component, OnInit } from '@angular/core';
import { Item } from "../models/Item"

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {

    submitEntry = (item: string, loc: string, url: string, rate: string) => {
        //rating must be a number
        let rating = parseInt(rate)
        //letting id be 0 until it actually gets in the db.
        let obj = new Item(0, item, loc, url, rating)
        console.log(obj)
    }

    constructor() { }

    ngOnInit(): void {
    }

}
