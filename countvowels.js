var word = "SriVarun"
const vowels = "AEIOUaeiou"
var count=0
const countofvowels = (word,vowels)=>{
    for(var i=0;i<word.length;i++){
        ch = word[i]
        for(var j=0;j<vowels.length;j++){
            if(ch === vowels[j]){
                count+=1;
                break;
            }
        }
    }
}
countofvowels(word,vowels)
console.log("VOWEL COUNT IS :",count)