document.addEventListener('DOMContentLoaded', function() {
    // FOOTER JS
    const lastModifiedElement = document.getElementById('lastmodified');
    const currentYearElement = document.getElementById('currentyear');

    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = `Last Modification: ${lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })} ${lastModified.toLocaleTimeString('en-US')}`;
    }

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // HAMBURGER MENU JS
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav ul');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });

        navigation.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (navigation.classList.contains('open')) {
                    navigation.classList.remove('open');
                    hamButton.classList.remove('open');
                }
            });
        });
    }

    // Array of Temple Objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
        },
        {
            templeName: "Provo City Center Utah",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85084,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/800x500/Provo-City-Center-Temple08.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/2-Rome-Temple-2190090.jpg"
        }
    ];

    const templeGrid = document.querySelector('.temple-grid');
    const mainHeading = document.querySelector('main h2'); // Added this to update the main heading

    // Function to create a temple card
    function createTempleCard(temple) {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy'; // For better performance

        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        return figure;
    }

    // Function to display temples
    function displayTemples(filteredTemples) {
        templeGrid.innerHTML = ''; // Clear existing content
        filteredTemples.forEach(temple => {
            templeGrid.appendChild(createTempleCard(temple));
        });
    }

    // Initial display of all temples when the page loads
    displayTemples(temples);

    // Event listeners for navigation filters
    const navLinks = document.querySelectorAll('nav a'); // Selecting all navigation links

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the default link behavior (page refresh)

            // Remove 'active' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add 'active' class to the clicked link
            event.target.classList.add('active');

            const filter = event.target.dataset.filter; // Get the filter from data-filter attribute 
            let filteredTemples = [];
            let headingText = "";

            switch (filter) {
                case 'home':
                    filteredTemples = temples;
                    headingText = "Home";
                    break;
                case 'old':
                    filteredTemples = temples.filter(temple => {
                        const dedicatedYear = new Date(temple.dedicated).getFullYear();
                        return dedicatedYear < 1900;
                    });
                    headingText = "Old Temples (Dedicated before 1900)";
                    break;
                case 'new':
                    filteredTemples = temples.filter(temple => {
                        const dedicatedYear = new Date(temple.dedicated).getFullYear();
                        return dedicatedYear > 2000;
                    });
                    headingText = "New Temples (Dedicated after 2000)";
                    break;
                case 'large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    headingText = "Large Temples (> 90,000 sq ft)";
                    break;
                case 'small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    headingText = "Small Temples (< 10,000 sq ft)";
                    break;
                default:
                    filteredTemples = temples; // Default to showing all
                    headingText = "All Temples";
                    break;
            }
            mainHeading.textContent = headingText; // Update the main heading
            displayTemples(filteredTemples); // Display the filtered temples
        });
    });
});