
if (Meteor.isClient){
    Template.home.rendered = new WOW().init();
}

Template.loginButtons.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
