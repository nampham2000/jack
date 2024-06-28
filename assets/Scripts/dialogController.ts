import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("dialogController")
export class dialogController extends Component {
  @property({ type: Node })
  private eventNode: Node;
  @property({ type: Node })
  private dialogNode: Node;
  start() {}

  update(deltaTime: number) {}

  private eventStatus() {
    console.log("aaaaaaaaa");

    if (this.eventNode.active === false && this.dialogNode.active === false) {
      this.dialogNode.active = true;
      this.eventNode.active = true;
    }
    // if (this.eventNode.active === true && this.dialogNode.active === true) {
    //   this.dialogNode.active = false;
    //   this.eventNode.active = false;
    // }
  }
}
