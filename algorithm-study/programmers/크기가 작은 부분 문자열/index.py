# 나의 풀이
# len() 함수는 문자열에 적용할 수 있다.

def solution1(t, p):
    result = 0
    length = len(p)
    for i in range(len(t)):
        i = int(i)
        # 배열 슬라이싱이 길이가 맞지 않아도 통과되는 문제 발생
        if len(t[i:i + length]) == length:
        # 부분 문자열이 p보다 작거나 같은 경우
            if int(t[i:i + length]) <= int(p):
                print(t[i:i+length])
                result += 1
    return result

## 다른 사람 풀이
def solution2(t, p):
    return len([t[i: i+len(p)] for i in range(len(t)-len(p)+1) if int(t[i: i+len(p)]) <= int(p)])

def solution3(t, p):
    answer = 0
    for i in range(len(t) - len(p) + 1):
        if int(p) >= int(t[i:i+len(p)]):
            answer += 1
    return answer
