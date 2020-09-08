const buttonAboutMe = document.getElementById('about-me');
const buttonPortfolio = document.getElementById('portfolio');
const buttonExperience = document.getElementById('experience');

const rightSection = document.getElementById('right-section');
const aboutMePage = document.getElementById('about-me-page');
const portfolioPage = document.getElementById('portfolio-page');
const experiencePage = document.getElementById('experience-page');
const homePage = document.getElementById('home-page');

// Page colors
const homePageColor = '#bbe1fa';
const homePageBorderColor = '#3282b8';


// Functionality
const changePageColors = (back, border) => {
    rightSection.style.backgroundColor = back;
    rightSection.style.border = `3px solid ${border}`;
};

changePageColors(homePageColor, homePageBorderColor);


function navButtonClick(event) {

    switch(this.id) {
        case 'about-me':
            aboutMePage.style.display = 'block';
            portfolioPage.style.display = 'none';
            experiencePage.style.display = 'none';
            homePage.style.display = 'none';
            break;
        case 'portfolio':
            portfolioPage.style.display = 'block';
            experiencePage.style.display = 'none';
            aboutMePage.style.display = 'none';
            homePage.style.display = 'none';
            break;
        case 'experience':
            experiencePage.style.display = 'block';
            portfolioPage.style.display = 'none';
            aboutMePage.style.display = 'none';
            homePage.style.display = 'none';
            break;
    }
}

buttonAboutMe.addEventListener('click', navButtonClick);
buttonPortfolio.addEventListener('click', navButtonClick);
buttonExperience.addEventListener('click', navButtonClick);
