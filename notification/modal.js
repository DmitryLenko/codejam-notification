class Info {
  constructor() {
    this.payload = [
      'Email tip of the day',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response.',
      'Email tip of the day',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response .',
      'Email tip of the day',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response.',
      'Email tip of the day',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response .',
      'Email tip of the day',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a.',
    ];
    this.infobox = undefined;
    this.infoheader = undefined;
    this.infotext = undefined;
    this.begin = 0;
    this.end = 2;
    this.init = this.payload.slice(this.begin, this.end);
    this.createInfoheader();
    this.createInfotext();
    this.createInfoContainer();
  }

  right() {
    this.begin += 2;
    this.end += 2;
    this.init = this.payload.slice(this.begin, this.end);
    this.infoheader.innerHTML = this.init[0];
    this.infotext.innerHTML = this.init[1];
  }

  createInfoheader() {
    this.infoheader = document.createElement('h3');
    this.infoheader.classList.add('info-header');
    this.infoheader.innerHTML = this.init[0];
  }

  createInfotext() {
    this.infotext = document.createElement('p');
    this.infotext.classList.add('info-text');
    this.infotext.innerHTML = this.init[1];
  }

  createInfoContainer() {
    this.infobox = document.createElement('div');
    this.infobox.classList.add('info');
    this.infobox.appendChild(this.infoheader);
    this.infobox.appendChild(this.infotext);
  }
}

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

class SwapPanel extends Info {
  constructor() {
    super();
    this.el = document.createElement('buttom');
    this.ul = document.createElement('ul');
    this.li = document.createElement('li');
    this.item = document.createElement('i');
    this.el.classList.add('swap-buttom');
    this.buttomRight = '';
    this.buttomLeft = '';
    this.itemRight = this.item.cloneNode(true);
    this.itemLeft = this.item.cloneNode(true);
    this.createButtomRight();
    this.createButtomLeft();
    this.createList();
    this.container = document.createElement('div');
    this.container.classList.add('swap-container');
    this.container.classList.add('flex-container');
    this.container.appendChild(this.buttomLeft);
    this.container.appendChild(this.ul);
    this.container.appendChild(this.buttomRight);
  }

  createButtomRight() {
    this.buttomRight = this.el.cloneNode(true);
    this.buttomRight.appendChild(this.itemRight);
    this.buttomRight.setAttribute('onclick', 'modalWindow.rightBottomEvent()');
    this.buttomRight.classList.add('flex-container');
    this.itemRight.classList.add('fa');
    this.itemRight.classList.add('fa-angle-right');
  }

  createButtomLeft() {
    this.buttomLeft = this.el.cloneNode(true);
    this.buttomLeft.appendChild(this.itemLeft);
    this.buttomLeft.setAttribute('onclick', 'modalWindow.leftBottomEvent()');
    this.buttomLeft.classList.add('flex-container');
    this.itemLeft.classList.add('fa');
    this.itemLeft.classList.add('fa-angle-left');
  }

  createList() {
    this.ul.classList.add('check-list');
    this.ul.classList.add('flex-container');
    this.li.classList.add('check-item');
    for (let i = 0; i < this.payload.length; i += 2) {
      this.ul.appendChild(this.li.cloneNode(true));
    }
  }
}

class Popup {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal-container');
    this.buttom = new Exit();
    this.checkBtn = new CheckBox();
    this.info = new Info();
    this.swap = new SwapPanel();
    this.modal.appendChild(this.buttom.exit);
    this.modal.appendChild(this.checkBtn.checkContainer);
    this.modal.appendChild(this.info.infobox);
    this.checkBtn.checkContainer.appendChild(this.swap.container);
  }

  set() {
    document.body.appendChild(this.modal);
  }

  delette() {
    document.body.removeChild(this.modal);
  }

  rightBottomEvent() {
    this.info.right();
    console.log(this.swap.ul); 
    //this.info.end / 2;
  }

  leftBottomEvent() {
    console.log(this.swap);
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
