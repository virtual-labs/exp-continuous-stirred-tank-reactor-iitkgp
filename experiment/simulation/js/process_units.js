
let processUnits = new Object();


processUnits[0] = {
  //
  unitIndex : 0, 
  name : 'reactor feed',

  updateInputs : function() {}, 


  flowRate : 0, 
  conc : 0, 
  Tfeed : 300, 

 
  dataHeaders : [], 
  dataInputs : [], 
  dataUnits : [],
  dataMin : [],
  dataMax : [],
  dataDefault : [],
  dataValues : [],

  ssCheckSum : 0, 
  residenceTime : 0,

  initialize : function() {
    //
    let v = 0;
    this.dataHeaders[v] = 'feedFlowRate';
    this.dataInputs[v] = 'input_field_enterFeedFlowRate';
    this.dataUnits[v] = 'm3/s';
    this.dataMin[v] = 0.0001;
    this.dataMax[v] = 1;
    this.dataDefault[v] = 0.05;
    //
    v = 1;
    this.dataHeaders[v] = 'feedConc';
    this.dataInputs[v] = 'input_field_enterFeedConc';
    this.dataUnits[v] = 'mol/m3';
    this.dataMin[v] = 0;
    this.dataMax[v] = 1000;
    this.dataDefault[v] = 0;
    //
    v = 2;
    this.dataHeaders[v] = 'feedTemp';
    this.dataInputs[v] = 'input_field_enterFeedTTemp';
    this.dataUnits[v] = 'K';
    this.dataMin[v] = 200;
    this.dataMax[v] = 500;
    this.dataDefault[v] = 300;
   
    this.varCount = v;
    //
  }, 

 

  reset : function(){
    

    this.updateUIparams(); 

    controller.resetSSflagsFalse();
    
    this.ssCheckSum = 0;
  },

  updateUIparams : function(){
    
    controller.resetSSflagsFalse();
    
    this.ssCheckSum = 1;

   
    let unum = this.unitIndex;
    //
    this.flowRate = this.dataValues[0] = interfacer.getInputValue(unum,0);
    this.conc = this.dataValues[1] = interfacer.getInputValue(unum,1);
    this.Tfeed = this.dataValues[2] = interfacer.getInputValue(unum,2);

  }, 

  updateState : function() {
    
    this.unitTimeStep = simParams.simTimeStep / this.unitStepRepeats;
    
  }, 

  updateDisplay : function(){
    
  }, 

  checkForSteadyState : function() {
    
    let ssFlag = true;
   
    if (this.ssCheckSum != 0) {
      ssFlag = false;
    }
    this.ssCheckSum = 0;
    return ssFlag;
  } 

}; 

