document.addEventListener('DOMContentLoaded', function() {
    const gridViewButton = document.getElementById('gridViewButton');
    const listViewButton = document.getElementById('listViewButton');
    const memberContainer = document.getElementById('memberContainer');
    let membersData; 


    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            membersData = data.members;

            renderGridView();
        });


    function renderGridView() {
        memberContainer.innerHTML = ''; 
        membersData.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                <img src="images/${member.image}" alt="${member.name}" class="member-image">
            `;
            memberContainer.appendChild(memberCard);
        });
    }


    function renderListView() {
        memberContainer.innerHTML = ''; 
        membersData.forEach(member => {
            const memberItem = document.createElement('div');
            memberItem.classList.add('member-item');
            memberItem.innerHTML = `
                <h2>${member.name}</h2>
                <ul>
                    <li><strong>Address:</strong> ${member.address}</li>
                    <li><strong>Phone:</strong> ${member.phone}</li>
                    <li><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></li>
                    <li><strong>Membership Level:</strong> ${member.membershipLevel}</li>
                </ul>
            `;
            memberContainer.appendChild(memberItem);
        });
    }


    gridViewButton.addEventListener('click', function() {
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
        renderGridView();
    });

    listViewButton.addEventListener('click', function() {
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
        renderListView();
    });
});

