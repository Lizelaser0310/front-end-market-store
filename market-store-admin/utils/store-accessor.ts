import { Store } from "vuex";
import { getModule } from "nuxt-property-decorator";
import commonModule from "~/store/commonModule";

// eslint-disable-next-line import/no-mutable-exports
let commonStore: commonModule;

function initializeStores(store: Store<any>): void {
  commonStore = getModule(commonModule, store);
}

export { initializeStores, commonStore };
