import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

      appointments:Appointment[] = [] 

      constructor(private appointmentService:AppointmentService){}

      ngOnInit():void{
        this.getAllAppointments()
      }
    

      getAllAppointments(){
          this.appointmentService.getAllAppointments().subscribe(data=>{
          this.appointments = data})
      }

}
