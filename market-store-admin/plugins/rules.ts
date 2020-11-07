import { Vue, Component } from "nuxt-property-decorator";

type Rule = Array<Function>;
type vInput = string | undefined | null | number;

const MIN_PASSWORD_LENGTH = 6;

@Component
class RuleMixin extends Vue {
  requiredRule: Rule = [
    (v: vInput) =>
      (typeof v === "string" && v.trim().length > 0) ||
      "Este campo es requerido",
  ];

  requiredNumberRule: Rule = [
    (v: vInput) =>
      (typeof v === "string" && Number(v) >= 0) ||
      "Este campo debe ser mayor o igual a 0",
  ];

  requiredSelectNumberRule: Rule = [
    (v: vInput) =>
      (typeof v === "number" && v > 0) || "Este campo es requerido",
  ];

  fileRequiredRule: Rule = [(v: any) => !!v || "Seleccione un archivo"];

  filesRequiredRule: Rule = [
    (v: Array<any>) =>
      (Array.isArray(v) && v.length > 0) || "Seleccione al menos un archivo",
  ];

  emailRule: Rule = this.requiredRule.concat([
    (v: string) => /.+@.{2,}\..{2,}/.test(v) || "El email es inválido",
  ]);

  passwordRule: Rule = this.requiredRule.concat([
    (v: string) =>
      v.length >= MIN_PASSWORD_LENGTH || "Al menos {number} carácteres",
    // , { number: MIN_PASSWORD_LENGTH }
  ]);
}

Vue.mixin(RuleMixin);
