Router.route('/', {
    template: 'home',
    title: "MGCI Math Society - Home Page"
});
Router.route('/about', {
    template: 'about',
    title: "MGCI Math Society - About"
});
Router.route('/mgmt', {
    template: 'mgmt',
    title: "MGMT"
});
Router.route('/contact', {
    template: 'contact',
    title: "MGCI Math Society - Contact Us"
});
Router.route('/date', {
    template: 'contestdates',
    title: "MGCI Math Society - Contest Dates"
});
Router.route('/login', {
    template: 'login',
    title: "MGCI Math Society - Login"
});
Router.route('/javascript', {
    template: 'javascript',
    title: "MGCI Math Society - Javascript"
    /*onBeforeACtion: function (){
    var currentUser = Meteor.userID();
    if (currentUser){
    this.render('javascript');
    }
    else{
    this.render('login');    }
}*/
});
