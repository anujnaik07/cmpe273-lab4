$(document).ready(function()
{
var numberOfelements = $('td[title="status"]');
for(i=0;i<numberOfelements.length;i++)
{
var newStatusOfBook = numberOfelements[i].innerHTML;
var numberOfId = numberOfelements[i].id.slice("6");
var id = "#"+numberOfId;
    if(newStatusOfBook == "lost")
    {
      $(id).attr("disabled","disabled");
    }
    else
    {
      $(id).removeAttr("disabled");
    }
}
});

$(":button").click(function() {
var isbn = this.id;
alert('About to report lost on ISBN ' + isbn);
var uri = "/library/v1/books/"+isbn+"?status=lost";
var buttonStatus = "#"+isbn;
var newStatusOfBook = "#status"+isbn;
    $.ajax({
             url: uri,
             type: 'PUT',
             success: function(data) {
             $(buttonStatus).attr("disabled","disabled");
             $(newStatusOfBook).text("lost");
           }
});
});