angular.module('NetworkWebApp', [
  'NetworkWebApp.services',
  'NetworkWebApp.controllers',
  'ngRoute'
  ])
.config(function ($routeProvider, $httpProvider) {
    // Pages
    $routeProvider.when("/home", {templateUrl: "partials/index.html", controller: "HomeCtrl"});
    $routeProvider.when("/activity", {templateUrl: "partials/activity.html", controller: "ActivityCtrl"});
    $routeProvider.when("/claims", {templateUrl: "partials/claims.html", controller: "ClaimsCtrl"});
    $routeProvider.when("/social", {templateUrl: "partials/social.html", controller: "SocialCtrl"});
  //************Payment form
  $routeProvider.when("/payment", {templateUrl: "partials/paymentform.html", controller: "paymentCtrl"});
  //************
  $routeProvider.when("/challenges", {templateUrl: "partials/challenges.html", controller: "IssuesController"});
  $routeProvider.when("/challengesdetails/:_id", {templateUrl: "partials/issue.html", controller: "IssueDetailsController"});
    $routeProvider.when("/messages", {templateUrl: "partials/messages-2.html", controller: "MessagesCtrl"});

    $routeProvider.when("/myportfolio", {templateUrl: "partials/myportfolio.html", controller:"MyportfolioCtrl"});
    $routeProvider.when("/myportfolio-information", {templateUrl: "partials/myportfolio-information.html", controller:"MyportfolioInfoCtrl"});

    $routeProvider.when("/addwork", {templateUrl: "partials/addworkk.html", controller: "AddworkCtrl"});
    $routeProvider.when("/portfolio", {templateUrl: "partials/portfolio.html", controller: "PortfolioCtrl"});
    $routeProvider.when("/discover", {templateUrl: "partials/discover.html", controller: "DiscoverCtrl"});
    // discover
    $routeProvider.when("/discover/people", {templateUrl: "partials/people.html", controller: "PeopleCtrl"});
    $routeProvider.when("/discover/gallerie", {templateUrl: "partials/gallery.html", controller:"InstagramCtrl"});
    $routeProvider.when("/discover/youtube", {templateUrl: "partials/youtube.html", controller:"YoutubeCtrl"});
    $routeProvider.when("/discover/explore", {templateUrl: "partials/search.html", controller: "SearchCtrl"});
    $routeProvider.when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    });
    $routeProvider.when('/oauth', {
      templateUrl: 'partials/oauth.html',
      controller: 'OauthCtrl'
    });
    $routeProvider.when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'RegisterCtrl'
    });
    $routeProvider.when('/profile', {
      templateUrl: 'partials/myportfolio.html',
      controller: 'ProfileCtrl'

		});
		$routeProvider.when('/verify', {
			templateUrl: 'partials/verify.html',
			controller: 'VerifyCtrl'
		});
		$routeProvider.when('/verified', {
			templateUrl: 'partials/verified.html',
			controller: 'VerifiedCtrl'
		});
      $routeProvider.when('/error', {
      templateUrl: 'partials/error.html',
      controller: 'errorCtrl'
    });
    $routeProvider.when('/forgotPassword', {
      templateUrl: 'partials/forgotPassword.html',
      controller: 'forgotPassword'
    });
    $routeProvider.when('/email_pass_forgot', {
      templateUrl: 'partials/email_pass_forgot.html',
      controller: 'email_pass_forgotCtrl'
    });
     $routeProvider.when('/passConfirm', {
      templateUrl: 'partials/passConfirm.html',
      controller: 'passConfirmCtrl'
    });
    $routeProvider.when('/addContact', {
      templateUrl: 'partials/contact-us.html',
      controller: 'AddcontactCtrl'
    });
    $routeProvider.when('/contacts', {
      templateUrl: 'partials/contacts.html',
      controller: 'contactCtrl'
    });



 

  $routeProvider.otherwise({redirectTo: '/home'});
});
