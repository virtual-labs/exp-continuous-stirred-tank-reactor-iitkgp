## Introduction

<div class="content" id="experiment-article-section-1-content"><p>Chemical kinetics and reactor design are at the heart of producing almost all industrial chemicals.The selection of a reaction system that operates in the safest and most efficient manner can be the key to the success or failure of a chemical plant. The reaction occurred in a reactor is exothermic or endothermic.The reactor is generally assembled with a jacket or coil in order to maintain the reaction temperature in the reactor. If heat is evolved due to exothermic reaction, a coolant stream is required to pass through the jacket or coil to remove the extra heat. On the other hand, if endothermic reaction occurs in the system, the flow of heating medium is passing through jacket or coil for maintain the reaction temperature. A reactor operates at a constants temperature, then that is called as the isothermal reactor. If any exothermic or endothermic reactions are involved in the reactor, the temperature of the reactions mixture varies with time and we need to develop the energy balance equation for this non-isothermal reactor. In case of adiabatic reactor no interchange of heat between the system and surroundings. So no heating and cooling medium are required. A chemical reactor is a vessel where reactions are carried out purposefully to produce products from reactants by means of one or more chemical reactions. A chemical reactor may be characterized by the mode operation according to the flow condition. A classification can be made in this respect as follows<br>
                                1. Batch reactor<br>
                                2. Semi batch reactor<br>
                                3. Flow reactors<br>
                                &nbsp&nbsp&nbsp&nbsp a. Tubular reactor<br>
                                &nbsp&nbsp&nbsp&nbsp b. Continuous stirred tank reactor</p><br>
                            <p style="text-align:left; font-size:18px; font-weight:bold;">Activation Energy</p>
                            <p style="padding-bottom: 10px;">Activation energy is defined as the minimum energy required starting a chemical reaction. The activation energy of a reaction is denoted by E, and unit is kilojoules per mole. Activation energy can be thought of as the height of the potential barrier (sometimes called the energy barrier) separating two minima of potential energy (of the reactants and products of a reaction). For a chemical reaction to proceed at a reasonable rate, there should exit an appreciable number of molecules with energy equal to or greater than the activation energy.</p><br>
                            <p style="text-align:left; font-size:18px; font-weight:bold;">Reaction Rate Constant</p>
                            <p style="padding-bottom: 10px;">For many reaction, and particularly elementary reaction, the rate expression can be written as a product of a temperature-dependent term and composition dependent term.<br><b>`ri=fi(temperature).f2(composition)`</b><br>For such reactions the temperature-dependent term, the reaction rate constant, has been found in practically all cases to be well represented by Arrhenius's law<br>`k=alpha exp(-E/(RT))`<br>At the same concentration, but at two different temperatures, Arrhenius's law indicates that<br>`ln (k_2/k_1)=E/R(1/T_1-1/T_2)`<br>Where, Frequency factor or pre-exponential factor
                                <br>E = Activation energy
                                <br>R = Universal gas constant.</p><br>

                            <p style="text-align:left; font-size:18px; font-weight:bold;">Heat Of Reaction</p>
                            <p style="padding-bottom: 10px;">Heat of reaction is the amount of heat that must be added or removed during a chemical reaction in order to keep all of the substances present at the same temperature. If the pressure in the vessel containing the reacting system is kept at constant value, the measured heat of reaction also represents the change in the thermodynamic quantity called enthalpy, or heat content, accompanying the process- i.e., the difference between the enthalpy of the substances present at the start of the reaction. Thus, the heat of reaction determined at constant pressure is also designated the enthalpy of reaction, represented by the symbol `Delta H` . If the heat of reaction is positive, the reaction is said to be endothermic and if negative, exothermic.</p>
                            <br><p style="text-align:left; font-size:18px; font-weight:bold;">Continuous Stirred Tank Reactor Theory</p>
                            <p style="padding-bottom: 10px;">The continuous stirred tank reactor or back mix reactor is a very common processing unit in chemical and polymer industry. Its names suggest, it is a reactor in which the contents are well stirred and uniform throughout. The CSTR is normally run at steady state, and is usually operated so as a to be quite well mixed. The CSTR is generally modeled as having no spatial variations in concentrations, temperature, or reaction rate throughout the vessel. Since the temperature and concentration are identical everywhere within the reaction vessel, they are the same at the exits point as they are elsewhere in the tank.</p>


                            <br><p style="text-align:left; font-size:18px; font-weight:bold;">Steady State</p>
                            <p style="padding-bottom: 10px;">A situation in which all the state variables remain constant despite parallel processes trying to change them, is referred to as the steady state.</p>
                            <br><p style="text-align:left; font-size:18px; font-weight:bold;">Time Constant</p>
                            <p style="padding-bottom: 10px;">When we talk about time constant, it's essential to take into account the context in which we are talking about it. In our case, time constant can be defined as 63% of the time that will be taken for a body to reach steady state.</p>
                            <p style="text-align:left; font-size:14px; font-weight:bold;">Setup</p>
                            <p style="padding-bottom: 10px;">
                                The following second-order, exothermic chemical reaction takes place in the reactor:
                                <br/>
                                <img src="images/5.JPG" style="height: 300px;width: 300px"></img><br>Reactant A and B is continuously fed to the reactor with a volumetric flow rate FA0 and FB0, a molar concentration CA , and CB temperature T0. The contents are uniformly mixed by motorized agitator. An exit stream, which contains a mixture of reactant A and B and product C and D, is withdrawn from the reactor continuously with a volumetric flow rate F. The prescribed reaction is exothermic and it is necessary to add a cooling jacket to keep it temperature below 315K. A coolant stream volumetric flow rate Fj and inlet temperature Tj0 continuously takes out the heat to maintain the described reaction temperature.
                            </p>
                            <p style="text-align:left; font-size:18px; font-weight:bold;">Mathematical modeling of continuous stirred tank reactor</p><br>
                            <p style="padding-bottom: 10px;;font-weight:bold;">
                                Assumptions
                                <br/>
                            <li> The mixture density (p) and heat capacity (Cp) are assumed constant.</li>
                            <li>The reacting mixture is assumed to be well mixed.</li>
                            <li>The heat losses from the process to the atmosphere are negligible.</li>
                            <li>The overall heat transfer coefficient is assumed constant.</li>
                            </p><br>
                            <p style="padding-bottom: 10px;;font-weight:bold;">Inputs to the system are</p>
                            <p style="padding-bottom: 10px;"><li>Initial concentration of component A =CA0</li>
                            <li>Initial concentration of component B =CB0</li>
                            <li>Flow rate of A =FA0</li>
                            <li>Flow rate of B =FB0</li>
                            <li>Jacket flow rate =Fj</li>
                            <li>Feed temperature =T0</li>
                            <li>Jacket temperature =Tj0</li></p><br>
                            <p style="text-align:left; font-size:18px; font-weight:bold;">Component continuity equation</p><br>
                            <p style="padding-bottom: 10px;">The component balance equation is<br><br>`[["Rate of accumulation"],["within the system"]]=[["Rate of flow"],["into the system"]]-[["Rate of flow"],["out of the system"]]+[["Rate of generation by chemical"],["reaction within the system"]]`</p>
                            <br><p style="padding-bottom: 10px;font-weight:bold;">For component A (Reactant)</p>
                            <p style="padding-bottom: 10px;">Flow rate of component A into the reactor = FA0<br>Flow rate of component Aout of the reactor = FCA<br>

                                Rate of generation of component A by chemical reaction = -(-rA)V<br>

                                Rate of accumulation of component A within the reactor =`d((VC_A))/dt`<br>
                                Here, (-rA) is the rate of disappearance of species A. V is the volume of the reactor. From equation (1), we obtain<br>`d((VC_A))/dt=F_(A0)C_(A0)-FC_A-(-r_A)V`<br>`(dC_A)/dt=((F_(A0)C_(A0)-FC_A))/V-(-r_A)`<br>For the given second order reaction, the rate of disappearance is<br>`(-r_A)=k(C_(A)C_(B)-(C_(C)C_(D))/K_C)`<br>`k=39178exp[5472.7(1/273-1/T)]`<br>`K_c=exp(1698/T)`<br>Substituting Equation (7) and (8) into equation (6), then we get<br>`(-r_A)=3918exp[5472.7(1/273-1/T)]-(C_(A)C_(B)-(C_(C)C_(D))/exp(1698/T))`<br>Substituting Equation (9) into equation (5), then we get<br>`(dC_A)/dt=((F_(A0)C_(A0)-FC_A))/V-3918exp[5472.7(1/273-1/T)]-(C_(A)C_(B)-(C_(C)C_(D))/exp(1698/T))`</p>
                            <p style="padding-bottom: 10px;font-weight:bold;">For component B (Reactant)</p><br>
                            <p style="padding-bottom: 10px;">
                                Flow rate of component B into the reactor =FB0CB0<br>

                                Flow rate of component B out of the reactor =FCB<br>

                                Rate of generation of component B by chemical reaction = (-rB)V<br>

                                Rate of accumulation of component A within the reactor =`(d(VC_B))/dt`<br>Here,(-rB) is the rate of disappearance of species B and (-rA)=(-rB)<br>

                                From equation (1), we obtain<br>`(d(VC_B))/dt=F_(B0)C_(B0)-FC_B-(-r_A)V`<br>`(dC_B)/dt=(F_(B0)C_(B0)-FC_B)V-(-r_A)`<br>Substituting Equation (7) into equation (12), then we get<br>`(dC_B)/dt=((F_(B0)C_(B0)-FC_B))/V-3918exp[5472.7(1/273-1/T)]-(C_(A)C_(B)-(C_(C)C_(D))/exp(1698/T))`
                            </p>
                            <p style="padding-bottom: 10px;font-weight:bold;">For component C (Product)</p>
                            <p style="padding-bottom: 10px;">
                                Flow rate of component C into the reactor = 0<br>

                                Flow rate of component C out of the reactor = FCC<br>

                                Rate of generation of component C by chemical reaction = (rc)V<br>

                                Rate of accumulation of component C within the reactor =`(d(VC_C))/dt`<br>Here,<br>

                                -(-rA)=(rc)<br>

                                From equation (1), we obtain<br>`(d(VC_C))/dt=-FC_C+(-r_A)V`<br>`(dC_C)/dt=((-FC_C))/V+(-r_A)`<br>Substituting Equation (7) into equation (13), then we get
                                <br/>`(dC_C)/dt=((-FC_C))/V+39178exp[5472.7(1/273-1/T)]-(C_(A)C_(B)-(C_(C)C_(D))/exp(1698/T))`

                            </p>

                            <p style="padding-bottom: 18px;font-weight:bold;">Energy Balance Equation</p>
                            <p style="padding-bottom: 10px;">
                                The energy balance equation is<br><br>`[["Rate of energy"],["accumulation"]]=[["Rate of energy input"],["into the system"]]-[["Rate of energy"],["out of the system"]]+[["Rate of energy added by"],["exothermic chemical reaction"]]`
                            </p>
                            <p style="padding-bottom: 18px;font-weight:bold;">Reactor analysis</p>
                            <p style="padding-bottom: 10px;">Rate of energy input into the reactor = `F_rhoC_pT_0`<br><br>Rate of energy out of the reactor =`F_rhoC_pT+UA(T-T_j)`<br><br>Rate of energy added by the exothermic reaction =`(-DeltaH)V(-r_A)`<br>Rate of accumulation of energy = `(d(V_rhoC_PT))/dt`<br>`(-DeltaH)`is the heat of reaction.<br>

                                From equation (20), we obtain<br>`(d(V_rhoC_PT))/dt=F_rhoC_pT_0-UA(T-T_j)+(-DeltaH)V(-r_A)`<br>Simplifying this equation, we get<br>`(dT)/dt=F/V(T_0-T)-(DeltaH(-r_A))/(rhoC_P)-(UA(T-T_j))/(V_rhoC_P)`<br>Substituting Equation (7) into equation (22), then we get<br>`(dT)/dt=F/V(T_0-T)-((DeltaH)39178exp[5472.7(1/273-1/T)]-(C_(A)C_(B)-(C_(C)C_(D))/exp(1698/T)))/(rhoC_P)-(UA(T-T_j))/(V_rhoC_P)`</p>
                            <p style="padding-bottom: 18px;font-weight:bold;">Jacket Analysis</p>
                            <p style="padding-bottom: 10px;">
                                Rate of energy input into the jacket =`F_jrho_jC_pjT_j0`<br>Rate of energy out of the reactor = `F_jrho_jC_pjT_j-UA(T-T_j)`<br>Rate of accumulation of energy =`(d(V_jrho_jC_pjT_j))/dt`<br>Vj is the volume of the jacket.

                                <br>From energy balance equation, we get<br>`(d(V_jrho_jC_pjT_j))/dt=F_jrho_jC_pjT_j0-F_jrho_jC_pjT_j+UA(T-T_j)`<br>`(dT_j)/dt=F_j/V_j(T_j0-T_j)+(UA(T-T_j))/(V_jrho_jC_pj)`
                            </p>   
                            <p style="padding-bottom: 18px;font-weight:bold;">Input Parameter</p>
                            <p style="padding-bottom: 10px;">8.	Initial concentration of component A = CA0<br>

                                9.	Initial concentration of component B = CB0<br>

                                10.	Flow rate of A = FA0<br>

                                11.	Flow rate of B = FB0<br>

                                12.	Jacket flow rate = Fj<br>

                                13.	Feed temperature =T0<br>

                                14.	Jacket temperature = Tj0</p>
                        </div>

 <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js"></script>    
 