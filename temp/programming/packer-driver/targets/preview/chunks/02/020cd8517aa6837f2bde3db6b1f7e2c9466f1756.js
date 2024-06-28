System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PageView, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, abs;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PageView = _cc.PageView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caa09yR68NIG4FeJCK4NhTe", "abs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PageView', 'PageViewIndicatorComponent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("abs", abs = (_dec = ccclass("abs"), _dec2 = property(PageView), _dec(_class = (_class2 = class abs extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pageView", _descriptor, this);

          this.interval = 5;
          this.currentPage = void 0;
        }

        start() {
          this.currentPage = 0;
          this.schedule(this.nextPage, this.interval);
        }

        update(deltaTime) {}

        nextPage() {
          var pageCount = this.pageView.getPages().length;
          this.currentPage = (this.currentPage + 1) % pageCount;
          this.pageView.scrollToPage(this.currentPage, 0.5); // Chuyển trang với thời gian 0.5 giây
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=020cd8517aa6837f2bde3db6b1f7e2c9466f1756.js.map