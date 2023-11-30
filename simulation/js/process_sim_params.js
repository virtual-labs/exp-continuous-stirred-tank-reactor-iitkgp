
let simParams = {
  

  title : 'Reactor T control with Tj inlet', 

  labType : 'Dynamic',

  runButtonID : "button_runButton", 
  runLoggerURL : "../webAppRunLog.lc",
  runCurrrentRunCountURL : "../webAppCurrentCount.lc",


  simStepRepeats : 20, 
  simTimeStep : 0.1, 

  updateDisplayTimingMs : 50, 
  updateRunCount : function() {
   
    $.post(this.runLoggerURL,{webAppNumber: "3, Reactor T control with Tj inlet"})
      .done(
        function(data) {
          
        } 
      ) 
  }, 

  updateCurrentRunCountDisplay : function() {
    
  },

}; 
