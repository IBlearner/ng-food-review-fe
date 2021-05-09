import { Component, OnInit } from '@angular/core';
import { Item } from "../models/Item"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

    data!: Item[]

    getData = async () => {
        let res = await fetch("http://localhost:3000/all", {
            method: "GET"
        })
        this.data = await res.json()
        console.log(this.data)
    }

    constructor() {
        this.getData()  
    }

    ngOnInit(): void {
    }

}