processUnits[1] = {
  //
  unitIndex : 1, 
  
  name : 'reactor',

  
  flowRate : 0,
  concIn : 0, 
  Tfeed : 0, 
  Tj : 0, 
  UA : 0, 

  updateInputs : function() {
    this.flowRate = processUnits[0].flowRate;
    this.concIn = processUnits[0].conc;
    this.Tfeed = processUnits[0].Tfeed
    this.Tj = processUnits[3].Tj;
    this.UA = processUnits[3].UA;
   
    this.residenceTime = this.vol / this.flowRate;
  },


  Trxr : 300, 


  displayReactorContents: '#div_PLOTDIV_reactorContents',

 
  k300 : 5e-6, 
  Ea : 200, 
  delH : -250, 

  
  initialTrxr : 300, 
  initialCa : 0, 
  Ca : 0, 

  dataHeaders : [], 
  dataInputs : [], 
  dataUnits : [],
  dataMin : [],
  dataMax : [],
  dataDefault : [],
  dataValues : [],

 
  stripData : [], 
 
  unitStepRepeats : 1,
  unitTimeStep : simParams.simTimeStep / this.unitStepRepeats,

  ssCheckSum : 0, 
  residenceTime : 0, 

  
  Rg : 8.3144598E-3, 
  rho : 1000, 
  Cp : 2.0, 
  vol : 0.1, 

  initialize : function() {
    //
    let v = 0;
    this.dataHeaders[v] = 'k300';
    this.dataInputs[v] = 'input_field_enterk300';
    this.dataUnits[v] = '1/s';
    this.dataMin[v] = 0;
    this.dataMax[v] = 1;
    this.dataDefault[v] = 5.0e-6;
    //
    v = 1;
    this.dataHeaders[v] = 'Ea';
    this.dataInputs[v] = 'input_field_enterEa';
    this.dataUnits[v] = 'kJ/mol';
    this.dataMin[v] = 0;
    this.dataMax[v] = 500;
    this.dataDefault[v] = 200
    //
    v = 2;
    this.dataHeaders[v] = 'delH';
    this.dataInputs[v] = 'input_field_enterdelH';
    this.dataUnits[v] = 'kJ/mol';
    this.dataMin[v] = -400;
    this.dataMax[v] = 400;
    this.dataDefault[v] = -250
    
    this.varCount = v;
    
    v = 3;
    this.dataHeaders[v] = 'Trxr';
    this.dataUnits[v] =  'K';
    this.dataMin[v] = 200;
    this.dataMax[v] = 500;
    //
    v = 4;
    this.dataHeaders[v] = 'Ca';
    this.dataUnits[v] =  'mol/m3';
    this.dataMin[v] = 0;
    this.dataMax[v] = 1000;
    //
  }, 

 

  reset : function() {
    

    this.updateUIparams(); 

    
    controller.resetSSflagsFalse();

  
    this.ssCheckSum = 0;

    this.Trxr = this.initialTrxr; 
    this.Ca = this.initialCa; 

    
    let numStripVars = 2; 
    let numStripPts = plotInfo[0]['numberPoints'];
    this.stripData = plotter.initPlotData(numStripVars,numStripPts);

    let kn = 0;
    for (k = 0; k <= numStripPts; k += 1) {
      kn = k * simParams.simTimeStep * simParams.simStepRepeats;
     
      this.stripData[0][k][0] = kn;
      this.stripData[1][k][0] = kn;
      
      this.stripData[0][k][1] = this.dataMin[3];
      this.stripData[1][k][1] = this.dataMin[4];
    }

  }, 

  updateUIparams : function() {
    
    controller.resetSSflagsFalse();
   
    this.ssCheckSum = 1;

    
    let unum = this.unitIndex;
    //
    this.k300 = this.dataValues[0] = interfacer.getInputValue(unum, 0);
    this.Ea = this.dataValues[1] = interfacer.getInputValue(unum, 1);
    this.delH = this.dataValues[2] = interfacer.getInputValue(unum, 2);

  }, 

  updateState : function() {
   
    this.unitTimeStep = simParams.simTimeStep / this.unitStepRepeats;

    let krxn = this.k300 * Math.exp(-(this.Ea/this.Rg)*(1/this.Trxr- 1/300));
    let rate = -krxn * this.Ca;
    let invTau = this.flowRate / this.vol; 

    let dCdt = invTau * (this.concIn - this.Ca) + rate;
    let dC = this.unitTimeStep * dCdt;
    
    this.Ca = this.Ca + dC;
    if (this.Ca < 0){this.Ca = 0;}

    let dTdt = invTau*(this.Tfeed - this.Trxr) + rate*this.delH/(this.rho*this.Cp) +
               (this.Tj - this.Trxr) * this.UA /(this.vol*this.rho*this.Cp);
    let dTrxr = this.unitTimeStep * dTdt;
    
    this.Trxr = this.Trxr + dTrxr;

  }, 

  updateDisplay : function() {

    
    let el = document.querySelector(this.displayReactorContents);
    
    let concB = Math.round(this.Ca/400 * 255);
    let concR = 255 - concB;
    let concColor = "rgb(" + concR + ", 0, " + concB + ")";
    
    el.style.backgroundColor = concColor;

  

    let v = 0; 
    let p = 0; 
    let numStripPoints = plotInfo[0]['numberPoints'];
    let numStripVars = 2; 

   
    v = 0;
    tempArray = this.stripData[v]; 
  
    tempArray.shift();
   
    tempArray.push( [ 0, this.Trxr] );
    
    this.stripData[v] = tempArray;

   
    v = 1;
    tempArray = this.stripData[v]; 
    
    tempArray.shift();
    
    tempArray.push( [ 0, this.Ca ] );
   
    this.stripData[v] = tempArray;

    let timeStep = simParams.simTimeStep * simParams.simStepRepeats;
    for (v = 0; v < numStripVars; v += 1) {
      for (p = 0; p <= numStripPoints; p += 1) { 
        
        this.stripData[v][p][0] = p * timeStep;
        
      }
    }

  }, 

  checkForSteadyState : function() {
    
    let rc = 1.0e1 * this.stripData[1][0][1]; 
    let rt = 1.0e1 * this.Tj;
    let lt = 1.0e1 * this.Trxr;
    let lc = 1.0e1 * this.Ca;
    rc = rc.toFixed(0); 
    rt = rt.toFixed(0);
    lt = lt.toFixed(0);
    lc = lc.toFixed(0);
    
    let newCheckSum = rc +'.'+ rt +'.'+ lt +'.'+ lc;
    //
    let oldSScheckSum = this.ssCheckSum;
    let ssFlag = false;
    if (newCheckSum == oldSScheckSum) {ssFlag = true;}
    this.ssCheckSum = newCheckSum; 

  

    return ssFlag;
  } 

}; 

