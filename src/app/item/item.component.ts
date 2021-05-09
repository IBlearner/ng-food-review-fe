import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

    @Input() id!: number
    @Input() item!: string
    @Input() location!: string
    @Input() imgURL!: string
    @Input() rating!: number

    @Output() reloadEvent = new EventEmitter<boolean>()

    deleteItem = async (id: number) => {
        const obj = {"id": id}
        let res = await fetch("http://localhost:3000/all", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        console.log(res)

        this.reloadList()   //tell list to reload
    }

    //function to tell list to reload
    reloadList = () => {
        this.reloadEvent.emit(true)
    }

    constructor() { }

    ngOnInit(): void {
    }

}
