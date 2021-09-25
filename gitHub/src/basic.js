
import React, { setState, useState, useRef } from "react";

import { MapContainer, TileLayer} from "react-leaflet";
import osm from "./osm-provider";
import "leaflet/dist/leaflet.css";

import GeojsonLayer from './GeojsonLayer'


const BasicMap = () => {

	const [center, setCenter] = useState({lat:55.757332, lng: 37.619374});
	const ZOOM_LEVEL = 9;
	const mapRef = useRef();
 
  const [geojsonvisible,setGeo] = useState(false);

  function onGeojsonToggle(bool) {
    setGeo(true)
  }

	return (

		<>
		<div className="row">
		<div className="col text-center">
			<div className="col">
				<MapContainer
				center={center}
				zoom={ZOOM_LEVEL}
				ref={mapRef}
				>


				<TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
								     <div className="geojson-toggle">
			            <label htmlFor="layertoggle"> Toggle Geojson </label>
			           
			            <input type="checkbox"
			            name="layertoggle" id="layertoggle"
			            value={geojsonvisible} onChange={onGeojsonToggle} />       
			            </div>

			            {
			        geojsonvisible && <GeojsonLayer url="geojson.json"/>

			            }

				</MapContainer>
			</div>
		</div>
		</div> 
		</>

	);
};

export default BasicMap;