/*
Chú Kangaroo thứ nhất xuất phát từ vị trí x1, và mỗi bước nhảy dài v1 mét.
Chú Kangaroo thứ hai xuất phát từ vị trí x2, mỗi bước nhảy có độ dài v2 mét.
Hãy kiểm tra rằng, cả hai chú Kangaroo liệu có thể đáp xuống một vị trí với số bước nhảy bằng nhau hay không. Nếu có thể, hãy trả lời True, nếu không, hãy trả lời False
*/

let kangaroo = (x1: number, v1: number, x2: number, v2: number): boolean => {
    return (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) ? true : false;
}