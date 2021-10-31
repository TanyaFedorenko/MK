

export const ATTACK = ['head', 'body', 'foot'];

export const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}



/*
export const getAttack = async(h, d) => {
    
await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
    method: 'POST',
            body: JSON.stringify({
                hit:h,
                defence:d
}) })
.then((res) => {
    return res.json()})
    .then(data => {
  
    console.log(data.player2)
    
            return data.player2dat})
};

const a= getAttack(HIT[2],ATTACK[1])
console.log(a)

async function fetchExam(h,d) {
    try {
        const response = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit:h,
                defence:d
            })
        });
      const  exam = await response.json();
        
        console.log(exam);
        return exam;
    } catch (error) {
        console.error(error);
    }
}
const ab = fetchExam(HIT[2],ATTACK[1])

export const EAttack = async(h, d) =>{
 const body = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight',{
    method: 'POST',
    body: JSON.stringify({
        hit:h,
        defence:d
    })
})
const res = await body.json();
console.log(res);
return res
}
EAttack(HIT[2],ATTACK[1]);*/