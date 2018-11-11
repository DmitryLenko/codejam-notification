class CheckBox {
  constructor() {
    this.check = undefined;
    this.checkContainer = undefined;
    this.checkinfo = undefined;
    this.content = '';
    this.craateCheck();
    this.createParagraph();
    this.createContainer();
  }

  craateCheck() {
    this.check = document.createElement('input');
    this.check.classList.add('check-style');
    this.check.setAttribute('type', 'checkbox');
    this.check.setAttribute('onclick', 'cheack()');
  }

  createParagraph() {
    this.checkinfo = document.createElement('p');
    this.content = document.createTextNode('Disable Tips');
    this.checkinfo.appendChild(this.content);
    this.checkinfo.classList.add('check-info');
  }

  createContainer() {
    this.checkContainer = document.createElement('div');
    this.checkContainer.classList.add('check-container');
    this.checkContainer.appendChild(this.check);
    this.checkContainer.appendChild(this.checkinfo);
  }
}

class Exit {
  constructor() {
    this.exit = document.createElement('buttom');
    this.item = document.createElement('i');
    this.item.classList.add('fa');
    this.item.classList.add('fa-times');
    this.exit.classList.add('exit-buttom');
    this.exit.appendChild(this.item);
    this.exit.setAttribute('onclick', 'modalWindow.delette()');
  }
}

class Popup {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal-container');
    this.buttom = new Exit();
    this.checkBtn = new CheckBox();
    this.modal.appendChild(this.buttom.exit);
    this.modal.appendChild(this.checkBtn.checkContainer);
  }

  set() {
    document.body.appendChild(this.modal);
  }

  delette() {
    document.body.removeChild(this.modal);
  }

  keyBoardEvent(event) {
    if (event.keyCode === 39) {
      this.rightBottomEvent();
    } else if (event.keyCode === 37) {
      this.leftBottomEvent();
    } else if (event.keyCode === 16) {
      window.localStorage.setItem('item', true);
    }
  }
}


let isOpen = window.localStorage.getItem('item');
const modalWindow = new Popup();

window.onload = function init() {
  document.body.setAttribute('onkeyup', 'modalWindow.keyBoardEvent(event)');
  setTimeout(() => {
    if (isOpen !== 'false') {
      modalWindow.set();
    }
  }, 5000);
};

function cheack() {
  isOpen = !isOpen;
  window.localStorage.setItem('item', isOpen);
}
