import vueStorage from 'vue-ls'
import {
  convertOption,
  validateStorage,
  createStorageOption
} from './settings'

export default {
  install(Vue, options = ["local"]) {
    options.forEach(item => {
      let option = convertOption(item);
      if (!validateStorage(option.storage))
        return;

      vueStorage.install(Vue, createStorageOption(option.storage, option.namespace));
    });
  }
}
