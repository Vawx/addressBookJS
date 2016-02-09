
describe( 'Contacts', function() {
   it("Create new contact", function() {
      var newContact = new Contact( "test", "name" );
      expect( newContact.firstName ).to.equal( "test" );
      expect( newContact.lastName ).to.equal( "name" );
   });
   it("creates a new address", function( ) {
     var newAddress = new Address( "street", "city", "ST", "12345" );
     expect( newAddress.street ).to.equal( "street" );
     expect( newAddress.city ).to.equal( "city" );
     expect( newAddress.state ).to.equal( "ST" );
     expect( newAddress.zip ).to.equal( "12345" );
   });
   it("adds address to contact", function( ) {
     var newContact = new Contact( "test", "name" );
     var newAddress = new Address( "street", "city", "ST", "12345" );
     newContact.addAddress( newAddress );
     expect( newContact.addresses[ 0 ] ).to.equal( newAddress );
   });
});
