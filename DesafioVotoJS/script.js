let selectedCandidate = '';

function selectCandidate(candidate) {
    selectedCandidate = candidate;
    document.getElementById('selected-candidate').innerText = candidate;
    document.querySelector('.container').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}

function voteAgain() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById('confirmation').style.display = 'none';
}

function confirmVote() {
    document.getElementById('confirmation').style.backgroundColor = 'green';
    alert('Voto confirmado em ' + selectedCandidate);
}