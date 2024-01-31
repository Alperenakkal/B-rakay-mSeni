import React from "react";
import advertDataService from '../services/advertDataService';
import AdvertList from "./AdvertList";
import Maps from "./Maps";
const Home =()=>{
    const [adverts, setAdverts] = React.useState(
        {
            data:[]
        }
    );

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
   
  console.log(adverts.data[0])
    return(
       
        <div className="list-group">
          <div className="home" >
            <div className="advertlist">
            <AdvertList adverts={adverts.data} admin={false} />
            </div>
            <div className="maps" >
            <Maps></Maps>
            </div>
          
            
            </div>
            
        </div> 
        )
}
export default Home ;