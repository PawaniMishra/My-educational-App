onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("checkbox1", "click", function( ) {
  onEvent("button2", "click", function( ) {
    setScreen("screen3");
    createRecord("Account", {Username:(getText("text_input1"))}, function(record) {
      
    });
  });
});
onEvent("BTNSENDOTP", "click", function( ) {
  setText("text_area1", randomNumber(5000, 9000));
});
onEvent("BTNSUBMITOTP", "click", function( ) {
  if (getText("text_area1") == getText("txtEnterOTP") ) {
    createRecord("OTP", {OTP:(getText("txtEnterOTP"))}, function(record) {
      setScreen("screen4");
    });
  } else {
    showElement("TxtInvalidOTP");
    setScreen("screen3");
  }
});
onEvent("TxtInvalidOTP", "click", function( ) {
  console.log("TxtInvalidOTP , clicked ");
});
onEvent("Class6", "click", function( ) {
  setScreen("screen5");
});
onEvent("Class7", "click", function( ) {
  setScreen("screen5");
});
onEvent("Class8", "click", function( ) {
  setScreen("screen5");
});
