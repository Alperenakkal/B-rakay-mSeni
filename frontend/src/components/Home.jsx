import React from "react";
import advertDataService from '../services/advertDataService';
import AdvertList from "./AdvertList";
import Maps from "./Maps";
import InputWithLabel from "./InputWithLabel";
const useCookies=(key,defaultValue)=>{
    const [cookie,setCookie]= React.useState(
        localStorage.getItem(key) || defaultValue
    );

    React.useEffect(() =>{
        localStorage.setItem(key,cookie);
    },[cookie,key]);
    return[cookie,setCookie];
    }
const Home =()=>{
    const [searchAdverts, setSearchAdverts] = useCookies("searchVenue" ,"");
    const [adverts, setAdverts] = React.useState(
        {
            data:[]
        });
    
    const search =(event)=>{
        setSearchAdverts(event.target.value);
    }

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                advertDataService.listAllAdvert().then(
                    result=>{
                        setAdverts({data:result.data})
                    }
                );
                
                console.log("Başarılı ekran");
            } catch (e) {
                console.log("Hata oluştu: " + e);
            }
        };
        

        fetchData();
    }, []);
    const filteredAdverts = adverts.data.filter(
        (advert) =>
          (advert.name ? advert.name.toLowerCase().includes(searchAdverts.toLowerCase()) : false) ||
          (advert.startLocation ? advert.startLocation.toLowerCase().includes(searchAdverts.toLowerCase()) : false) ||
          (advert.endLocation ? advert.endLocation.toLowerCase().includes(searchAdverts.toLowerCase()) : false)
      );
   
  console.log(adverts.data[0])
    return(
       
        <div className="list-group">
          <div className="home" >
          
            <div className="advertlist">
            <AdvertList adverts={filteredAdverts} admin={false} />
            </div>
            <div className="site-right" >
            <div className="search">
                <InputWithLabel
                id="arama"
                label="Advert Search:"
                type="text"
                isFocused
                onInputChange={search}
                value={searchAdverts}/>
            </div>
            <Maps></Maps>
            </div>
          
            
            </div>
            
        </div> 
        )
}
export default Home ;