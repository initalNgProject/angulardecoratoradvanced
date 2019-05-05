export class Mobile {
  EmiNo: number =5678;
  buutonClicked(){
    alert(this.EmiNo);
  }
  constructor(){
    console.log('mobile constructor');
  }
}
