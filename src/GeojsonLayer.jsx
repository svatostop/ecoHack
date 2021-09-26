import React, {useEffect, useState} from 'react';
import { GeoJSON, FeatureGroup, Popup} from 'react-leaflet'
import "./GeojsonLayer.css"



function GeojsonLayer(props){

	const { setCenter, mapLayers, setMapLayers, trigger,setValue, setValueTo, fieldFrom, fieldTo, setKK, setGeo} = props;
	const [data, setData] = useState([]);

	async function fetchData() {

		if (mapLayers.length===2) {
		let data={
		  "start_lan": mapLayers[0].latings.lng.toString(),
		  "start_lag": mapLayers[0].latings.lat.toString(),
		  "end_lan": mapLayers[1].latings.lng.toString(),
		  "end_lag": mapLayers[1].latings.lat.toString()
		}

		let url =  'https://64cd-62-84-117-254.ngrok.io/get_route';
		console.log(url);
		let request = fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
		request
		.then(r => r.json())
		.then(data => {
			setData(data.features);
			setKK(data.kkal)
			console.log(data.features)
			}, (error) => {
				console.error(error);
			});

		//setCenter({lat:mapLayers[0].latings.lat, lng:  mapLayers[0].latings.lng});
	}
	else if (mapLayers.length===0) {
		setData([])
		console.log(fieldFrom)
		console.log(fieldTo)
		if ( fieldFrom !== '' && fieldTo !== '' )
			{	
				let data={
				  "from_a": fieldFrom,
	  			"to": fieldTo
				}

			let url =  'https://64cd-62-84-117-254.ngrok.io/get_address';
			console.log(url);
			let request = fetch(url,{
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    redirect: 'follow',
		    body: JSON.stringify(data) // body data type must match "Content-Type" header
		  });
			request
			.then(r => r.json())
			.then(data => {
				setData(data.features);
				setKK(data.kkal)
				console.log(data.features)

				}, (error) => {
					console.error(error);
				});
			}

		}
	}

	const myStyle = () => {
    return {
      color: "green",
      weight: 5,
      opacity: 1,
      fillColor: "red",
      dashArray: '8 10'
    }
  }

  useEffect(()=> {
	  	console.log('hue')
			fetchData();
		//setGeo(false);

	},[trigger])



	return (
		<FeatureGroup>
		{ data.map((f) =>  
			<GeoJSON key={f.properties.id} data={f} style={myStyle}>
				<Popup>{f.properties.id}</Popup>
			</GeoJSON>
		)}
		</FeatureGroup>
	);
	
}

export default GeojsonLayer;