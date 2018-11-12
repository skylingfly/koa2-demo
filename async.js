

// function ajax(fn) {
//   setTimeout(()=> {
//     console.log('延迟你好')
//     fn();
//   },0)
// }
// ajax(()=>{
//   console.log('执行结束')
// });
// console.log('你好');

function delay (word){
  return new Promise( (resolve, reject) => {
    setTimeout( ()=> {
      resolve('hello' +word)
    },0)
  })
}

// delay('world').then((word) => {
//   console.log('hello'+ word)
//   return delay('猪八戒')
// }).then((word) =>{
//   console.log('hello'+ word)
// })

async function start () {
  const word1 = await delay('孙悟空');
  console.log(word1);
  const word2 = await delay('猪八戒');
  console.log(word2);
  const word3 = await delay('沙僧');
  console.log(word3);
}

start();
