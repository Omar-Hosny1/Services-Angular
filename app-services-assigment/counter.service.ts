export class CounterService {
  acToIn = 0;
  inToAc = 0;
  acToInIncrement() {
    this.acToIn++;
    console.log(`AC TO IN : ${this.acToIn}`);
  }
  inToAcIncrement() {
    this.inToAc++;
    console.log(`IN TO AC : ${this.inToAc}`);
  }
}
