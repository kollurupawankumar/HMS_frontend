import { Component } from '@angular/core';
import { PatientService } from '../patient-service.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

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
