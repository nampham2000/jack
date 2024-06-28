System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, EditBox, Label, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _crd, ccclass, property, Controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f0eblj29tHiZnIe6B9KcgQ", "Controller", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Controller", Controller = (_dec = ccclass("Controller"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(EditBox), _dec23 = property(EditBox), _dec24 = property(EditBox), _dec25 = property(EditBox), _dec26 = property(EditBox), _dec27 = property(EditBox), _dec28 = property(EditBox), _dec29 = property(EditBox), _dec30 = property(EditBox), _dec31 = property(EditBox), _dec32 = property(EditBox), _dec33 = property(EditBox), _dec34 = property(EditBox), _dec35 = property(Label), _dec36 = property(Label), _dec37 = property(Label), _dec38 = property(Label), _dec39 = property(Label), _dec40 = property(Label), _dec41 = property(Label), _dec(_class = (_class2 = class Controller extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GuestLb", _descriptor, this);

          _initializerDefineProperty(this, "LoginLb", _descriptor2, this);

          _initializerDefineProperty(this, "dialog", _descriptor3, this);

          _initializerDefineProperty(this, "signUp", _descriptor4, this);

          _initializerDefineProperty(this, "loginBtnopen", _descriptor5, this);

          _initializerDefineProperty(this, "guestNode", _descriptor6, this);

          _initializerDefineProperty(this, "profileNode", _descriptor7, this);

          _initializerDefineProperty(this, "eventNode", _descriptor8, this);

          _initializerDefineProperty(this, "minigameNode", _descriptor9, this);

          _initializerDefineProperty(this, "allgameNode", _descriptor10, this);

          _initializerDefineProperty(this, "selectMiniNode", _descriptor11, this);

          _initializerDefineProperty(this, "selectAllNode", _descriptor12, this);

          _initializerDefineProperty(this, "shopNode", _descriptor13, this);

          _initializerDefineProperty(this, "BankNode", _descriptor14, this);

          _initializerDefineProperty(this, "RutNode", _descriptor15, this);

          _initializerDefineProperty(this, "napNode", _descriptor16, this);

          _initializerDefineProperty(this, "selectNap", _descriptor17, this);

          _initializerDefineProperty(this, "selectRut", _descriptor18, this);

          _initializerDefineProperty(this, "MoreBankNode", _descriptor19, this);

          _initializerDefineProperty(this, "NoitceNode", _descriptor20, this);

          _initializerDefineProperty(this, "loginUsernameInput", _descriptor21, this);

          _initializerDefineProperty(this, "loginPasswordInput", _descriptor22, this);

          _initializerDefineProperty(this, "signUpUsernameInput", _descriptor23, this);

          _initializerDefineProperty(this, "signUpPasswordInput", _descriptor24, this);

          _initializerDefineProperty(this, "signUpConfirmPasswordInput", _descriptor25, this);

          _initializerDefineProperty(this, "editBoxMoney", _descriptor26, this);

          _initializerDefineProperty(this, "editBoxName", _descriptor27, this);

          _initializerDefineProperty(this, "editBoxTransactionID", _descriptor28, this);

          _initializerDefineProperty(this, "editBoxNH", _descriptor29, this);

          _initializerDefineProperty(this, "editBoxTK", _descriptor30, this);

          _initializerDefineProperty(this, "editBoxNameRut", _descriptor31, this);

          _initializerDefineProperty(this, "editBoxCN", _descriptor32, this);

          _initializerDefineProperty(this, "editBoxBalanceR", _descriptor33, this);

          _initializerDefineProperty(this, "STKLb", _descriptor34, this);

          _initializerDefineProperty(this, "CTKLb", _descriptor35, this);

          _initializerDefineProperty(this, "CNLb", _descriptor36, this);

          _initializerDefineProperty(this, "NDLb", _descriptor37, this);

          _initializerDefineProperty(this, "nameBankLb", _descriptor38, this);

          _initializerDefineProperty(this, "noticeLb", _descriptor39, this);

          _initializerDefineProperty(this, "balanceLb", _descriptor40, this);
        }

        start() {
          this.editBoxMoney.node.on("editing-did-ended", this.validateMoneyInput, this); // Gán sự kiện kiểm tra cho editBoxName

          this.editBoxName.node.on("editing-did-ended", this.validateNameInput, this);
        }

        update(deltaTime) {}

        checkguest() {
          if (this.GuestLb.active === true) {
            this.dialog.active = true;
            this.LoginLb.active = true;
            this.loginBtnopen.node.active = false;
          }
        }

        closeLoginLb() {
          this.dialog.active = false;
          this.LoginLb.active = false;
          this.loginBtnopen.node.active = true;
        }

        signupBtn() {
          this.dialog.active = true;
          this.signUp.active = true;
        }

        closeSignUpLb() {
          this.dialog.active = false;
          this.signUp.active = false;
          this.loginBtnopen.node.active = true;
        }

        OpenProfile() {
          this.dialog.active = true;
          this.profileNode.active = true; // this.loginBtnopen.node.active = true;
        }

        CloseProfile() {
          this.dialog.active = false;
          this.profileNode.active = false; // this.loginBtnopen.node.active = true;
        }

        log() {
          console.log("aaaaaaaaaa");
        } //   login() {
        //     const username = this.usernameInput.string;
        //     const password = this.passwordInput.string;
        //     // Replace with your own authentication logic
        //     if (username === "correctUsername" && password === "correctPassword") {
        //       this.dialog.active = false;
        //       this.LoginLb.active = false;
        //       this.loginBtnopen.node.active = false;
        //       console.log("thanh cong");
        //     } else {
        //       // Handle wrong credentials
        //       console.log("Invalid username or password");
        //     }
        //   }


        login() {
          var username = this.loginUsernameInput.string;
          var password = this.loginPasswordInput.string;
          var users = JSON.parse(localStorage.getItem("users")) || [];
          var user = users.find(user => user.username === username && user.password === password);

          if (user) {
            this.dialog.active = false;
            this.LoginLb.active = false;
            this.guestNode.active = false;
            this.loginBtnopen.node.active = false;
          } else {
            console.log("Invalid username or password");
          }
        }

        closeSignUpLb1() {
          this.dialog.active = false;
          this.signUp.active = false;
          this.loginBtnopen.node.active = true;
          this.dialog.active = false;
          this.LoginLb.active = false;
          this.guestNode.active = false;
          this.loginBtnopen.node.active = false;
        }

        signUpBtn() {
          var username = this.signUpUsernameInput.string;
          var password = this.signUpPasswordInput.string;
          var confirmPassword = this.signUpConfirmPasswordInput.string;

          if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
          }

          var users = JSON.parse(localStorage.getItem("users")) || [];
          var userExists = users.some(user => user.username === username);

          if (userExists) {
            console.log("Username already exists");
            return;
          }

          var newUser = {
            username: username,
            password: password
          };
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          console.log("Sign-up successful");
          this.closeSignUpLb1();
        }

        eventStatus() {
          if (this.dialog.active === false && this.eventNode.active === false) {
            this.dialog.active = true;
            this.eventNode.active = true;
          }

          if (this.dialog.active === true && this.eventNode.active === true) {
            this.dialog.active = false;
            this.eventNode.active = false;
          }
        }

        minigame() {
          if (this.minigameNode.active === false) {
            this.minigameNode.active = true;
            this.allgameNode.active = false;
            this.selectMiniNode.active = true;
            this.selectAllNode.active = false;
          }
        }

        allgameOpen() {
          if (this.allgameNode.active === false) {
            this.minigameNode.active = false;
            this.allgameNode.active = true;
            this.selectMiniNode.active = false;
            this.selectAllNode.active = true;
          }
        }

        payNode() {
          this.dialog.active = true;
          this.shopNode.active = true;
          this.BankNode.active = true;
        }

        rutOpen() {
          this.RutNode.active = true;
          this.napNode.active = false;
          this.selectNap.active = false;
          this.selectRut.active = true;
        }

        napOpen() {
          this.RutNode.active = false;
          this.napNode.active = true;
          this.selectNap.active = true;
          this.selectRut.active = false;
        }

        moreBank() {
          if (this.MoreBankNode.active === false) {
            this.MoreBankNode.active = true;
          } else {
            this.MoreBankNode.active = false;
          }
        }

        inputbank(bank, stk, ctk, cn, nd) {
          this.nameBankLb.string = bank;
          this.STKLb.string = stk;
          this.CTKLb.string = ctk;
          this.CNLb.string = cn;
          this.NDLb.string = nd;
        }

        vietcombank() {
          this.MoreBankNode.active = false;
          this.inputbank("VIETCOMBANK", "134354356544", "THÍCH CỜ BẠC", "HCM", "CHỈ CẦN NHẬP THÍCH CỜ BẠC ");
        }

        MBbank() {
          this.MoreBankNode.active = false;
          this.inputbank("MBBANK", "12345676543", "THÍCH CỜ BẠC", "HCM", "CHỈ CẦN NHẬP THÍCH CỜ BẠC ");
        }

        TGBank() {
          this.MoreBankNode.active = false;
          this.inputbank("TẠI GIA BANK", "123456789", "PHẠM THỊ HÀ ĐÔNG", "TẠI GIA", "CỜ BẠC LÀ CH*T VỚI BÀ");
        }

        validateMoneyInput() {
          var money = this.editBoxMoney.string;
          var numberRegex = /^[0-9]+$/;

          if (!numberRegex.test(money)) {
            console.log("Số tiền nạp phải là số");
            this.editBoxMoney.string = "";
            return;
          }
        }

        validateNameInput() {
          var name = this.editBoxName.string;
          var nameRegex = /^[A-Za-z\s]+$/;

          if (!nameRegex.test(name)) {
            console.log("Họ tên người gửi phải là chữ");
            this.editBoxName.string = "";
            return;
          }
        }

        noitcenap() {
          if (this.editBoxMoney.string === "" || this.editBoxName.string === "" || this.editBoxTransactionID.string === "") {
            console.log("Thiếu nội dung");
            return;
          }

          var money = this.editBoxMoney.string;
          var name = this.editBoxName.string;
          var transactionID = this.editBoxTransactionID.string;
          this.NoitceNode.active = true;
          this.noticeLb.string = "Wait for your deposit order to be processed...";
          setTimeout(() => {
            this.noticeLb.string = "Deposit order has been completed.";
            this.balanceLb.string = money;
          }, 2000);
        }

        closeNotice() {
          this.NoitceNode.active = false;
        }

        noitcerut() {
          if (this.editBoxNH.string === "" || this.editBoxTK.string === "" || this.editBoxNameRut.string === "" || this.editBoxCN.string === "" || this.editBoxBalanceR.string === "") {
            console.log("Thiếu nội dung");
            return;
          }

          var bank = this.editBoxNH.string;
          var Tk = this.editBoxTK.string;
          var name = this.editBoxNameRut.string;
          var CN = this.editBoxCN.string;
          var money = this.editBoxBalanceR.string;
          var MoneyInt = parseFloat(money);
          var moneyBalance = parseFloat(this.balanceLb.string);
          this.NoitceNode.active = true;
          this.noticeLb.string = "Wait for your withdrawal order to be processed...";
          setTimeout(() => {
            this.noticeLb.string = "Withdrawal order has been completed.";
            this.balanceLb.string = (moneyBalance - MoneyInt).toString();
          }, 2000);
        }

        closeshop() {
          this.shopNode.active = false;
          this.dialog.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GuestLb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LoginLb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dialog", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "signUp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loginBtnopen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "guestNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "profileNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "eventNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "minigameNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "allgameNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "selectMiniNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "selectAllNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "shopNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "BankNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "RutNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "napNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "selectNap", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "selectRut", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "MoreBankNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "NoitceNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "loginUsernameInput", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "loginPasswordInput", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "signUpUsernameInput", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "signUpPasswordInput", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "signUpConfirmPasswordInput", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "editBoxMoney", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "editBoxName", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "editBoxTransactionID", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "editBoxNH", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "editBoxTK", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "editBoxNameRut", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "editBoxCN", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBalanceR", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "STKLb", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "CTKLb", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "CNLb", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "NDLb", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "nameBankLb", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "noticeLb", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "balanceLb", [_dec41], {
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
//# sourceMappingURL=cdfa75de0e2e96a0ec20727b668d6d2c356ec9f9.js.map