import React from 'react'
import { Link } from 'react-router-dom'

export default function Color() {
  return (
    <div>
          <div class="tools">
              <span class="toggle"><img src="assets/images/color-icon.png" class="img-responsive" alt="" /></span>
              <Link to="#" class="color-blue">Blue</Link>
              <Link to="#" class="color-yellow">Yellow</Link>
              <Link to="#" class="color-turquoise">Turquoise</Link>
              <Link to="#" class="color-orange">Orange</Link>
              <Link to="#" class="color-orange-sec">Orange-second</Link>
              <Link to="#" class="color-lightblue">Lightblue</Link>
              <Link to="#" class="color-pink">Pink</Link>
          </div>
    </div>
  )
}
