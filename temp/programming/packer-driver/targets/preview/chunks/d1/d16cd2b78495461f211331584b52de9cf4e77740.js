System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, AudioSource, SpriteFrame, Sprite, Animation, Prefab, Vec3, instantiate, tween, Button, Color, director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _crd, ccclass, property, XocXoc;

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
      Node = _cc.Node;
      Label = _cc.Label;
      AudioSource = _cc.AudioSource;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      Button = _cc.Button;
      Color = _cc.Color;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c579dXL0ZHQbL+iw33x2rA", "XocXoc", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'AudioSource', 'SpriteFrame', 'Sprite', 'Animation', 'Prefab', 'Vec2', 'Vec3', 'instantiate', 'tween', 'Button', 'UITransform', 'Color', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("XocXoc", XocXoc = (_dec = ccclass("XocXoc"), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec7 = property(AudioSource), _dec8 = property(AudioSource), _dec9 = property(AudioSource), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Label), _dec29 = property(Label), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Label), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(SpriteFrame), _dec44 = property(SpriteFrame), _dec45 = property(SpriteFrame), _dec46 = property(SpriteFrame), _dec47 = property(SpriteFrame), _dec48 = property(SpriteFrame), _dec49 = property(SpriteFrame), _dec50 = property(SpriteFrame), _dec51 = property([Sprite]), _dec52 = property(Label), _dec53 = property(Label), _dec54 = property(Node), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property(Node), _dec58 = property(Animation), _dec59 = property(Prefab), _dec60 = property({
        type: Node
      }), _dec61 = property(Node), _dec62 = property({
        type: [Button]
      }), _dec(_class = (_class2 = class XocXoc extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "audioMoBat", _descriptor, this);

          _initializerDefineProperty(this, "audioSingleChip", _descriptor2, this);

          _initializerDefineProperty(this, "audioMultiChip", _descriptor3, this);

          _initializerDefineProperty(this, "audioXocDia", _descriptor4, this);

          _initializerDefineProperty(this, "audioMultiChip2", _descriptor5, this);

          _initializerDefineProperty(this, "audioMultiChip3", _descriptor6, this);

          _initializerDefineProperty(this, "audioMultiChip4", _descriptor7, this);

          _initializerDefineProperty(this, "audioMultiChip5", _descriptor8, this);

          _initializerDefineProperty(this, "box_chan", _descriptor9, this);

          _initializerDefineProperty(this, "box_le", _descriptor10, this);

          _initializerDefineProperty(this, "box_red3", _descriptor11, this);

          _initializerDefineProperty(this, "box_red4", _descriptor12, this);

          _initializerDefineProperty(this, "box_white3", _descriptor13, this);

          _initializerDefineProperty(this, "box_white4", _descriptor14, this);

          _initializerDefineProperty(this, "total_chan", _descriptor15, this);

          _initializerDefineProperty(this, "total_le", _descriptor16, this);

          _initializerDefineProperty(this, "total_red3", _descriptor17, this);

          _initializerDefineProperty(this, "total_red4", _descriptor18, this);

          _initializerDefineProperty(this, "total_white3", _descriptor19, this);

          _initializerDefineProperty(this, "total_white4", _descriptor20, this);

          _initializerDefineProperty(this, "me_chan", _descriptor21, this);

          _initializerDefineProperty(this, "me_le", _descriptor22, this);

          _initializerDefineProperty(this, "me_red3", _descriptor23, this);

          _initializerDefineProperty(this, "me_red4", _descriptor24, this);

          _initializerDefineProperty(this, "me_white3", _descriptor25, this);

          _initializerDefineProperty(this, "me_white4", _descriptor26, this);

          _initializerDefineProperty(this, "me_name", _descriptor27, this);

          _initializerDefineProperty(this, "me_balans", _descriptor28, this);

          _initializerDefineProperty(this, "labelTime", _descriptor29, this);

          _initializerDefineProperty(this, "timeWait", _descriptor30, this);

          _initializerDefineProperty(this, "nodeWait", _descriptor31, this);

          _initializerDefineProperty(this, "box_chip", _descriptor32, this);

          _initializerDefineProperty(this, "users_bg", _descriptor33, this);

          _initializerDefineProperty(this, "users_count", _descriptor34, this);

          _initializerDefineProperty(this, "nodeBat", _descriptor35, this);

          _initializerDefineProperty(this, "redx3", _descriptor36, this);

          _initializerDefineProperty(this, "redx15", _descriptor37, this);

          _initializerDefineProperty(this, "evenNode", _descriptor38, this);

          _initializerDefineProperty(this, "oddNode", _descriptor39, this);

          _initializerDefineProperty(this, "whitex15", _descriptor40, this);

          _initializerDefineProperty(this, "whitex3", _descriptor41, this);

          _initializerDefineProperty(this, "chip_1000", _descriptor42, this);

          _initializerDefineProperty(this, "chip_10000", _descriptor43, this);

          _initializerDefineProperty(this, "chip_50000", _descriptor44, this);

          _initializerDefineProperty(this, "chip_100000", _descriptor45, this);

          _initializerDefineProperty(this, "chip_1000000", _descriptor46, this);

          _initializerDefineProperty(this, "chip_5000000", _descriptor47, this);

          _initializerDefineProperty(this, "dot_red", _descriptor48, this);

          _initializerDefineProperty(this, "dot_white", _descriptor49, this);

          _initializerDefineProperty(this, "dot", _descriptor50, this);

          _initializerDefineProperty(this, "log_chan", _descriptor51, this);

          _initializerDefineProperty(this, "log_le", _descriptor52, this);

          _initializerDefineProperty(this, "log_top", _descriptor53, this);

          _initializerDefineProperty(this, "logMain", _descriptor54, this);

          _initializerDefineProperty(this, "redH", _descriptor55, this);

          _initializerDefineProperty(this, "miniNotice", _descriptor56, this);

          _initializerDefineProperty(this, "Animation", _descriptor57, this);

          _initializerDefineProperty(this, "prefabNotice", _descriptor58, this);

          _initializerDefineProperty(this, "bet", _descriptor59, this);

          _initializerDefineProperty(this, "loading", _descriptor60, this);

          _initializerDefineProperty(this, "listButtonBet", _descriptor61, this);

          this.logs = [];
          this.nan = false;
          this.cuoc = "1000";
          this.countdownTime = 30;
          this.choosenChip = "1000";
          this.gameEnd = false;
          this.maxDot = {
            x: 39,
            y: 19
          };
          this.maxBox1_3 = {
            x: -10,
            y: 0
          };
          this.maxBox1_1 = {
            x: -10,
            y: 0
          };
          this.listScore = ["1000", "10000", "50000", "100000", "1000000", "5000000"];
          this.clients = {
            red: {
              chan: 0,
              le: 0,
              red3: 0,
              red4: 0,
              white3: 0,
              white4: 0
            }
          };
          this.users = {
            red: {
              chan: 0,
              le: 0,
              red3: 0,
              red4: 0,
              white3: 0,
              white4: 0
            }
          };
        }

        onLoad() {// Các thiết lập và khởi tạo game ban đầu, ví dụ:
          // this.me_name.string = 'Player';
          // this.me_balans.string = this.numberWithCommas(1000000); // Example balance
        }

        onAnimationFinished() {
          this.startCountdown();
        }

        startCountdown() {
          this.nodeWait.active = true;
          this.timeWait.node.active = true;
          this.countdownTime = 30;
          this.updateCountdownLabel();
          this.schedule(this.updateCountdown, 1);
        }

        updateCountdown() {
          if (this.countdownTime > 0) {
            this.countdownTime--;
            this.updateCountdownLabel();
          } else {
            this.unschedule(this.updateCountdown);
            var data = this.generateRandomData();
            this.setDot(data);
            this.gameEnd = true;
            tween(this.nodeBat).to(1, {
              position: new Vec3(121, 200)
            }).call(() => {
              this.showKQ(data);
              this.showKQ2(data);
              setTimeout(() => {
                this.reset();
              }, 7000);
            }).start();
          }
        }

        updateCountdownLabel() {
          this.timeWait.string = this.countdownTime.toString();
        }

        start() {
          var _this = this;

          this.Animation.play();
          this.Animation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
          var previousButton = null;

          var _loop = function _loop(i) {
            var button = _this.listButtonBet[i];
            button.node.on(Button.EventType.CLICK, () => {
              // Nếu có nút được nhấp trước đó, đặt lại kích thước của nó
              if (previousButton) {
                previousButton.node.scale = new Vec3(1, 1, 1);
                previousButton.node.children[0].active = false;
                previousButton.node.getComponent(Sprite).color = new Color(255, 255, 255, 128);
              } // Thay đổi kích thước của nút được nhấp hiện tại


              button.node.scale = new Vec3(1.2, 1.2, 1.2);
              button.node.children[0].active = true;
              button.node.getComponent(Sprite).color = new Color(255, 255, 255, 255);
              previousButton = button; // this.AudioController.onAudio(7);
              // Cập nhật dữ liệu hoặc thực hiện các thao tác khác

              _this.choosenChip = _this.listScore[i].toString(); // this.buttonPub = button;

              console.log(_this.choosenChip);
            });
          };

          for (var i = 0; i < this.listButtonBet.length; i++) {
            _loop(i);
          }
        }

        update(deltaTime) {// Update logic
        }

        generateRandomData() {
          var data = [];

          for (var i = 0; i < 4; i++) {
            var randomBoolean = Math.random() < 0.5;
            data.push(randomBoolean);
          }

          return data;
        }

        showKQ(data) {
          var numb = 0;
          data.forEach(dot => {
            if (dot) {
              numb++;
            }
          });

          if (!(numb % 2)) {
            this.box_chan.children[0].active = true;
          } else {
            this.box_le.children[0].active = true;
          }

          switch (numb) {
            case 0:
              this.box_white4.children[0].active = true;
              break;

            case 1:
              this.box_white3.children[0].active = true;
              break;

            case 3:
              this.box_red3.children[0].active = true;
              break;

            case 4:
              this.box_red4.children[0].active = true;
              break;
          }
        }

        setDot(data) {
          var randomPosition = () => {
            var Dot_x = Math.floor(Math.random() * (this.maxDot.x + 1));
            var Dot_y = Math.floor(Math.random() * (this.maxDot.y + 1));
            var DotCheck = Dot_y - Dot_x;

            if (DotCheck > 22) {
              Dot_y = Dot_y - Dot_y / 1.4;
            }

            return new Vec3(Dot_x, Dot_y);
          };

          this.dot.forEach((dot, index) => {
            var position = randomPosition();
            dot.node.position = position;
            var check = data[index];

            if (check) {
              dot.spriteFrame = this.dot_red;
            } else {
              dot.spriteFrame = this.dot_white;
            }
          });
        }

        meChip(data) {
          var v3 = new Vec3();
          var PosTarget;
          var nodeBet = null;
          var nodeBox = null;
          var max = this.maxBox1_3;
          this.bet.forEach(bet => {
            if (bet.name === data.cuoc) {
              nodeBet = bet;
            }
          });

          switch (data.box) {
            case "chan":
              nodeBox = this.box_chan;
              max = this.maxBox1_1;
              break;

            case "le":
              nodeBox = this.box_le;
              max = this.maxBox1_1;
              break;

            case "red3":
              nodeBox = this.box_red3;
              break;

            case "red4":
              nodeBox = this.box_red4;
              break;

            case "white3":
              nodeBox = this.box_white3;
              break;

            case "white4":
              nodeBox = this.box_white4;
              break;
          }

          nodeBox.inverseTransformPoint(v3, nodeBet.worldPosition);
          var newN = new Node();
          var sprite = newN.addComponent(Sprite);
          sprite.spriteFrame = this["chip_" + data.cuoc];
          newN.setPosition(v3);
          var x = Math.random() * (max.x + 1);
          var y = Math.random() * (max.y + 1);
          nodeBox.children[1].addChild(newN);
          tween(newN).to(0.3, {
            scale: new Vec3(0.3, 0.3),
            position: new Vec3(x, y)
          }).start();
        }

        betchan() {
          if (this.gameEnd === false) {
            this.meChip({
              cuoc: this.choosenChip,
              box: "chan"
            });
          }
        }

        betle() {
          if (this.gameEnd === false) {
            this.meChip({
              cuoc: this.choosenChip,
              box: "le"
            });
          }
        }

        betred3() {
          if (this.gameEnd === false) {
            this.meChip({
              cuoc: this.choosenChip,
              box: "red3"
            });
          }
        }

        betred4() {
          if (this.gameEnd === false) {
            this.meChip({
              cuoc: this.choosenChip,
              box: "red4"
            });
          }
        }

        betwhite3() {
          if (this.gameEnd === false) {
            this.meChip({
              cuoc: this.choosenChip,
              box: "white3"
            });
          }
        }

        betwhite4() {
          if (this.gameEnd === false) {
            this.meChip({
              cuoc: this.choosenChip,
              box: "white4"
            });
          }
        }

        showKQ2(data1) {
          var audioLost = 0;
          var audioWin = 0;
          var node1 = null;
          var node2 = null;
          var data = data1;
          var numb = 0;
          var v3 = new Vec3();
          var v32 = new Vec3();
          var v33 = new Vec3();
          var v34 = new Vec3();
          var v35 = new Vec3();
          var v36 = new Vec3();
          var v37 = new Vec3();
          var v38 = new Vec3();
          var v39 = new Vec3();
          var v40 = new Vec3();
          data.forEach(dot => {
            if (dot) {
              numb++;
            }
          }); // let position = this.box_chip.parent.getWorldPosition();

          var centerMid = null;
          var centerLR = null;

          if (!(numb % 2)) {
            node1 = this.box_chan.children[1];
            audioLost += this.box_le.children[1].children.length; // centerMid = this.box_le.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);

            centerMid = this.box_le.children[1].inverseTransformPoint(v3, this.box_chip.parent.worldPosition);
            this.box_le.children[1].children.forEach(chip => {
              tween(chip).parallel(tween(chip).to(0.4, {
                scale: new Vec3(0.5, 0.5, 0.5)
              }), tween(chip).to(0.4, {
                position: centerMid
              })).start();
            });
          } else {
            node1 = this.box_le.children[1];
            audioLost += this.box_chan.children[1].children.length;
            centerMid = this.box_chan.children[1].inverseTransformPoint(v3, this.box_chip.parent.worldPosition);
            this.box_chan.children[1].children.forEach(chip => {
              tween(chip).parallel(tween(chip).to(0.4, {
                scale: new Vec3(0.5, 0.5, 0.5)
              }), tween(chip).to(0.4, {
                position: centerMid
              })).start();
            });
          } // let red3 = this.box_red3.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);


          var red3 = this.box_red3.children[1].inverseTransformPoint(v32, this.box_chip.parent.worldPosition); // let red4 = this.box_red4.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);

          var red4 = this.box_red4.children[1].inverseTransformPoint(v33, this.box_chip.parent.worldPosition); // let white3 = this.box_white3.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);

          var white3 = this.box_white3.children[1].inverseTransformPoint(v34, this.box_chip.parent.worldPosition); // let white4 = this.box_white4.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);

          var white4 = this.box_white4.children[1].inverseTransformPoint(v35, this.box_chip.parent.worldPosition);

          switch (numb) {
            case 0:
              node2 = this.box_white4.children[1];
              audioLost += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white3.children[1].children.length;
              this.box_red3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red3
                })).start();
              });
              this.box_red4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red4
                })).start();
              });
              this.box_white3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white3
                })).start();
              });
              break;

            case 1:
              node2 = this.box_white3.children[1];
              audioLost += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white4.children[1].children.length;
              this.box_red3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red3
                })).start();
              });
              this.box_red4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red4
                })).start();
              });
              this.box_white4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white4
                })).start();
              });
              break;

            case 2:
              audioLost += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white3.children[1].children.length + this.box_white4.children[1].children.length;
              this.box_red3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red3
                })).start();
              });
              this.box_red4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red4
                })).start();
              });
              this.box_white3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white3
                })).start();
              });
              this.box_white4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white4
                })).start();
              });
              break;

            case 3:
              node2 = this.box_red3.children[1];
              audioLost += this.box_white3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white4.children[1].children.length;
              this.box_white3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white3
                })).start();
              });
              this.box_red4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red4
                })).start();
              });
              this.box_white4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white4
                })).start();
              });
              break;

            case 4:
              node2 = this.box_red4.children[1];
              audioLost += this.box_white3.children[1].children.length + this.box_red3.children[1].children.length + this.box_white4.children[1].children.length;
              this.box_white3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white3
                })).start();
              });
              this.box_red3.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: red3
                })).start();
              });
              this.box_white4.children[1].children.forEach(chip => {
                tween(chip).parallel(tween(chip).to(0.4, {
                  scale: new Vec3(0.5, 0.5, 0.5)
                }), tween(chip).to(0.4, {
                  position: white4
                })).start();
              });
              break;
          } // !!audioLost && this.audioMultiChip.play();


          this.scheduleOnce(() => {
            audioWin += node1.children.length;
            node1.children.forEach(chip => {
              var copy = instantiate(chip);
              copy.setPosition(centerMid);
              copy.setScale(new Vec3(0.5, 0.5, 0.5));
              var x = Math.floor(Math.random() * (this.maxBox1_1.x + 1));
              var y = Math.floor(Math.random() * (this.maxBox1_1.y + 1));
              node1.addChild(copy);
              tween(copy).sequence(tween(copy).parallel(tween(copy).to(0.4, {
                scale: new Vec3(0.3, 0.3, 0.3)
              }), tween(copy).to(0.4, {
                position: new Vec3(x, y, 0)
              })), tween(copy).sequence(tween(copy).to(0.1, {
                position: new Vec3(x, y - 6, 0)
              }), tween(copy).to(0.1, {
                position: new Vec3(x, y, 0)
              }))).start();
            });

            if (node2) {
              audioWin += node2.children.length; // let node2red = node2.getComponent(UITransform).convertToNodeSpaceAR(position);

              var node2red = node2.inverseTransformPoint(v36, this.box_chip.parent.worldPosition);
              node2.children.forEach(chip => {
                var copy = instantiate(chip);
                copy.setPosition(node2red);
                copy.setScale(new Vec3(0.5, 0.5, 0.5));
                var x = Math.floor(Math.random() * (this.maxBox1_3.x + 1));
                var y = Math.floor(Math.random() * (this.maxBox1_3.y + 1));
                node2.addChild(copy);
                tween(copy).sequence(tween(copy).parallel(tween(copy).to(0.4, {
                  scale: new Vec3(0.3, 0.3, 0.3)
                }), tween(copy).to(0.4, {
                  position: new Vec3(x, y, 0)
                })), tween(copy).sequence(tween(copy).to(0.1, {
                  position: new Vec3(x, y - 6, 0)
                }), tween(copy).to(0.1, {
                  position: new Vec3(x, y, 0)
                }))).start();
              });
            } // if (audioWin) {
            //     [1, 2, 3, 4, 5].forEach(audio => {
            //         if (audio !== 1) {
            //             // this[`audioMultiChip${audio}`].play();
            //         } else {
            //             // this.audioMultiChip.play();
            //         }
            //     });
            // }


            console.log(node1);
            console.log(node2);
            this.scheduleOnce(() => {
              console.log(this.me_balans.node); // let positionUser = this.users_bg.parent.getWorldPosition();
              // let position1_1 = node1.getComponent(UITransform).convertToNodeSpaceAR(positionUser);

              var position1_1 = node1.inverseTransformPoint(v36, this.me_balans.node.worldPosition);
              console.log("chay2");
              node1.children.forEach(chip => {
                console.log("chay 3"); // tween(chip)
                //     .parallel(
                //         // tween(chip).to(0.4, { opacity: 0 }),

                tween(chip).to(0.4, {
                  position: position1_1
                }) // )
                .start();
                console.log("chay 4");
              });

              if (node2) {
                console.log("chay 5"); // let position1_3 = node2.getComponent(UITransform).convertToNodeSpaceAR(positionUser);

                var position1_3 = node2.inverseTransformPoint(v36, this.me_balans.node.worldPosition);
                node2.children.forEach(chip => {
                  // tween(chip)
                  //     .parallel(
                  // tween(chip).to(0.4, { opacity: 0 }),
                  tween(chip).to(0.4, {
                    position: position1_3
                  }) // )
                  .start();
                  console.log("chay 7");
                });
              }
            }, 3);
          }, 1.5);
        }

        loadscene() {
          director.loadScene("MainGame");
        }

        reset() {
          this.box_white4.children[0].active = false;
          this.box_white3.children[0].active = false;
          this.box_red3.children[0].active = false;
          this.box_red4.children[0].active = false;
          this.box_chan.children[0].active = false;
          this.box_le.children[0].active = false;

          if (this.redx15) {
            this.redx15.removeAllChildren();
          } else {
            console.error("redx15 is null or undefined");
          }

          if (this.redx3) {
            this.redx3.removeAllChildren();
          } else {
            console.error("redx3 is null or undefined");
          }

          if (this.evenNode) {
            this.evenNode.removeAllChildren();
          } else {
            console.error("evenNode is null or undefined");
          }

          if (this.oddNode) {
            this.oddNode.removeAllChildren();
          } else {
            console.error("oddNode is null or undefined");
          }

          if (this.whitex15) {
            this.whitex15.removeAllChildren();
          } else {
            console.error("whitex15 is null or undefined");
          }

          if (this.whitex3) {
            this.whitex3.removeAllChildren();
          } else {
            console.error("whitex3 is null or undefined");
          }

          this.gameEnd = false;
          tween(this.nodeBat).to(1, {
            position: new Vec3(0, 0)
          }).call(() => {
            this.Animation.play();
            this.Animation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioMoBat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSingleChip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioMultiChip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "audioXocDia", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioMultiChip2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "audioMultiChip3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "audioMultiChip4", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "audioMultiChip5", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "box_chan", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "box_le", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "box_red3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "box_red4", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "box_white3", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "box_white4", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "total_chan", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "total_le", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "total_red3", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "total_red4", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "total_white3", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "total_white4", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "me_chan", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "me_le", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "me_red3", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "me_red4", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "me_white3", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "me_white4", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "me_name", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "me_balans", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "labelTime", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "timeWait", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "nodeWait", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "box_chip", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "users_bg", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "users_count", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "nodeBat", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "redx3", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "redx15", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "evenNode", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "oddNode", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "whitex15", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "whitex3", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "chip_1000", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "chip_10000", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "chip_50000", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "chip_100000", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "chip_1000000", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "chip_5000000", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "dot_red", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "dot_white", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "dot", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "log_chan", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "log_le", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "log_top", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "logMain", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "redH", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "miniNotice", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "Animation", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "prefabNotice", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "bet", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "listButtonBet", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d16cd2b78495461f211331584b52de9cf4e77740.js.map