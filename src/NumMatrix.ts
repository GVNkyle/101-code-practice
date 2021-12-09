/* -------------------------------------------------------------------------- Leetcode 304. Range Sum Query 2D - Immutable -------------------------------------------------------------------------- */
 
class NumMatrix {
    /** Idea:
     * Idea:
     * 
     * Bài toán này đưa ra một trong những đặc điểm của ma trận 2D: tổng các phần tử trong bất kỳ phạm vi hình chữ nhật nào của ma trận (M) có thể được xác định về mặt toán học bằng sự chồng chéo của bốn phạm vi hình chữ nhật khác có nguồn gốc tại M [0] [0] .
     * Tổng của hình chữ nhật (0,0) - (i, j) bằng ô (i, j), cộng với hình chữ nhật (0,0) - (i, j-1), cộng với hình chữ nhật (0, 0) - (i-1, j), trừ đi hình chữ nhật (0,0) - (i-1, j-1). Chúng ta trừ hình chữ nhật cuối cùng vì nó đại diện cho phần chồng lên nhau của hai hình chữ nhật trước đó đã được thêm vào.
     */
    dp: number[][];
    constructor(matrix: number[][]) {
        /** khai báo mảng có chiều dài i và j +1 để khỏi xét trường hợp các cạnh */
        let ylen = matrix.length + 1, xlen = matrix[0].length + 1;
        this.dp = Array.from({ length: ylen }, () => new Array(xlen).fill(0));
        /** Tại mỗi ô, chúng tôi sẽ cộng giá trị của nó từ M vào các giá trị dp của ô bên trái và ô ở trên, đại diện cho tổng hình chữ nhật tương ứng của chúng, 
         * sau đó trừ đi giá trị đường chéo trên cùng bên trái, đại diện cho phần chồng chéo hình chữ nhật của hai lần bổ sung trước
         */
        for (let i = 1; i < ylen; i++) {
            for (let j = 1; j < xlen; j++) {
                this.dp[i][j] = matrix[i - 1][j - 1] + this.dp[i][j - 1] + this.dp[i - 1][j] - this.dp[i - 1][j - 1];
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        /**Chúng ta bắt đầu với tổng tại dp [row2 + 1] [col2 + 1] (do hàng / cột được thêm vào), 
         * sau đó trừ các hình chữ nhật bên trái và trên cùng trước khi cộng lại trong hình chữ nhật đường chéo trên cùng bên trái đã trừ 2 lần 
         */
        return this.dp[row2 + 1][col2 + 1] - this.dp[row2 + 1][col1] - this.dp[row1][col2 + 1] + this.dp[row1][col1];
    }
}

let obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
let param_1 = obj.sumRegion(2, 1, 4, 3);
let param_2 = obj.sumRegion(1, 1, 2, 2);
let param_3 = obj.sumRegion(1, 2, 2, 4);
