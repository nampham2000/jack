import {
  _decorator,
  Component,
  Node,
  PageView,
  PageViewIndicatorComponent,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("abs")
export class abs extends Component {
  @property(PageView)
  private pageView: PageView;
  private interval: number = 5;
  currentPage;
  start() {
    this.currentPage = 0;
    this.schedule(this.nextPage, this.interval);
  }

  update(deltaTime: number) {}

  nextPage() {
    let pageCount = this.pageView.getPages().length;
    this.currentPage = (this.currentPage + 1) % pageCount;
    this.pageView.scrollToPage(this.currentPage, 0.5); // Chuyển trang với thời gian 0.5 giây
  }
}
