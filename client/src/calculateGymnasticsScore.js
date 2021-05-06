export default class calculateGymnasticsScore{
  constructor(gymnasticsScores, judesScores, penalties, currentRoundSeq)
  {
    this.gymnasticsScores = gymnasticsScores;
    this.judesScores = judesScores;
    this.penalties = penalties;
    this.currentRoundSeq = currentRoundSeq;
  }

  getDifficulty() {
    let gymnasticsScores = this.gymnasticsScores.
      filter((s) => s.roundSeq == this.currentRoundSeq)
    return gymnasticsScores[0].difficulty
  }

  calculateExecution() {
    let judesScores = this.judesScores.filter((s) =>s.roundSeq == this.currentRoundSeq)
    judesScores.sort(function (a, b) { return a.executionPoints - b.executionPoints })
    judesScores.shift()
    judesScores.pop()
    let executionScore = 0
    let i = 0
    for (let score of judesScores) {
      i += 1
      executionScore += score.executionPoints
    }
    if (executionScore !== 0) {
      return (executionScore / i)
    }
    else return executionScore    
  }

  calculatePenalties() {
    let penaltyPoint = 0
    let penalties = this.penalties.filter((p) => p.roundSeq == this.currentRoundSeq)
    console.log("penalties i class", penalties)
    if (penalties.length > 0) {
      for (let penalty of penalties) {
        penaltyPoint += penalty.deduction
      }
    }
    return penaltyPoint
  }

}