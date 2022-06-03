
/**
  * Một đề thi gồm 250 câu hỏi. Với mỗi câu trả lời đúng được cộng 2 điểm, trả lời sai bị trừ 2 điểm. Một học sinh đã làm đề thi đó và nhận được n điểm. Hãy xác định xem học sinh đó đã trả lời đúng bao nhiêu câu trong đề.
  * Với n = 500 thì correctAnswers = 250
  * Algo: points = 2*correct - 2*(250-correct) => correct = (points + 500 ) / 4
 */
let correctAnswers = (n: number): number => {
    return n === 0 ? 0 : (n + 500) / 4;
}