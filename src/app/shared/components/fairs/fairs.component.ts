import { Component, OnInit } from '@angular/core';
import { IFair } from '../../module/fairs.interface';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  fairsData !: Array<IFair>

  constructor(
    private _fairsService : FairsService,
    private _routes : ActivatedRoute
  ) {
    this._routes.data
      .subscribe(metaData =>{
        this.fairsData = metaData['fairsData']
      })
   }

  ngOnInit(): void {
  }

}
