

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/LeandervanAarde/Brew-Co)
![GitHub watchers](https://img.shields.io/github/watchers/LeandervanAarde/Brew-Co)
![GitHub language count](https://img.shields.io/github/languages/count/LeandervanAarde/Brew-Co)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LeandervanAarde/Brew-Co)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Leander van Aarde</h5>
<h5 align="center" style="padding:0;margin:0;">200211</h5>
<h6 align="center">DV200 - Term 1 React Assignment| 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/LeandervanAarde/Brew-Co">
    <img src="Assets/Logo-white.svg" alt="Logo" width="140" height="140">
  </a>
  
  <h3 align="center">BREW CO.</h3>

  <p align="center">
   A project created using The Open Brewery DB API, locating breweries through the use of HTML5, CSS3, JQuery 3.6.0 , Google Maps and bootstrap 5 <br>
    <i>Go support Brew Co at <a href="https://brewcobreweries.com/index.html">Brewcobreweries.com</a></i> 
    
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/LeandervanAarde/Brew-Co/issues">Report Bug</a>
    ·
    <a href="https://github.com/LeandervanAarde/Brew-Co/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1][image1]

### Project Description

BrewCo breweries is an application that has been built using HTML, CSS, and JQuery. Using the Google Maps API I was able to implement a map that could visualise the locations of the breweries. 
<br>
The API that was used to build this project is The Open Brewery DB, link to the api can be found <a href="https://www.openbrewerydb.org/">Here </a>

### Built With

* [HTML]
* [CSS]
* [JQuery 3.6.0](https://jquery.com/)
* [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Google Maps](https://developers.google.com/maps)
* [Open Brewery DB](https://www.openbrewerydb.org/)


<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The only Prerequisites for this project is to have access to a local server and any IDE. All CDN's other dependencies are listed as links 

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/LeandervanAarde/Brew-Co` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/LeandervanAarde/Brew-Co
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button


4. No API keys are required as the API being used is an openSource API.


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://drive.google.com/uc?export=view&id=1GzOn1WLE0IspAX3NWL3aTFT-zjrgjZsG)

### All the best Breweries

Using the OpenBrewery DB I have been able to give a user a great experience in locating different Breweries!

![image3](https://drive.google.com/uc?export=view&id=19O-OH17F1FemI2S4de_WvNwc3UTnHFIF)
### Breweries
On the breweries page, users can view all breweries based on one input that they have filled out, that can choose on of the Brewery types that have been listed, They can search by State or search Brewery names, it will then call the API and showcase all breweries on a google Map (markers added), and it will then show them the relevant information of that brewery such as the Brewery name, type, address, State and website. This will serve as a way for users to contact the Breweries or view their website before going. 

![image4](https://drive.google.com/uc?export=view&id=1Y7FNtjVvKvfZ9KyYY6zk8sqRmMhDDpM)
### Feedback
Feedback can be left on the contact page, this has been implemented with simple php, sending an email directly to me, this is a good alternative to get in touch with me regarding issues, recommendation or general feedback on BrewCo. 

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
Through the use of this API I was able to get a list of breweries (max of 25), and output them into aa table, this API was fairly straight forward in terms of how it was going to be implemented. The most difficult feature of this entire application was the implementation of the Google Maps. 
<br>
This feature was achieved through creating empty arrays that would take in the value based on what the user has typed/selected, I would then take the latitude and Longitude value and convert it to an integer value. I would then take the address and add that as part of my geocoder that sits within a function that creates the address. I then procedded set a Content value and use that within another function that would set the Markers, initialised at null. I also added a feature from GoogleMaps called infoWindow that allows users to gain a bit more information when clicking on the marker. 


* Utilized `GoogleMaps` for Map and Markers
* API End Point: link <a href="https://www.openbrewerydb.org/">Here</a>
* Utilized JQuery to make code look cleaner and write less. 
* Utilized Bootstrap and bootstrap components to make it responsive across devices.
* Utilized Google Analytics, Google console and Google ads in order to track the growth and popularity of the website

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* The highlight of this project was 
* What aspects did you enjoy.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Bugs.
* Bugs.


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Name of Skill Explored.
* Explain your understanding and execution of above skill.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Future 1.
* Future 2.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)


See the [open issues](https://github.com/MikeMaynard14/termoneexample/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Your Name & Surname** - [MikeMaynard14](https://github.com/MikeMaynard14)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Your Name & Surname** - [email@address](mailto:email@address) - [@instagram_handle](https://www.instagram.com/instagram_handle/) 
* **Project Link** - https://github.com/MikeMaynard14/termoneexample

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)

