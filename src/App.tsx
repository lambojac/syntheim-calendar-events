import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

function App() {
  const localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(),
        StartTime: new Date(),
        Subject: "",
        isAllDay: true,
        RecurrenceRule: "FREQ=DAILY; INTERVAL=1; COUNT=10",
        IsReadonly: false,
        IsBlock: false
      },
      {
        Id: 2,
        EndTime: new Date(),
        StartTime: new Date(),
        Subject: "Meeting"
      }
    ],
    fields: {
      subject: { name: "Subject", default: "No title" },
      startTime: { name: "StartTime" },
      endTime: { name: "EndTime" }
    }
  };

  const remoteData = new DataManager({
    url: "http://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });

  return (
    <div className='calendar-container'>
    <ScheduleComponent
      currentView="Month"
      selectedDate={new Date()}
      eventSettings={localData}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    </div>
  );
}

export default App;
