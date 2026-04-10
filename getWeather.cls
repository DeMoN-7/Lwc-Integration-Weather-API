public with sharing class getWeather {
    @AuraEnabled(Cacheable=true)
    public static string getWeather1(string city) {
        Http hp=new Http();
        HttpRequest req=new HttpRequest();

        req.setEndpoint('https://api.openweathermap.org/data/2.5/weather' + 
            '?q=' + EncodingUtil.urlEncode(city, 'UTF-8') + 
            '&appid=YOUR_API_KEY');
        
        req.setMethod('GET');
        HttpResponse res=hp.send(req);
        return res.getBody();
    }
}