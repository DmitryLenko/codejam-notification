class Info {
  constructor() {
    this.payload = [
      'Email tip of the day1',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response.',
      'Email tip of the day2',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response .',
      'Email tip of the day3',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response.',
      'Email tip of the day4',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a response .',
      'Email tip of the day5',
      'More than 60% of emails we send '
      + 'do not requaer a response. '
      + 'Use "No response need" to make sure'
      + 'recipients know that a.',
    ];
    this.infobox = undefined;
    this.infoheader = undefined;
    this.infotext = undefined;
    this.headerArray = this.payload.filter((item, index) => index % 2 === 0);
    this.textArray = this.payload.filter((item, index) => index % 2 !== 0);
    this.createInfoheader();
    this.createInfotext();
    this.createInfoContainer();
  }

  createInfoheader() {
    this.infoheader = document.createElement('h3');
    this.infoheader.classList.add('info-header');
  }

  createInfotext() {
    this.infotext = document.createElement('p');
    this.infotext.classList.add('info-text');
  }

  createInfoContainer() {
    this.infobox = document.createElement('div');
    this.infobox.classList.add('info');
    this.headerArray.forEach((element, index) => {
      this.infoheader.innerHTML = element;
      if (index !== 0) {
        this.infoheader.style.display = 'none';
      }
      this.infobox.appendChild(this.infoheader.cloneNode(true));
    });
    this.textArray.forEach((element, index) => {
      this.infotext.innerHTML = element;
      if (index !== 0) {
        this.infotext.style.display = 'none';
      }
      this.infobox.appendChild(this.infotext.cloneNode(true));
    });
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
    this.check.setAttribute('onclick', 'modalWindow.cheack()');
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
    this.slideIndex = 0;
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
    this.buttomRight.setAttribute('onclick', 'modalWindow.rightBottomEvent(1)');
    this.buttomRight.classList.add('flex-container');
    this.itemRight.classList.add('fa');
    this.itemRight.classList.add('fa-angle-right');
  }

  createButtomLeft() {
    this.buttomLeft = this.el.cloneNode(true);
    this.buttomLeft.appendChild(this.itemLeft);
    this.buttomLeft.setAttribute('onclick', 'modalWindow.leftBottomEvent(-1)');
    this.buttomLeft.classList.add('flex-container');
    this.itemLeft.classList.add('fa');
    this.itemLeft.classList.add('fa-angle-left');
  }

  createList() {
    this.ul.classList.add('check-list');
    this.ul.classList.add('flex-container');
    this.li.classList.add('check-item');
    for (let i = 0; i < this.payload.length; i += 2) {
      if (i === 0) {
        this.li.classList.add('color-item');
      } else { this.li.classList.remove('color-item'); }
      this.ul.appendChild(this.li.cloneNode(true));
    }
  }

  swapInit(n) {
    this.slideIndex += n;
    const header = document.getElementsByClassName('info-header');
    const text = document.getElementsByClassName('info-text');
    const check = document.getElementsByClassName('check-item');
    const val = 1;
    if (this.slideIndex >= header.length) { this.slideIndex = 0; }
    if (this.slideIndex < 0) { this.slideIndex = header.length - 1; }
    for (let i = 0; i < header.length; i += val) {
      header[i].style.display = 'none';
      text[i].style.display = 'none';
    }
    for (let i = 0; i < check.length; i += val) {
      check[i].className = check[i].className.replace('color-item', '');
    }
    header[this.slideIndex].style.display = 'block';
    text[this.slideIndex].style.display = 'block';
    check[this.slideIndex].className += ' color-item';
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
    this.isOpen = window.localStorage.getItem('item') === undefined ? true : window.localStorage.getItem('item');
    this.modal.appendChild(this.buttom.exit);
    this.modal.appendChild(this.checkBtn.checkContainer);
    this.modal.appendChild(this.info.infobox);
    this.checkBtn.checkContainer.appendChild(this.swap.container);
  }

  set() {
    if (this.isOpen !== 'false') { document.body.appendChild(this.modal); }
  }

  delette() {
    document.body.removeChild(this.modal);
  }

  rightBottomEvent(val) {
    this.swap.swapInit(val);
  }

  leftBottomEvent(val) {
    this.swap.swapInit(val);
  }

  cheack() {
    this.isOpen = !this.isOpen;
    window.localStorage.setItem('item', this.isOpen);
  }

  keyBoardEvent(event) {
    const left = -1;
    const right = 1;
    if (event.keyCode === 39) {
      this.rightBottomEvent(right);
    } else if (event.keyCode === 37) {
      this.leftBottomEvent(left);
    } else if (event.keyCode === 16) {
      window.localStorage.setItem('item', true);
    } else if (event.keyCode === 27) {
      this.delette();
    } else if (event.keyCode === 13) {
      this.isOpen = true;
      this.set();
    }
  }
}

const modalWindow = new Popup();

window.onload = function init() {
  document.body.setAttribute('onkeyup', 'modalWindow.keyBoardEvent(event)');
  setTimeout(() => {
    modalWindow.set();
  }, 5000);
};
