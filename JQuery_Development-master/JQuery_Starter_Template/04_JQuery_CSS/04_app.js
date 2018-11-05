var cardHeader = $('#form-card-header');
var cardTitle = $('.card-title');
var submmitButton = $('#submit-button');
$('#login-button').click(function () {
   cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
   cardTitle.text('Login Here');
   submitButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login');
 });
$('#register-button').click(function () {
    cardHeader.removeClass('bg-teal').addClass('bg-primary');
    cardTitle.text('Register Here');
    submitButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-primary').text('Register');
});
$('#signup-button').click(function () {
    cardHeader.removeClass('bg-teal').addClass('bg-purple');
    cardTitle.text('sign up Here');
    submitButton.removeClass('btn-teal').addClass('btn-purple').text('Sign up');
});