processUnits[2] = {
  //
  unitIndex : 2, 
 
  name : 'feed to heat transfer jacket',

  command : 0,

  updateInputs : function() {
    this.command = processUnits[4].command;
  },

  

  initialFlowRate : 1, 
  flowRate : this.initialFlowRate,

  initialTjIn : 350, 
  TjIn : this.initialTjIn,

  
  dataHeaders : [], 
  dataInputs : [], 
  dataUnits : [],
  dataMin : [],
  dataMax : [],
  dataDefault : [],
  dataValues : [],

  
  stripData : [], 
 

  ssCheckSum : 0, 
  residenceTime : 0, 
  

  initialize : function() {
    //
    let v = 0;
    this.dataHeaders[v] = 'jacketFlowrate';
    this.dataInputs[v] = 'input_field_enterJacketFlowRate';
    this.dataUnits[v] = 'm3/s';
    this.dataMin[v] = 1e-7;
    this.dataMax[v] = 1;
    this.dataDefault[v] = 1;
    
    this.varCount = v;
    //
    v = 1;
    this.dataHeaders[v] = 'jacketInletT';
    this.dataInputs[v] = '';
    this.dataUnits[v] = 'K';
    this.dataMin[v] = 200;
    this.dataMax[v] = 500;
    this.dataDefault[v] = 348;
    this.dataValues[v] = 200;
    //
  }, 

 

  reset : function(){


    this.updateUIparams(); 

   

    this.TjIn = this.initialTjIn;

    
    let numStripVars = 1; 
    let numStripPts = plotInfo[0]['numberPoints'];
    this.stripData = plotter.initPlotData(numStripVars,numStripPts);

    let kn = 0;
    for (k = 0; k <= numStripPts; k += 1) {
      kn = k * simParams.simTimeStep * simParams.simStepRepeats;
    
      this.stripData[0][k][0] = kn;
     
      this.stripData[0][k][1] = this.dataMin[1];
    }

  }, 

  updateUIparams : function() {
   
    controller.resetSSflagsFalse();
    
    this.ssCheckSum = 1;

    let unum = this.unitIndex;

   
    this.flowRate = this.dataValues[0] = interfacer.getInputValue(unum, 0);

  }, 

  updateState : function(){
    
  
    this.TjIn = this.command;

  }, 

  updateDisplay : function(){
    

    let v = 0; 
    let p = 0; 
    let numStripPoints = plotInfo[0]['numberPoints'];

    
    v = 0;
    tempArray = this.stripData[v]; 
   
    tempArray.shift();
   
    tempArray.push( [ 0, this.TjIn ] );
    
    this.stripData[v] = tempArray;

    
    let timeStep = simParams.simTimeStep * simParams.simStepRepeats;
    v = 0; 
  
    for (p = 0; p <= numStripPoints; p += 1) { 
      
      this.stripData[v][p][0] = p * timeStep;
     
    }

  }, 

  checkForSteadyState : function() {
    
    let ssFlag = true;
   
    if (this.ssCheckSum != 0) {
      ssFlag = false;
    }
    this.ssCheckSum = 0;
    return ssFlag;
  } 

}; 

