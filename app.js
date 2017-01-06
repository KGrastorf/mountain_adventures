angular.module("mtnApp",["ui.router"]).config(function($stateProvider, $urlRouterProvider ){
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "./public/home.html",
    })
    .state("biking", {
      url: "/biking",
      templateUrl: "./public/biking.html"
    })
    .state("gallery", {
      url: "/gallery",
      templateUrl: "./public/gallery.html"
    })
    .state("gear", {
      url: "/gear",
      templateUrl: "./public/gear.html"
    })
    .state("guides", {
      url: "/guides",
      templateUrl: "./public/guides.html"
    })
    .state("hiking", {
      url: "/hiking",
      templateUrl: "./public/hiking.html"
    })
    .state("packages", {
      url: "/packages",
      templateUrl: "./public/packages.html"
    })
    .state("skiing", {
      url: "/skiing",
      templateUrl: "./public/skiing.html"
    })
    .state("favorites", {
      url: "/favorites",
      templateUrl: "./public/favorites.html"
    })
    .state("story", {
      url: "/story",
      templateUrl: "./public/story.html"
    })
    .state("suggestions", {
      url: "/suggestions",
      templateUrl: "./public/suggestions.html"
    })
    .state("testimonials", {
      url: "/testimonials",
      templateUrl: "./public/testimonials.html"
    })
    .state("thanks", {
      url: "/thanks",
      templateUrl: "./public/thanks.html"
    })
    .state("why", {
      url: "/why",
      templateUrl: "./public/why.html"
    })
    ;

  $urlRouterProvider.otherwise("/home");

});
