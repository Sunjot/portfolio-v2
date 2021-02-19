import React from 'react'

const Project = ({id, title, git, link, desc, img, margin}) => {

  let githubSVG = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
        <title>github</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-727.000000, -100.000000)" fill="#FFFFFF">
                <path d="M738.998895,100 C732.373277,100 727,105.372541 727,112.000368 C727,117.302189 730.438043,121.799564 735.206513,123.386353 C735.8069,123.496854 736.025691,123.126308 736.025691,122.808067 C736.025691,122.523712 736.015378,121.768624 736.009485,120.767488 C732.671629,121.492372 731.967372,119.158599 731.967372,119.158599 C731.421499,117.772185 730.634734,117.403112 730.634734,117.403112 C729.545198,116.659075 730.717241,116.673808 730.717241,116.673808 C731.921698,116.758525 732.555235,117.910679 732.555235,117.910679 C733.625618,119.744252 735.364161,119.214586 736.047792,118.907394 C736.156819,118.132417 736.466957,117.603487 736.809509,117.303662 C734.144971,117.00089 731.343411,115.971024 731.343411,111.372725 C731.343411,110.062924 731.811197,108.991068 732.578808,108.152736 C732.455048,107.849228 732.043249,106.628564 732.696676,104.976948 C732.696676,104.976948 733.703705,104.654287 735.996225,106.207189 C736.95316,105.940514 737.980079,105.807913 739.000368,105.802756 C740.019921,105.807913 741.046103,105.940514 742.004512,106.207189 C744.295558,104.654287 745.301114,104.976948 745.301114,104.976948 C745.956015,106.628564 745.544216,107.849228 745.421192,108.152736 C746.190276,108.991068 746.654379,110.062924 746.654379,111.372725 C746.654379,115.982811 743.848399,116.997207 741.175757,117.294085 C741.605973,117.664631 741.989779,118.396881 741.989779,119.516621 C741.989779,121.120354 741.975045,122.414684 741.975045,122.808067 C741.975045,123.129255 742.191627,123.502747 742.800117,123.385617 C747.564904,121.795144 751,117.300715 751,112.000368 C751,105.372541 745.626723,100 738.998895,100" id="github"></path>
            </g>
        </g>
    </svg>`;

  let newTabSVG = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 46 (44423) - http://www.bohemiancoding.com/sketch -->
        <title>new-tab</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-527.000000, -254.000000)" fill-rule="nonzero" fill="#FFFFFF">
                <path d="M542.167893,255.125 L537.051777,255.125 L537.051777,254.125 L544.051777,254.125 L544.051777,261.125 L543.051777,261.125 L543.051777,255.65533 L533.853553,264.853553 L533.146447,264.146447 L542.167893,255.125 Z M533.00313,255 L533.00313,256 L529.99687,256 C528.897625,256 528,256.897222 528,257.999422 L528,267.000578 C528,268.103945 528.895753,269 529.999422,269 L539.000578,269 C540.103902,269 541,268.104032 541,267 L541,264 L542,264 L542,267 C542,268.656854 540.655649,270 539.000578,270 L529.999422,270 C528.342887,270 527,268.655649 527,267.000578 L527,257.999422 C527,256.342887 528.347391,255 529.99687,255 L533.00313,255 Z" id="new-tab"></path>
            </g>
        </g>
    </svg>`;

  return (
    <div id={id} className="proj-cont" style={margin? {"marginBottom": margin} : null}>
      <div className="info-cont">
        <div className="title-cont">
          <p className="title">{title}</p>
          <a target="_blank" rel="noopener noreferrer" href={git}>
            <span dangerouslySetInnerHTML={{ __html: githubSVG}}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <span dangerouslySetInnerHTML={{ __html: newTabSVG}}/>
          </a>
        </div>
        <p className="desc" dangerouslySetInnerHTML={{__html: desc}}></p>
        </div>
      <a target="_blank" rel="noopener noreferrer" href={link}><img src={img}/></a>
    </div>
  );
  
}

export default Project;
