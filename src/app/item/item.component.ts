import { Component, Input, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit(): void {
    }

}
