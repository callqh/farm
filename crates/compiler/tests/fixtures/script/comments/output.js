//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function (modules, entryModule) {
            var cache = {};

            function dynamicRequire(id) {
              return Promise.resolve(require(id));
            }
          
            function require(id) {
              if (cache[id]) return cache[id].exports;
          
              var module = {
                id: id,
                exports: {}
              };
          
              modules[id](module, module.exports, require, dynamicRequire);
              cache[id] = module;
              return module.exports;
            }
          
            require(entryModule);
          })({"d2214aaa": function(module, exports, farmRequire, farmDynamicRequire) {
console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);

},}, "d2214aaa");(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_ddf1.js';
                (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(key, modules[key]);
            }
        })({"05ee5ec7": function(module, exports, farmRequire, farmDynamicRequire) {
/**
 * @license MIT this comments should be preserved
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "foo", {
    enumerable: true,
    get: function() {
        return foo;
    }
});
console.log(123);
function foo() {
    // return value foo
    return "foo";
} /**
 * foo 3
*/  // foo 4

},
"b5d64806": function(module, exports, farmRequire, farmDynamicRequire) {
/**
 * @license MIT this comments should be preserved
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _dep = farmRequire("05ee5ec7");
// print the value of foo
console.log(_dep.foo);

},});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");