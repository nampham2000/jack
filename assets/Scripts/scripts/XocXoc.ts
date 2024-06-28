import {
  _decorator,
  Component,
  Node,
  Label,
  AudioSource,
  SpriteFrame,
  Sprite,
  Animation,
  Prefab,
  Vec2,
  Vec3,
  instantiate,
  tween,
  Button,
  UITransform,
  Color,
  director,
} from "cc";

const { ccclass, property } = _decorator;

@ccclass("XocXoc")
export class XocXoc extends Component {
  @property(AudioSource) audioMoBat: AudioSource = null;
  @property(AudioSource) audioSingleChip: AudioSource = null;
  @property(AudioSource) audioMultiChip: AudioSource = null;
  @property(AudioSource) audioXocDia: AudioSource = null;

  @property(AudioSource) audioMultiChip2: AudioSource = null;
  @property(AudioSource) audioMultiChip3: AudioSource = null;
  @property(AudioSource) audioMultiChip4: AudioSource = null;
  @property(AudioSource) audioMultiChip5: AudioSource = null;

  @property(Node) box_chan: Node = null;
  @property(Node) box_le: Node = null;
  @property(Node) box_red3: Node = null;
  @property(Node) box_red4: Node = null;
  @property(Node) box_white3: Node = null;
  @property(Node) box_white4: Node = null;

  @property(Label) total_chan: Label = null;
  @property(Label) total_le: Label = null;
  @property(Label) total_red3: Label = null;
  @property(Label) total_red4: Label = null;
  @property(Label) total_white3: Label = null;
  @property(Label) total_white4: Label = null;

  @property(Label) me_chan: Label = null;
  @property(Label) me_le: Label = null;
  @property(Label) me_red3: Label = null;
  @property(Label) me_red4: Label = null;
  @property(Label) me_white3: Label = null;
  @property(Label) me_white4: Label = null;

  @property(Label) me_name: Label = null;
  @property(Label) me_balans: Label = null;

  @property(Label) labelTime: Label = null;
  @property(Label) timeWait: Label = null;
  @property(Node) nodeWait: Node = null;

  @property(Node) box_chip: Node = null;

  @property(Node) users_bg: Node = null;
  @property(Label) users_count: Label = null;

  @property(Node) nodeBat: Node = null;
  @property(Node) redx3: Node = null;
  @property(Node) redx15: Node = null;
  @property(Node) evenNode: Node = null;
  @property(Node) oddNode: Node = null;
  @property(Node) whitex15: Node = null;
  @property(Node) whitex3: Node = null;

  @property(SpriteFrame) chip_1000: SpriteFrame = null;
  @property(SpriteFrame) chip_10000: SpriteFrame = null;
  @property(SpriteFrame) chip_50000: SpriteFrame = null;
  @property(SpriteFrame) chip_100000: SpriteFrame = null;
  @property(SpriteFrame) chip_1000000: SpriteFrame = null;
  @property(SpriteFrame) chip_5000000: SpriteFrame = null;

  @property(SpriteFrame) dot_red: SpriteFrame = null;
  @property(SpriteFrame) dot_white: SpriteFrame = null;

  @property([Sprite]) dot: Sprite[] = [];

  @property(Label) log_chan: Label = null;
  @property(Label) log_le: Label = null;
  @property(Node) log_top: Node = null;
  @property(Node) logMain: Node[] = [];

  @property(Node) redH: Node = null;
  @property(Node) miniNotice: Node = null;
  @property(Animation) Animation: Animation = null;
  @property(Prefab) prefabNotice: Prefab = null;

  @property({ type: Node })
  bet: Node[] = [];

  @property(Node) loading: Node = null;
  @property({ type: [Button] })
  listButtonBet: Button[] = [];
  private logs: any[] = [];
  private nan: boolean = false;
  private cuoc: string = "1000";
  private countdownTime: number = 30;
  private choosenChip: string = "1000";
  private gameEnd: boolean = false;
  private maxDot = { x: 39, y: 19 };
  private maxBox1_3 = { x: -10, y: 0 };
  private maxBox1_1 = { x: -10, y: 0 };
  public listScore: String[] = [
    "1000",
    "10000",
    "50000",
    "100000",
    "1000000",
    "5000000",
  ];
  private clients = {
    red: {
      chan: 0,
      le: 0,
      red3: 0,
      red4: 0,
      white3: 0,
      white4: 0,
    },
  };

