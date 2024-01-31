import React, { useState, useEffect } from 'react';
const Maps = () => {
    const [location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: "" },
      error: null
    });
  
    const onSuccess = location => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
        error: null
      });
    };
  
    const onError = error => {
      setLocation({
        loaded: true,
        error: error,
        coordinates: { lat: "", lng: "" }
      });
    };
  
    useEffect(() => {
      if (!("geolocation" in navigator)) {
        onError({
          code: 0,
          message: "Geolocation not supported",
        });
        return;
      }
  
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
  
    const mapCenter = `${location.coordinates.lat},${location.coordinates.lng}`;
    return(
            
                
                <div className="col-xs-12 col-sm-12">
                  <div className="panel panel-primary">
                    <div className="panel-heading ">
                      <h2 className="panel-title ">Konum Bilgisi</h2>
                    </div>
                    <div className="panel-body ">
                      <img
                        className="img img-responsive img-rounded"
                        alt="Konum Bilgisi"
                        src={`https://maps.googleapis.com/maps/api/staticmap?center=
                        ${mapCenter}&zoom=12&size=800x6000&markers=
                        ${mapCenter}&key=AIzaSyAEzIoP-2dTEjwDvmdGdlR_efaPJ9oQrMc`}

                      />
                    </div>
                  </div>
                </div>)
}
export default Maps;