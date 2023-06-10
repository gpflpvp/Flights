import { Component, OnInit } from '@angular/core';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})

export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = []

  searchForm = this.fb.group({
    from: [''] ,
  destination: [''],
  fromDate: [''],
  toDate: [''],
  numberOfPassengers: [1]
})

  constructor(private flightService: FlightService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.search()
  }

  search() {
    this.flightService.searchFlight(this.searchForm.value as object)
      .subscribe(response => this.searchResult = response, this.handleError)
  }

  private handleError(err: any) {
    console.log("Response Error. Status: ", err.Status)
    console.log("Response Error. Text: ", err.StatusText)
    console.log(err)
  }

}
