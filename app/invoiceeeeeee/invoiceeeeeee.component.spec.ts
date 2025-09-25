import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceeeeeeeComponent } from './invoiceeeeeee.component';

describe('InvoiceeeeeeeComponent', () => {
  let component: InvoiceeeeeeeComponent;
  let fixture: ComponentFixture<InvoiceeeeeeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceeeeeeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceeeeeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
