$(function(){

  $('.new_pledge').on('submit',function(e){
    e.preventDefault();
    console.log('click');
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json',
    }).done(function(data){
      console.log(data);
      $('#total_amount').text(data);
    }).fail(function(){
      console.log('not so awesome');
    }).always(function(){
      console.log('we are awesome');
      $('.new_pledge :submit').removeAttr('disabled');
    });
  });

    $("#search-field").on('keyup', function(e){
      $.ajax({
        url: "/projects/search",
        method: "POST",
        data: {
          "q": {
            "title_cont": $("#search-field").val()
          }
        },
        dataType: 'html'
      }).done(function(data) {
        $("#projects").html(data);
      })
    });




});
