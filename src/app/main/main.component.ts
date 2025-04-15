import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient-service.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

   patients:Patient[]=[]
    constructor(private patientService:PatientService){}
  
    
    ngOnInit():void{
      this.getPatients()
    }
  
    getPatients(){
      this.patientService.getPatientList().subscribe(data=>{
        this.patients = data
      })
    }

}
