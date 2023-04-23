//Задача № 1


function cachingDecoratorNew(func) {
    let cache = [];

function wrapper(...args) {
    const hash = args.join(','); 
    let objectInCache = cache.find((item) => item.hash === hash); 
    if (objectInCache) { 
        console.log("Из кэша: " + objectInCache.result); 
        return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args); 
    cache.push({
        hash, result
    }) ; 
    if (cache.length > 5) { 
      cache.shift() 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
      wrapper.allCount += 1;
      if(timeoutId){
        clearInterval(timeoutId);
      }
      if (timeoutId === null) {
         wrapper.count += 1;
         func(...args);
      }
      timeoutId = setTimeout(() => {
         wrapper.count += 1;
         func(...args);
      }, delay);
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }