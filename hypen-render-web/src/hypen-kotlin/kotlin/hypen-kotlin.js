(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'io.hypen:hypen-kotlin'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'io.hypen:hypen-kotlin'.");
    }
    root['io.hypen:hypen-kotlin'] = factory(typeof this['io.hypen:hypen-kotlin'] === 'undefined' ? {} : this['io.hypen:hypen-kotlin'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.j1;
  var classMeta = kotlin_kotlin.$_$.b1;
  var setMetadataFor = kotlin_kotlin.$_$.k1;
  var VOID = kotlin_kotlin.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.a1;
  var charSequenceGet = kotlin_kotlin.$_$.z;
  var toString = kotlin_kotlin.$_$.j;
  var drop = kotlin_kotlin.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.y1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var Unit_instance = kotlin_kotlin.$_$.k;
  var isBlank = kotlin_kotlin.$_$.q1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b2;
  var listOfNotNull = kotlin_kotlin.$_$.w;
  var printStackTrace = kotlin_kotlin.$_$.c2;
  var toString_0 = kotlin_kotlin.$_$.l1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f;
  var Exception = kotlin_kotlin.$_$.x1;
  var filterNotNull = kotlin_kotlin.$_$.p;
  var isInterface = kotlin_kotlin.$_$.h1;
  var KProperty0 = kotlin_kotlin.$_$.m1;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d1;
  var lazy = kotlin_kotlin.$_$.a2;
  var interfaceMeta = kotlin_kotlin.$_$.g1;
  var getStringHashCode = kotlin_kotlin.$_$.e1;
  var toInt = kotlin_kotlin.$_$.w1;
  var equals = kotlin_kotlin.$_$.c1;
  var getOrNull = kotlin_kotlin.$_$.s;
  var joinToString = kotlin_kotlin.$_$.u;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var contentEquals = kotlin_kotlin.$_$.m;
  var contentHashCode = kotlin_kotlin.$_$.n;
  var copyToArray = kotlin_kotlin.$_$.o;
  var joinToString_0 = kotlin_kotlin.$_$.t;
  var single = kotlin_kotlin.$_$.y;
  var first = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.f1;
  var repeat = kotlin_kotlin.$_$.u1;
  var objectMeta = kotlin_kotlin.$_$.i1;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.i;
  var listOf = kotlin_kotlin.$_$.x;
  var addAll = kotlin_kotlin.$_$.l;
  var last = kotlin_kotlin.$_$.v;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.z1;
  var firstOrNull = kotlin_kotlin.$_$.q;
  var isLetterOrDigit = kotlin_kotlin.$_$.s1;
  var first_0 = kotlin_kotlin.$_$.o1;
  var isLetter = kotlin_kotlin.$_$.t1;
  var isDigit = kotlin_kotlin.$_$.r1;
  var take = kotlin_kotlin.$_$.v1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var indexOf = kotlin_kotlin.$_$.p1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  function invoke(input) {
    return this.m5(new State(input));
  }
  setMetadataFor(Parse, 'Parse', interfaceMeta);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_0, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_1, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_2, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_3, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_4, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_5, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  function stringify(nest) {
    return toString_0(this);
  }
  setMetadataFor(Node, 'Node', interfaceMeta);
  setMetadataFor(Identifier, 'Identifier', classMeta, VOID, [Node]);
  setMetadataFor(TypeIdentifier, 'TypeIdentifier', classMeta, VOID, [Node]);
  setMetadataFor(QuotedString, 'QuotedString', classMeta, VOID, [Node]);
  setMetadataFor(Word, 'Word', classMeta, VOID, [Node]);
  setMetadataFor(Number_0, 'Number', classMeta, VOID, [Node]);
  setMetadataFor(AST, 'AST', classMeta, VOID, [Node]);
  setMetadataFor(ArgumentDefinition, 'ArgumentDefinition', classMeta, AST);
  setMetadataFor(ArgumentsDefinition, 'ArgumentsDefinition', classMeta, AST);
  setMetadataFor(Object_0, 'Object', classMeta, AST);
  setMetadataFor(ComponentDefinition, 'ComponentDefinition', classMeta, AST);
  setMetadataFor(Applicator, 'Applicator', classMeta, AST);
  setMetadataFor(Arguments, 'Arguments', classMeta, AST);
  setMetadataFor(Argument, 'Argument', classMeta, AST);
  setMetadataFor(Property, 'Property', classMeta, AST);
  setMetadataFor(Module, 'Module', classMeta, AST);
  setMetadataFor(ComponentUsage, 'ComponentUsage', classMeta, AST);
  setMetadataFor(Block, 'Block', classMeta, AST);
  setMetadataFor(Whitespace, 'Whitespace', objectMeta, VOID, [Node]);
  setMetadataFor(Skip, 'Skip', objectMeta, VOID, [Node]);
  setMetadataFor(Comma, 'Comma', objectMeta, VOID, [Node]);
  setMetadataFor(Open, 'Open', objectMeta, VOID, [Node]);
  setMetadataFor(Close, 'Close', objectMeta, VOID, [Node]);
  setMetadataFor(Bracket, 'Bracket', interfaceMeta, VOID, [Node]);
  setMetadataFor(Open_0, 'Open', objectMeta, VOID, [Bracket]);
  setMetadataFor(Close_0, 'Close', objectMeta, VOID, [Bracket]);
  setMetadataFor(Comment, 'Comment', classMeta, VOID, [Node]);
  setMetadataFor(Single, 'Single', classMeta, Comment);
  setMetadataFor(ParsedChar, 'ParsedChar', classMeta, VOID, [Node]);
  setMetadataFor(Sequence, 'Sequence', classMeta, VOID, [Node]);
  setMetadataFor(ParsingError, 'ParsingError', classMeta);
  setMetadataFor(Combined, 'Combined', classMeta, ParsingError);
  setMetadataFor(UnexpectedToken, 'UnexpectedToken', classMeta, ParsingError);
  setMetadataFor(UnexpectedEndOfInput, 'UnexpectedEndOfInput', classMeta, ParsingError);
  setMetadataFor(CommentNotFinished, 'CommentNotFinished', classMeta, ParsingError);
  setMetadataFor(Result, 'Result', interfaceMeta);
  setMetadataFor(Success, 'Success', classMeta, VOID, [Result]);
  setMetadataFor(Failure, 'Failure', classMeta, VOID, [Result]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_6, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_7, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_8, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_9, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_10, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(State, 'State', classMeta);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_11, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_12, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_13, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_14, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_15, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_16, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_17, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_18, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_19, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_20, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_21, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_22, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_23, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_24, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_25, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_26, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_27, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_28, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_29, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_30, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(sam$space_hypen_parser_combinators_Parse$0_31, 'sam$space_hypen_parser_combinators_Parse$0', classMeta, VOID, [Parse]);
  setMetadataFor(HypenParser, 'HypenParser', classMeta, VOID, VOID, HypenParser);
  //endregion
  var any;
  function get_takeAll() {
    _init_properties_Meta_kt__u7vhnp();
    return takeAll;
  }
  var takeAll;
  var splitBy;
  function get_loop() {
    _init_properties_Meta_kt__u7vhnp();
    return loop;
  }
  var loop;
  function get_between() {
    _init_properties_Meta_kt__u7vhnp();
    // Inline function 'kotlin.getValue' call
    var this_0 = between$delegate;
    between$factory();
    return this_0.j5();
  }
  var between$delegate;
  function mapError(_this__u8e3s4, map) {
    _init_properties_Meta_kt__u7vhnp();
    var tmp = mapError$lambda(_this__u8e3s4, map);
    return new sam$space_hypen_parser_combinators_Parse$0_1(tmp);
  }
  function oneOf(parsers) {
    _init_properties_Meta_kt__u7vhnp();
    var tmp = oneOf$lambda(parsers);
    return new sam$space_hypen_parser_combinators_Parse$0_2(tmp);
  }
  function sequence(parsers) {
    _init_properties_Meta_kt__u7vhnp();
    var tmp = sequence$lambda(parsers);
    return new sam$space_hypen_parser_combinators_Parse$0_3(tmp);
  }
  function sam$space_hypen_parser_combinators_Parse$0(function_0) {
    this.l5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0).m5 = function (input) {
    return this.l5_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_0(function_0) {
    this.o5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_0).m5 = function (input) {
    return this.o5_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_1(function_0) {
    this.p5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_1).m5 = function (input) {
    return this.p5_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_2(function_0) {
    this.q5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_2).m5 = function (input) {
    return this.q5_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_3(function_0) {
    this.r5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_3).m5 = function (input) {
    return this.r5_1(input);
  };
  function any$lambda(input) {
    _init_properties_Meta_kt__u7vhnp();
    var remaining = input.s5_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(remaining) > 0) {
      tmp = new Success(new Word(toString(charSequenceGet(remaining, 0))), input.v5(drop(remaining, 1)));
    } else {
      tmp = new Failure(remaining, new UnexpectedEndOfInput('Any character', input));
    }
    return tmp;
  }
  function takeAll$lambda(input) {
    _init_properties_Meta_kt__u7vhnp();
    var remaining = input.s5_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(remaining) > 0) {
      tmp = new Success(new Word(remaining), input.v5(''));
    } else {
      tmp = new Failure(remaining, new UnexpectedEndOfInput('Any character', input));
    }
    return tmp;
  }
  function splitBy$lambda(splitter, parser) {
    _init_properties_Meta_kt__u7vhnp();
    var tmp = get_loop();
    var tmp_0 = tmp(oneOf([map(splitter, splitBy$lambda$lambda), parser]));
    return map(tmp_0, splitBy$lambda$lambda_0);
  }
  function splitBy$lambda$lambda(it) {
    _init_properties_Meta_kt__u7vhnp();
    return Skip_instance;
  }
  function splitBy$lambda$lambda_0(it) {
    _init_properties_Meta_kt__u7vhnp();
    var sequence = it instanceof Sequence ? it : THROW_CCE();
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = sequence.x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      // Inline function 'space.hypen.parser.combinators.splitBy.<anonymous>.<anonymous>.<anonymous>' call
      if (!(element instanceof Skip)) {
        destination.h(element);
      }
    }
    return new Sequence(destination);
  }
  function loop$lambda(inside) {
    _init_properties_Meta_kt__u7vhnp();
    var tmp = loop$lambda$lambda(inside);
    return new sam$space_hypen_parser_combinators_Parse$0_4(tmp);
  }
  function sam$space_hypen_parser_combinators_Parse$0_4(function_0) {
    this.y5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_4).m5 = function (input) {
    return this.y5_1(input);
  };
  function loop$lambda$lambda($inside) {
    return function (input) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var parsed = ArrayList_init_$Create$();
      var lastState = input;
      $l$loop_0: while (true) {
        var tmp;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = lastState.s5_1;
        if (charSequenceLength(this_0) > 0) {
          // Inline function 'kotlin.text.isNotBlank' call
          var this_1 = lastState.s5_1;
          tmp = !isBlank(this_1);
        } else {
          tmp = false;
        }
        if (!tmp) {
          break $l$loop_0;
        }
        var result = $inside.n5(lastState.s5_1);
        if (result instanceof Success) {
          parsed.h(result.output);
          lastState = result.state;
        } else {
          if (result instanceof Failure) {
            if (parsed.o())
              return result;
            else
              break $l$loop_0;
          }
        }
      }
      return new Success(new Sequence(parsed), lastState);
    };
  }
  function between$delegate$lambda() {
    _init_properties_Meta_kt__u7vhnp();
    return between$delegate$lambda$lambda;
  }
  function sam$space_hypen_parser_combinators_Parse$0_5(function_0) {
    this.z5_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_5).m5 = function (input) {
    return this.z5_1(input);
  };
  function between$delegate$lambda$lambda(start, end) {
    _init_properties_Meta_kt__u7vhnp();
    return between$delegate$lambda$lambda$lambda(start, end);
  }
  function between$delegate$lambda$lambda$lambda$lambda$lambda(it) {
    _init_properties_Meta_kt__u7vhnp();
    return 'Failed to parse content between start and end. Reason: ' + it;
  }
  function between$delegate$lambda$lambda$lambda$lambda($end, $start, $between) {
    return function (input) {
      var remaining = input.s5_1;
      var count = 1;
      var ending = null;
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.takeWhile' call
        var inductionVariable = 0;
        var last = remaining.length;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'space.hypen.parser.combinators.between$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var ch = charSequenceGet(remaining, index);
            var it = toString(ch);
            var tried = $end.n5(it);
            var tmp = $end.n5(it);
            var found = tmp instanceof Success;
            if (found) {
              count = count - 1 | 0;
            } else {
              var tmp_0 = $start.n5(it);
              var start = tmp_0 instanceof Success;
              if (start) {
                count = count + 1 | 0;
              }
            }
            var tmp_1;
            if (count === 0) {
              ending = tried;
              tmp_1 = false;
            } else {
              tmp_1 = true;
            }
            if (!tmp_1) {
              // Inline function 'kotlin.text.substring' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$3 = remaining.substring(0, index);
              break $l$block;
            }
          }
           while (inductionVariable < last);
        tmp$ret$3 = remaining;
      }
      var tmp0_elvis_lhs = tmp$ret$3;
      var untilResult = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp_2;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(untilResult) === 0) {
        tmp_2 = new Success(Skip_instance, input);
      } else {
        tmp_2 = mapError($between, between$delegate$lambda$lambda$lambda$lambda$lambda).n5(untilResult);
      }
      var parsedMiddle = tmp_2;
      var tmp_3;
      if (parsedMiddle instanceof Failure) {
        tmp_3 = parsedMiddle instanceof Failure ? parsedMiddle : THROW_CCE();
      } else {
        if (parsedMiddle instanceof Success) {
          var tmp2_elvis_lhs = ending instanceof Success ? ending : null;
          var tmp_4;
          if (tmp2_elvis_lhs == null) {
            return new Failure(remaining, new UnexpectedEndOfInput('Failed parsing end', input));
          } else {
            tmp_4 = tmp2_elvis_lhs;
          }
          var endResult = tmp_4;
          var textRemains = drop(input.s5_1, 1 + untilResult.length | 0);
          var tmp3_safe_receiver = endResult instanceof Success ? endResult : null;
          tmp_3 = new Success(new Sequence(listOfNotNull([parsedMiddle.output, tmp3_safe_receiver == null ? null : tmp3_safe_receiver.output])), input.a6(textRemains));
        } else {
          noWhenBranchMatchedException();
        }
      }
      return tmp_3;
    };
  }
  function between$delegate$lambda$lambda$lambda($start, $end) {
    return function (between) {
      var tmp = between$delegate$lambda$lambda$lambda$lambda($end, $start, between);
      return plus($start, new sam$space_hypen_parser_combinators_Parse$0_5(tmp));
    };
  }
  function mapError$lambda($this_mapError, $map) {
    return function (it) {
      var tmp;
      try {
        var res = $this_mapError.m5(it);
        var tmp_0;
        if (res instanceof Success) {
          tmp_0 = res;
        } else {
          if (res instanceof Failure) {
            tmp_0 = new Failure(res.input, combineWith(res.error, $map(res.error)));
          } else {
            noWhenBranchMatchedException();
          }
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var e = $p;
          printStackTrace(e);
          var message = 'Error while mapping an error';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          throw $p;
        }
      }
      return tmp;
    };
  }
  function oneOf$lambda($parsers) {
    return function (input) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var errors = ArrayList_init_$Create$();
      var tmp0_iterator = filterNotNull($parsers).k();
      while (tmp0_iterator.l()) {
        var parser = tmp0_iterator.m();
        var result = parser.m5(input);
        var tmp;
        if (result instanceof Success) {
          var tmp_0 = result.output;
          tmp = !(tmp_0 instanceof Skip);
        } else {
          tmp = false;
        }
        if (tmp) {
          return result;
        } else {
          if (result instanceof Failure) {
            errors.h(result.error);
          }
        }
      }
      return new Failure(input.s5_1, new Combined('No match found', errors));
    };
  }
  function sequence$lambda($parsers) {
    return function (input) {
      var remaining = input;
      // Inline function 'kotlin.collections.mutableListOf' call
      var nodes = ArrayList_init_$Create$();
      var indexedObject = $parsers;
      var inductionVariable = 0;
      var last = indexedObject.length;
      $l$loop: while (inductionVariable < last) {
        var parser = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = remaining.s5_1;
        if (charSequenceLength(this_0) === 0)
          break $l$loop;
        var result = parser.m5(remaining);
        if (result instanceof Success) {
          remaining = result.state;
          var tmp = result.output;
          nodes.h(isInterface(tmp, Node) ? tmp : THROW_CCE());
        } else {
          if (result instanceof Failure)
            return result;
        }
      }
      return nodes.o() ? new Failure(input.s5_1, combineWith(new UnexpectedToken(input.s5_1, input), 'No match found in sequence of ' + input.s5_1)) : new Success(new Sequence(nodes), remaining);
    };
  }
  function between$factory() {
    return getPropertyCallableRef('between', 0, KProperty0, function () {
      return get_between();
    }, null);
  }
  var properties_initialized_Meta_kt_isj1g9;
  function _init_properties_Meta_kt__u7vhnp() {
    if (!properties_initialized_Meta_kt_isj1g9) {
      properties_initialized_Meta_kt_isj1g9 = true;
      var tmp = any$lambda;
      any = new sam$space_hypen_parser_combinators_Parse$0(tmp);
      var tmp_0 = takeAll$lambda;
      takeAll = new sam$space_hypen_parser_combinators_Parse$0_0(tmp_0);
      splitBy = splitBy$lambda;
      loop = loop$lambda;
      between$delegate = lazy(between$delegate$lambda);
    }
  }
  function Node() {
  }
  function Identifier(text) {
    this.text = text;
  }
  protoOf(Identifier).c6 = function () {
    return this.text;
  };
  protoOf(Identifier).toString = function () {
    return this.text;
  };
  protoOf(Identifier).f5 = function () {
    return this.text;
  };
  protoOf(Identifier).d6 = function (text) {
    return new Identifier(text);
  };
  protoOf(Identifier).copy = function (text, $super) {
    text = text === VOID ? this.text : text;
    return this.d6(text);
  };
  protoOf(Identifier).hashCode = function () {
    return getStringHashCode(this.text);
  };
  protoOf(Identifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Identifier))
      return false;
    var tmp0_other_with_cast = other instanceof Identifier ? other : THROW_CCE();
    if (!(this.text === tmp0_other_with_cast.text))
      return false;
    return true;
  };
  function TypeIdentifier(text) {
    this.text = text;
  }
  protoOf(TypeIdentifier).c6 = function () {
    return this.text;
  };
  protoOf(TypeIdentifier).f5 = function () {
    return this.text;
  };
  protoOf(TypeIdentifier).d6 = function (text) {
    return new TypeIdentifier(text);
  };
  protoOf(TypeIdentifier).copy = function (text, $super) {
    text = text === VOID ? this.text : text;
    return this.d6(text);
  };
  protoOf(TypeIdentifier).toString = function () {
    return 'TypeIdentifier(text=' + this.text + ')';
  };
  protoOf(TypeIdentifier).hashCode = function () {
    return getStringHashCode(this.text);
  };
  protoOf(TypeIdentifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeIdentifier))
      return false;
    var tmp0_other_with_cast = other instanceof TypeIdentifier ? other : THROW_CCE();
    if (!(this.text === tmp0_other_with_cast.text))
      return false;
    return true;
  };
  function QuotedString(text) {
    this.text = text;
  }
  protoOf(QuotedString).c6 = function () {
    return this.text;
  };
  protoOf(QuotedString).toString = function () {
    return '"' + this.text + '"';
  };
  protoOf(QuotedString).f5 = function () {
    return this.text;
  };
  protoOf(QuotedString).d6 = function (text) {
    return new QuotedString(text);
  };
  protoOf(QuotedString).copy = function (text, $super) {
    text = text === VOID ? this.text : text;
    return this.d6(text);
  };
  protoOf(QuotedString).hashCode = function () {
    return getStringHashCode(this.text);
  };
  protoOf(QuotedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuotedString))
      return false;
    var tmp0_other_with_cast = other instanceof QuotedString ? other : THROW_CCE();
    if (!(this.text === tmp0_other_with_cast.text))
      return false;
    return true;
  };
  function Word(text) {
    this.text = text;
  }
  protoOf(Word).c6 = function () {
    return this.text;
  };
  protoOf(Word).toString = function () {
    return this.text;
  };
  protoOf(Word).f5 = function () {
    return this.text;
  };
  protoOf(Word).d6 = function (text) {
    return new Word(text);
  };
  protoOf(Word).copy = function (text, $super) {
    text = text === VOID ? this.text : text;
    return this.d6(text);
  };
  protoOf(Word).hashCode = function () {
    return getStringHashCode(this.text);
  };
  protoOf(Word).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Word))
      return false;
    var tmp0_other_with_cast = other instanceof Word ? other : THROW_CCE();
    if (!(this.text === tmp0_other_with_cast.text))
      return false;
    return true;
  };
  function Number_0(text) {
    this.e6_1 = text;
    this.number = toInt(this.e6_1);
  }
  protoOf(Number_0).f6 = function () {
    return this.number;
  };
  protoOf(Number_0).d6 = function (text) {
    return new Number_0(text);
  };
  protoOf(Number_0).copy = function (text, $super) {
    text = text === VOID ? this.e6_1 : text;
    return this.d6(text);
  };
  protoOf(Number_0).toString = function () {
    return 'Number(text=' + this.e6_1 + ')';
  };
  protoOf(Number_0).hashCode = function () {
    return getStringHashCode(this.e6_1);
  };
  protoOf(Number_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Number_0))
      return false;
    var tmp0_other_with_cast = other instanceof Number_0 ? other : THROW_CCE();
    if (!(this.e6_1 === tmp0_other_with_cast.e6_1))
      return false;
    return true;
  };
  function AST() {
  }
  function ArgumentDefinition(name, type) {
    AST.call(this);
    this.name = name;
    this.type = type;
  }
  protoOf(ArgumentDefinition).g6 = function () {
    return this.name;
  };
  protoOf(ArgumentDefinition).h6 = function () {
    return this.type;
  };
  protoOf(ArgumentDefinition).toString = function () {
    var tmp0_safe_receiver = this.name;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.text;
    var tmp = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.type;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.text;
    var tmp_0;
    if (tmp3_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'space.hypen.parser.combinators.ArgumentDefinition.toString.<anonymous>' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp3_safe_receiver) > 0) {
        tmp_1 = ': ' + tmp3_safe_receiver + ' ';
      } else {
        tmp_1 = '';
      }
      tmp_0 = tmp_1;
    }
    var tmp4_elvis_lhs = tmp_0;
    return tmp + (tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs);
  };
  protoOf(ArgumentDefinition).f5 = function () {
    return this.name;
  };
  protoOf(ArgumentDefinition).g5 = function () {
    return this.type;
  };
  protoOf(ArgumentDefinition).i6 = function (name, type) {
    return new ArgumentDefinition(name, type);
  };
  protoOf(ArgumentDefinition).copy = function (name, type, $super) {
    name = name === VOID ? this.name : name;
    type = type === VOID ? this.type : type;
    return this.i6(name, type);
  };
  protoOf(ArgumentDefinition).hashCode = function () {
    var result = this.name == null ? 0 : this.name.hashCode();
    result = imul(result, 31) + (this.type == null ? 0 : this.type.hashCode()) | 0;
    return result;
  };
  protoOf(ArgumentDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArgumentDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof ArgumentDefinition ? other : THROW_CCE();
    if (!equals(this.name, tmp0_other_with_cast.name))
      return false;
    if (!equals(this.type, tmp0_other_with_cast.type))
      return false;
    return true;
  };
  function ArgumentsDefinition(arguments_0) {
    AST.call(this);
    this.arguments = arguments_0;
  }
  protoOf(ArgumentsDefinition).j6 = function () {
    return this.arguments;
  };
  protoOf(ArgumentsDefinition).k6 = function (name, position) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.arguments;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'space.hypen.parser.combinators.ArgumentsDefinition.argFor.<anonymous>' call
        var tmp0_safe_receiver = element.name;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.text) == name) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = getOrNull(this.arguments, position == null ? 0 : position);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ArgumentsDefinition).argFor = function (name, position, $super) {
    name = name === VOID ? null : name;
    position = position === VOID ? null : position;
    return this.k6(name, position);
  };
  protoOf(ArgumentsDefinition).toString = function () {
    return '(' + joinToString(this.arguments, ', ') + ')';
  };
  protoOf(ArgumentsDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Arguments))
      THROW_CCE();
    return contentEquals(this.arguments, other.arguments);
  };
  protoOf(ArgumentsDefinition).hashCode = function () {
    return contentHashCode(this.arguments);
  };
  protoOf(ArgumentsDefinition).f5 = function () {
    return this.arguments;
  };
  protoOf(ArgumentsDefinition).l6 = function (arguments_0) {
    return new ArgumentsDefinition(arguments_0);
  };
  protoOf(ArgumentsDefinition).copy = function (arguments_0, $super) {
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    return this.l6(arguments_0);
  };
  function Object_0(children) {
    AST.call(this);
    this.children = children;
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.children;
    tmp.childrenArray = copyToArray(this_0);
  }
  protoOf(Object_0).m6 = function () {
    return this.children;
  };
  protoOf(Object_0).n6 = function () {
    return this.childrenArray;
  };
  protoOf(Object_0).toString = function () {
    var tmp;
    if (this.children.n() === 1 ? first(this.children).name == null : false) {
      tmp = single(this.children).toString();
    } else {
      tmp = '{ ' + joinToString_0(this.children, ',\n ') + ' }';
    }
    return tmp;
  };
  protoOf(Object_0).f5 = function () {
    return this.children;
  };
  protoOf(Object_0).o6 = function (children) {
    return new Object_0(children);
  };
  protoOf(Object_0).copy = function (children, $super) {
    children = children === VOID ? this.children : children;
    return this.o6(children);
  };
  protoOf(Object_0).hashCode = function () {
    return hashCode(this.children);
  };
  protoOf(Object_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Object_0))
      return false;
    var tmp0_other_with_cast = other instanceof Object_0 ? other : THROW_CCE();
    if (!equals(this.children, tmp0_other_with_cast.children))
      return false;
    return true;
  };
  function ComponentDefinition(name, arguments_0, block) {
    AST.call(this);
    this.name = name;
    this.arguments = arguments_0;
    this.block = block;
  }
  protoOf(ComponentDefinition).g6 = function () {
    return this.name;
  };
  protoOf(ComponentDefinition).j6 = function () {
    return this.arguments;
  };
  protoOf(ComponentDefinition).p6 = function () {
    return this.block;
  };
  protoOf(ComponentDefinition).toString = function () {
    var tmp0_safe_receiver = this.block;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return 'component ' + this.name.text + this.arguments + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  protoOf(ComponentDefinition).f5 = function () {
    return this.name;
  };
  protoOf(ComponentDefinition).g5 = function () {
    return this.arguments;
  };
  protoOf(ComponentDefinition).q6 = function () {
    return this.block;
  };
  protoOf(ComponentDefinition).r6 = function (name, arguments_0, block) {
    return new ComponentDefinition(name, arguments_0, block);
  };
  protoOf(ComponentDefinition).copy = function (name, arguments_0, block, $super) {
    name = name === VOID ? this.name : name;
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    block = block === VOID ? this.block : block;
    return this.r6(name, arguments_0, block);
  };
  protoOf(ComponentDefinition).hashCode = function () {
    var result = this.name.hashCode();
    result = imul(result, 31) + this.arguments.hashCode() | 0;
    result = imul(result, 31) + (this.block == null ? 0 : this.block.hashCode()) | 0;
    return result;
  };
  protoOf(ComponentDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComponentDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof ComponentDefinition ? other : THROW_CCE();
    if (!this.name.equals(tmp0_other_with_cast.name))
      return false;
    if (!this.arguments.equals(tmp0_other_with_cast.arguments))
      return false;
    if (!equals(this.block, tmp0_other_with_cast.block))
      return false;
    return true;
  };
  function Applicator(name, arguments_0, block) {
    AST.call(this);
    this.name = name;
    this.arguments = arguments_0;
    this.block = block;
  }
  protoOf(Applicator).g6 = function () {
    return this.name;
  };
  protoOf(Applicator).j6 = function () {
    return this.arguments;
  };
  protoOf(Applicator).p6 = function () {
    return this.block;
  };
  protoOf(Applicator).toString = function () {
    var tmp0_safe_receiver = this.block;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return '.' + this.name.text + this.arguments + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  protoOf(Applicator).f5 = function () {
    return this.name;
  };
  protoOf(Applicator).g5 = function () {
    return this.arguments;
  };
  protoOf(Applicator).q6 = function () {
    return this.block;
  };
  protoOf(Applicator).s6 = function (name, arguments_0, block) {
    return new Applicator(name, arguments_0, block);
  };
  protoOf(Applicator).copy = function (name, arguments_0, block, $super) {
    name = name === VOID ? this.name : name;
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    block = block === VOID ? this.block : block;
    return this.s6(name, arguments_0, block);
  };
  protoOf(Applicator).hashCode = function () {
    var result = this.name.hashCode();
    result = imul(result, 31) + this.arguments.hashCode() | 0;
    result = imul(result, 31) + (this.block == null ? 0 : this.block.hashCode()) | 0;
    return result;
  };
  protoOf(Applicator).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Applicator))
      return false;
    var tmp0_other_with_cast = other instanceof Applicator ? other : THROW_CCE();
    if (!this.name.equals(tmp0_other_with_cast.name))
      return false;
    if (!this.arguments.equals(tmp0_other_with_cast.arguments))
      return false;
    if (!equals(this.block, tmp0_other_with_cast.block))
      return false;
    return true;
  };
  function Arguments(arguments_0) {
    AST.call(this);
    this.arguments = arguments_0;
  }
  protoOf(Arguments).j6 = function () {
    return this.arguments;
  };
  protoOf(Arguments).k6 = function (name, position) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.arguments;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'space.hypen.parser.combinators.Arguments.argFor.<anonymous>' call
        var tmp0_safe_receiver = element.name;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.text) == name) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = getOrNull(this.arguments, position == null ? 0 : position);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_safe_receiver = tmp;
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.value;
  };
  protoOf(Arguments).argFor = function (name, position, $super) {
    name = name === VOID ? null : name;
    position = position === VOID ? null : position;
    return this.k6(name, position);
  };
  protoOf(Arguments).toString = function () {
    return '(' + joinToString(this.arguments, ', ') + ')';
  };
  protoOf(Arguments).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Arguments))
      THROW_CCE();
    return contentEquals(this.arguments, other.arguments);
  };
  protoOf(Arguments).hashCode = function () {
    return contentHashCode(this.arguments);
  };
  protoOf(Arguments).f5 = function () {
    return this.arguments;
  };
  protoOf(Arguments).t6 = function (arguments_0) {
    return new Arguments(arguments_0);
  };
  protoOf(Arguments).copy = function (arguments_0, $super) {
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    return this.t6(arguments_0);
  };
  function Argument(name, value) {
    AST.call(this);
    this.name = name;
    this.value = value;
  }
  protoOf(Argument).g6 = function () {
    return this.name;
  };
  protoOf(Argument).j5 = function () {
    return this.value;
  };
  protoOf(Argument).toString = function () {
    var tmp0_safe_receiver = this.name;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.text;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + ': ';
    return (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + this.value.b6(0);
  };
  protoOf(Argument).f5 = function () {
    return this.name;
  };
  protoOf(Argument).g5 = function () {
    return this.value;
  };
  protoOf(Argument).u6 = function (name, value) {
    return new Argument(name, value);
  };
  protoOf(Argument).copy = function (name, value, $super) {
    name = name === VOID ? this.name : name;
    value = value === VOID ? this.value : value;
    return this.u6(name, value);
  };
  protoOf(Argument).hashCode = function () {
    var result = this.name == null ? 0 : this.name.hashCode();
    result = imul(result, 31) + hashCode(this.value) | 0;
    return result;
  };
  protoOf(Argument).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Argument))
      return false;
    var tmp0_other_with_cast = other instanceof Argument ? other : THROW_CCE();
    if (!equals(this.name, tmp0_other_with_cast.name))
      return false;
    if (!equals(this.value, tmp0_other_with_cast.value))
      return false;
    return true;
  };
  function Property(name, value) {
    AST.call(this);
    this.name = name;
    this.value = value;
  }
  protoOf(Property).g6 = function () {
    return this.name;
  };
  protoOf(Property).j5 = function () {
    return this.value;
  };
  protoOf(Property).toString = function () {
    var tmp0_safe_receiver = this.name;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.text;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + ': ';
    return (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + this.value.b6(0);
  };
  protoOf(Property).f5 = function () {
    return this.name;
  };
  protoOf(Property).g5 = function () {
    return this.value;
  };
  protoOf(Property).u6 = function (name, value) {
    return new Property(name, value);
  };
  protoOf(Property).copy = function (name, value, $super) {
    name = name === VOID ? this.name : name;
    value = value === VOID ? this.value : value;
    return this.u6(name, value);
  };
  protoOf(Property).hashCode = function () {
    var result = this.name == null ? 0 : this.name.hashCode();
    result = imul(result, 31) + hashCode(this.value) | 0;
    return result;
  };
  protoOf(Property).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Property))
      return false;
    var tmp0_other_with_cast = other instanceof Property ? other : THROW_CCE();
    if (!equals(this.name, tmp0_other_with_cast.name))
      return false;
    if (!equals(this.value, tmp0_other_with_cast.value))
      return false;
    return true;
  };
  function Module(name, arguments_0, block, applicators) {
    AST.call(this);
    this.name = name;
    this.arguments = arguments_0;
    this.block = block;
    this.applicators = applicators;
  }
  protoOf(Module).g6 = function () {
    return this.name;
  };
  protoOf(Module).j6 = function () {
    return this.arguments;
  };
  protoOf(Module).p6 = function () {
    return this.block;
  };
  protoOf(Module).v6 = function () {
    return this.applicators;
  };
  protoOf(Module).stringify = function (nest) {
    var indent = repeat('\t', nest);
    var tmp0_safe_receiver = this.block;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.stringify(nest + 1 | 0);
    var contents = 'module ' + this.name.text + this.arguments + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + joinToString(this.applicators, '');
    return indent + contents;
  };
  protoOf(Module).b6 = function (nest) {
    return this.stringify(nest);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Module))
      THROW_CCE();
    if (!this.name.equals(other.name))
      return false;
    if (!this.arguments.equals(other.arguments))
      return false;
    if (!equals(this.block, other.block))
      return false;
    return contentEquals(this.applicators, other.applicators);
  };
  protoOf(Module).hashCode = function () {
    var result = this.name.hashCode();
    result = imul(31, result) + this.arguments.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.block;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + contentHashCode(this.applicators) | 0;
    return result;
  };
  protoOf(Module).f5 = function () {
    return this.name;
  };
  protoOf(Module).g5 = function () {
    return this.arguments;
  };
  protoOf(Module).q6 = function () {
    return this.block;
  };
  protoOf(Module).w6 = function () {
    return this.applicators;
  };
  protoOf(Module).x6 = function (name, arguments_0, block, applicators) {
    return new Module(name, arguments_0, block, applicators);
  };
  protoOf(Module).copy = function (name, arguments_0, block, applicators, $super) {
    name = name === VOID ? this.name : name;
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    block = block === VOID ? this.block : block;
    applicators = applicators === VOID ? this.applicators : applicators;
    return this.x6(name, arguments_0, block, applicators);
  };
  protoOf(Module).toString = function () {
    return 'Module(name=' + this.name + ', arguments=' + this.arguments + ', block=' + this.block + ', applicators=' + toString_0(this.applicators) + ')';
  };
  function ComponentUsage(name, arguments_0, block, applicators) {
    AST.call(this);
    this.name = name;
    this.arguments = arguments_0;
    this.block = block;
    this.applicators = applicators;
  }
  protoOf(ComponentUsage).g6 = function () {
    return this.name;
  };
  protoOf(ComponentUsage).j6 = function () {
    return this.arguments;
  };
  protoOf(ComponentUsage).p6 = function () {
    return this.block;
  };
  protoOf(ComponentUsage).v6 = function () {
    return this.applicators;
  };
  protoOf(ComponentUsage).k6 = function (name, position) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.arguments;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'space.hypen.parser.combinators.ComponentUsage.argFor.<anonymous>' call
        var tmp0_safe_receiver = element.name;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.text) == name) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = getOrNull(this.arguments, position == null ? 0 : position);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_safe_receiver = tmp;
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.value;
  };
  protoOf(ComponentUsage).argFor = function (name, position, $super) {
    name = name === VOID ? null : name;
    position = position === VOID ? null : position;
    return this.k6(name, position);
  };
  protoOf(ComponentUsage).stringify = function (nest) {
    var indent = repeat('\t', nest);
    var tmp = joinToString(this.arguments, ', ');
    var tmp0_safe_receiver = this.block;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.stringify(nest + 1 | 0);
    var contents = this.name.text + '(' + tmp + ')' + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + joinToString(this.applicators, '');
    return '\n' + indent + contents;
  };
  protoOf(ComponentUsage).b6 = function (nest) {
    return this.stringify(nest);
  };
  protoOf(ComponentUsage).toString = function () {
    return this.stringify(0);
  };
  protoOf(ComponentUsage).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ComponentUsage))
      THROW_CCE();
    if (!this.name.equals(other.name))
      return false;
    if (!contentEquals(this.arguments, other.arguments))
      return false;
    if (!equals(this.block, other.block))
      return false;
    return contentEquals(this.applicators, other.applicators);
  };
  protoOf(ComponentUsage).hashCode = function () {
    var result = this.name.hashCode();
    result = imul(31, result) + contentHashCode(this.arguments) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.block;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + contentHashCode(this.applicators) | 0;
    return result;
  };
  protoOf(ComponentUsage).f5 = function () {
    return this.name;
  };
  protoOf(ComponentUsage).g5 = function () {
    return this.arguments;
  };
  protoOf(ComponentUsage).q6 = function () {
    return this.block;
  };
  protoOf(ComponentUsage).w6 = function () {
    return this.applicators;
  };
  protoOf(ComponentUsage).y6 = function (name, arguments_0, block, applicators) {
    return new ComponentUsage(name, arguments_0, block, applicators);
  };
  protoOf(ComponentUsage).copy = function (name, arguments_0, block, applicators, $super) {
    name = name === VOID ? this.name : name;
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    block = block === VOID ? this.block : block;
    applicators = applicators === VOID ? this.applicators : applicators;
    return this.y6(name, arguments_0, block, applicators);
  };
  function Block$stringify$lambda($nest) {
    return function (it) {
      return it.b6($nest + 1 | 0);
    };
  }
  function Block(children) {
    AST.call(this);
    this.children = children;
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.children;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      if (element instanceof ComponentUsage) {
        destination.h(element);
      }
    }
    tmp.components = copyToArray(destination);
  }
  protoOf(Block).m6 = function () {
    return this.children;
  };
  protoOf(Block).z6 = function () {
    return this.components;
  };
  protoOf(Block).stringify = function (nest) {
    var indent = repeat('\t', nest);
    if (this.children.o()) {
      return '';
    } else {
      var contents = '{' + indent + joinToString_0(this.children, '', VOID, VOID, VOID, VOID, Block$stringify$lambda(nest)) + '\n' + indent + '}';
      return contents;
    }
  };
  protoOf(Block).b6 = function (nest) {
    return this.stringify(nest);
  };
  protoOf(Block).toString = function () {
    return this.stringify(0);
  };
  protoOf(Block).f5 = function () {
    return this.children;
  };
  protoOf(Block).a7 = function (children) {
    return new Block(children);
  };
  protoOf(Block).copy = function (children, $super) {
    children = children === VOID ? this.children : children;
    return this.a7(children);
  };
  protoOf(Block).hashCode = function () {
    return hashCode(this.children);
  };
  protoOf(Block).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.children, tmp0_other_with_cast.children))
      return false;
    return true;
  };
  function Whitespace() {
  }
  protoOf(Whitespace).toString = function () {
    return 'Whitespace';
  };
  protoOf(Whitespace).hashCode = function () {
    return -563075083;
  };
  protoOf(Whitespace).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Whitespace))
      return false;
    other instanceof Whitespace || THROW_CCE();
    return true;
  };
  var Whitespace_instance;
  function Whitespace_getInstance() {
    return Whitespace_instance;
  }
  function Skip() {
  }
  protoOf(Skip).toString = function () {
    return 'Skip';
  };
  protoOf(Skip).hashCode = function () {
    return 1478308087;
  };
  protoOf(Skip).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Skip))
      return false;
    other instanceof Skip || THROW_CCE();
    return true;
  };
  var Skip_instance;
  function Skip_getInstance() {
    return Skip_instance;
  }
  function Comma() {
  }
  protoOf(Comma).toString = function () {
    return 'Comma';
  };
  protoOf(Comma).hashCode = function () {
    return -1431742883;
  };
  protoOf(Comma).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Comma))
      return false;
    other instanceof Comma || THROW_CCE();
    return true;
  };
  var Comma_instance;
  function Comma_getInstance() {
    return Comma_instance;
  }
  function Open() {
  }
  protoOf(Open).toString = function () {
    return 'Open';
  };
  protoOf(Open).hashCode = function () {
    return -1004392072;
  };
  protoOf(Open).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Open))
      return false;
    other instanceof Open || THROW_CCE();
    return true;
  };
  var Open_instance;
  function Open_getInstance() {
    return Open_instance;
  }
  function Close() {
  }
  protoOf(Close).toString = function () {
    return 'Close';
  };
  protoOf(Close).hashCode = function () {
    return -1082574710;
  };
  protoOf(Close).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Close))
      return false;
    other instanceof Close || THROW_CCE();
    return true;
  };
  var Close_instance;
  function Close_getInstance() {
    return Close_instance;
  }
  function Open_0() {
  }
  protoOf(Open_0).toString = function () {
    return 'Open';
  };
  protoOf(Open_0).hashCode = function () {
    return 1178018664;
  };
  protoOf(Open_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Open_0))
      return false;
    other instanceof Open_0 || THROW_CCE();
    return true;
  };
  var Open_instance_0;
  function Open_getInstance_0() {
    return Open_instance_0;
  }
  function Close_0() {
  }
  protoOf(Close_0).toString = function () {
    return 'Close';
  };
  protoOf(Close_0).hashCode = function () {
    return -2147318630;
  };
  protoOf(Close_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Close_0))
      return false;
    other instanceof Close_0 || THROW_CCE();
    return true;
  };
  var Close_instance_0;
  function Close_getInstance_0() {
    return Close_instance_0;
  }
  function Bracket() {
  }
  function Single(text) {
    Comment.call(this);
    this.b7_1 = text;
  }
  protoOf(Single).toString = function () {
    return 'Single(text=' + this.b7_1 + ')';
  };
  protoOf(Single).hashCode = function () {
    return getStringHashCode(this.b7_1);
  };
  protoOf(Single).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Single))
      return false;
    var tmp0_other_with_cast = other instanceof Single ? other : THROW_CCE();
    if (!(this.b7_1 === tmp0_other_with_cast.b7_1))
      return false;
    return true;
  };
  function Comment() {
  }
  function ParsedChar(text) {
    this.c7_1 = text;
  }
  protoOf(ParsedChar).toString = function () {
    return toString(this.c7_1);
  };
  protoOf(ParsedChar).hashCode = function () {
    return Char__hashCode_impl_otmys(this.c7_1);
  };
  protoOf(ParsedChar).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParsedChar))
      return false;
    var tmp0_other_with_cast = other instanceof ParsedChar ? other : THROW_CCE();
    if (!(this.c7_1 === tmp0_other_with_cast.c7_1))
      return false;
    return true;
  };
  function Sequence(_children) {
    this.w5_1 = _children;
    var tmp = this;
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = this.w5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      // Inline function 'space.hypen.parser.combinators.Sequence.children.<anonymous>' call
      var tmp_0;
      if (element instanceof Sequence) {
        tmp_0 = element.x5_1;
      } else {
        tmp_0 = listOf(element);
      }
      var list = tmp_0;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.k();
    while (tmp0_iterator_0.l()) {
      var element_0 = tmp0_iterator_0.m();
      // Inline function 'space.hypen.parser.combinators.Sequence.children.<anonymous>' call
      if (!(element_0 instanceof Skip)) {
        destination_0.h(element_0);
      }
    }
    tmp.x5_1 = destination_0;
  }
  protoOf(Sequence).hashCode = function () {
    return hashCode(this.x5_1);
  };
  protoOf(Sequence).toString = function () {
    return joinToString_0(this.x5_1, '');
  };
  protoOf(Sequence).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Sequence))
      THROW_CCE();
    return toString_0(this.x5_1) === toString_0(other.x5_1);
  };
  function Parse() {
  }
  function ParsingError$Combined$toString$lambda(it) {
    return it.f7();
  }
  function Combined(message, list) {
    ParsingError.call(this, message, last(list).e7_1);
    this.i7_1 = message;
    this.j7_1 = list;
  }
  protoOf(Combined).toString = function () {
    return this.i7_1 + ':\n' + joinToString_0(this.j7_1, ',\n', VOID, VOID, VOID, VOID, ParsingError$Combined$toString$lambda) + '\n';
  };
  protoOf(Combined).hashCode = function () {
    var result = getStringHashCode(this.i7_1);
    result = imul(result, 31) + hashCode(this.j7_1) | 0;
    return result;
  };
  protoOf(Combined).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combined))
      return false;
    var tmp0_other_with_cast = other instanceof Combined ? other : THROW_CCE();
    if (!(this.i7_1 === tmp0_other_with_cast.i7_1))
      return false;
    if (!equals(this.j7_1, tmp0_other_with_cast.j7_1))
      return false;
    return true;
  };
  function UnexpectedToken(token, state) {
    ParsingError.call(this, 'Unexpected token ' + token, state);
    this.n7_1 = token;
    this.o7_1 = state;
  }
  protoOf(UnexpectedToken).toString = function () {
    return 'UnexpectedToken(token=' + this.n7_1 + ', state=' + this.o7_1 + ')';
  };
  protoOf(UnexpectedToken).hashCode = function () {
    var result = getStringHashCode(this.n7_1);
    result = imul(result, 31) + this.o7_1.hashCode() | 0;
    return result;
  };
  protoOf(UnexpectedToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UnexpectedToken))
      return false;
    var tmp0_other_with_cast = other instanceof UnexpectedToken ? other : THROW_CCE();
    if (!(this.n7_1 === tmp0_other_with_cast.n7_1))
      return false;
    if (!this.o7_1.equals(tmp0_other_with_cast.o7_1))
      return false;
    return true;
  };
  function UnexpectedEndOfInput(expected, state) {
    ParsingError.call(this, 'Unexpected end of input - ' + expected, state);
    this.r7_1 = expected;
    this.s7_1 = state;
  }
  protoOf(UnexpectedEndOfInput).toString = function () {
    return 'UnexpectedEndOfInput(expected=' + this.r7_1 + ', state=' + this.s7_1 + ')';
  };
  protoOf(UnexpectedEndOfInput).hashCode = function () {
    var result = getStringHashCode(this.r7_1);
    result = imul(result, 31) + this.s7_1.hashCode() | 0;
    return result;
  };
  protoOf(UnexpectedEndOfInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UnexpectedEndOfInput))
      return false;
    var tmp0_other_with_cast = other instanceof UnexpectedEndOfInput ? other : THROW_CCE();
    if (!(this.r7_1 === tmp0_other_with_cast.r7_1))
      return false;
    if (!this.s7_1.equals(tmp0_other_with_cast.s7_1))
      return false;
    return true;
  };
  function CommentNotFinished(message, state) {
    ParsingError.call(this, message, state);
    this.v7_1 = message;
    this.w7_1 = state;
  }
  protoOf(CommentNotFinished).toString = function () {
    return 'CommentNotFinished(message=' + this.v7_1 + ', state=' + this.w7_1 + ')';
  };
  protoOf(CommentNotFinished).hashCode = function () {
    var result = getStringHashCode(this.v7_1);
    result = imul(result, 31) + this.w7_1.hashCode() | 0;
    return result;
  };
  protoOf(CommentNotFinished).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommentNotFinished))
      return false;
    var tmp0_other_with_cast = other instanceof CommentNotFinished ? other : THROW_CCE();
    if (!(this.v7_1 === tmp0_other_with_cast.v7_1))
      return false;
    if (!this.w7_1.equals(tmp0_other_with_cast.w7_1))
      return false;
    return true;
  };
  function ParsingError(msg, _state) {
    this.d7_1 = msg;
    this.e7_1 = _state;
  }
  protoOf(ParsingError).k7 = function (msg) {
    this.d7_1 = msg;
    return this;
  };
  protoOf(ParsingError).f7 = function () {
    return 'Error: ' + this.d7_1 + ' at ' + this.e7_1.t5_1 + '\n Remaining ->' + this.e7_1.s5_1;
  };
  protoOf(ParsingError).toString = function () {
    return this.f7();
  };
  function combineWith(_this__u8e3s4, msg) {
    return _this__u8e3s4.k7(msg);
  }
  function Result() {
  }
  function Success(output, state) {
    this.output = output;
    this.state = state;
  }
  protoOf(Success).x7 = function () {
    return this.output;
  };
  protoOf(Success).y7 = function () {
    return this.state;
  };
  protoOf(Success).f5 = function () {
    return this.output;
  };
  protoOf(Success).g5 = function () {
    return this.state;
  };
  protoOf(Success).z7 = function (output, state) {
    return new Success(output, state);
  };
  protoOf(Success).copy = function (output, state, $super) {
    output = output === VOID ? this.output : output;
    state = state === VOID ? this.state : state;
    return this.z7(output, state);
  };
  protoOf(Success).toString = function () {
    return 'Success(output=' + this.output + ', state=' + this.state + ')';
  };
  protoOf(Success).hashCode = function () {
    var result = this.output == null ? 0 : hashCode(this.output);
    result = imul(result, 31) + this.state.hashCode() | 0;
    return result;
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.output, tmp0_other_with_cast.output))
      return false;
    if (!this.state.equals(tmp0_other_with_cast.state))
      return false;
    return true;
  };
  function Failure(input, error, msg) {
    msg = msg === VOID ? error.d7_1 : msg;
    this.input = input;
    this.error = error;
    this.msg = msg;
  }
  protoOf(Failure).a8 = function () {
    return this.input;
  };
  protoOf(Failure).b8 = function () {
    return this.error;
  };
  protoOf(Failure).c8 = function () {
    return this.msg;
  };
  protoOf(Failure).toString = function () {
    return 'Failure: ' + this.msg + ' at ' + this.error.e7_1.t5_1 + '\n Remaining ->' + this.input;
  };
  protoOf(Failure).f5 = function () {
    return this.input;
  };
  protoOf(Failure).g5 = function () {
    return this.error;
  };
  protoOf(Failure).q6 = function () {
    return this.msg;
  };
  protoOf(Failure).d8 = function (input, error, msg) {
    return new Failure(input, error, msg);
  };
  protoOf(Failure).copy = function (input, error, msg, $super) {
    input = input === VOID ? this.input : input;
    error = error === VOID ? this.error : error;
    msg = msg === VOID ? this.msg : msg;
    return this.d8(input, error, msg);
  };
  protoOf(Failure).hashCode = function () {
    var result = getStringHashCode(this.input);
    result = imul(result, 31) + hashCode(this.error) | 0;
    result = imul(result, 31) + getStringHashCode(this.msg) | 0;
    return result;
  };
  protoOf(Failure).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Failure))
      return false;
    var tmp0_other_with_cast = other instanceof Failure ? other : THROW_CCE();
    if (!(this.input === tmp0_other_with_cast.input))
      return false;
    if (!equals(this.error, tmp0_other_with_cast.error))
      return false;
    if (!(this.msg === tmp0_other_with_cast.msg))
      return false;
    return true;
  };
  function get_chain() {
    _init_properties_SpecialTokens_kt__pnimnz();
    return chain;
  }
  var chain;
  function get_comma() {
    _init_properties_SpecialTokens_kt__pnimnz();
    return comma;
  }
  var comma;
  function get_openingArgument() {
    _init_properties_SpecialTokens_kt__pnimnz();
    return openingArgument;
  }
  var openingArgument;
  function get_openingBrace() {
    _init_properties_SpecialTokens_kt__pnimnz();
    return openingBrace;
  }
  var openingBrace;
  function get_closingBrace() {
    _init_properties_SpecialTokens_kt__pnimnz();
    return closingBrace;
  }
  var closingBrace;
  function get_closingArgument() {
    _init_properties_SpecialTokens_kt__pnimnz();
    return closingArgument;
  }
  var closingArgument;
  function sam$space_hypen_parser_combinators_Parse$0_6(function_0) {
    this.e8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_6).m5 = function (input) {
    return this.e8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_7(function_0) {
    this.f8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_7).m5 = function (input) {
    return this.f8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_8(function_0) {
    this.g8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_8).m5 = function (input) {
    return this.g8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_9(function_0) {
    this.h8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_9).m5 = function (input) {
    return this.h8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_10(function_0) {
    this.i8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_10).m5 = function (input) {
    return this.i8_1(input);
  };
  function comma$lambda(it) {
    _init_properties_SpecialTokens_kt__pnimnz();
    var res = char(_Char___init__impl__6a9atx(44)).m5(it);
    var tmp;
    if (res instanceof Success) {
      tmp = new Success(Comma_instance, res.state);
    } else {
      tmp = res;
    }
    return tmp;
  }
  function openingArgument$lambda(it) {
    _init_properties_SpecialTokens_kt__pnimnz();
    var res = char(_Char___init__impl__6a9atx(40)).m5(it);
    var tmp;
    if (res instanceof Success) {
      tmp = new Success(Open_instance, res.state);
    } else {
      tmp = res;
    }
    return tmp;
  }
  function openingBrace$lambda(it) {
    _init_properties_SpecialTokens_kt__pnimnz();
    var res = char(_Char___init__impl__6a9atx(123)).m5(it);
    var tmp;
    if (res instanceof Success) {
      tmp = new Success(Open_instance_0, res.state);
    } else {
      tmp = res;
    }
    return tmp;
  }
  function closingBrace$lambda(it) {
    _init_properties_SpecialTokens_kt__pnimnz();
    var res = char(_Char___init__impl__6a9atx(125)).m5(it);
    var tmp;
    if (res instanceof Success) {
      tmp = new Success(Close_instance_0, res.state);
    } else {
      tmp = res;
    }
    return tmp;
  }
  function closingArgument$lambda(it) {
    _init_properties_SpecialTokens_kt__pnimnz();
    var res = char(_Char___init__impl__6a9atx(41)).m5(it);
    var tmp;
    if (res instanceof Success) {
      tmp = new Success(Close_instance, res.state);
    } else {
      tmp = res;
    }
    return tmp;
  }
  var properties_initialized_SpecialTokens_kt_ciswqr;
  function _init_properties_SpecialTokens_kt__pnimnz() {
    if (!properties_initialized_SpecialTokens_kt_ciswqr) {
      properties_initialized_SpecialTokens_kt_ciswqr = true;
      chain = char(_Char___init__impl__6a9atx(46));
      var tmp = comma$lambda;
      comma = new sam$space_hypen_parser_combinators_Parse$0_6(tmp);
      var tmp_0 = openingArgument$lambda;
      openingArgument = new sam$space_hypen_parser_combinators_Parse$0_7(tmp_0);
      var tmp_1 = openingBrace$lambda;
      openingBrace = new sam$space_hypen_parser_combinators_Parse$0_8(tmp_1);
      var tmp_2 = closingBrace$lambda;
      closingBrace = new sam$space_hypen_parser_combinators_Parse$0_9(tmp_2);
      var tmp_3 = closingArgument$lambda;
      closingArgument = new sam$space_hypen_parser_combinators_Parse$0_10(tmp_3);
    }
  }
  function State(remaining, index, errors) {
    index = index === VOID ? 0 : index;
    var tmp;
    if (errors === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = errors;
    }
    errors = tmp;
    this.s5_1 = remaining;
    this.t5_1 = index;
    this.u5_1 = errors;
  }
  protoOf(State).j8 = function (remaining, errors) {
    return new State(remaining, this.t5_1 + (this.s5_1.length - remaining.length | 0) | 0, errors);
  };
  protoOf(State).v5 = function (remaining, errors, $super) {
    remaining = remaining === VOID ? this.s5_1 : remaining;
    errors = errors === VOID ? this.u5_1 : errors;
    return $super === VOID ? this.j8(remaining, errors) : $super.j8.call(this, remaining, errors);
  };
  protoOf(State).k8 = function (remaining, index, errors) {
    return new State(remaining, index, errors);
  };
  protoOf(State).a6 = function (remaining, index, errors, $super) {
    remaining = remaining === VOID ? this.s5_1 : remaining;
    index = index === VOID ? this.t5_1 : index;
    errors = errors === VOID ? this.u5_1 : errors;
    return $super === VOID ? this.k8(remaining, index, errors) : $super.k8.call(this, remaining, index, errors);
  };
  protoOf(State).toString = function () {
    return 'State(remaining=' + this.s5_1 + ', index=' + this.t5_1 + ', errors=' + this.u5_1 + ')';
  };
  protoOf(State).hashCode = function () {
    var result = getStringHashCode(this.s5_1);
    result = imul(result, 31) + this.t5_1 | 0;
    result = imul(result, 31) + hashCode(this.u5_1) | 0;
    return result;
  };
  protoOf(State).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    var tmp0_other_with_cast = other instanceof State ? other : THROW_CCE();
    if (!(this.s5_1 === tmp0_other_with_cast.s5_1))
      return false;
    if (!(this.t5_1 === tmp0_other_with_cast.t5_1))
      return false;
    if (!equals(this.u5_1, tmp0_other_with_cast.u5_1))
      return false;
    return true;
  };
  function get_block() {
    _init_properties_Syntax_kt__1av0al();
    return block;
  }
  var block;
  function get_app() {
    _init_properties_Syntax_kt__1av0al();
    return app;
  }
  var app;
  function get_module() {
    _init_properties_Syntax_kt__1av0al();
    return module_0;
  }
  var module_0;
  function get_action() {
    _init_properties_Syntax_kt__1av0al();
    return action;
  }
  var action;
  function get_totalParser() {
    _init_properties_Syntax_kt__1av0al();
    return totalParser;
  }
  var totalParser;
  function map(_this__u8e3s4, result) {
    _init_properties_Syntax_kt__1av0al();
    var tmp = map$lambda(_this__u8e3s4, result);
    return new sam$space_hypen_parser_combinators_Parse$0_13(tmp);
  }
  function sam$space_hypen_parser_combinators_Parse$0_11(function_0) {
    this.l8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_11).m5 = function (input) {
    return this.l8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_12(function_0) {
    this.m8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_12).m5 = function (input) {
    return this.m8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_13(function_0) {
    this.n8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_13).m5 = function (input) {
    return this.n8_1(input);
  };
  function block$lambda(input) {
    _init_properties_Syntax_kt__1av0al();
    var possibleInsideBlock = maybe(oneOf([get_whiteSpace(), get_comments(), get_componentUseAst()]));
    var remaining = input;
    var runs = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var children = ArrayList_init_$Create$();
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = remaining.s5_1;
      if (charSequenceLength(this_0) > 0) {
        tmp = !(runs === 100);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      runs = runs + 1 | 0;
      var result = possibleInsideBlock.m5(remaining);
      if (result instanceof Success) {
        children.h(result.output);
        remaining = result.state;
      } else {
        result instanceof Failure;
      }
    }
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = children.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      // Inline function 'space.hypen.parser.combinators.block.<anonymous>.<anonymous>' call
      var tmp_0;
      if (element instanceof Whitespace) {
        tmp_0 = true;
      } else {
        tmp_0 = element instanceof Skip;
      }
      if (!tmp_0) {
        destination.h(element);
      }
    }
    return new Success(new Block(destination), remaining);
  }
  function block$lambda_0(it) {
    _init_properties_Syntax_kt__1av0al();
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = (it instanceof Sequence ? it : THROW_CCE()).x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      // Inline function 'space.hypen.parser.combinators.block.<anonymous>.<anonymous>' call
      if (!isInterface(element, Bracket)) {
        destination.h(element);
      }
    }
    return new Sequence(destination);
  }
  function module$lambda(it) {
    _init_properties_Syntax_kt__1av0al();
    var tmp = plus(plus(plus(plus(plus(plus(word_0('module'), maybe(get_whiteSpace())), get_identifier()), maybe(get_whiteSpace())), oneOf([maybe(get_argumentsDefinition())])), maybe(get_whiteSpace())), get_block());
    var parser = mapError(tmp, module$lambda$lambda);
    var res = parser.m5(it);
    var tmp_0;
    if (res instanceof Failure) {
      tmp_0 = res;
    } else {
      if (res instanceof Success) {
        var tmp_1 = res.output;
        var children = (tmp_1 instanceof Sequence ? tmp_1 : THROW_CCE()).x5_1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = children.k();
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.m();
          if (element instanceof Identifier) {
            destination.h(element);
          }
        }
        var tmp_2 = ensureNotNull(first(destination));
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = children.k();
        while (tmp0_iterator_0.l()) {
          var element_0 = tmp0_iterator_0.m();
          if (element_0 instanceof ArgumentsDefinition) {
            destination_0.h(element_0);
          }
        }
        var tmp0_elvis_lhs = firstOrNull(destination_0);
        var tmp_3;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.emptyArray' call
          var tmp$ret$4 = [];
          tmp_3 = new ArgumentsDefinition(tmp$ret$4);
        } else {
          tmp_3 = tmp0_elvis_lhs;
        }
        var tmp_4 = tmp_3;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination_1 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = children.k();
        while (tmp0_iterator_1.l()) {
          var element_1 = tmp0_iterator_1.m();
          if (element_1 instanceof Block) {
            destination_1.h(element_1);
          }
        }
        var tmp_5 = firstOrNull(destination_1);
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination_2 = ArrayList_init_$Create$();
        var tmp0_iterator_2 = children.k();
        while (tmp0_iterator_2.l()) {
          var element_2 = tmp0_iterator_2.m();
          if (element_2 instanceof Applicator) {
            destination_2.h(element_2);
          }
        }
        var tmp$ret$9 = copyToArray(destination_2);
        tmp_0 = new Success(new Module(tmp_2, tmp_4, tmp_5, tmp$ret$9), res.state);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp_0;
  }
  function module$lambda$lambda(it) {
    _init_properties_Syntax_kt__1av0al();
    return 'Failed to parse module - ' + it;
  }
  function map$lambda($this_map, $result) {
    return function (it) {
      var tmp;
      try {
        var res = $this_map.m5(it);
        var tmp_0;
        if (res instanceof Success) {
          tmp_0 = new Success($result(res.output), res.state);
        } else {
          if (res instanceof Failure) {
            tmp_0 = res;
          } else {
            noWhenBranchMatchedException();
          }
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var e = $p;
          tmp_1 = new Failure(it.s5_1, combineWith(new UnexpectedToken(it.s5_1, it), 'Error while mapping'));
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  var properties_initialized_Syntax_kt_imdkcl;
  function _init_properties_Syntax_kt__1av0al() {
    if (!properties_initialized_Syntax_kt_imdkcl) {
      properties_initialized_Syntax_kt_imdkcl = true;
      var tmp = get_between()(get_openingBrace(), get_closingBrace());
      var tmp_0 = block$lambda;
      var tmp_1 = tmp(new sam$space_hypen_parser_combinators_Parse$0_11(tmp_0));
      block = map(tmp_1, block$lambda_0);
      app = plus(plus(plus(plus(plus(plus(word_0('app'), maybe(get_whiteSpace())), get_identifier()), maybe(get_whiteSpace())), oneOf([maybe(arguments_0())])), maybe(get_whiteSpace())), maybe(get_block()));
      var tmp_2 = module$lambda;
      module_0 = new sam$space_hypen_parser_combinators_Parse$0_12(tmp_2);
      action = plus(plus(plus(plus(word_0('action'), maybe(get_whiteSpace())), get_identifier()), maybe(get_whiteSpace())), oneOf([maybe(arguments_0())]));
      totalParser = oneOf([get_app(), get_componentDefinition(), get_module(), get_action(), get_componentUseAst()]);
    }
  }
  function get_whiteSpace() {
    _init_properties_Text_kt__l2j80d();
    return whiteSpace;
  }
  var whiteSpace;
  function get_line() {
    _init_properties_Text_kt__l2j80d();
    return line;
  }
  var line;
  function get_identifier() {
    _init_properties_Text_kt__l2j80d();
    return identifier;
  }
  var identifier;
  function get_word() {
    _init_properties_Text_kt__l2j80d();
    return word;
  }
  var word;
  function get_wrappedWord() {
    _init_properties_Text_kt__l2j80d();
    // Inline function 'kotlin.getValue' call
    var this_0 = wrappedWord$delegate;
    wrappedWord$factory();
    return this_0.j5();
  }
  var wrappedWord$delegate;
  function get_number() {
    _init_properties_Text_kt__l2j80d();
    return number;
  }
  var number;
  function get_digit() {
    _init_properties_Text_kt__l2j80d();
    return digit;
  }
  var digit;
  function get_hexDigit() {
    _init_properties_Text_kt__l2j80d();
    return hexDigit;
  }
  var hexDigit;
  function get_take() {
    _init_properties_Text_kt__l2j80d();
    return take_0;
  }
  var take_0;
  function get_decimal() {
    _init_properties_Text_kt__l2j80d();
    return decimal;
  }
  var decimal;
  function maybe(parser) {
    _init_properties_Text_kt__l2j80d();
    var tmp = maybe$lambda(parser);
    return new sam$space_hypen_parser_combinators_Parse$0_20(tmp);
  }
  function char(char) {
    _init_properties_Text_kt__l2j80d();
    var tmp = char$lambda(char);
    return new sam$space_hypen_parser_combinators_Parse$0_21(tmp);
  }
  function plus(_this__u8e3s4, next) {
    _init_properties_Text_kt__l2j80d();
    return sequence([_this__u8e3s4, next]);
  }
  function word_0(match) {
    _init_properties_Text_kt__l2j80d();
    var tmp = word$lambda_0(match);
    return new sam$space_hypen_parser_combinators_Parse$0_22(tmp);
  }
  function hex() {
    _init_properties_Text_kt__l2j80d();
    var tmp = plus(char(_Char___init__impl__6a9atx(35)), oneOf([get_take()(8, get_loop()(get_hexDigit())), get_take()(6, get_loop()(get_hexDigit()))]));
    return map(tmp, hex$lambda);
  }
  function followedBy(_this__u8e3s4, parser) {
    _init_properties_Text_kt__l2j80d();
    var tmp = followedBy$lambda(_this__u8e3s4, parser);
    return new sam$space_hypen_parser_combinators_Parse$0_23(tmp);
  }
  function main() {
    _init_properties_Text_kt__l2j80d();
    var text = 'hello 123';
    var component = followedBy(get_word(), oneOf([get_whiteSpace(), get_number()]));
  }
  function sam$space_hypen_parser_combinators_Parse$0_14(function_0) {
    this.o8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_14).m5 = function (input) {
    return this.o8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_15(function_0) {
    this.p8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_15).m5 = function (input) {
    return this.p8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_16(function_0) {
    this.q8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_16).m5 = function (input) {
    return this.q8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_17(function_0) {
    this.r8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_17).m5 = function (input) {
    return this.r8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_18(function_0) {
    this.s8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_18).m5 = function (input) {
    return this.s8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_19(function_0) {
    this.t8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_19).m5 = function (input) {
    return this.t8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_20(function_0) {
    this.u8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_20).m5 = function (input) {
    return this.u8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_21(function_0) {
    this.v8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_21).m5 = function (input) {
    return this.v8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_22(function_0) {
    this.w8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_22).m5 = function (input) {
    return this.w8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_23(function_0) {
    this.x8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_23).m5 = function (input) {
    return this.x8_1(input);
  };
  function whiteSpace$lambda(state) {
    _init_properties_Text_kt__l2j80d();
    var input = state.s5_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var inductionVariable = 0;
      var last = input.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'space.hypen.parser.combinators.whiteSpace.<anonymous>.<anonymous>' call
          var it = charSequenceGet(input, index);
          if (!((it === _Char___init__impl__6a9atx(32) ? true : it === _Char___init__impl__6a9atx(9)) ? true : it === _Char___init__impl__6a9atx(10))) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = input.substring(0, index);
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = input;
    }
    var whiteSpace = tmp$ret$3;
    var tmp;
    if (isBlank(whiteSpace) ? !(whiteSpace.length === 0) : false) {
      tmp = new Success(Whitespace_instance, state.v5(drop(input, whiteSpace.length)));
    } else {
      tmp = new Failure(input, combineWith(new UnexpectedToken(input, state), '' + ('Expected whitespace, but found ' + input)));
    }
    return tmp;
  }
  function line$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var this_0 = it.s5_1;
      var inductionVariable = 0;
      var last = this_0.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'space.hypen.parser.combinators.line.<anonymous>.<anonymous>' call
          if (!!(charSequenceGet(this_0, index) === _Char___init__impl__6a9atx(10))) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = this_0.substring(0, index);
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = this_0;
    }
    var line = tmp$ret$3;
    return new Success(new Word(line), it.v5(drop(it.s5_1, line.length)));
  }
  function identifier$lambda(state) {
    _init_properties_Text_kt__l2j80d();
    var input = state.s5_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var inductionVariable = 0;
      var last = input.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'space.hypen.parser.combinators.identifier.<anonymous>.<anonymous>' call
          var it = charSequenceGet(input, index);
          if (!isLetterOrDigit(it)) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = input.substring(0, index);
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = input;
    }
    var identifier = tmp$ret$3;
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(identifier) === 0) {
      tmp_0 = true;
    } else {
      tmp_0 = !isLetter(first_0(identifier));
    }
    if (tmp_0) {
      tmp = new Failure(input, combineWith(new UnexpectedToken(input, state), 'Expected identifier, but found ' + identifier));
    } else {
      tmp = new Success(new Identifier(identifier), state.v5(drop(input, identifier.length)));
    }
    return tmp;
  }
  function word$lambda(state) {
    _init_properties_Text_kt__l2j80d();
    var input = state.s5_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var inductionVariable = 0;
      var last = input.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'space.hypen.parser.combinators.word.<anonymous>.<anonymous>' call
          var it = charSequenceGet(input, index);
          if (!(isLetter(it) ? true : isDigit(it))) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = input.substring(0, index);
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = input;
    }
    var word = tmp$ret$3;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(word) === 0) {
      tmp = new Failure(input, combineWith(new UnexpectedToken(input, state), 'Expected word, but found ' + input));
    } else {
      tmp = new Success(new Word(word), state.v5(drop(input, word.length)));
    }
    return tmp;
  }
  function wrappedWord$delegate$lambda() {
    _init_properties_Text_kt__l2j80d();
    var tmp = get_between()(char(_Char___init__impl__6a9atx(34)), char(_Char___init__impl__6a9atx(34)))(get_takeAll());
    return map(tmp, wrappedWord$delegate$lambda$lambda);
  }
  function wrappedWord$delegate$lambda$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    var sequence = it instanceof Sequence ? it : THROW_CCE();
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = sequence.x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      if (element instanceof Word) {
        destination.h(element);
      }
    }
    var tmp$ret$2 = destination == null ? null : firstOrNull(destination);
    return new QuotedString(ensureNotNull(ensureNotNull(tmp$ret$2).text));
  }
  function number$lambda(state) {
    _init_properties_Text_kt__l2j80d();
    var input = state.s5_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var inductionVariable = 0;
      var last = input.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'space.hypen.parser.combinators.number.<anonymous>.<anonymous>' call
          var it = charSequenceGet(input, index);
          if (!isDigit(it)) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = input.substring(0, index);
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = input;
    }
    var number = tmp$ret$3;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(number) === 0) {
      tmp = new Failure(input, combineWith(new UnexpectedToken(input, state), 'Expected number, but found ' + number));
    } else {
      tmp = new Success(new Number_0(number), state.v5(drop(input, number.length)));
    }
    return tmp;
  }
  function hexDigit$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    return 'Expected hex digit, but found ' + it;
  }
  function take$lambda(amount, validate) {
    _init_properties_Text_kt__l2j80d();
    var tmp = take$lambda$lambda(amount, validate);
    return new sam$space_hypen_parser_combinators_Parse$0_24(tmp);
  }
  function sam$space_hypen_parser_combinators_Parse$0_24(function_0) {
    this.y8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_24).m5 = function (input) {
    return this.y8_1(input);
  };
  function take$lambda$lambda($amount, $validate) {
    return function (state) {
      var input = state.s5_1;
      var tmp;
      if (input.length < $amount) {
        new Failure(input, new UnexpectedEndOfInput('To have ' + $amount + ' chars, found ' + input.length, state));
        tmp = Unit_instance;
      }
      var take_0 = take(input, $amount);
      var res = $validate.n5(take_0);
      var tmp_0;
      if (res instanceof Success) {
        tmp_0 = new Success(new Word(take_0), state.v5(drop(input, take_0.length)));
      } else {
        if (res instanceof Failure) {
          tmp_0 = new Failure(input, res.error);
        } else {
          noWhenBranchMatchedException();
        }
      }
      return tmp_0;
    };
  }
  function decimal$lambda(state) {
    _init_properties_Text_kt__l2j80d();
    var input = state.s5_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var inductionVariable = 0;
      var last = input.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'space.hypen.parser.combinators.decimal.<anonymous>.<anonymous>' call
          var it = charSequenceGet(input, index);
          if (!(isDigit(it) ? true : it === _Char___init__impl__6a9atx(46))) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = input.substring(0, index);
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = input;
    }
    var decimal = tmp$ret$3;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(decimal) === 0) {
      tmp = new Failure(input, combineWith(new UnexpectedToken(input, state), 'Expected decimal, but found empty'));
    } else {
      tmp = new Success(new Word(decimal), state.v5(drop(input, decimal.length)));
    }
    return tmp;
  }
  function maybe$lambda($parser) {
    return function (state) {
      var result = $parser.m5(state);
      var tmp;
      if (result instanceof Success) {
        tmp = result;
      } else {
        if (result instanceof Failure) {
          tmp = new Success(Skip_instance, state);
        } else {
          noWhenBranchMatchedException();
        }
      }
      return tmp;
    };
  }
  function char$lambda($char) {
    return function (state) {
      var input = state.s5_1;
      var tmp;
      try {
        var word = charSequenceGet(input, 0);
        var tmp_0;
        if (!(word === $char)) {
          tmp_0 = new Failure(input, combineWith(new UnexpectedToken(input, state), 'Expected ' + toString($char) + ', but found ' + toString(word)));
        } else {
          tmp_0 = new Success(new ParsedChar(word), state.v5(drop(input, 1)));
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var e = $p;
          tmp_1 = new Failure(input, new UnexpectedEndOfInput('ParsedChar', state));
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function word$lambda_0($match) {
    return function (state) {
      var input = state.s5_1;
      var word = take(input, $match.length);
      var tmp;
      if (!(word === $match)) {
        tmp = new Failure(input, new UnexpectedToken(input, state));
      } else {
        tmp = new Success(new Word(word), state.v5(drop(input, word.length)));
      }
      return tmp;
    };
  }
  function hex$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    var sequence = it instanceof Sequence ? it : THROW_CCE();
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = sequence.x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      if (element instanceof Word) {
        destination.h(element);
      }
    }
    var tmp$ret$2 = destination == null ? null : firstOrNull(destination);
    var word = ensureNotNull(tmp$ret$2);
    return new Word('#' + word.text);
  }
  function followedBy$lambda($this_followedBy, $parser) {
    return function (state) {
      var input = state.s5_1;
      var result = $this_followedBy.m5(state);
      var tmp;
      if (result instanceof Success) {
        var nextResult = $parser.m5(result.state);
        var tmp_0;
        if (nextResult instanceof Success) {
          tmp_0 = new Success(nextResult.output, nextResult.state);
        } else {
          if (nextResult instanceof Failure) {
            tmp_0 = new Failure(input, nextResult.error);
          } else {
            noWhenBranchMatchedException();
          }
        }
        tmp = tmp_0;
      } else {
        if (result instanceof Failure) {
          tmp = new Failure(input, result.error);
        } else {
          noWhenBranchMatchedException();
        }
      }
      return tmp;
    };
  }
  function wrappedWord$factory() {
    return getPropertyCallableRef('wrappedWord', 0, KProperty0, function () {
      return get_wrappedWord();
    }, null);
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = whiteSpace$lambda;
      whiteSpace = new sam$space_hypen_parser_combinators_Parse$0_14(tmp);
      var tmp_0 = line$lambda;
      line = new sam$space_hypen_parser_combinators_Parse$0_15(tmp_0);
      var tmp_1 = identifier$lambda;
      identifier = new sam$space_hypen_parser_combinators_Parse$0_16(tmp_1);
      var tmp_2 = word$lambda;
      word = new sam$space_hypen_parser_combinators_Parse$0_17(tmp_2);
      wrappedWord$delegate = lazy(wrappedWord$delegate$lambda);
      var tmp_3 = number$lambda;
      number = new sam$space_hypen_parser_combinators_Parse$0_18(tmp_3);
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.text.map' call
      var this_0 = '0123456789';
      // Inline function 'kotlin.text.mapTo' call
      var destination = ArrayList_init_$Create$_0(charSequenceLength(this_0));
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(this_0)) {
        var item = charSequenceGet(this_0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'space.hypen.parser.combinators.digit.<anonymous>' call
        var tmp$ret$0 = char(item);
        destination.h(tmp$ret$0);
      }
      var tmp$ret$3 = copyToArray(destination);
      digit = oneOf(tmp$ret$3.slice());
      var tmp_4 = [get_digit()];
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.text.map' call
      var this_1 = 'abcdefABCDEF';
      // Inline function 'kotlin.text.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(charSequenceLength(this_1));
      var inductionVariable_0 = 0;
      while (inductionVariable_0 < charSequenceLength(this_1)) {
        var item_0 = charSequenceGet(this_1, inductionVariable_0);
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'space.hypen.parser.combinators.hexDigit.<anonymous>' call
        var tmp$ret$0_0 = char(item_0);
        destination_0.h(tmp$ret$0_0);
      }
      var tmp$ret$3_0 = copyToArray(destination_0);
      var tmp_5 = oneOf(arrayConcat([tmp_4, tmp$ret$3_0]));
      hexDigit = mapError(tmp_5, hexDigit$lambda);
      take_0 = take$lambda;
      var tmp_6 = decimal$lambda;
      decimal = new sam$space_hypen_parser_combinators_Parse$0_19(tmp_6);
    }
  }
  function get_appChain() {
    _init_properties_Applicators_kt__9mn2bq();
    return appChain;
  }
  var appChain;
  function applicator() {
    _init_properties_Applicators_kt__9mn2bq();
    return plus(plus(plus(plus(plus(get_chain(), get_identifier()), maybe(get_whiteSpace())), maybe(arguments_0())), maybe(get_block())), maybe(get_whiteSpace()));
  }
  function appChain$lambda(it) {
    _init_properties_Applicators_kt__9mn2bq();
    var node = it instanceof Sequence ? it : THROW_CCE();
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = node.x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      if (element instanceof Identifier) {
        destination.h(element);
      }
    }
    var tmp$ret$2 = destination == null ? null : firstOrNull(destination);
    var tmp = ensureNotNull(tmp$ret$2);
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = node.x5_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.k();
    while (tmp0_iterator_0.l()) {
      var element_0 = tmp0_iterator_0.m();
      if (element_0 instanceof Arguments) {
        destination_0.h(element_0);
      }
    }
    var tmp$ret$5 = destination_0 == null ? null : firstOrNull(destination_0);
    var tmp_0 = ensureNotNull(tmp$ret$5);
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = node.x5_1;
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_2.k();
    while (tmp0_iterator_1.l()) {
      var element_1 = tmp0_iterator_1.m();
      if (element_1 instanceof Block) {
        destination_1.h(element_1);
      }
    }
    var tmp$ret$8 = destination_1 == null ? null : firstOrNull(destination_1);
    return new Applicator(tmp, tmp_0, tmp$ret$8);
  }
  var properties_initialized_Applicators_kt_lv1azc;
  function _init_properties_Applicators_kt__9mn2bq() {
    if (!properties_initialized_Applicators_kt_lv1azc) {
      properties_initialized_Applicators_kt_lv1azc = true;
      var tmp = get_loop();
      var tmp_0 = applicator();
      appChain = tmp(map(tmp_0, appChain$lambda));
    }
  }
  function get_argumentsDefinition() {
    _init_properties_Arguments_kt__y54db8();
    return argumentsDefinition;
  }
  var argumentsDefinition;
  function get_argumentDefinition() {
    _init_properties_Arguments_kt__y54db8();
    return argumentDefinition;
  }
  var argumentDefinition;
  function get_argumentTypes() {
    _init_properties_Arguments_kt__y54db8();
    return argumentTypes;
  }
  var argumentTypes;
  function namedArgument() {
    _init_properties_Arguments_kt__y54db8();
    var tmp = sequence([get_identifier(), maybe(get_whiteSpace()), char(_Char___init__impl__6a9atx(58)), maybe(get_whiteSpace()), validObjects()]);
    var tmp_0 = map(tmp, namedArgument$lambda);
    return mapError(tmp_0, namedArgument$lambda_0);
  }
  function arguments_0() {
    _init_properties_Arguments_kt__y54db8();
    var tmp = arguments$lambda;
    return new sam$space_hypen_parser_combinators_Parse$0_27(tmp);
  }
  function sam$space_hypen_parser_combinators_Parse$0_25(function_0) {
    this.z8_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_25).m5 = function (input) {
    return this.z8_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_26(function_0) {
    this.a9_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_26).m5 = function (input) {
    return this.a9_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_27(function_0) {
    this.b9_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_27).m5 = function (input) {
    return this.b9_1(input);
  };
  function argumentsDefinition$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    var tmp = get_between()(get_openingArgument(), get_closingArgument())(maybe(get_loop()(oneOf([get_comma(), get_whiteSpace(), get_argumentDefinition()]))));
    var parser = mapError(tmp, argumentsDefinition$lambda$lambda);
    var res = parser.m5(it);
    var tmp_0;
    if (res instanceof Success) {
      var tmp_1 = res.output;
      var node = tmp_1 instanceof Sequence ? tmp_1 : THROW_CCE();
      var children = node.x5_1;
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = children.k();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.m();
        if (element instanceof ArgumentDefinition) {
          destination.h(element);
        }
      }
      var tmp$ret$2 = copyToArray(destination);
      tmp_0 = new Success(new ArgumentsDefinition(tmp$ret$2), res.state);
    } else {
      if (res instanceof Failure) {
        tmp_0 = res;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp_0;
  }
  function argumentsDefinition$lambda$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    return 'Failed to parse arguments - ' + it;
  }
  function argumentDefinition$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    var parser = plus(plus(plus(plus(get_identifier(), maybe(get_whiteSpace())), maybe(char(_Char___init__impl__6a9atx(58)))), maybe(get_whiteSpace())), maybe(get_word()));
    var res = parser.m5(it);
    var tmp;
    if (res instanceof Success) {
      var tmp_0 = res.output;
      var node = tmp_0 instanceof Sequence ? tmp_0 : THROW_CCE();
      // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_0 = node.x5_1;
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.m();
        if (element instanceof Identifier) {
          destination.h(element);
        }
      }
      var tmp$ret$2 = destination == null ? null : firstOrNull(destination);
      var identifier = ensureNotNull(tmp$ret$2);
      // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = node.x5_1;
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_1.k();
      while (tmp0_iterator_0.l()) {
        var element_0 = tmp0_iterator_0.m();
        if (element_0 instanceof Word) {
          destination_0.h(element_0);
        }
      }
      var type = destination_0 == null ? null : firstOrNull(destination_0);
      var tmp1_elvis_lhs = type == null ? null : type.text;
      tmp = new Success(new ArgumentDefinition(identifier, new TypeIdentifier(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs)), res.state);
    } else {
      if (res instanceof Failure) {
        tmp = res;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function argumentTypes$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    var tmp;
    if (it instanceof Argument) {
      tmp = it;
    } else {
      if (it instanceof Object_0) {
        tmp = new Argument(null, it.children.n() === 1 ? first(it.children) : it);
      } else {
        throw IllegalStateException_init_$Create$('Unexpected node type ' + it);
      }
    }
    return tmp;
  }
  function namedArgument$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    var node = it instanceof Sequence ? it : THROW_CCE();
    var tmp = node.x5_1.s(0);
    var identifier = tmp instanceof Identifier ? tmp : THROW_CCE();
    var tmp_0 = last(node.x5_1);
    var data = tmp_0 instanceof Object_0 ? tmp_0 : THROW_CCE();
    var x = new Argument(identifier, data);
    return x;
  }
  function namedArgument$lambda_0(it) {
    _init_properties_Arguments_kt__y54db8();
    return 'Could not parse named argument';
  }
  function arguments$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    var tmp = get_between()(get_openingArgument(), get_closingArgument())(maybe(get_loop()(oneOf([get_comma(), get_whiteSpace(), get_argumentTypes()]))));
    var parser = mapError(tmp, arguments$lambda$lambda);
    var res = parser.m5(it);
    var tmp_0;
    if (res instanceof Success) {
      var tmp_1 = res.output;
      var node = tmp_1 instanceof Sequence ? tmp_1 : THROW_CCE();
      var children = node.x5_1;
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = children.k();
      while (tmp0_iterator.l()) {
        var element = tmp0_iterator.m();
        if (element instanceof Argument) {
          destination.h(element);
        }
      }
      var tmp$ret$2 = copyToArray(destination);
      tmp_0 = new Success(new Arguments(tmp$ret$2), res.state);
    } else {
      if (res instanceof Failure) {
        tmp_0 = res;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp_0;
  }
  function arguments$lambda$lambda(it) {
    _init_properties_Arguments_kt__y54db8();
    return 'Failed to parse arguments - ' + it;
  }
  var properties_initialized_Arguments_kt_sa27ye;
  function _init_properties_Arguments_kt__y54db8() {
    if (!properties_initialized_Arguments_kt_sa27ye) {
      properties_initialized_Arguments_kt_sa27ye = true;
      var tmp = argumentsDefinition$lambda;
      argumentsDefinition = new sam$space_hypen_parser_combinators_Parse$0_25(tmp);
      var tmp_0 = argumentDefinition$lambda;
      argumentDefinition = new sam$space_hypen_parser_combinators_Parse$0_26(tmp_0);
      var tmp_1 = oneOf([namedArgument(), validObjects()]);
      argumentTypes = map(tmp_1, argumentTypes$lambda);
    }
  }
  function get_single_comment() {
    _init_properties_Comments_kt__7o34lw();
    return single_comment;
  }
  var single_comment;
  function get_comment_block_start() {
    _init_properties_Comments_kt__7o34lw();
    return comment_block_start;
  }
  var comment_block_start;
  function get_comment_block_end() {
    _init_properties_Comments_kt__7o34lw();
    return comment_block_end;
  }
  var comment_block_end;
  function get_comments() {
    _init_properties_Comments_kt__7o34lw();
    return comments;
  }
  var comments;
  function comment_line() {
    _init_properties_Comments_kt__7o34lw();
    var tmp = get_single_comment();
    var tmp_0 = get_line();
    return plus(tmp, mapError(tmp_0, comment_line$lambda));
  }
  function comment_block() {
    _init_properties_Comments_kt__7o34lw();
    var tmp = get_comment_block_start();
    var tmp_0 = comment_block$lambda;
    var tmp_1 = plus(plus(tmp, new sam$space_hypen_parser_combinators_Parse$0_28(tmp_0)), get_comment_block_end());
    return mapError(tmp_1, comment_block$lambda_0);
  }
  function sam$space_hypen_parser_combinators_Parse$0_28(function_0) {
    this.c9_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_28).m5 = function (input) {
    return this.c9_1(input);
  };
  function comment_line$lambda(it) {
    _init_properties_Comments_kt__7o34lw();
    return 'Parsing comment failed';
  }
  function comment_block$lambda(input) {
    _init_properties_Comments_kt__7o34lw();
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOf(input.s5_1, '*/');
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'space.hypen.parser.combinators.ast.comment_block.<anonymous>.<anonymous>' call
    if (this_0 >= 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var text = tmp;
    var tmp_0;
    if (text == null) {
      tmp_0 = new Failure(input.s5_1, combineWith(new CommentNotFinished(input.s5_1, input), 'Comment block not finished'));
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = input.s5_1.substring(0, text);
      tmp_0 = new Success(new Single(tmp$ret$3), input.v5(drop(input.s5_1, text)));
    }
    return tmp_0;
  }
  function comment_block$lambda_0(it) {
    _init_properties_Comments_kt__7o34lw();
    return 'Found comment block, but parsing failed. Reason: ' + it;
  }
  var properties_initialized_Comments_kt_uk7mwm;
  function _init_properties_Comments_kt__7o34lw() {
    if (!properties_initialized_Comments_kt_uk7mwm) {
      properties_initialized_Comments_kt_uk7mwm = true;
      single_comment = word_0('//');
      comment_block_start = word_0('/*');
      comment_block_end = word_0('*/');
      comments = oneOf([comment_line(), comment_block()]);
    }
  }
  function get_componentDefinition() {
    _init_properties_Components_kt__rw83jq();
    return componentDefinition;
  }
  var componentDefinition;
  function get_componentUseAst() {
    _init_properties_Components_kt__rw83jq();
    return componentUseAst;
  }
  var componentUseAst;
  function sam$space_hypen_parser_combinators_Parse$0_29(function_0) {
    this.d9_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_29).m5 = function (input) {
    return this.d9_1(input);
  };
  function componentDefinition$lambda(it) {
    _init_properties_Components_kt__rw83jq();
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = (it instanceof Sequence ? it : THROW_CCE()).x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      if (element instanceof Identifier) {
        destination.h(element);
      }
    }
    var tmp$ret$2 = destination == null ? null : firstOrNull(destination);
    var tmp = ensureNotNull(tmp$ret$2);
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = it.x5_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.k();
    while (tmp0_iterator_0.l()) {
      var element_0 = tmp0_iterator_0.m();
      if (element_0 instanceof ArgumentsDefinition) {
        destination_0.h(element_0);
      }
    }
    var tmp0_elvis_lhs = destination_0 == null ? null : firstOrNull(destination_0);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$6 = [];
      tmp_0 = new ArgumentsDefinition(tmp$ret$6);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    // Inline function 'space.hypen.parser.combinators.Sequence.findInstance' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = it.x5_1;
    var destination_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_2.k();
    while (tmp0_iterator_1.l()) {
      var element_1 = tmp0_iterator_1.m();
      if (element_1 instanceof Block) {
        destination_1.h(element_1);
      }
    }
    var tmp$ret$9 = destination_1 == null ? null : firstOrNull(destination_1);
    return new ComponentDefinition(tmp, tmp_1, tmp$ret$9);
  }
  function componentUseAst$lambda(it) {
    _init_properties_Components_kt__rw83jq();
    var componentUsePoint = plus(plus(plus(plus(plus(get_identifier(), maybe(get_whiteSpace())), maybe(arguments_0())), maybe(get_whiteSpace())), maybe(get_block())), maybe(get_appChain()));
    var res = componentUsePoint.m5(it);
    var tmp;
    if (res instanceof Success) {
      var tmp_0 = res.output;
      var node = tmp_0 instanceof Sequence ? tmp_0 : THROW_CCE();
      var nodes = node.x5_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator = nodes.k();
        while (tmp0_iterator.l()) {
          var element = tmp0_iterator.m();
          // Inline function 'space.hypen.parser.combinators.ast.componentUseAst.<anonymous>.<anonymous>' call
          if (element instanceof Identifier) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var tmp_1 = tmp$ret$1;
      var identifier = tmp_1 instanceof Identifier ? tmp_1 : THROW_CCE();
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = nodes.k();
        while (tmp0_iterator_0.l()) {
          var element_0 = tmp0_iterator_0.m();
          // Inline function 'space.hypen.parser.combinators.ast.componentUseAst.<anonymous>.<anonymous>' call
          if (element_0 instanceof Arguments) {
            tmp$ret$3 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$3 = null;
      }
      var tmp_2 = tmp$ret$3;
      var arguments_1 = (tmp_2 == null ? true : tmp_2 instanceof Arguments) ? tmp_2 : THROW_CCE();
      var tmp$ret$5;
      $l$block_1: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_1 = nodes.k();
        while (tmp0_iterator_1.l()) {
          var element_1 = tmp0_iterator_1.m();
          // Inline function 'space.hypen.parser.combinators.ast.componentUseAst.<anonymous>.<anonymous>' call
          if (element_1 instanceof Block) {
            tmp$ret$5 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$5 = null;
      }
      var block = tmp$ret$5;
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator_2 = nodes.k();
      while (tmp0_iterator_2.l()) {
        var element_2 = tmp0_iterator_2.m();
        if (element_2 instanceof Applicator) {
          destination.h(element_2);
        }
      }
      var applicators = destination;
      var tmp1_elvis_lhs = arguments_1 == null ? null : arguments_1.arguments;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_3 = [];
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_4 = tmp_3;
      var tmp_5 = (block == null ? true : block instanceof Block) ? block : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$9 = copyToArray(applicators);
      tmp = new Success(new ComponentUsage(identifier, tmp_4, tmp_5, tmp$ret$9), res.state);
    } else {
      if (res instanceof Failure) {
        tmp = new Failure(it.s5_1, combineWith(new UnexpectedToken(it.s5_1, it), 'Error parsing component usage'));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  var properties_initialized_Components_kt_4bvhns;
  function _init_properties_Components_kt__rw83jq() {
    if (!properties_initialized_Components_kt_4bvhns) {
      properties_initialized_Components_kt_4bvhns = true;
      var tmp = plus(plus(plus(plus(plus(plus(word_0('component'), maybe(get_whiteSpace())), get_identifier()), maybe(get_whiteSpace())), maybe(get_argumentsDefinition())), maybe(get_whiteSpace())), maybe(get_block()));
      componentDefinition = map(tmp, componentDefinition$lambda);
      var tmp_0 = componentUseAst$lambda;
      componentUseAst = new sam$space_hypen_parser_combinators_Parse$0_29(tmp_0);
    }
  }
  function get_anObject() {
    _init_properties_Objects_kt__b1hgpu();
    return anObject;
  }
  var anObject;
  function validObjects() {
    _init_properties_Objects_kt__b1hgpu();
    var tmp = validObjects$lambda;
    var tmp_0 = new sam$space_hypen_parser_combinators_Parse$0_30(tmp);
    var tmp_1 = get_word();
    var tmp_2 = validObjects$lambda_0;
    var tmp_3 = new sam$space_hypen_parser_combinators_Parse$0_30(tmp_2);
    var tmp_4 = validObjects$lambda_1;
    var tmp_5 = oneOf([tmp_0, tmp_1, tmp_3, new sam$space_hypen_parser_combinators_Parse$0_30(tmp_4), get_number(), get_decimal()]);
    var tmp_6 = map(tmp_5, validObjects$lambda_2);
    return mapError(tmp_6, validObjects$lambda_3);
  }
  function keyValue(parser) {
    _init_properties_Objects_kt__b1hgpu();
    var tmp = keyValue$lambda(parser);
    return new sam$space_hypen_parser_combinators_Parse$0_31(tmp);
  }
  function sam$space_hypen_parser_combinators_Parse$0_30(function_0) {
    this.e9_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_30).m5 = function (input) {
    return this.e9_1(input);
  };
  function sam$space_hypen_parser_combinators_Parse$0_31(function_0) {
    this.f9_1 = function_0;
  }
  protoOf(sam$space_hypen_parser_combinators_Parse$0_31).m5 = function (input) {
    return this.f9_1(input);
  };
  function anObject$lambda(it) {
    _init_properties_Objects_kt__b1hgpu();
    return 'Invalid object values';
  }
  function anObject$lambda_0(it) {
    _init_properties_Objects_kt__b1hgpu();
    return 'Invalid object found while looping';
  }
  function anObject$lambda_1(it) {
    _init_properties_Objects_kt__b1hgpu();
    var node = it instanceof Sequence ? it : THROW_CCE();
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = node.x5_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.l()) {
      var element = tmp0_iterator.m();
      if (element instanceof Property) {
        destination.h(element);
      }
    }
    var children = destination;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (children.n() === 1) {
      var tmp_2 = first(children).value;
      tmp_1 = tmp_2 instanceof Object_0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = first(children).name == null;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_3 = first(children).value;
      tmp = tmp_3 instanceof Object_0 ? tmp_3 : THROW_CCE();
    } else {
      tmp = new Object_0(children);
    }
    return tmp;
  }
  function validObjects$lambda(it) {
    _init_properties_Objects_kt__b1hgpu();
    var res = get_anObject().m5(it);
    return res;
  }
  function validObjects$lambda_0(it) {
    _init_properties_Objects_kt__b1hgpu();
    return hex().m5(it);
  }
  function validObjects$lambda_1(it) {
    _init_properties_Objects_kt__b1hgpu();
    var res = get_wrappedWord().m5(it);
    return res;
  }
  function validObjects$lambda_2(it) {
    _init_properties_Objects_kt__b1hgpu();
    var tmp;
    if (it instanceof Object_0) {
      tmp = it;
    } else {
      tmp = new Object_0(listOf(new Property(null, it)));
    }
    return tmp;
  }
  function validObjects$lambda_3(it) {
    _init_properties_Objects_kt__b1hgpu();
    return 'Nothing matches the valid objects - ' + it;
  }
  function keyValue$lambda$lambda(it) {
    _init_properties_Objects_kt__b1hgpu();
    return 'Parsing object failed with - ';
  }
  function keyValue$lambda$lambda_0(it) {
    _init_properties_Objects_kt__b1hgpu();
    return 'No proper object found for key-value with state ' + it.e7_1;
  }
  function keyValue$lambda$lambda_1(it) {
    _init_properties_Objects_kt__b1hgpu();
    var node = it instanceof Sequence ? it : THROW_CCE();
    var tmp = node.x5_1.s(0);
    var tmp_0 = tmp instanceof Identifier ? tmp : THROW_CCE();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'space.hypen.parser.combinators.ast.keyValue.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$1 = last(node.x5_1);
    return new Property(tmp_0, tmp$ret$1);
  }
  function keyValue$lambda($parser) {
    return function (it) {
      var tmp = get_identifier();
      var tmp_0 = maybe(get_whiteSpace());
      var tmp_1 = char(_Char___init__impl__6a9atx(58));
      var tmp_2 = maybe(get_whiteSpace());
      var tmp_3 = sequence([tmp, tmp_0, tmp_1, tmp_2, mapError($parser, keyValue$lambda$lambda)]);
      var tmp_4 = mapError(tmp_3, keyValue$lambda$lambda_0);
      return map(tmp_4, keyValue$lambda$lambda_1).m5(it);
    };
  }
  var properties_initialized_Objects_kt_1supz0;
  function _init_properties_Objects_kt__b1hgpu() {
    if (!properties_initialized_Objects_kt_1supz0) {
      properties_initialized_Objects_kt_1supz0 = true;
      var tmp = get_between()(get_openingBrace(), get_closingBrace());
      var tmp_0 = get_loop();
      var tmp_1 = maybe(get_whiteSpace());
      var tmp_2 = keyValue(validObjects());
      var tmp_3 = maybe(get_comma());
      var tmp_4 = tmp_0(oneOf([tmp_1, tmp_2, mapError(tmp_3, anObject$lambda)]));
      var tmp_5 = tmp(mapError(tmp_4, anObject$lambda_0));
      anObject = map(tmp_5, anObject$lambda_1);
    }
  }
  function HypenParser() {
  }
  protoOf(HypenParser).parse = function (input) {
    return get_totalParser().n5(input);
  };
  protoOf(HypenParser).format = function (input) {
    var result = this.parse(input);
    var tmp;
    if (result instanceof Success) {
      tmp = toString_0(result.output);
    } else {
      if (result instanceof Failure) {
        tmp = toString_0(result);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(sam$space_hypen_parser_combinators_Parse$0).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_0).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_1).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_2).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_3).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_4).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_5).n5 = invoke;
  protoOf(Identifier).b6 = stringify;
  protoOf(TypeIdentifier).b6 = stringify;
  protoOf(QuotedString).b6 = stringify;
  protoOf(Word).b6 = stringify;
  protoOf(Number_0).b6 = stringify;
  protoOf(AST).b6 = stringify;
  protoOf(Whitespace).b6 = stringify;
  protoOf(Skip).b6 = stringify;
  protoOf(Comma).b6 = stringify;
  protoOf(Open).b6 = stringify;
  protoOf(Close).b6 = stringify;
  protoOf(Open_0).b6 = stringify;
  protoOf(Close_0).b6 = stringify;
  protoOf(Comment).b6 = stringify;
  protoOf(ParsedChar).b6 = stringify;
  protoOf(Sequence).b6 = stringify;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_6).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_7).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_8).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_9).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_10).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_11).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_12).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_13).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_14).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_15).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_16).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_17).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_18).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_19).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_20).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_21).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_22).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_23).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_24).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_25).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_26).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_27).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_28).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_29).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_30).n5 = invoke;
  protoOf(sam$space_hypen_parser_combinators_Parse$0_31).n5 = invoke;
  //endregion
  //region block: init
  Whitespace_instance = new Whitespace();
  Skip_instance = new Skip();
  Comma_instance = new Comma();
  Open_instance = new Open();
  Close_instance = new Close();
  Open_instance_0 = new Open_0();
  Close_instance_0 = new Close_0();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $space = _.space || (_.space = {});
    var $space$hypen = $space.hypen || ($space.hypen = {});
    var $space$hypen$parser = $space$hypen.parser || ($space$hypen.parser = {});
    var $space$hypen$parser$combinators = $space$hypen$parser.combinators || ($space$hypen$parser.combinators = {});
    $space$hypen$parser$combinators.Identifier = Identifier;
    $space$hypen$parser$combinators.TypeIdentifier = TypeIdentifier;
    $space$hypen$parser$combinators.QuotedString = QuotedString;
    $space$hypen$parser$combinators.Word = Word;
    $space$hypen$parser$combinators.Number = Number_0;
    $space$hypen$parser$combinators.AST = AST;
    $space$hypen$parser$combinators.ArgumentDefinition = ArgumentDefinition;
    $space$hypen$parser$combinators.ArgumentsDefinition = ArgumentsDefinition;
    $space$hypen$parser$combinators.Object = Object_0;
    $space$hypen$parser$combinators.ComponentDefinition = ComponentDefinition;
    $space$hypen$parser$combinators.Applicator = Applicator;
    $space$hypen$parser$combinators.Arguments = Arguments;
    $space$hypen$parser$combinators.Argument = Argument;
    $space$hypen$parser$combinators.Property = Property;
    $space$hypen$parser$combinators.Module = Module;
    $space$hypen$parser$combinators.ComponentUsage = ComponentUsage;
    $space$hypen$parser$combinators.Block = Block;
    var $space = _.space || (_.space = {});
    var $space$hypen = $space.hypen || ($space.hypen = {});
    var $space$hypen$parser = $space$hypen.parser || ($space$hypen.parser = {});
    var $space$hypen$parser$combinators = $space$hypen$parser.combinators || ($space$hypen$parser.combinators = {});
    $space$hypen$parser$combinators.Success = Success;
    $space$hypen$parser$combinators.Failure = Failure;
    var $space = _.space || (_.space = {});
    var $space$hypen = $space.hypen || ($space.hypen = {});
    var $space$hypen$parser = $space$hypen.parser || ($space$hypen.parser = {});
    var $space$hypen$parser$combinators = $space$hypen$parser.combinators || ($space$hypen$parser.combinators = {});
    $space$hypen$parser$combinators.HypenParser = HypenParser;
  }
  $jsExportAll$(_);
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=hypen-kotlin.js.map
