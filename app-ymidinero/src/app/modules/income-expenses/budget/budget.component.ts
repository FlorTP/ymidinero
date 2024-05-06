import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  FormControl, Validators, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { HeaderComponent } from '../../../shared/header/header.component';
import { BudgetService } from '../../../core/services/budget/budget.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,CommonModule,NgFor,NgIf],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit {

  formPresupuesto!:FormGroup;

  meses: any[] = [];
  selectedMes: any;
  selectMes!: string;

  moneyPattern = /^\d+(\.\d{1,2})?$/;

  constructor(private formBuilder: FormBuilder, private BudgetService: BudgetService) { }

  ngOnInit(): void {

    this.formPresupuesto = this.formBuilder.group({
      anio: [''],
      selectMeses: ['', ],
      IngresosArray: this.formBuilder.array([
        this.createIngresoFormGroup()
      ]),
    });

    this.BudgetService.listarMeses().subscribe((data: any[]) => {
      debugger
      this.meses = data;
    });
  }

  get IngresosArray(): FormArray {
    return this.formPresupuesto.get("IngresosArray") as FormArray;
  }

  createIngresoFormGroup(): FormGroup {
    return this.formBuilder.group({
      descripcion: [''],
      monto: ['']
    });
  }

  seleccionarMes(event:any){
    debugger

    this.selectMes = event.target.value;
  }

  get ingresosFormArray(): FormArray {
    return this.formPresupuesto.get('IngresosArray') as FormArray;
  }

  agregarIngreso(): void {
    debugger
    this.ingresosFormArray.push(this.createIngresoFormGroup());
  }


}
