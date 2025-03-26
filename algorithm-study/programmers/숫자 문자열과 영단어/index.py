# 나의 풀이
def solution(s):
    dic = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",6: "six", 7: "seven", 8: "eight", 9: "nine"}
    for x,y in dic.items():
            s = s.replace(y, str(x))
    return int(s)

# 다른 사람 풀이
num_dic = {"zero":"0", "one":"1", "two":"2", "three":"3", "four":"4", "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9"}

def solution(s):
    answer = s
    for key, value in num_dic.items():
        answer = answer.replace(key, value)
    return int(answer)