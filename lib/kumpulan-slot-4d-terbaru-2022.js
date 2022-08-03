'use babel';

import SlotGacorTerbaik2022View from './slot-gacor-terbaik-2022-view';
import { CompositeDisposable } from 'atom';

export default {

  KumpulanSlot4DTerbaru2022: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.KumpulanSlot4DTerbaru2022 = new SlotGacorTerbaik2022View(state.KumpulanSlot4DTerbaru2022State);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.KumpulanSlot4DTerbaru2022.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-gacor-terbaik-2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.KumpulanSlot4DTerbaru2022.destroy();
  },

  serialize() {
    return {
      KumpulanSlot4DTerbaru2022State: this.KumpulanSlot4DTerbaru2022.serialize()
    };
  },

  toggle() {
    console.log('SlotGacorTerbaik2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
