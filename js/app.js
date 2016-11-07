(function(){
    var app = angular.module('developers',[ ]);
    
    app.controller('DeveloperController', function(){
        this.product = dev;
    });
    
    var dev = [
        {
            title: 'Responsive Website',
            price: 25.00,
            name: 'Nathan Smith',
            description: 'Providing custom web pates to meet your needs and expectations! I have been hired by 50+ members and have successfully completed all projects for clients. My specialty is creating custom responsive web sites. If you have any questions please message me.',
            images: [{}],
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
            title: 'Web Design and Web Development',
            price: 100.00,
            name: 'Adam Mertz',
            description: 'My services include professional web development. I can handle anything from innovative web development to the classic website build and provide you with the highest quality. If you have any questions please message me.',
            images: [{}],
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
            title: 'Website Design',
            price: 15.00,
            name: 'Jessica Garcia',
            description: 'My services follow an established process of putting together a website which includes objective analysis, understanding specifications, development and designing, and testing and promotions. If you have any questions please message me.',
            images: [{}],
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
        }
    ];
    
})();