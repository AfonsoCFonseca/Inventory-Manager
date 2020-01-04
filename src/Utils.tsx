export class Utils {
  public static log(text: string, type: string = ""): void {
    let date: Date | string = new Date();
    date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let message = `<p class='message ${type}'>${date} - ${text}</p>`;
    console.log(message);
    var div = document.getElementsByClassName("logs")[0];
    div.innerHTML += message;
    div.scrollTop = div.scrollHeight;
  }
}
