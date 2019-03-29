const minhaPromise = () => new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve('Ok')}, 2000)
})

async function executaPromise(){
  const response = await minhaPromise();

  console.log(response)
}

executaPromise()

const executaPromise2 = async() => {
  console.log(await minhaPromise())
  console.log(await minhaPromise())
  console.log(await minhaPromise())
}

executaPromise2()