processUnits[3] = {
  //
  unitIndex : 3, 
 
  name : 'heat transfer jacket',


  Trxr    : 0, 
  TjIn    : 0, 
  flowRate  : 0, 

  updateInputs : function() {
    this.Trxr = processUnits[1].Trxr;
    this.TjIn = processUnits[2].TjIn;
    this.flowRate = processUnits[2].flowRate;
   
    this.residenceTime = this.vol / this.flowRate;
  },


  initialTj : 350,
  Tj : this.initialTj, 

 

  vol       : 0.02, 
  rho       : 1000, 
  Cp        : 2.0, 

  dataHeaders : [], 
  dataInputs : [], 
  dataUnits : [],
  dataMin : [],
  dataMax : [],
  dataDefault : [],
  dataValues : [],

  
  stripData : [], 

  
  unitStepRepeats : 1,
  unitTimeStep : simParams.simTimeStep / this.unitStepRepeats,

  ssCheckSum : 0, 
  residenceTime : 0, 
 

  initialize : function() {
    //
    let v = 0;
    this.dataHeaders[v] = 'UA';
    this.dataInputs[v] = 'input_field_enterjacketUA';
    this.dataUnits[v] = 'kJ/s/K';
    this.dataMin[v] = 0;
    this.dataMax[v] = 100;
    this.dataDefault[v] = 20;
    
    this.varCount = v;
   
    v = 1;
    this.dataHeaders[v] = 'Tj';
    this.dataUnits[v] =  'K';
    this.dataMin[v] = 200;
    this.dataMax[v] = 500;
    //
  }, 

  reset : function(){
   

    this.updateUIparams(); 

    
    controller.resetSSflagsFalse();

    
    this.ssCheckSum = 0;

    
    this.Tj = this.initialTj;

   
    let numStripVars = 1; 
    let numStripPts = plotInfo[0]['numberPoints'];
    this.stripData = plotter.initPlotData(numStripVars,numStripPts);

    let kn = 0;
    for (k = 0; k <= numStripPts; k += 1) {
      kn = k * simParams.simTimeStep * simParams.simStepRepeats;
     
      this.stripData[0][k][0] = kn;
     
      this.stripData[0][k][1] = this.dataMin[1];
    }

  }, 

  updateUIparams : function() {
    
    controller.resetSSflagsFalse();
    
    this.ssCheckSum = 1;

    let unum = this.unitIndex;
    //
    this.UA = this.dataValues[0] = interfacer.getInputValue(unum, 0);

  }, 

  updateState : function() {
    
    this.unitTimeStep = simParams.simTimeStep / this.unitStepRepeats;

    let invTau = this.flowRate/ this.vol;

    let dTdt = invTau*(this.TjIn - this.Tj) +
               (this.Trxr- this.Tj) * this.UA/(this.vol*this.rho*this.Cp);
    this.Tj = this.Tj + this.unitTimeStep * dTdt;

  }, 

  updateDisplay : function(){
    

    let v = 0; 
    let p = 0; 
    let numStripPoints = plotInfo[0]['numberPoints'];

   
    v = 0;
    tempArray = this.stripData[v]; 
   
    tempArray.shift();
   
    tempArray.push( [ 0, this.Tj ] );
   
    this.stripData[v] = tempArray;

    let timeStep = simParams.simTimeStep * simParams.simStepRepeats;
    v = 0; 
   
    for (p = 0; p <= numStripPoints; p += 1) { 
     
      this.stripData[v][p][0] = p * timeStep;
      
    }

  }, 

  checkForSteadyState : function() {
    
    let ssFlag = true;
   
    if (this.ssCheckSum != 0) {
      ssFlag = false;
    }
    this.ssCheckSum = 0;
    return ssFlag;
  } 

}; 

