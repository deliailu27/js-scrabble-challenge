class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word
  }

  score () {

    let scorecount = 0

    let value1 =['A','E','I','O','U','L','N','R','S','T']
    let value2 =['D','G']
    let value3 = ['B','C','M','P']
    let value4 = ['F','H','V','W','Y']
    let value5 = ['K']
    let value8 = ['J','X']
    let value10 =['Q','Z']

   if(this.word === null) {
     return scorecount 
   }
   
    let W = this.word.toUpperCase()
    



    for(let i=0; i<= W.length; i++){
      if (value1.includes(W[i])) {
        scorecount += 1 
      }
      else if (value2.includes(W[i])) {
        scorecount += 2 
      }
      else if (value3.includes(W[i])) {
        scorecount+= 3 
      }
      else if (value4.includes(W[i])) {
        scorecount += 4
      }
      else if (value5.includes(W[i])) {
        scorecount += 5
      }
      else if (value8.includes(W[i])) {
        scorecount += 8
      }
      else if (value10.includes(W[i])) {
        scorecount+= 10
      }

    }

    return scorecount
  }





}

const scrabble = new Scrabble(' ')




module.exports = Scrabble
