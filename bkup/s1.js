/*var work =function(){
  
  console.log("working hard!");
};

var dowork = function(f){
 console.log("work started");
 try{
  
    f();
 }
 catch(ex){
   console.log(ex);
 }
 console.log("work ended")
 };
dowork(work);*/

var createWorker=function(){
  
  var job1 = function(){
    console.log("body of job1");  
  };
  var job2 = function(){
    console.log("body of job2");
  };  
  return{
      job1 : job1,
      job2 : job2
    };
  
  
};

var worker = createWorker();
worker.job1();
worker.job2();
