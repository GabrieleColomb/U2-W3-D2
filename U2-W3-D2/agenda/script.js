class Appointment {
    constructor(_name, _date) {
      this.name = _name;
      this.date = _date;
    }
  }
  
  const appointmentNameReference = document.getElementById('appointment-name');
  const appointmentDateReference = document.getElementById('appointment-date');
  const formReference = document.querySelector('form');
  
  const generateList = function () {
    const appointmentsFromLocalStorage = localStorage.getItem('appointments');
    if (appointmentsFromLocalStorage) {
      const listReference = document.querySelector('#appointments-list ul');
      listReference.innerHTML = '';
      const appointments = JSON.parse(appointmentsFromLocalStorage);
      appointments.forEach((app, index) => {
        let newLi = document.createElement('li');
        newLi.classList.add(
          'list-group-item',
          'd-flex',
          'justify-content-between'
        );
        newLi.innerText = `${app.name} il ${app.date}`;
  
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
        deleteButton.addEventListener('click', function () {
          deleteAppointment(index);
        });
        newLi.appendChild(deleteButton);
        listReference.appendChild(newLi);
      });
    }
  };
  
  const saveNewAppointment = function (e) {
    e.preventDefault();
    const newAppointment = new Appointment(
      appointmentNameReference.value,
      appointmentDateReference.value
    );
    console.log(newAppointment);
  
    const existingAppointments = localStorage.getItem('appointments');
    if (existingAppointments) {
      const existingAppointmentsAsArray = JSON.parse(existingAppointments);
      existingAppointmentsAsArray.push(newAppointment);
      localStorage.setItem(
        'appointments',
        JSON.stringify(existingAppointmentsAsArray)
      );
      appointmentNameReference.value = '';
      appointmentDateReference.value = '';
      generateList();
    } else {
      const appointmentsList = [];
      appointmentsList.push(newAppointment);
      localStorage.setItem('appointments', JSON.stringify(appointmentsList));
      appointmentNameReference.value = '';
      appointmentDateReference.value = '';
      generateList();
    }
  };
  
  const deleteAppointment = function (index) {
    const appointmentsFromLocalStorage = localStorage.getItem('appointments');
    if (appointmentsFromLocalStorage) {
      const appointments = JSON.parse(appointmentsFromLocalStorage);
      appointments.splice(index, 1);
      localStorage.setItem('appointments', JSON.stringify(appointments));
      generateList();
    }
  };
  
  formReference.addEventListener('submit', saveNewAppointment);
  
  generateList();