import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {

    submitEntry = (x: any) => {
        console.log(x.value)
    }

    constructor() { }

    ngOnInit(): void {
    }

}
