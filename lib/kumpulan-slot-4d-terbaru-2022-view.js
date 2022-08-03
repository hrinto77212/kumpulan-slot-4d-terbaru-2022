'use babel';

export default class KumpulanSlot4DTerbaru2022 {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('kumpulan-slot-4d-terbaru-2022');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The KumpulanSlot4DTerbaru2022 package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
