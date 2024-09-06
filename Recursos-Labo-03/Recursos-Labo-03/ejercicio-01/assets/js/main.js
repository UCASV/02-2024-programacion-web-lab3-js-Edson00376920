const countVotes = (votes) => {
    let results = {}
    votes.forEach(element => {
        results[element.candidate] = (results[element.candidate] || 0) + 1; 
    });
    
    return results;
}

const showResults = (resultadoVotaciones) => {
    console.log(resultadoVotaciones);
    for(let candidate in resultadoVotaciones){
        alert (`${candidate} = ${resultadoVotaciones[candidate]}`)
    }
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    
    const resultadoVotaciones = countVotes(votes);
    console.log(showResults(resultadoVotaciones));
    
}

main();
