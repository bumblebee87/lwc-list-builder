import { LightningElement,track } from "lwc";

export default class App extends LightningElement {
 rooms = [
   {Id: '8103', Name: 'Colt', Type: '3-Bed'},
   {Id: '5979', Name: 'Rain', Type: '5-Bed'},
   {Id: '4107', Name: 'Terrain', Type: 'Studio'},
   {Id: '7642', Name: 'Cart', Type: '1-Bed'},
   {Id: '2441', Name: 'Train', Type: 'Studio'},
   {Id: '3695', Name: 'Put-Put', Type: '1-Bed'},
   {Id: '6985', Name: 'Ant', Type: 'Studio'},
   {Id: '2812', Name: 'Antler', Type: '1-Bed'},
   {Id: '8821', Name: 'Bart', Type: 'Studio'},
   {Id: '3215', Name: 'Plant', Type: 'Studio'},
   {Id: '3132', Name: 'Plain', Type: '6-Bed'},
   {Id: '4936', Name: 'Ads', Type: 'Studio'}];


   orgRooms = [
   {Id: '8103', Name: 'Colt', Type: '3-Bed'},
   {Id: '5979', Name: 'Rain', Type: '5-Bed'},
   {Id: '4107', Name: 'Terrain', Type: 'Studio'},
   {Id: '7642', Name: 'Cart', Type: '1-Bed'},
   {Id: '2441', Name: 'Train', Type: 'Studio'},
   {Id: '3695', Name: 'Put-Put', Type: '1-Bed'},
   {Id: '6985', Name: 'Ant', Type: 'Studio'},
   {Id: '2812', Name: 'Antler', Type: '1-Bed'},
   {Id: '8821', Name: 'Bart', Type: 'Studio'},
   {Id: '3215', Name: 'Plant', Type: 'Studio'},
   {Id: '3132', Name: 'Plain', Type: '6-Bed'},
   {Id: '4936', Name: 'Ads', Type: 'Studio'}];
  @track tempArr=[];
  
  savedSection = false;
  hideSelection = true;
  @track aptName;
  connectedCallback(){
    this.hideSelection = false;
    this.savedSection = false;
  }
   handleSel(event){
     let orgiArray = this.rooms;
     let recSel = event.currentTarget.name;
     let valSel = orgiArray.find(({Id}) => Id === recSel);
     let obj ={};
     obj["Id"] = valSel.Id;
     obj["Name"] = valSel.Name;
     if(!this.tempArr.find(({Id}) => Id === recSel)){
       this.tempArr.push(obj);
     }else{
       let indexTm = this.tempArr.map(object => object.Id).indexOf(recSel);
       if(indexTm > -1){
         this.tempArr.splice(indexTm,1);
       }
     }
   }

   handleSaveClick(){
     this.savedSection= true;
     this.hideSelection= true;

   }

   handleBack(){
    this.savedSection= false;
    this.hideSelection= false;
   }
   handleGetSelectedApt(event){ 
    this.aptName = event.target.value;      
}
}
