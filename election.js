$(document).ready(function() {

    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData){
      $(responseData.candidates).each(function(candidate) {
        $('<li>').html('Candidate: ' + this.name + '  ' + ' Votes: ' + this.votes).appendTo('#data');
      });
    });
});
