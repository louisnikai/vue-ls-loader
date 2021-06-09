import vueStorage from 'vue-ls'
import {
  validateStorage,
  createStorageOption
} from './settings'

export default {
  install(Vue, options = ["local"]) {
    options.forEach(item => {
      if (!validateStorage(item))
        return;
      
      vueStorage.install(Vue, createStorageOption(item));
    });
  }
}
