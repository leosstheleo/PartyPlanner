// Function to render the list of parties
function renderParties() {
    const partyList = document.getElementById('partyList');
    partyList.innerHTML = '';
    parties.forEach((party, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${party.name}</strong><br>
        Date: ${party.date}<br>
        Time: ${party.time}<br>
        Location: ${party.location}<br>
        Description: ${party.description}<br>
        <button onclick="deleteParty(${index})">Delete</button>
      `;
      partyList.appendChild(li);
    });
  }
  
  // Function to delete a party
  function deleteParty(index) {
    parties.splice(index, 1);
    renderParties();
  }
  
  // Array to store parties (pre-filled list)
  let parties = [
    {
      name: 'Birthday Party',
      date: '2024-06-15',
      time: '19:00',
      location: '123 Main St',
      description: 'Celebrate John\'s birthday'
    },
    {
      name: 'New Year\'s Eve Party',
      date: '2024-12-31',
      time: '20:00',
      location: '456 Oak St',
      description: 'Ring in the new year with friends'
    }
  ];
  
  // Initial rendering of parties
  document.addEventListener('DOMContentLoaded', renderParties);
  
  // Event listener for form submission
  document.getElementById('partyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const partyName = document.getElementById('partyName').value;
    const partyDate = document.getElementById('partyDate').value;
    const partyTime = document.getElementById('partyTime').value;
    const partyLocation = document.getElementById('partyLocation').value;
    const partyDescription = document.getElementById('partyDescription').value;
    const newParty = {
      name: partyName,
      date: partyDate,
      time: partyTime,
      location: partyLocation,
      description: partyDescription
    };
    parties.push(newParty);
    renderParties();
    // Reset form fields
    this.reset();
  });
  