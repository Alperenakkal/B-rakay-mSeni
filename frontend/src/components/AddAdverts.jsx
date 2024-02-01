import React from "react"
import advertDataService from "../services/advertDataService"
import Button from "./Button"
import {useNavigate} from "react-router-dom"
const AddAdverts =()=>{
    let navigate= useNavigate()
    const [adverts,setAdverts]=React.useState(
        {
            data:[],
        }
    )
    const onSubmit=(evt)=>
    {
        const formData=evt.target.elements;
        evt.preventDefault();
        var newAdvert ={
            name:formData.name.value,
            startLocation:formData.startLocation.value,
            endLocation:formData.endLocation.value,
            days:formData.gun.value,
            open:formData.saat.value,
        }
        console.log(newAdvert)
        advertDataService.addAdvert(newAdvert).then(()=>{
            console.log("Başarılı bir şekilde eklendi")
            navigate("/");
        }
        ).catch(console.error())
        
        
    }

    return(
        <div className="form-container form-spacing">
        
        <div className="col-xs-12 col-md-6">
            <form className="form-horizontal" id="addAdvet" onSubmit={(evt)=>onSubmit(evt)}>
                <div className="form-group">
                    <label className="col-xs-10 col-sm-2 control-label">Ad:</label>
                    <div className="col-xs-12 col-sm-10">
                        <input 
                        className="form-control"
                        name="name"
                        defaultValue={adverts.data.name ? adverts.data.name:""}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-10 col-sm-2 control-label">Başlangıç Noktası: </label>
                    <div className="col-xs-12 col-sm-10">
                        <input 
                        className="form-control"
                        name="startLocation"
                        defaultValue={adverts.data.startLocation ? adverts.data.startLocation:""}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-10 col-sm-2 control-label">Varis Noktasi: </label>
                    <div className="col-xs-12 col-sm-10">
                        <input 
                        className="form-control"
                        name="endLocation"
                        defaultValue={adverts.data.endLocation ? adverts.data.endLocation:""}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-10 col-sm-2 control-label">Günü:</label>
                    <div className="col-xs-12 col-sm-10">
                        <input 
                        className="form-control"
                        name="gun"
                        defaultValue={adverts.data.days ? adverts.data.days:""}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-10 col-sm-2 control-label">Saat:</label>
                    <div className="col-xs-12 col-sm-10">
                        <input 
                        className="form-control"
                        name="saat"
                        defaultValue={adverts.data.open ? adverts.data.open:""}
                        />
                    </div>
                </div>
                <Button name="Ekle" type="primary" ></Button>
            </form>

        </div>
        </div>
        
        
    )
}
export default AddAdverts;