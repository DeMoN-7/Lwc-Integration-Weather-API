import { LightningElement,wire,track } from 'lwc';
import getWeather from '@salesforce/apex/getWeather.getWeather1';
export default class WeatherComponent extends LightningElement {
    @track city='';
    @track weather;
    @track condition;
    @wire(getWeather,{city:'$city'})
    wiredata({error,data}){
        if(data){
             const parsed = typeof data === 'string' ? JSON.parse(data) : data;
             if (parsed && parsed.main && parsed.weather) {
            this.weather = (parsed.main.temp - 273.15).toFixed(1);
            this.condition = parsed.weather[0].main;
        }
        }
        else{
            console.error(error);
        }
    }
    handleClick(event){
        this.city=this.template.querySelector('lightning-input').value;
    }


}