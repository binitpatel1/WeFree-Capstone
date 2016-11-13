(function(){
    var app = angular.module('developers',[ ]);
    
    app.controller('DeveloperController', function(){
        this.product = dev;
    });
    
    app.controller('PanelController', function(){
        this.tab=1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    var dev = [
        {
            name: 'Nathan Smith',
            title: 'Responsive Website',
            price: 25.00,
            description: 'Nathan is always providing custom web pates to meet your needs and expectations! He has been hired by 50+ members. His specialty is creating custom responsive web sites.',
            images: [
                { 
                    full: 'Images/nathan.jpg',
                    thumb: 'Images/nathan.jpg'
                }
            ],
            reviews: [
                {
                    stars: 4,
                    body: "Nathan was great to work with! Definetly will work with him again if I have any future projects.",
                    author: "Melissa Martin"
                },
                {
                    stars: 5,
                    body: "Nathan's work is amazing. He gives you exactly what you asked for.",
                    author: "Matt Parker"
                },
                {
                    stars: 5,
                    body: "This developer is good. He was a pleasure to work with.",
                    author: "Josh Smith"
                }
            ]
        },
        {
            name: 'Adam Mertz',
            title: 'Web Development',
            price: 100.00,
            description: 'Adam has skills in professional web development. He can handle anything from innovative web development to the classic website build and provide you with the highest quality.',
            images: [
                { 
                    full: 'Images/adam_m.jpg',
                    thumb: 'Images/adam_m.jpg'
                }
            ],
            reviews: [
                {
                    stars: 2,
                    body: "Don't hire this guy. He sucks",
                    author: "Joe Johnson"
                },
                {
                    stars: 5,
                    body: "Best developer on this site!! Delivers what he promises",
                    author: "Matthew Barner"
                },
            ]
        },
        {
            name: 'Jessica Garcia',
            title: 'Website Design',
            price: 15.00,
            description: 'Jessica has services  that follow an established process of putting together a website which includes objective analysis, understanding specifications, development and designing, and testing and promotions.',
            images: [
                { 
                    full: 'Images/jess.jpg',
                    thumb: 'Images/jess.jpg'
                }
            ],
            reviews: [
                {
                    stars: 4,
                    body: "Great to work with",
                    author: "Derrick Henley"
                },
                {
                    stars: 5,
                    body: "Great results!",
                    author: "Eric O'malley"
                },
            ]
        },
         {
            name: 'Hailey Breeland',
            title: 'C#, JavaScript, MVC',
            price: 55.00,
            description: 'Hailey is a senior front-end web developer with over 10 years of experience at various companies. companies. She specializes in building front-ends for JavaScript web applications, and has deep expertise in the nuances of cross-platform development.',
            images: [
                { 
                    full: 'Images/hailey.jpg',
                    thumb: 'Images/hailey.jpg'
                }
            ],
            reviews: [
                {
                    stars: 4,
                    body: "Hailey was great to work with! Definetly will work with him again if I have any future projects.",
                    author: "Martin Williams"
                },
                {
                    stars: 5,
                    body: "Hailey's work is great. Nothing but the best and a pleasure to work with.",
                    author: "Frank Jone"
                },
                {
                    stars: 5,
                    body: "Delivered product as promised. Great communication as well.",
                    author: "James Brunzek"
                }
            ]
        },
        {
            name: 'Carl Jensen',
            title: 'JavaScript, Visual Studios, Git',
            price: 25.00,
            description: 'Carl is a senior full-stack developer on the Microsoft platform working with it for 5+ years. He has an IT security and secure software development background on the one hand and entrepreneurship and innovation on the other, enabling him to build clean and secure systems.',
            images: [
                { 
                    full: 'Images/carl.jpg',
                    thumb: 'Images/carl.jpg'
                }
            ],
            reviews: [
                {
                    stars: 1,
                    body: "Carl was hard to contact and did have poor quality of work.",
                    author: "Nancy Truman"
                },
                {
                    stars: 3,
                    body: "Carl is will get you what you ask for. He was a great to work with",
                    author: "Lisa Reester"
                },
                {
                    stars: 5,
                    body: "This developer is amazing. One of the best available. Will be contacting him for all future projects.",
                    author: "Steven Drennel"
                }, 
            ]
        },
        {
            name: 'Jason Williams',
            title: 'X-Code, Swift, Objective C',
            price: 48.00,
            description: "Stefan is a highly skilled iOS developer with a master's degree in physics. He loves both technological and artistic sides of software engineering. He has had the pleasure to work on some popular enterprise-level apps used by millions of people for companies. He believes that app development is truly an art.",
            images: [
                { 
                    full: 'Images/Jason.jpg',
                    thumb: 'Images/Jason.jpg'
                }
            ],
            reviews: [
                {
                    stars: 4,
                    body: "Amazing work! Truly knows what he is doing and results are great.",
                    author: "Mary Ann Skiva"
                },
                {
                    stars: 5,
                    body: "Delivered on time and exceeded expectations",
                    author: "Ryan Russell"
                },
                {
                    stars: 5,
                    body: "Pros: Everything, Cons: None",
                    author: "Richard Cooper"
                }, 
            ]
        },
    ];
     
    
})();