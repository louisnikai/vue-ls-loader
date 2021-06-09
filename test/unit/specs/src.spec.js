import Vue from "vue";
import VueLsLoader from "@/index";

describe('VueLsLoader', () => {
  it('Test use VueLsLoader', () => {
    Vue.use(VueLsLoader, ["local", "session", "memory"]);

    const result = !!Vue.ls && !!Vue.ss && !!Vue.ms;
    console.log("Test use VueLsLoader result: ", result);

    expect(result).toEqual(true);
  });
})
