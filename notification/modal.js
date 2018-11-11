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
    this.modal.appendChild(this.buttom.exit);
  }

  set() {
    document.body.appendChild(this.modal);
  }

  delette() {
    document.body.removeChild(this.modal);
  }
}


let isOpen = true;
const modalWindow = new Popup();

window.onload = function init() {
  setTimeout(() => {
    if (isOpen !== 'false') {
      modalWindow.set();
    }
  }, 5000);
};
