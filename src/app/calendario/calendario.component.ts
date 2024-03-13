import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {

  calendarOptions: any;

  ngOnInit() {
    this.calendarOptions = {

      initialView: 'dayGridMonth',

      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      eventClick: (arg: any) => this.handleEventClick(arg),
      events: [
        { title: 'Cumple de rodrigo', date: '2024-03-16' },
        { title: 'event 2', date: '2024-03-14' }
      ],

    };


  }
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  handleEventClick(arg: any) {
    alert('evento:' + arg);
  }
}
