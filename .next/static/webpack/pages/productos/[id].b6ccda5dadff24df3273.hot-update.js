webpackHotUpdate_N_E("pages/productos/[id]",{

/***/ "./pages/productos/[id].js":
/*!*********************************!*\
  !*** ./pages/productos/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_layout_404__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/404 */ "./components/layout/404.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Spinner */ "./components/layout/Spinner.js");
/* harmony import */ var _components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ui/Formulario */ "./components/ui/Formulario.js");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/ui/Boton */ "./components/ui/Boton.js");






var _this = undefined,
    _jsxFileName = "C:\\Users\\Sistemas\\Desktop\\produnthuntnext\\pages\\productos\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    padding: .5rem 2rem;\n    background-color: #DA552F;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    display: inline-block;\n    text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    margin: 2rem 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    text-align: center;\n    margin-top: 5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    @media (min-width: 768px) {\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        column-gap: 2rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var ContenedorProducto = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
_c = ContenedorProducto;
var Nombre = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].h1(_templateObject2());
_c2 = Nombre;
var Titulo2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].h2(_templateObject3());
_c3 = Titulo2;
var CreadorProducto = _emotion_styled__WEBPACK_IMPORTED_MODULE_10__["default"].p(_templateObject4());
_c4 = CreadorProducto;

