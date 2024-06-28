import {
  _decorator,
  Button,
  Component,
  director,
  EditBox,
  Label,
  Node,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Controller")
export class Controller extends Component {
  @property(Node)
  GuestLb: Node;
  @property(Node)
  LoginLb: Node;
  @property(Node)
  dialog: Node;
  @property(Node)
  signUp: Node;
  @property(Button)
  loginBtnopen: Button;
  @property(Node)
  guestNode: Node;
  @property(Node)
  profileNode: Node;
  @property(Node)
  eventNode: Node;
  @property(Node)
  minigameNode: Node;
  @property(Node)
  allgameNode: Node;
  @property(Node)
  selectMiniNode: Node;
  @property(Node)
  selectAllNode: Node;
  @property(Node)
  shopNode: Node;
  @property(Node)
  BankNode: Node;
  @property(Node)
  RutNode: Node;
  @property(Node)
  napNode: Node;
  @property(Node)
  selectNap: Node;
  @property(Node)
  selectRut: Node;
  @property(Node)
  MoreBankNode: Node;
  @property(Node)
  NoitceNode: Node;
  @property(EditBox)
  loginUsernameInput: EditBox = null;
  @property(EditBox)
  loginPasswordInput: EditBox = null;
  @property(EditBox)
  signUpUsernameInput: EditBox = null;
  @property(EditBox)
  signUpPasswordInput: EditBox = null;
  @property(EditBox)
  signUpConfirmPasswordInput: EditBox = null;
  @property(EditBox)
  editBoxMoney: EditBox = null;
  @property(EditBox)
  editBoxName: EditBox = null;
  @property(EditBox)
  editBoxTransactionID: EditBox = null;

  @property(EditBox)
  editBoxNH: EditBox = null;
  @property(EditBox)
  editBoxTK: EditBox = null;
  @property(EditBox)
  editBoxNameRut: EditBox = null;
  @property(EditBox)
  editBoxCN: EditBox = null;
  @property(EditBox)
  editBoxBalanceR: EditBox = null;

  @property(Label)
  STKLb: Label;
  @property(Label)
  CTKLb: Label;
  @property(Label)
  CNLb: Label;
  @property(Label)
  NDLb: Label;
  @property(Label)
  nameBankLb: Label;
  @property(Label)
  noticeLb: Label;
  @property(Label)
  balanceLb: Label;

  start() {
    this.editBoxMoney.node.on(
      "editing-did-ended",
      this.validateMoneyInput,
      this
    );

    // Gán sự kiện kiểm tra cho editBoxName
    this.editBoxName.node.on("editing-did-ended", this.validateNameInput, this);
  }

  update(deltaTime: number) {}

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
    this.profileNode.active = true;
    // this.loginBtnopen.node.active = true;
  }

  CloseProfile() {
    this.dialog.active = false;
    this.profileNode.active = false;

    // this.loginBtnopen.node.active = true;
  }

  log() {
    console.log("aaaaaaaaaa");
  }

  //   login() {
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
    const username = this.loginUsernameInput.string;
    const password = this.loginPasswordInput.string;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

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
    const username = this.signUpUsernameInput.string;
    const password = this.signUpPasswordInput.string;
    const confirmPassword = this.signUpConfirmPasswordInput.string;

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      console.log("Username already exists");
      return;
    }

    const newUser = {
      username: username,
      password: password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Sign-up successful");
    this.closeSignUpLb1();
  }
  private eventStatus() {
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

  inputbank(bank: string, stk: string, ctk: string, cn: string, nd: string) {
    this.nameBankLb.string = bank;
    this.STKLb.string = stk;
    this.CTKLb.string = ctk;
    this.CNLb.string = cn;
    this.NDLb.string = nd;
  }
  vietcombank() {
    this.MoreBankNode.active = false;
    this.inputbank(
      "VIETCOMBANK",
      "134354356544",
      "THÍCH CỜ BẠC",
      "HCM",
      "CHỈ CẦN NHẬP THÍCH CỜ BẠC "
    );
  }

  MBbank() {
    this.MoreBankNode.active = false;
    this.inputbank(
      "MBBANK",
      "12345676543",
      "THÍCH CỜ BẠC",
      "HCM",
      "CHỈ CẦN NHẬP THÍCH CỜ BẠC "
    );
  }
  TGBank() {
    this.MoreBankNode.active = false;
    this.inputbank(
      "TẠI GIA BANK",
      "123456789",
      "PHẠM THỊ HÀ ĐÔNG",
      "TẠI GIA",
      "CỜ BẠC LÀ CH*T VỚI BÀ"
    );
  }

  validateMoneyInput() {
    const money = this.editBoxMoney.string;
    const numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(money)) {
      console.log("Số tiền nạp phải là số");

      this.editBoxMoney.string = "";
      return;
    }
  }

  validateNameInput() {
    const name = this.editBoxName.string;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
      console.log("Họ tên người gửi phải là chữ");
      this.editBoxName.string = "";
      return;
    }
  }

  noitcenap() {
    if (
      this.editBoxMoney.string === "" ||
      this.editBoxName.string === "" ||
      this.editBoxTransactionID.string === ""
    ) {
      console.log("Thiếu nội dung");
      return;
    }

    const money = this.editBoxMoney.string;
    const name = this.editBoxName.string;
    const transactionID = this.editBoxTransactionID.string;
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
    if (
      this.editBoxNH.string === "" ||
      this.editBoxTK.string === "" ||
      this.editBoxNameRut.string === "" ||
      this.editBoxCN.string === "" ||
      this.editBoxBalanceR.string === ""
    ) {
      console.log("Thiếu nội dung");
      return;
    }
    const bank = this.editBoxNH.string;
    const Tk = this.editBoxTK.string;
    const name = this.editBoxNameRut.string;
    const CN = this.editBoxCN.string;
    const money = this.editBoxBalanceR.string;
    const MoneyInt = parseFloat(money);
    const moneyBalance = parseFloat(this.balanceLb.string);
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
  loadscene() {
    director.loadScene("xocxoc");
  }
}
