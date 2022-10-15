"use strict";

if (window.steem_keychain) {
  console.log('Steem Keychain extension installed...');
  try {
    steem_keychain.requestHandshake(function() {
      console.log('Handshake received!');
    });
  } catch (e) {
    console.log(e);
  }
} else {
  console.log('Steem Keychain extension not installed...');
}
