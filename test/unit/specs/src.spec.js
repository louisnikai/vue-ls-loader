import Vue from "vue";
import VueLsLoader from "@/index";

describe('VueLsLoader', () => {
  it('Test use VueLsLoader', () => {
    Vue.use(VueLsLoader, [{
      storage: "local",
      namespace: "ls"
    }, {
      storage: "session",
      namespace: "ss"
    }, , {
      storage: "memory",
      namespace: "ms"
    }]);

    const result = !!Vue.ls && !!Vue.ss && !!Vue.ms;
    console.log("Test use VueLsLoader result: ", result);

    expect(result).toEqual(true);
  });
})
