// source: wifi_constants.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.WifiAuthMode', null, global);
goog.exportSymbol('proto.WifiConnectFailedReason', null, global);
goog.exportSymbol('proto.WifiConnectedState', null, global);
goog.exportSymbol('proto.WifiStationState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WifiConnectedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WifiConnectedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WifiConnectedState.displayName = 'proto.WifiConnectedState';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WifiConnectedState.prototype.toObject = function(opt_includeInstance) {
  return proto.WifiConnectedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WifiConnectedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WifiConnectedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip4Addr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authMode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ssid: msg.getSsid_asB64(),
    bssid: msg.getBssid_asB64(),
    channel: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WifiConnectedState}
 */
proto.WifiConnectedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WifiConnectedState;
  return proto.WifiConnectedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WifiConnectedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WifiConnectedState}
 */
proto.WifiConnectedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp4Addr(value);
      break;
    case 2:
      var value = /** @type {!proto.WifiAuthMode} */ (reader.readEnum());
      msg.setAuthMode(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSsid(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBssid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WifiConnectedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WifiConnectedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WifiConnectedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WifiConnectedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp4Addr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSsid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getBssid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getChannel();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string ip4_addr = 1;
 * @return {string}
 */
proto.WifiConnectedState.prototype.getIp4Addr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WifiConnectedState} returns this
 */
proto.WifiConnectedState.prototype.setIp4Addr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional WifiAuthMode auth_mode = 2;
 * @return {!proto.WifiAuthMode}
 */
proto.WifiConnectedState.prototype.getAuthMode = function() {
  return /** @type {!proto.WifiAuthMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.WifiAuthMode} value
 * @return {!proto.WifiConnectedState} returns this
 */
proto.WifiConnectedState.prototype.setAuthMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes ssid = 3;
 * @return {!(string|Uint8Array)}
 */
proto.WifiConnectedState.prototype.getSsid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes ssid = 3;
 * This is a type-conversion wrapper around `getSsid()`
 * @return {string}
 */
proto.WifiConnectedState.prototype.getSsid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSsid()));
};


/**
 * optional bytes ssid = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSsid()`
 * @return {!Uint8Array}
 */
proto.WifiConnectedState.prototype.getSsid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSsid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.WifiConnectedState} returns this
 */
proto.WifiConnectedState.prototype.setSsid = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes bssid = 4;
 * @return {!(string|Uint8Array)}
 */
proto.WifiConnectedState.prototype.getBssid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes bssid = 4;
 * This is a type-conversion wrapper around `getBssid()`
 * @return {string}
 */
proto.WifiConnectedState.prototype.getBssid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBssid()));
};


/**
 * optional bytes bssid = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBssid()`
 * @return {!Uint8Array}
 */
proto.WifiConnectedState.prototype.getBssid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBssid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.WifiConnectedState} returns this
 */
proto.WifiConnectedState.prototype.setBssid = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int32 channel = 5;
 * @return {number}
 */
proto.WifiConnectedState.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.WifiConnectedState} returns this
 */
proto.WifiConnectedState.prototype.setChannel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.WifiStationState = {
  CONNECTED: 0,
  CONNECTING: 1,
  DISCONNECTED: 2,
  CONNECTIONFAILED: 3
};

/**
 * @enum {number}
 */
proto.WifiConnectFailedReason = {
  AUTHERROR: 0,
  NETWORKNOTFOUND: 1
};

/**
 * @enum {number}
 */
proto.WifiAuthMode = {
  OPEN: 0,
  WEP: 1,
  WPA_PSK: 2,
  WPA2_PSK: 3,
  WPA_WPA2_PSK: 4,
  WPA2_ENTERPRISE: 5
};

goog.object.extend(exports, proto);
