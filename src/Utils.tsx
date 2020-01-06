export let utils = {
  log(text: string, type: string = ""): void {
    let date: Date | string = new Date();
    date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let message = `<p class='message ${type}'>${date} - ${text}</p>`;
    var div = document.getElementsByClassName("logs")[0];
    div.innerHTML += message;
    div.scrollTop = div.scrollHeight;
  },
  randomInt(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  capFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
};