var Producto = function Producto() {
  _s();

  //Routing para obtener el id actual 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var id = router.query.id; //Crando state para cambio de producto y no ciclar la aplicacion

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      consultarDB = _useState[0],
      guardarConsultarDB = _useState[1]; //Creando estate para guardar el resultado de la busqueda


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      producto = _useState2[0],
      guardarProducto = _useState2[1]; //state para el error en la consulta 


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      error = _useState3[0],
      guardarError = _useState3[1]; //State para activar el spinner 


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      activar = _useState4[0],
      guardarActivar = _useState4[1]; //Creando state para comentarios


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    mensaje: ""
  }),
      nuevosComentarios = _useState5[0],
      guardarComentarios = _useState5[1]; // Extrayendo firebase de firebasecontext para llamar a la funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_9__["FirebaseContext"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (id && consultarDB) {
      var obtenerProducto = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
          var productoQuery, producto;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return firebase.db.collection("productos").doc(id);

                case 2:
                  productoQuery = _context.sent;
                  _context.next = 5;
                  return productoQuery.get();

                case 5:
                  producto = _context.sent;

                  if (producto.exists) {
                    guardarProducto(producto.data());
                    guardarConsultarDB(false);
                    guardarActivar(true);
                    setTimeout(function () {
                      guardarActivar(false);
                    }, 1000);
                  } else {
                    guardarError(true);
                    guardarConsultarDB(false);
                  }

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function obtenerProducto() {
          return _ref.apply(this, arguments);
        };
      }();

      obtenerProducto();
    }
  }, [id]); //guardarActivar(true);
  //if(Object.keys(producto).length === 0)return <Spinner/>;

  var comentarios = producto.comentarios,
      creado = producto.creado,
      descripcion = producto.descripcion,
      empresa = producto.empresa,
      nombre = producto.nombre,
      url = producto.url,
      urlimagen = producto.urlimagen,
      votos = producto.votos,
      creador = producto.creador,
      haVotado = producto.haVotado;

  var votarProducto = function votarProducto() {
    if (!usuario) {
      return router.push("/");
    }

    var NuevoVotos = votos + 1; //Verficar si el usuario ha votado 

    if (haVotado.includes(usuario.uid)) return; //Guardar el ID del usuario que ha votado

    var hanvotado = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(haVotado), [usuario.uid]); //Agregando a la base de datos

    firebase.db.collection("productos").doc(id).update({
      votos: NuevoVotos,
      haVotado: hanvotado
    }); //Agregando al state

    guardarProducto(_objectSpread(_objectSpread({}, producto), {}, {
      votos: NuevoVotos
    }));
    guardarConsultarDB(true);
  }; //Creando funcion para llenar el state de comentarios


  var handleComentarios = function handleComentarios(e) {
    guardarComentarios(_objectSpread(_objectSpread({}, nuevosComentarios), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  }; //Funcion vewrifica si es el creador el que escribe el comeentario


  var origenCreador = function origenCreador(id) {
    if (creador.id === id) {
      return true;
    }
  }; //Creando funcion boton comentar en el formulario para agregar formulari


  var onsubmitComentario = function onsubmitComentario(e) {
    e.preventDefault();

    if (!usuario) {
      return router.push("/");
    } //Informacion extra al comentario 


    nuevosComentarios.usuarioId = usuario.uid;
    nuevosComentarios.usuarioNombre = usuario.displayName; //Tomar copia de comentario y agregarlos al arreglo

    var nuevosComentario = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(comentarios), [nuevosComentarios]); //Actualizar la BD

    firebase.db.collection("productos").doc(id).update({
      comentarios: nuevosComentario
    }); // Actualizar el state

    guardarProducto(_objectSpread(_objectSpread({}, producto), {}, {
      comentarios: nuevosComentario
    }));
    guardarComentarios({
      mensaje: ""
    });
    guardarConsultarDB(true);
  }; //Verificar si el cliente es el mismo que el usuario registrado


  var borrarCreador = function borrarCreador() {
    if (!usuario) {
      return false;
    }

    if (creador.id === usuariouid) {
      return true;
    }
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, error ? __jsx(_components_layout_404__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 30
    }
  }) : __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, activar || !producto ? __jsx(_components_layout_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Nombre, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 37
    }
  }, nombre), __jsx(ContenedorProducto, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 42
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 49
    }
  }, "Publicado hace: ", Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(creado), {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_14__["es"]
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 49
    }
  }, "Por ", creador.nombre, " de ", empresa), __jsx("img", {
    src: urlimagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 49
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 49
    }
  }, descripcion), usuario && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 57
    }
  }, "Agrega tu comentario"), __jsx("form", {
    onSubmit: onsubmitComentario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 57
    }
  }, __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["Campo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 61
    }
  }, __jsx("input", {
    type: "text",
    name: "mensaje",
    onChange: handleComentarios,
    value: nuevosComentarios.mensaje,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 65
    }
  })), __jsx(_components_ui_Formulario__WEBPACK_IMPORTED_MODULE_12__["InputSubmit"], {
    type: "submit",
    value: "Agregar Comentario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 61
    }
  }))), __jsx(Titulo2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 49
    }
  }, "Comentarios"), comentarios.length === 0 ? "Aun no hay comentarios" : __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 53
    }
  }, comentarios.map(function (comentario, i) {
    return __jsx("li", {
      key: "".concat(comentario.usuarioId, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 61
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 65
      }
    }, comentario.mensaje), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 65
      }
    }, "Escrito por:", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 69
      }
    }, "  ".concat(comentario.usuarioNombre))), origenCreador(comentario.usuarioId) && __jsx(CreadorProducto, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 69
      }
    }, "Es creador"));
  }))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 45
    }
  }, __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    target: "_blank",
    bgColor: "true",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 49
    }
  }, "Visitar Url"), __jsx("div", {
    className: "campo-votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "votos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 53
    }
  }, votos, " Votos"), usuario && __jsx(_components_ui_Boton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: votarProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 57
    }
  }, "Votar"))))))));
};

