import { HomeService } from './../../../../core/services/home.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'type',
    'links_self',
    'attributes_urn',
    'attributes_created_at',
    'attributes_updated_at',
    'attributes_content',
    'attributes_properties',
    'attributes_display_properties_type',
    'attributes_display_properties_image',
    'relationships_authors_links_self',
    'relationships_authors_links_related',
    'relationships_publishers_links_self',
    'relationships_publishers_links_related',
  ];
  public dataSource = new MatTableDataSource(this.homeService.getMockData());

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private homeService: HomeService) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
