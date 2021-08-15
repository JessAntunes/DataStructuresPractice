const HOME_TEAM_WON = 1 //used for readability of

function tournamentWinner(competitions, results) {
    let currentBest = "";
    const scores = {[currentBest]: 0}; // create hash to reduce time complexity

    for (let i = 0; i < competitions.length; i++) {
        const result = results[i];
        const [homeTeam, awayTeam] = competitions[i];  // pulls team name into useable string

        updateScores(winningTeam, 3, scores);

        if(scores[winningTeam] > scores[currentBest]) {  // setting currentBest with team name with most points
            currentBest = winningTeam;   
        }
    }

    return currentBest;
}

// helper function to keep single responsibility best practice
function updateScores(team, points, score) {
    if(!(team in scores)) scores[team] = 0;  // creates teams instance in hash
    scores[team] += points;
}

