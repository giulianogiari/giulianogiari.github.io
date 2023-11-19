//define events data
const events = [
    {
        year: '2023',
        events: [
            {
                title: 'MEG frequency-tagging reveals a grid-like code during attentional movements',
                authors: 'G. Giari, L. Vignali, Y. Xu, R. Bottini',
                journal: 'Cell Reports',
                link: 'https://www.sciencedirect.com/science/article/pii/S2211124723012214',
                code: 'https://github.com/giulianogiari/GridFT'
            },
        ]
    },
    {
        'year': '2020',
        events: [
            {
                title: 'Spatiotemporal properties of the neural representation of conceptual content for words and pictures-an MEG study',
                authors: 'G. Giari, E. Leonardelli, Y. Tao, M. Machado, S. L. Fairhall',
                journal: 'NeuroImage',
                link: 'https://www.sciencedirect.com/science/article/pii/S1053811920303992'
            },
        ]
    }
  ];

// Create a function that returns HTML for a single year
function createEventHTML(yearData) {
    let yearHTML = `<div class="year" id="${yearData.year}"><h2>${yearData.year}</h2></div>`;
    yearData.events.forEach(event => {
    yearHTML += `
        <div class="event">
            <div class="details">
                <h3><a href="${event.link}">${event.title}</a></h3>
                <p>${event.authors}</p>
                <p>${event.journal}</p>
    `;
    // add code only if present
    if (event.code) {
        yearHTML += `<a href=${event.code}>Code </a>`;
    }

    yearHTML += `
            </div>
        </div>
    `;
    
    });
    return yearHTML;
}
// Create a function that returns HTML for a single year
function createSidebarLink(year) {
    return `<a href="#${year}">${year}</a>`;
}

// Select the timeline container in the publications.html page
const timeline = document.querySelector('.timeline');

// Loop through your events array and create HTML for each event
events.forEach(yearData => {
  timeline.innerHTML += createEventHTML(yearData);
});

const sidebar = document.querySelector('.sidebar');

events.forEach(yearData => {
  sidebar.innerHTML += createSidebarLink(yearData.year);
});