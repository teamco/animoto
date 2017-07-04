// we want to dispose all the previous conversations added event listeners
// because in this demo site, we don't want to samples interfere with each
// other.
var registeredListeners = registeredListeners || [];
registeredListeners.forEach(function (listener) {
  listener.dispose();
});
registeredListeners = [];
$(function () {
  'use strict';
  if (window['noMeResource']) {
    // This is most likely an online deployment where scopes are not configured
    // to return me resource. Disable self link in this sample.
    $('.content').html(
        '<div class="noMe">Ability to read and update presence, photo, location and note of the signed in user is not available in the current release.</div>');
    $('.container .content .noMe').show();
    return;
  }
  var client = window.skypeWebApp;
  // when it's signed in, display its name, title and email
  $('#self-name').text(client.personsAndGroupsManager.mePerson.displayName());
  $('#self-title').text(client.personsAndGroupsManager.mePerson.title());
  $('#self-email').text(client.personsAndGroupsManager.mePerson.email());
  // when the user changes the note field
  $('#txt-note').on('blur', function (event) {
    // tell the client to change the note
    client.personsAndGroupsManager.mePerson.note.text.set(
        $('#txt-note').text()).then(function () {
      console.log('The note has been changed');
    }).then(null, function (error) {
      // and if could not be changed, report the failure
      console.log(error || 'The server has rejected this note change.');
    });
  });
  // when the user changes the location field
  $('#self-location').on('blur', function (event) {
    // tell the client to change the note state
    client.personsAndGroupsManager.mePerson.location.set(
        $('#self-location').text()).then(function () {
      console.log('The location has been changed');
    }).then(null, function (error) {
      // and if could not be changed, report the failure
      console.log(error || 'The server has rejected this location change.');
    });
  });
  // blur() fields on Enter key to trigger change
  $("#txt-note,#self-location").on('keypress', function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      event.target.blur();
    }
  });
  $("#sel-presence").change(function () {
    var value = $(this).val();
    client.personsAndGroupsManager.mePerson.status.set(value).then(function () {
      console.log('The mePerson status has been changed');
    }).then(null, function (error) {
      // and if could not be changed, report the failure
      console.log(error || 'The server has rejected this status state.');
    });
  });
  // when the note changes, display its value
  client.personsAndGroupsManager.mePerson.note.text.changed(function (note) {
    if (note) {
      $('#txt-note').text(note);
    }
  });
  // when the location changes, display its value
  client.personsAndGroupsManager.mePerson.location.changed(function (location) {
    if (location) {
      $('#self-location').text(location);
    }
  });
  // when the status changes, display its value
  var presenceStyle;
  client.personsAndGroupsManager.mePerson.status.changed(function (status) {
    $('#sel-presence').val(status);
    $(".photo-c .photo-presence").removeClass(presenceStyle).
        addClass(presenceStyle = 'photo-presence-' + status);
  });
  // when the photo URL changes, display the new photo
  client.personsAndGroupsManager.mePerson.avatarUrl.changed(function (url) {
    setTimeout(function () {
      $('.persona.self .photo-c img').attr('src', url);
    }, 0);
  });
  client.personsAndGroupsManager.mePerson.note.text.subscribe();
  client.personsAndGroupsManager.mePerson.location.subscribe();
  client.personsAndGroupsManager.mePerson.status.subscribe();
  client.personsAndGroupsManager.mePerson.avatarUrl.subscribe();
  //when the button for reset note is clicked
  $('#reset-note').on('click', function () {
    $('#status').text('reset note ...');
    client.personsAndGroupsManager.mePerson.note.reset().then(function () {
      $('#status').text('');
    });
  });
  //when the button for reset location is clicked
  $('#reset-location').on('click', function () {
    client.personsAndGroupsManager.mePerson.location.reset().then(function () {
      $('#status').text('');
    });
  });
  //when the button for reset status is clicked
  $('#reset-status').on('click', function () {
    client.personsAndGroupsManager.mePerson.status.reset().then(function () {
      $('#status').text('');
    });
  });
  // Show default avatar if user's fails to load
  $(".photo-c img").error(function (event) {
    $(event.target).attr('src', 'images/default.png');
  });
});
