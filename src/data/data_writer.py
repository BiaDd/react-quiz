import json




data = []
index = 4
while index != 0:
    kanji, hirigana, definition = input("put in characters \n").split()
    
    dic = {
        "question": kanji,
        "choice": definition,
        "answer": hirigana
    }
    data.append(dic)
    index-=1

print(data)
j = json.dumps(data)
with open('src/data/quiz.json', 'w+') as outfile:
    outfile.write(j)
    outfile.close()