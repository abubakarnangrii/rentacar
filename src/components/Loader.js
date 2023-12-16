import React from 'react'

export default function Loader() {
     const loader =()=>{
        setTimeout(() => {
            document.querySelector(".plash").style.display = "none";
        }, 1200);
    };
  return (
    <div>
          <div class="plash" onLoad={loader()}>
              <div id="scene">
                  <span></span>
                  <div id="road">
                      <div id="stripes"></div>
                  </div>
              </div>
              <div class="loading">Loading<span>...</span></div>
          </div>
    </div>
  )
}
