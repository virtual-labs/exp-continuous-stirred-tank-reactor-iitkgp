

let plotInfo = {

  initialize : function() {

    
    let pnum = 0;
    plotInfo[pnum] = new Object();
    plotInfo[pnum]['type'] = 'strip';
    plotInfo[pnum]['title'] = 'Reactor Conditions';
    plotInfo[pnum]['canvas'] = '#div_PLOTDIV_plotData'; 
    
    let npts = 200; 
    plotInfo[pnum]['numberPoints'] = npts; 
    
    plotInfo[pnum]['xAxisLabel'] = '< recent time | earlier time (s) >';
    plotInfo[pnum]['xAxisTableLabel'] = 'Time (s)'; 
   
    plotInfo[pnum]['xAxisShow'] = 1;
    plotInfo[pnum]['xAxisMin'] = 0;
    plotInfo[pnum]['xAxisMax'] = npts * simParams.simTimeStep * simParams.simStepRepeats;
    plotInfo[pnum]['xAxisReversed'] = 1; 
    plotInfo[pnum]['yLeftAxisLabel'] = 'Reactant Concentration';
    plotInfo[pnum]['yLeftAxisMin'] = 0;
    plotInfo[pnum]['yLeftAxisMax'] = 400;
    plotInfo[pnum]['yRightAxisLabel'] = 'Temperature (K)';
    plotInfo[pnum]['yRightAxisMin'] = 300;
    plotInfo[pnum]['yRightAxisMax'] = 400;
    plotInfo[pnum]['plotLegendPosition'] = "ne";
    plotInfo[pnum]['plotLegendShow'] = 1;  
    plotInfo[pnum]['plotGridBgColor'] = 'white';
    
    plotInfo[pnum]['plotDataSeriesColors'] = ['blue','red','#919191']; 
   
    plotInfo[pnum]['varUnitIndex'] = new Array();
    plotInfo[pnum]['var'] = new Array();
    plotInfo[pnum]['varLabel'] = new Array();
    plotInfo[pnum]['varDataUnits'] = new Array();
    plotInfo[pnum]['varShow'] = new Array();
    plotInfo[pnum]['varYaxis'] = new Array();
    plotInfo[pnum]['varYscaleFactor'] = new Array();
   
    let vnum = 0; 
    plotInfo[pnum]['varUnitIndex'][vnum] = 1; 
    plotInfo[pnum]['var'][vnum] = 1; 
    plotInfo[pnum]['varLabel'][vnum] = 'Reactant conc';
   
    plotInfo[pnum]['varDataUnits'][vnum] = processUnits[1]['dataUnits'][4]; 
   
    plotInfo[pnum]['varShow'][vnum] = 'show';
    plotInfo[pnum]['varYaxis'][vnum] = 'left';
    plotInfo[pnum]['varYscaleFactor'][vnum] = 1;
    //
    vnum = 1; 
    plotInfo[pnum]['varUnitIndex'][vnum] = 1;
    plotInfo[pnum]['var'][vnum] = 0;
    plotInfo[pnum]['varLabel'][vnum] = 'Reactor T';
    plotInfo[pnum]['varDataUnits'][vnum] = processUnits[1]['dataUnits'][3];
    plotInfo[pnum]['varShow'][vnum] = 'show';
    plotInfo[pnum]['varYaxis'][vnum] = 'right';
    plotInfo[pnum]['varYscaleFactor'][vnum] = 1;
    //
    vnum = 2; 
    plotInfo[pnum]['varUnitIndex'][vnum] = 2;
    plotInfo[pnum]['var'][vnum] = 0;
    plotInfo[pnum]['varLabel'][vnum] = 'Jacket inlet T';
    plotInfo[pnum]['varDataUnits'][vnum] = processUnits[2]['dataUnits'][1];
    plotInfo[pnum]['varShow'][vnum] = 'show';
    plotInfo[pnum]['varYaxis'][vnum] = 'right';
    plotInfo[pnum]['varYscaleFactor'][vnum] = 1;
    //
    vnum = 3; 
    plotInfo[pnum]['varUnitIndex'][vnum] = 3;
    plotInfo[pnum]['var'][vnum] = 0;
    plotInfo[pnum]['varLabel'][vnum] = 'Jacket T';
    plotInfo[pnum]['varDataUnits'][vnum] = processUnits[3]['dataUnits'][1];
    plotInfo[pnum]['varShow'][vnum] = 'tabled';
    plotInfo[pnum]['varYaxis'][vnum] = 'left';
    plotInfo[pnum]['varYscaleFactor'][vnum] = 1;
    //
  }, 

} 
