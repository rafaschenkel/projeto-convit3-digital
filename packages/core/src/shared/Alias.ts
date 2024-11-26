export default class Alias {
  static formatar(alias: string): string {
    return alias.replace(/ /g, "-").toLowerCase();
  }
}
