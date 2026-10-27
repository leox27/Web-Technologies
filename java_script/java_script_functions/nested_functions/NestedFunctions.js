/*
nested functions
function outerFunctionName(){
    function innerFunctionName(){

    }
    innerFunctionName();
}
*/

// 1.not-recommended approach of nested functions
/*
function greatGrandFatherFunction(){
    console.log("GreatGrandFatherFunction.");
    function grandFatherFunction(){
        console.log("GrandFatherFunction.");
        function fatherFunction(){
            console.log("FatherFunction.");
            function sonFunction(){
                console.log("SonFunction.");
                function childFunction(){
                    console.log("ChildFunction.");
                    function grandChildFunction(){
                        console.log("GrandChildFunction.");
                        function greatGrandChildFunction(){
                            console.log("GreatGrandChildFunction.")
                        }
                        greatGrandChildFunction();
                    }
                    grandChildFunction();
                }
                childFunction();
            }
            sonFunction();
        }
        fatherFunction();
    }
    grandFatherFunction();
}
greatGrandFatherFunction();
*/

// 2.recommended approach of nested functions
function greatGrandFatherFunction(){
    console.log("GreatGrandFatherFunction.");
    function grandFatherFunction(){
        console.log("GrandFatherFunction.");
        function fatherFunction(){
            console.log("FatherFunction.");
            function sonFunction(){
                console.log("SonFunction.");
                function childFunction(){
                    console.log("ChildFunction.");
                    function grandChildFunction(){
                        console.log("GrandChildFunction.");
                        function greatGrandChildFunction(){
                            console.log("GreatGrandChildFunction.");
                        }
                        return greatGrandChildFunction;
                    }
                    return grandChildFunction;
                }
                return childFunction;
            }
            return sonFunction;
        }
        return fatherFunction;
    }
    return grandFatherFunction;
}
/*
let returnedGrandFatherFunction=greatGrandFatherFunction();
let returnedFatherFunction=returnedGrandFatherFunction();
let returnedSonFunction=returnedFatherFunction();
let returnedChildFunction=returnedSonFunction();
let returnedGrandChildFunction=returnedChildFunction();
let returnedGreatGrandChildFunction=returnedGrandChildFunction();
returnedGreatGrandChildFunction();
*/
// function currying
greatGrandFatherFunction()()()()()()();
