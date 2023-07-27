document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('register-btn');
    const resultList = document.getElementById('result-list');
  
    registerButton.addEventListener('click', function () {
      const make = document.getElementById('vehicle-make').value;
      const model = document.getElementById('vehicle-model').value;
      const year = document.getElementById('vehicle-year').value;
      const maintenanceType = document.getElementById('maintenance-type').value;
  
      const name = document.getElementById('owner-name').value;
      const email = document.getElementById('owner-email').value;
      const phone = document.getElementById('owner-phone').value;
  
      // Aquí puedes hacer algo con la información del vehículo y del propietario, como enviarla a un servidor o almacenarla localmente.
      // Por ahora, solo la mostraremos en pantalla.
      const vehicleInfo = `Vehículo: ${make} ${model} (${year}) - Mantenimiento: ${maintenanceType}`;
      const ownerInfo = `Propietario: ${name} - Email: ${email} - Teléfono: ${phone}`;
      
      const listItem = document.createElement('li');
      listItem.textContent = `${vehicleInfo} | ${ownerInfo}`;
      resultList.appendChild(listItem);
  
      // Limpiamos los campos después de registrar la información.
      document.getElementById('vehicle-make').value = '';
      document.getElementById('vehicle-model').value = '';
      document.getElementById('vehicle-year').value = '';
      document.getElementById('maintenance-type').value = '';
  
      document.getElementById('owner-name').value = '';
      document.getElementById('owner-email').value = '';
      document.getElementById('owner-phone').value = '';
    });
  });
  