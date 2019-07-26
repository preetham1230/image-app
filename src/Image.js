import React, { Component } from 'react';
import OpenSeadragon from 'openseadragon';
import logo from './dzi_files/10/0_0.jpg';
//import logo1 from './dzi_files';

export default class Image extends Component {

    constructor(props){
        super(props);
        var imagePath = ''  
    }

componentDidMount() {
    
    

    var dimage1 = {
        Image: {
        xmlns: "http://schemas.microsoft.com/deepzoom/2008",
        Url: ' https://preetham1230.github.io/static/media/dzi_files/',
        Format: "jpg",
        TileSize: "256",
        CrossOriginPolicy: '*',
        Size: {
            Width:  "13920",
            Height: "10200"
        }
        }
    };
    
    var viewer = OpenSeadragon({
        id: "image-viewer",
        prefixUrl: "//openseadragon.github.io/openseadragon/images/",
        sequenceMode: true,
        tileSources: dimage1
    });
}
    

    render() {
        
        
  
        return (
            <div>
                OPEN SEADRAGON DEMO 
            <div id="image-viewer" style={{width: '800px', height: '800px', padding:'50px'}}  ></div>

             </div>
        )
    }
}
