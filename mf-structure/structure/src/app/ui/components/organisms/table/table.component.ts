import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() informationCell: any[] = [];
  properties: string[] = [];

  constructor() { }

  ngOnInit(): void {
    const allKeys = this.informationCell.flatMap(Object.keys);
    const uniqueKeys = [...new Set(allKeys)];
    this.properties = uniqueKeys.filter(key => key !== 'id');
    console.log(this.informationCell);
  }

}