processUnits[4] = {
  //
  unitIndex : 4, 
 
  name : 'reactor temperature controller',

  

  Trxr : 0, 

  updateInputs : function() {
    this.Trxr = processUnits[1].Trxr;
  },

  

  command : 0, 

  resetTime   : 30, 
  gain				: 300, 
  setPoint		: 340, 
  manualCommand : 348, 
  manualBias  : 300, 
  initialCommand  : 300, 
  errorIntegral   : 0, 
  mode : "manual", 

  dataHeaders : [], 
  dataInputs : [], 
  dataUnits : [],
  dataMin : [],
  dataMax : [],
  dataDefault : [],
  dataValues : [],

 
  unitStepRepeats : 1,
  unitTimeStep : simParams.simTimeStep / this.unitStepRepeats,

  ssCheckSum : 0, 
  residenceTime : 0, 
 

  initialize : function() {
    //
    let v = 0;
    this.dataHeaders[v] = 'resetTime';
    this.dataInputs[v] = 'input_field_enterResetTime';
    this.dataUnits[v] = 's';
    this.dataMin[v] = 0;
    this.dataMax[v] = 100;
    this.dataDefault[v] = 30;
    //
    v = 1;
    this.dataHeaders[v] = 'gain';
    this.dataInputs[v] = 'input_field_enterGain';
    this.dataUnits[v] = '';
    this.dataMin[v] = 0;
    this.dataMax[v] = 1000;
    this.dataDefault[v] = 300;
    //
    v = 2;
    this.dataHeaders[v] = 'setPoint';
    this.dataInputs[v] = 'input_field_enterSetpoint';
    this.dataUnits[v] = 'K';
    this.dataMin[v] = 300;
    this.dataMax[v] = 500;
    this.dataDefault[v] = 340;
    //
    v = 3;
    this.dataHeaders[v] = 'manualCommand';
    this.dataInputs[v] = 'input_field_enterJacketFeedTTemp';
    this.dataUnits[v] = 'K';
    this.dataMin[v] = 200;
    this.dataMax[v] = 450;
    this.dataDefault[v] = 348;
    
    document.getElementById("radio_controllerAUTO").checked = false;
    document.getElementById("radio_controllerMANUAL").checked = true;
   
    this.varCount = v-1;
    
    v = 4;
    this.dataHeaders[v] = 'command';
    this.dataUnits[v] =  'K';
    this.dataMin[v] = 300;
    this.dataMax[v] = 450;
    //
  }, 

  reset : function() {
    

    this.updateUIparams(); 

    controller.resetSSflagsFalse();

   
    this.ssCheckSum = 0;

    
    this.errorIntegral = 0;
    this.command = this.initialCommand;

  },  

  changeMode : function(){
    let el = document.querySelector("#radio_controllerAUTO");
    if (el.checked){
      this.mode = "auto";
      this.manualBias = this.command; 
    } else {
      this.mode = "manual";
    }

    
    this.errorIntegral = 0;

    
    controller.resetSSflagsFalse();
   
    this.ssCheckSum = 1;

  },

  updateUIparams : function() {
   
    controller.resetSSflagsFalse();
   
    this.ssCheckSum = 1;

    let unum = this.unitIndex;
    //
    this.resetTime = this.dataValues[0] = interfacer.getInputValue(unum, 0);
    this.gain = this.dataValues[1] = interfacer.getInputValue(unum, 1);
    this.setPoint = this.dataValues[2] = interfacer.getInputValue(unum, 2);
    this.manualCommand = this.dataValues[3] = interfacer.getInputValue(unum, 3);

  }, 

  updateState : function() {
    
    this.unitTimeStep = simParams.simTimeStep / this.unitStepRepeats;

    
    let error = this.setPoint - this.Trxr;
    this.command = this.manualBias + this.gain *
                  (error + (1/this.resetTime) * this.errorIntegral);

    
    let v = 4; 
    if (this.command > this.dataMax[v]){
      this.command = this.dataMax[v];
    } else if (this.command < this.dataMin[v]){
      this.command = this.dataMin[v];
    } else {
      
      this.errorIntegral = this.errorIntegral + error * simParams.simTimeStep; 
    }

    if (this.mode == "manual"){
      
      this.command = this.manualCommand;
    } else {
      
    }

  }, 

  updateDisplay : function(){
   
  }, 

  checkForSteadyState : function() {
    
    let ssFlag = true;
   
    if (this.ssCheckSum != 0) {
      ssFlag = false;
    }
    this.ssCheckSum = 0;
    return ssFlag;
  } 

}; 
