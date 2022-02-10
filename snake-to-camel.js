function snakeToCamel(word) {
    word = word.replace(/_/g, " ").split(" ")
    
   
    for(let i = word.length-1; i > 0; i--){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
        
    }
    word = word.join().replace(/,/g,"")
    return word
    
}



