/*
Bio info object
*/
var bio = {
	"name" : "Thanasis Samaras",
	"role" : "Web Developer",
	"contacts" : 
	{
		"mobile" : "+306987975531",
		"email" : "thasamm@gmail.com",
		"github" : "tsamaras",
		"twitter" : "@ThanasisSamaras",
		"location" : "Athens"
	},
	"welcomeMessage" : "Lorem ipsum dolor sit amet.",
	"biopic" : "images/fry.jpg",
	"skills": ["awesomeness", "programming", "JS", "web design", "product managment", "agile methodologies"]
}

/*
Education object
*/
var education = {
	"schools" : [
		{
			"name" : "Athens University of Economics and Business",
			"location" : "Athens",
			"degree" : "Masters",
			"majors" : ["International Marketing"],
			"dates" : 2014,
			"url" : "www.aueb.gr"
		},
		{
			"name" : "University of Macedonia",
			"location" : "Thessaloniki",
			"degree" : "BSc",
			"majors" : ["Business Administration"],
			"dates" : 2012,
			"url" : "www.uom.gr"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Crash Course",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "www.udacity.com/course/ud804"
		}
	]
}

/*
Work object
*/
var work = {
	"jobs" : [
		{
			"employer" : "C/dialogues",
			"title" : "Junior Product Manager",
			"location" : "Athens",
			"dates" : "2014-Present",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
			" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + 
			" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
			" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer" : "National Bank of Greece",
			"title" : "Mobile Payments Intern",
			"location" : "Athens",
			"dates" : "2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
			" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + 
			" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
			" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
}

/*
Projects object
*/
var projects = {
	"projects" : [
		{
			"title" : "Sample Project 2",
			"dates" : "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
			" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + 
			" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
			" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://www.webfx.me/wp-content/uploads/2015/08/web_development-img.jpg", 
				"https://d21osts7471xgc.cloudfront.net/wp-content/uploads/2014/09/Web-Development-350x200.jpg?094df1"
			]
		},
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
			" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"images" : [
				"http://i0.wp.com/www.devstrend.com/wp-content/uploads/2015/06/15-Directives-to-Extend-Your-Angular.js-Apps.jpg?resize=350%2C200", 
				"https://wpcron.files.wordpress.com/2015/08/logo_og.png?w=350&h=200&crop=1"
			]
		}
	]
}

/*
Display bio info
*/
bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedBioPic);
	$("#header").append(formattedMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

	/*
	Adding contacts both on top of the header and on the footer of the page
	*/
	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill;

		for (var i = 0; i < bio.skills.length; i++) {
			formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}
}
bio.display();

/*
Display work
*/
work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

/*
Display projects
*/
projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

/*
Display education
*/
education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0)  {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	/*
	Appending online classes <h3> tag outside the loop that iterates through online courses' details 
	*/
	$("#education").append(HTMLonlineClasses);

	for (mooc in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[mooc].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[mooc].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[mooc].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[mooc].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();

/*
Makes a Google map appear!
*/
$("#mapDiv").append(googleMap);