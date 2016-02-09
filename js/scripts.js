// default
function Contact( firstName, lastName )
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.addAddress = function( address )
{
    this.addresses.push( address );
}

function Address( street, city, state, zip )
{
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

$(document).ready( function( ) {
  var contacts = [];
  $(document).on( 'click', '#add-second-address', function( ) {
    var addressSpace = $("#address-group").clone( );
    addressSpace.find("#address-header").text( "--" );
    addressSpace.attr( "class", "address-group address-group-extra" );
    $("#contact-form-group").append(addressSpace);
  });

  $("#contact").submit(function(event) {
    event.preventDefault( );
    clearContacts( );

    var firstName = $("#first-name").val( );
    var lastName  = $("#last-name").val( );

    var newContact = new Contact( firstName, lastName );
    contacts.push( newContact );

    $(".address-group").each( function( ) {
      var street    = $(this).find("#street").val( );
      var state     = $(this).find("#state").val( );
      var city      = $(this).find("#city").val( );
      var zip       = $(this).find("#zip-code").val( );

      var newAddress = new Address( street, city, state, zip );
      newContact.addAddress( newAddress );
    });

    for( var i = 0; i < contacts.length; i++ )
    {
      var contactClone = $("#contacts-container").clone( );
      contactClone.find("#name-contact").text( contacts[ i ].lastName + " / " + contacts[ i ].firstName );
      for( var j = 0; j < contacts[ i ].addresses.length; j++ )
      {
        contactClone.find("#addresses").append( "<li><b>" + "Street" + "</b></li>" );
        contactClone.find("#addresses").append( "<li>" + contacts[ i ].addresses[ j ].street + "</li>" );

        contactClone.find("#addresses").append( "<li><b>" + "City" + "</b></li>" );
        contactClone.find("#addresses").append( "<li>" + contacts[ i ].addresses[ j ].city + "</li>" );

        contactClone.find("#addresses").append( "<li><b>" + "State" + "</b></li>" );
        contactClone.find("#addresses").append( "<li>" + contacts[ i ].addresses[ j ].state + "</li>" );

        contactClone.find("#addresses").append( "<li><b>" + "Zip" + "</b></li>" );
        contactClone.find("#addresses").append( "<li>" + contacts[ i ].addresses[ j ].zip + "</li>" );

        if( j + 1 < contacts[ i ].addresses.length )
        {
          contactClone.find("#addresses").append( "<li>" +  "---" + "</li>" );
        }
      }
      contactClone.attr( "id", "appended" );
      $("#containers-append").append( contactClone );
    }

    $(".address-group-extra").each( function( ) {
      this.remove( );
    });
  });

  function clearContacts( )
  {
    $("#containers-append").empty( );
  }
});