_s(Producto, "Vm2hNPEyjZhea7XP1652tv5N6aE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c5 = Producto;
/* harmony default export */ __webpack_exports__["default"] = (Producto);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ContenedorProducto");
$RefreshReg$(_c2, "Nombre");
$RefreshReg$(_c3, "Titulo2");
$RefreshReg$(_c4, "CreadorProducto");
$RefreshReg$(_c5, "Producto");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yUHJvZHVjdG8iLCJzdHlsZWQiLCJkaXYiLCJOb21icmUiLCJoMSIsIlRpdHVsbzIiLCJoMiIsIkNyZWFkb3JQcm9kdWN0byIsInAiLCJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvbnN1bHRhckRCIiwiZ3VhcmRhckNvbnN1bHRhckRCIiwicHJvZHVjdG8iLCJndWFyZGFyUHJvZHVjdG8iLCJlcnJvciIsImd1YXJkYXJFcnJvciIsImFjdGl2YXIiLCJndWFyZGFyQWN0aXZhciIsIm1lbnNhamUiLCJudWV2b3NDb21lbnRhcmlvcyIsImd1YXJkYXJDb21lbnRhcmlvcyIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJvYnRlbmVyUHJvZHVjdG8iLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9kdWN0b1F1ZXJ5IiwiZ2V0IiwiZXhpc3RzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJjb21lbnRhcmlvcyIsImNyZWFkbyIsImRlc2NyaXBjaW9uIiwiZW1wcmVzYSIsIm5vbWJyZSIsInVybCIsInVybGltYWdlbiIsInZvdG9zIiwiY3JlYWRvciIsImhhVm90YWRvIiwidm90YXJQcm9kdWN0byIsInB1c2giLCJOdWV2b1ZvdG9zIiwiaW5jbHVkZXMiLCJ1aWQiLCJoYW52b3RhZG8iLCJ1cGRhdGUiLCJoYW5kbGVDb21lbnRhcmlvcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvcmlnZW5DcmVhZG9yIiwib25zdWJtaXRDb21lbnRhcmlvIiwicHJldmVudERlZmF1bHQiLCJ1c3VhcmlvSWQiLCJ1c3VhcmlvTm9tYnJlIiwiZGlzcGxheU5hbWUiLCJudWV2b3NDb21lbnRhcmlvIiwiYm9ycmFyQ3JlYWRvciIsInVzdWFyaW91aWQiLCJmb3JtYXREaXN0YW5jZVRvTm93IiwiRGF0ZSIsImxvY2FsZSIsImVzIiwibGVuZ3RoIiwibWFwIiwiY29tZW50YXJpbyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx3REFBTSxDQUFDQyxHQUFWLG1CQUF4QjtLQUFNRixrQjtBQVFOLElBQU1HLE1BQU0sR0FBR0Ysd0RBQU0sQ0FBQ0csRUFBVixvQkFBWjtNQUFNRCxNO0FBS04sSUFBTUUsT0FBTyxHQUFHSix3REFBTSxDQUFDSyxFQUFWLG9CQUFiO01BQU1ELE87QUFJTixJQUFNRSxlQUFlLEdBQUdOLHdEQUFNLENBQUNPLENBQVYsb0JBQXJCO01BQU1ELGU7O0FBVU4sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVuQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFIbUIsTUFJRkMsRUFKRSxHQUlPRixNQUpQLENBSVhHLEtBSlcsQ0FJRkQsRUFKRSxFQU1uQjs7QUFObUIsa0JBT3NCRSxzREFBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9iQyxXQVBhO0FBQUEsTUFPQUMsa0JBUEEsaUJBUW5COzs7QUFSbUIsbUJBU2lCRixzREFBUSxDQUFDLEVBQUQsQ0FUekI7QUFBQSxNQVNaRyxRQVRZO0FBQUEsTUFTRkMsZUFURSxrQkFVbkI7OztBQVZtQixtQkFXV0osc0RBQVEsQ0FBQyxLQUFELENBWG5CO0FBQUEsTUFXWkssS0FYWTtBQUFBLE1BV0xDLFlBWEssa0JBWW5COzs7QUFabUIsbUJBYWVOLHNEQUFRLENBQUMsS0FBRCxDQWJ2QjtBQUFBLE1BYVpPLE9BYlk7QUFBQSxNQWFIQyxjQWJHLGtCQWNuQjs7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OUNSLENBSk4sQ0FITixDQUhaLENBREosQ0FESjtBQXFGSCxDQTlNRDs7R0FBTXpDLFE7VUFHYUUscUQ7OztNQUhiRixRO0FBZ05TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW2lkXS5iNmNjZGE1ZGFkZmYyNGRmMzI3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC80MDRcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBDYW1wbywgSW5wdXRTdWJtaXR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL0Zvcm11bGFyaW9cIjtcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dcIjtcclxuaW1wb3J0IHsgZXMgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCBCb3RvbiAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvQm90b25cIjtcclxuXHJcbmNvbnN0IENvbnRlbmVkb3JQcm9kdWN0byA9IHN0eWxlZC5kaXZgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm9tYnJlID0gc3R5bGVkLmgxYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdHVsbzIgPSBzdHlsZWQuaDJgXHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuYDtcclxuXHJcbmNvbnN0IENyZWFkb3JQcm9kdWN0byA9IHN0eWxlZC5wYFxyXG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQTU1MkY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vUm91dGluZyBwYXJhIG9idGVuZXIgZWwgaWQgYWN0dWFsIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHF1ZXJ5OiB7IGlkIH0gfSA9IHJvdXRlcjtcclxuXHJcbiAgICAvL0NyYW5kbyBzdGF0ZSBwYXJhIGNhbWJpbyBkZSBwcm9kdWN0byB5IG5vIGNpY2xhciBsYSBhcGxpY2FjaW9uXHJcbiAgICBjb25zdFtjb25zdWx0YXJEQiwgZ3VhcmRhckNvbnN1bHRhckRCXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy9DcmVhbmRvIGVzdGF0ZSBwYXJhIGd1YXJkYXIgZWwgcmVzdWx0YWRvIGRlIGxhIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbcHJvZHVjdG8sIGd1YXJkYXJQcm9kdWN0b10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIC8vc3RhdGUgcGFyYSBlbCBlcnJvciBlbiBsYSBjb25zdWx0YSBcclxuICAgIGNvbnN0IFtlcnJvciwgZ3VhcmRhckVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vU3RhdGUgcGFyYSBhY3RpdmFyIGVsIHNwaW5uZXIgXHJcbiAgICBjb25zdCBbYWN0aXZhciwgZ3VhcmRhckFjdGl2YXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9DcmVhbmRvIHN0YXRlIHBhcmEgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IFtudWV2b3NDb21lbnRhcmlvcywgZ3VhcmRhckNvbWVudGFyaW9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZW5zYWplOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFeHRyYXllbmRvIGZpcmViYXNlIGRlIGZpcmViYXNlY29udGV4dCBwYXJhIGxsYW1hciBhIGxhIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQgJiYgY29uc3VsdGFyREIpe1xyXG4gICAgICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG8gPSBhc3luYyAoKSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdG9RdWVyeSA9IGF3YWl0IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0b3NcIikuZG9jKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RvID0gYXdhaXQgcHJvZHVjdG9RdWVyeS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RvLmV4aXN0cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2R1Y3RvKHByb2R1Y3RvLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckNvbnN1bHRhckRCKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJDb25zdWx0YXJEQihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2J0ZW5lclByb2R1Y3RvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy9ndWFyZGFyQWN0aXZhcih0cnVlKTtcclxuICAgIC8vaWYoT2JqZWN0LmtleXMocHJvZHVjdG8pLmxlbmd0aCA9PT0gMClyZXR1cm4gPFNwaW5uZXIvPjtcclxuICAgIGNvbnN0IHtjb21lbnRhcmlvcywgY3JlYWRvLCBkZXNjcmlwY2lvbiwgZW1wcmVzYSwgbm9tYnJlLCB1cmwsIHVybGltYWdlbiwgdm90b3MsIGNyZWFkb3IsIGhhVm90YWRvfSA9IHByb2R1Y3RvO1xyXG5cclxuICAgIGNvbnN0IHZvdGFyUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBOdWV2b1ZvdG9zID0gdm90b3MgKyAxO1xyXG5cclxuICAgICAgICAvL1ZlcmZpY2FyIHNpIGVsIHVzdWFyaW8gaGEgdm90YWRvIFxyXG4gICAgICAgIGlmKGhhVm90YWRvLmluY2x1ZGVzKHVzdWFyaW8udWlkKSlyZXR1cm47XHJcbiAgICAgICAgLy9HdWFyZGFyIGVsIElEIGRlbCB1c3VhcmlvIHF1ZSBoYSB2b3RhZG9cclxuICAgICAgICBjb25zdCBoYW52b3RhZG8gPSBbLi4uaGFWb3RhZG8sIHVzdWFyaW8udWlkXTtcclxuICAgICAgICAvL0FncmVnYW5kbyBhIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHt2b3RvczogTnVldm9Wb3RvcywgaGFWb3RhZG86IGhhbnZvdGFkb30pOyAgICBcclxuXHJcbiAgICAgICAgLy9BZ3JlZ2FuZG8gYWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgdm90b3M6IE51ZXZvVm90b3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DcmVhbmRvIGZ1bmNpb24gcGFyYSBsbGVuYXIgZWwgc3RhdGUgZGUgY29tZW50YXJpb3NcclxuICAgIGNvbnN0IGhhbmRsZUNvbWVudGFyaW9zID0gKGUpID0+e1xyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIC4uLm51ZXZvc0NvbWVudGFyaW9zLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnVuY2lvbiB2ZXdyaWZpY2Egc2kgZXMgZWwgY3JlYWRvciBlbCBxdWUgZXNjcmliZSBlbCBjb21lZW50YXJpb1xyXG4gICAgY29uc3Qgb3JpZ2VuQ3JlYWRvciA9IGlkID0+IHtcclxuICAgICAgICBpZihjcmVhZG9yLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWFuZG8gZnVuY2lvbiBib3RvbiBjb21lbnRhciBlbiBlbCBmb3JtdWxhcmlvIHBhcmEgYWdyZWdhciBmb3JtdWxhcmlcclxuICAgIGNvbnN0IG9uc3VibWl0Q29tZW50YXJpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCF1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9JbmZvcm1hY2lvbiBleHRyYSBhbCBjb21lbnRhcmlvIFxyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9JZCA9IHVzdWFyaW8udWlkO1xyXG4gICAgICAgIG51ZXZvc0NvbWVudGFyaW9zLnVzdWFyaW9Ob21icmUgPSB1c3VhcmlvLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIC8vVG9tYXIgY29waWEgZGUgY29tZW50YXJpbyB5IGFncmVnYXJsb3MgYWwgYXJyZWdsb1xyXG4gICAgICAgIGNvbnN0IG51ZXZvc0NvbWVudGFyaW8gPSBbLi4uY29tZW50YXJpb3MsIG51ZXZvc0NvbWVudGFyaW9zXTtcclxuICAgICAgICAvL0FjdHVhbGl6YXIgbGEgQkRcclxuICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZHVjdG9zXCIpLmRvYyhpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEFjdHVhbGl6YXIgZWwgc3RhdGVcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgY29tZW50YXJpb3M6IG51ZXZvc0NvbWVudGFyaW9cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJDb21lbnRhcmlvcyh7XHJcbiAgICAgICAgICAgIG1lbnNhamU6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBndWFyZGFyQ29uc3VsdGFyREIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9WZXJpZmljYXIgc2kgZWwgY2xpZW50ZSBlcyBlbCBtaXNtbyBxdWUgZWwgdXN1YXJpbyByZWdpc3RyYWRvXHJcbiAgICBjb25zdCBib3JyYXJDcmVhZG9yID0gKCkgPT57XHJcbiAgICAgICAgaWYoIXVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjcmVhZG9yLmlkID09PSB1c3VhcmlvdWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPEVycm9yNDA0Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmFyIHx8ICFwcm9kdWN0byA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9tYnJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05vbWJyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbmVkb3JQcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QdWJsaWNhZG8gaGFjZTogeyBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGNyZWFkbyksIHsgbG9jYWxlOiBlcyB9KX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3Ige2NyZWFkb3Iubm9tYnJlfSBkZSB7ZW1wcmVzYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxpbWFnZW59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW8gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFncmVnYSB0dSBjb21lbnRhcmlvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25zdWJtaXRDb21lbnRhcmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW5zYWplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29tZW50YXJpb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251ZXZvc0NvbWVudGFyaW9zLm1lbnNhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbXBvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIENvbWVudGFyaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0dWxvMj5Db21lbnRhcmlvczwvVGl0dWxvMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbWVudGFyaW9zLmxlbmd0aCA9PT0gMCA/IFwiQXVuIG5vIGhheSBjb21lbnRhcmlvc1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tZW50YXJpb3MubWFwKCAoY29tZW50YXJpbywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29tZW50YXJpby51c3VhcmlvSWR9LSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29tZW50YXJpby5tZW5zYWplfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVzY3JpdG8gcG9yOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCAgJHtjb21lbnRhcmlvLnVzdWFyaW9Ob21icmV9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JpZ2VuQ3JlYWRvcihjb21lbnRhcmlvLnVzdWFyaW9JZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYWRvclByb2R1Y3RvPkVzIGNyZWFkb3I8L0NyZWFkb3JQcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzaXRhciBVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1wby12b3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidm90b3NcIj57dm90b3N9IFZvdG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW8gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dm90YXJQcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW5lZG9yUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==