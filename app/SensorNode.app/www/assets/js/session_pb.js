// source: session.proto
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

var sec0_pb = require('./sec0_pb.js');
goog.object.extend(proto, sec0_pb);
var sec1_pb = require('./sec1_pb.js');
goog.object.extend(proto, sec1_pb);
goog.exportSymbol('proto.SecSchemeVersion', null, global);
goog.exportSymbol('proto.SessionData', null, global);
goog.exportSymbol('proto.SessionData.ProtoCase', null, global);
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
proto.SessionData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SessionData.oneofGroups_);
};
goog.inherits(proto.SessionData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionData.displayName = 'proto.SessionData';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SessionData.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.SessionData.ProtoCase = {
  PROTO_NOT_SET: 0,
  SEC0: 10,
  SEC1: 11
};

/**
 * @return {proto.SessionData.ProtoCase}
 */
proto.SessionData.prototype.getProtoCase = function() {
  return /** @type {proto.SessionData.ProtoCase} */(jspb.Message.computeOneofCase(this, proto.SessionData.oneofGroups_[0]));
};



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
proto.SessionData.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionData.toObject = function(includeInstance, msg) {
  var f, obj = {
    secVer: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sec0: (f = msg.getSec0()) && sec0_pb.Sec0Payload.toObject(includeInstance, f),
    sec1: (f = msg.getSec1()) && sec1_pb.Sec1Payload.toObject(includeInstance, f)
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
 * @return {!proto.SessionData}
 */
proto.SessionData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionData;
  return proto.SessionData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionData}
 */
proto.SessionData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.SecSchemeVersion} */ (reader.readEnum());
      msg.setSecVer(value);
      break;
    case 10:
      var value = new sec0_pb.Sec0Payload;
      reader.readMessage(value,sec0_pb.Sec0Payload.deserializeBinaryFromReader);
      msg.setSec0(value);
      break;
    case 11:
      var value = new sec1_pb.Sec1Payload;
      reader.readMessage(value,sec1_pb.Sec1Payload.deserializeBinaryFromReader);
      msg.setSec1(value);
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
proto.SessionData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecVer();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSec0();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      sec0_pb.Sec0Payload.serializeBinaryToWriter
    );
  }
  f = message.getSec1();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      sec1_pb.Sec1Payload.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecSchemeVersion sec_ver = 2;
 * @return {!proto.SecSchemeVersion}
 */
proto.SessionData.prototype.getSecVer = function() {
  return /** @type {!proto.SecSchemeVersion} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.SecSchemeVersion} value
 * @return {!proto.SessionData} returns this
 */
proto.SessionData.prototype.setSecVer = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Sec0Payload sec0 = 10;
 * @return {?proto.Sec0Payload}
 */
proto.SessionData.prototype.getSec0 = function() {
  return /** @type{?proto.Sec0Payload} */ (
    jspb.Message.getWrapperField(this, sec0_pb.Sec0Payload, 10));
};


/**
 * @param {?proto.Sec0Payload|undefined} value
 * @return {!proto.SessionData} returns this
*/
proto.SessionData.prototype.setSec0 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.SessionData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionData} returns this
 */
proto.SessionData.prototype.clearSec0 = function() {
  return this.setSec0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionData.prototype.hasSec0 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Sec1Payload sec1 = 11;
 * @return {?proto.Sec1Payload}
 */
proto.SessionData.prototype.getSec1 = function() {
  return /** @type{?proto.Sec1Payload} */ (
    jspb.Message.getWrapperField(this, sec1_pb.Sec1Payload, 11));
};


/**
 * @param {?proto.Sec1Payload|undefined} value
 * @return {!proto.SessionData} returns this
*/
proto.SessionData.prototype.setSec1 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.SessionData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionData} returns this
 */
proto.SessionData.prototype.clearSec1 = function() {
  return this.setSec1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionData.prototype.hasSec1 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * @enum {number}
 */
proto.SecSchemeVersion = {
  SECSCHEME0: 0,
  SECSCHEME1: 1
};

goog.object.extend(exports, proto);
