const buttonAboutMe = document.getElementById('about-me');
const buttonPortfolio = document.getElementById('portfolio');
const buttonExperience = document.getElementById('experience');

const aboutMePage = document.getElementById('about-me-page');
const portfolioPage = document.getElementById('portfolio-page');
const experiencePage = document.getElementById('experience-page');

function navButtonClick(event) {

    switch(this.id) {
        case 'about-me':
            aboutMePage.style.display = 'block';
            portfolioPage.style.display = 'none';
            experiencePage.style.display = 'none';
            break;
        case 'portfolio':
            portfolioPage.style.display = 'block';
            experiencePage.style.display = 'none';
            aboutMePage.style.display = 'none';
            break;
        case 'experience':
            experiencePage.style.display = 'block';
            portfolioPage.style.display = 'none';
            aboutMePage.style.display = 'none';
            break;
    }
}

buttonAboutMe.addEventListener('click', navButtonClick);
buttonPortfolio.addEventListener('click', navButtonClick);
buttonExperience.addEventListener('click', navButtonClick);
