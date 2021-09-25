import React, {useEffect, useState} from 'react';
import { GeoJSON, FeatureGroup, Popup} from 'react-leaflet'
import "./GeojsonLayer.css"

function GeojsonLayer(props){

	const {url} = props;
	const [data, setData] = useState([]);

	function fetchData(url) {

		let request = fetch(url);

		request
		.then(r => r.json())
		.then(data => {
			setData(data.features);
			console.log(data.features)
			}, (error) => {
				console.error(error);
			});

	}

	const myStyle = () => {
    return {
      color: "green",
      weight: 3,
      opacity: 1,
      fillColor: "red",
      dashArray: '8 5'
    }
  }

  useEffect(()=> {
	  if(url) {
	  	console.log('hue')
			fetchData(url);
		}
	},[])

	return (
		<FeatureGroup>
		{ data.map(f => {
			<GeoJSON key={f.properties.id} data={f} style={myStyle}>
				<Popup>{f.properties.id}</Popup>
			</GeoJSON>
		})}
		</FeatureGroup>
	);
	
}

export default GeojsonLayer;