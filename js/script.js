// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = parseFloat(params.get('radius'))
  console.log(radius)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions = '<ul>\n<li>radius = ' + radius + ' mm</li>\n</ul>'

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume-result').innerHTML =
  'Volume is: ' + volume.toFixed(2) + ' mm³'
}
