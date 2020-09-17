console.log('It works')

$(document).ready(function () { // Ready: because we load the file in the head tag
  $('.submit').click(function (event) { // Targets the button and makes it listen to a click event
    event.preventDefault() // So the form doesn't automatically post as the submit button would suggest, but we want to wait for validation first
    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
  })
})