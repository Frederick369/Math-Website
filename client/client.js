if (Meteor.isClient){
    Template.landing.rendered = new WOW().init();
}
Template.loginButtons.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
