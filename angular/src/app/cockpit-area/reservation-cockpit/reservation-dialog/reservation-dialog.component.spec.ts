import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialog } from '@angular/material';

import { BackendModule } from '../../../backend/backend.module';
import { WaiterCockpitModule } from '../../cockpit.module';
import { CoreModule } from '../../../core/core.module';

import { PriceCalculatorService } from '../../../sidenav/shared/price-calculator.service';
import { WaiterCockpitService } from '../../shared/waiter-cockpit.service';

import { ReservationDialogComponent } from './reservation-dialog.component';

describe('ReservationDialogComponent', () => {
  let component: ReservationDialogComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ WaiterCockpitService, PriceCalculatorService ],
      imports: [
        BrowserAnimationsModule,
        WaiterCockpitModule,
        CoreModule,
        BackendModule.forRoot({environmentType: 0, restServiceRoot: 'v1'}),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    component = dialog.open(ReservationDialogComponent, { data : {dialogData: { row: undefined }}}).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
