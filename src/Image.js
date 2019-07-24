import React, { Component } from 'react';
import OpenSeadragon from 'openseadragon';

export default class Image extends Component {

componentDidMount() {
    
    var dimage = {
        Image: {
        xmlns: "http://schemas.microsoft.com/deepzoom/2008",
        Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
        Format: "jpg",
        TileSize: "256",
        Size: {
            Width:  "13920",
            Height: "10200"
        }
        }
    };
    
    var viewer = OpenSeadragon({
        id: "image-viewer",
        prefixUrl: "//openseadragon.github.io/openseadragon/images/",
        tileSources: dimage
    });
}
    

    render() {
        
        
  
        return (
            <div>
            <div id="image-viewer" style={{width: '800px', height: '800px', padding:'100px'}}  ></div>

            <div>
                Image
                <img src={require('./dzi_files/10/0_0.jpg')}></img>
            </div>

            </div>
        )
    }
}