  private users = {
    red: {
      chan: 0,
      le: 0,
      red3: 0,
      red4: 0,
      white3: 0,
      white4: 0,
    },
  };

  onLoad() {
    // Các thiết lập và khởi tạo game ban đầu, ví dụ:
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
      const data = this.generateRandomData();
      this.setDot(data);
      this.gameEnd = true;
      tween(this.nodeBat)
        .to(1, { position: new Vec3(121, 200) })
        .call(() => {
          this.showKQ(data);
          this.showKQ2(data);
          setTimeout(() => {
            this.reset();
          }, 7000);
        })
        .start();
    }
  }

  updateCountdownLabel() {
    this.timeWait.string = this.countdownTime.toString();
  }

  start() {
    this.Animation.play();
    this.Animation.on(
      Animation.EventType.FINISHED,
      this.onAnimationFinished,
      this
    );
    let previousButton = null;

    for (let i = 0; i < this.listButtonBet.length; i++) {
      let button = this.listButtonBet[i];

      button.node.on(Button.EventType.CLICK, () => {
        // Nếu có nút được nhấp trước đó, đặt lại kích thước của nó
        if (previousButton) {
          previousButton.node.scale = new Vec3(1, 1, 1);
          previousButton.node.children[0].active = false;
          previousButton.node.getComponent(Sprite).color = new Color(
            255,
            255,
            255,
            128
          );
        }

        // Thay đổi kích thước của nút được nhấp hiện tại
        button.node.scale = new Vec3(1.2, 1.2, 1.2);
        button.node.children[0].active = true;
        button.node.getComponent(Sprite).color = new Color(255, 255, 255, 255);

        previousButton = button;
        // this.AudioController.onAudio(7);
        // Cập nhật dữ liệu hoặc thực hiện các thao tác khác
        this.choosenChip = this.listScore[i].toString();
        // this.buttonPub = button;
        console.log(this.choosenChip);
      });
    }
  }

  update(deltaTime: number) {
    // Update logic
  }

  generateRandomData(): boolean[] {
    let data: boolean[] = [];
    for (let i = 0; i < 4; i++) {
      let randomBoolean = Math.random() < 0.5;
      data.push(randomBoolean);
    }
    return data;
  }

  showKQ(data: boolean[]) {
    let numb = 0;
    data.forEach((dot) => {
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

  setDot(data: boolean[]) {
    const randomPosition = () => {
      let Dot_x = Math.floor(Math.random() * (this.maxDot.x + 1));
      let Dot_y = Math.floor(Math.random() * (this.maxDot.y + 1));
      let DotCheck = Dot_y - Dot_x;
      if (DotCheck > 22) {
        Dot_y = Dot_y - Dot_y / 1.4;
      }
      return new Vec3(Dot_x, Dot_y);
    };

    this.dot.forEach((dot, index) => {
      let position = randomPosition();
      dot.node.position = position;

      let check = data[index];
      if (check) {
        dot.spriteFrame = this.dot_red;
      } else {
        dot.spriteFrame = this.dot_white;
      }
    });
  }

  meChip(data: { cuoc: string; box: string }) {
    let v3 = new Vec3();
    let PosTarget;
    let nodeBet: Node = null;
    let nodeBox: Node = null;
    let max = this.maxBox1_3;

    this.bet.forEach((bet) => {
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

    const newN = new Node();
    const sprite = newN.addComponent(Sprite);
    sprite.spriteFrame = this[`chip_${data.cuoc}`];
    newN.setPosition(v3);

    const x = Math.random() * (max.x + 1);
    const y = Math.random() * (max.y + 1);

    nodeBox.children[1].addChild(newN);
    tween(newN)
      .to(0.3, { scale: new Vec3(0.3, 0.3), position: new Vec3(x, y) })
      .start();
  }

  betchan() {
    if (this.gameEnd === false) {
      this.meChip({ cuoc: this.choosenChip, box: "chan" });
    }
  }

  betle() {
    if (this.gameEnd === false) {
      this.meChip({ cuoc: this.choosenChip, box: "le" });
    }
  }

  betred3() {
    if (this.gameEnd === false) {
      this.meChip({ cuoc: this.choosenChip, box: "red3" });
    }
  }

  betred4() {
    if (this.gameEnd === false) {
      this.meChip({ cuoc: this.choosenChip, box: "red4" });
    }
  }

  betwhite3() {
    if (this.gameEnd === false) {
      this.meChip({ cuoc: this.choosenChip, box: "white3" });
    }
  }

  betwhite4() {
    if (this.gameEnd === false) {
      this.meChip({ cuoc: this.choosenChip, box: "white4" });
    }
  }

  showKQ2(data1: any) {
    let audioLost = 0;
    let audioWin = 0;
    let node1: Node = null;
    let node2: Node = null;
    let data = data1;
    let numb = 0;
    let v3 = new Vec3();
    let v32 = new Vec3();
    let v33 = new Vec3();
    let v34 = new Vec3();
    let v35 = new Vec3();
    let v36 = new Vec3();

    let v37 = new Vec3();

    let v38 = new Vec3();
    let v39 = new Vec3();
    let v40 = new Vec3();

    data.forEach((dot) => {
      if (dot) {
        numb++;
      }
    });

    // let position = this.box_chip.parent.getWorldPosition();
    let centerMid = null;
    let centerLR = null;

    if (!(numb % 2)) {
      node1 = this.box_chan.children[1];
      audioLost += this.box_le.children[1].children.length;
      // centerMid = this.box_le.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);
      centerMid = this.box_le.children[1].inverseTransformPoint(
        v3,
        this.box_chip.parent.worldPosition
      );
      this.box_le.children[1].children.forEach((chip) => {
        tween(chip)
          .parallel(
            tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
            tween(chip).to(0.4, { position: centerMid })
          )
          .start();
      });
    } else {
      node1 = this.box_le.children[1];
      audioLost += this.box_chan.children[1].children.length;
      centerMid = this.box_chan.children[1].inverseTransformPoint(
        v3,
        this.box_chip.parent.worldPosition
      );
      this.box_chan.children[1].children.forEach((chip) => {
        tween(chip)
          .parallel(
            tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
            tween(chip).to(0.4, { position: centerMid })
          )
          .start();
      });
    }

    // let red3 = this.box_red3.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);
    let red3 = this.box_red3.children[1].inverseTransformPoint(
      v32,
      this.box_chip.parent.worldPosition
    );

    // let red4 = this.box_red4.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);
    let red4 = this.box_red4.children[1].inverseTransformPoint(
      v33,
      this.box_chip.parent.worldPosition
    );

    // let white3 = this.box_white3.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);

    let white3 = this.box_white3.children[1].inverseTransformPoint(
      v34,
      this.box_chip.parent.worldPosition
    );
    // let white4 = this.box_white4.children[1].getComponent(UITransform).convertToNodeSpaceAR(position);

    let white4 = this.box_white4.children[1].inverseTransformPoint(
      v35,
      this.box_chip.parent.worldPosition
    );

    switch (numb) {
      case 0:
        node2 = this.box_white4.children[1];
        audioLost +=
          this.box_red3.children[1].children.length +
          this.box_red4.children[1].children.length +
          this.box_white3.children[1].children.length;
        this.box_red3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red3 })
            )
            .start();
        });
        this.box_red4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red4 })
            )
            .start();
        });
        this.box_white3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white3 })
            )
            .start();
        });
        break;

      case 1:
        node2 = this.box_white3.children[1];
        audioLost +=
          this.box_red3.children[1].children.length +
          this.box_red4.children[1].children.length +
          this.box_white4.children[1].children.length;
        this.box_red3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red3 })
            )
            .start();
        });
        this.box_red4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red4 })
            )
            .start();
        });
        this.box_white4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white4 })
            )
            .start();
        });
        break;

      case 2:
        audioLost +=
          this.box_red3.children[1].children.length +
          this.box_red4.children[1].children.length +
          this.box_white3.children[1].children.length +
          this.box_white4.children[1].children.length;
        this.box_red3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red3 })
            )
            .start();
        });
        this.box_red4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red4 })
            )
            .start();
        });
        this.box_white3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white3 })
            )
            .start();
        });
        this.box_white4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white4 })
            )
            .start();
        });
        break;

      case 3:
        node2 = this.box_red3.children[1];
        audioLost +=
          this.box_white3.children[1].children.length +
          this.box_red4.children[1].children.length +
          this.box_white4.children[1].children.length;
        this.box_white3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white3 })
            )
            .start();
        });
        this.box_red4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red4 })
            )
            .start();
        });
        this.box_white4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white4 })
            )
            .start();
        });
        break;

      case 4:
        node2 = this.box_red4.children[1];
        audioLost +=
          this.box_white3.children[1].children.length +
          this.box_red3.children[1].children.length +
          this.box_white4.children[1].children.length;
        this.box_white3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white3 })
            )
            .start();
        });
        this.box_red3.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: red3 })
            )
            .start();
        });
        this.box_white4.children[1].children.forEach((chip) => {
          tween(chip)
            .parallel(
              tween(chip).to(0.4, { scale: new Vec3(0.5, 0.5, 0.5) }),
              tween(chip).to(0.4, { position: white4 })
            )
            .start();
        });
        break;
    }
    // !!audioLost && this.audioMultiChip.play();
    this.scheduleOnce(() => {
      audioWin += node1.children.length;
      node1.children.forEach((chip) => {
        let copy = instantiate(chip);
        copy.setPosition(centerMid);
        copy.setScale(new Vec3(0.5, 0.5, 0.5));

        let x = Math.floor(Math.random() * (this.maxBox1_1.x + 1));
        let y = Math.floor(Math.random() * (this.maxBox1_1.y + 1));

        node1.addChild(copy);
        tween(copy)
          .sequence(
            tween(copy).parallel(
              tween(copy).to(0.4, { scale: new Vec3(0.3, 0.3, 0.3) }),
              tween(copy).to(0.4, { position: new Vec3(x, y, 0) })
            ),
            tween(copy).sequence(
              tween(copy).to(0.1, { position: new Vec3(x, y - 6, 0) }),
              tween(copy).to(0.1, { position: new Vec3(x, y, 0) })
            )
          )
          .start();
      });

      if (node2) {
        audioWin += node2.children.length;
        // let node2red = node2.getComponent(UITransform).convertToNodeSpaceAR(position);

        let node2red = node2.inverseTransformPoint(
          v36,
          this.box_chip.parent.worldPosition
        );
        node2.children.forEach((chip) => {
          let copy = instantiate(chip);
          copy.setPosition(node2red);
          copy.setScale(new Vec3(0.5, 0.5, 0.5));

          let x = Math.floor(Math.random() * (this.maxBox1_3.x + 1));
          let y = Math.floor(Math.random() * (this.maxBox1_3.y + 1));

          node2.addChild(copy);
          tween(copy)
            .sequence(
              tween(copy).parallel(
                tween(copy).to(0.4, { scale: new Vec3(0.3, 0.3, 0.3) }),
                tween(copy).to(0.4, { position: new Vec3(x, y, 0) })
              ),
              tween(copy).sequence(
                tween(copy).to(0.1, { position: new Vec3(x, y - 6, 0) }),
                tween(copy).to(0.1, { position: new Vec3(x, y, 0) })
              )
            )
            .start();
        });
      }
      // if (audioWin) {
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
        console.log(this.me_balans.node);

        // let positionUser = this.users_bg.parent.getWorldPosition();
        // let position1_1 = node1.getComponent(UITransform).convertToNodeSpaceAR(positionUser);
        let position1_1 = node1.inverseTransformPoint(
          v36,
          this.me_balans.node.worldPosition
        );
        console.log("chay2");

        node1.children.forEach((chip) => {
          console.log("chay 3");

          // tween(chip)
          //     .parallel(
          //         // tween(chip).to(0.4, { opacity: 0 }),
          tween(chip)
            .to(0.4, { position: position1_1 })
            // )
            .start();
          console.log("chay 4");
        });
        if (node2) {
          console.log("chay 5");

          // let position1_3 = node2.getComponent(UITransform).convertToNodeSpaceAR(positionUser);
          let position1_3 = node2.inverseTransformPoint(
            v36,
            this.me_balans.node.worldPosition
          );

          node2.children.forEach((chip) => {
            // tween(chip)
            //     .parallel(
            // tween(chip).to(0.4, { opacity: 0 }),
            tween(chip)
              .to(0.4, { position: position1_3 })
              // )
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
    tween(this.nodeBat)
      .to(1, { position: new Vec3(0, 0) })
      .call(() => {
        this.Animation.play();
        this.Animation.on(
          Animation.EventType.FINISHED,
          this.onAnimationFinished,
          this
        );
      })
      .start();
  }
}
